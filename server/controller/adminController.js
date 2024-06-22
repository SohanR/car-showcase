const UserModel = require("../models/User");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const BannerModel = require("../models/Banner");

exports.login = async (req, res) => {
    try {
        const {email,password} = req.body;
        const user = await UserModel.findOne({email: email})

        if(!user){
            return res.status(400).json({error: "No Admin With This Email"})
        }

        if(user.role !== "ADMIN"){
            return res.status(400).json({error: "You are not admin"}) ;
        }
        
        const isMatch = await bcrypt.compare(password,user.password)
        
        if(!isMatch){
            return res.status(400).json({error: "Invalid Password"})
        }

        const token = jwt.sign({_id: user._id, role:user.role}, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })

        const resUser = await UserModel.findOne({email:email}).select('-password -role');

        res.cookie('token', token)

        return res.status(200).json({status:"success", user:resUser,token})

    } catch (error) {
        console.log(error);
    }
}


exports.uploadBanner = async (req, res) => {

    try {
        const files = req.files;
        
        if (!files || !files.length) {
            return res.status(400).json({ message: 'Image is Required' });
        }

        const file = files[0]; // Assuming you're handling one file at a time
        const base64Img = file.buffer.toString('base64');
        const url = `data:${file.mimetype};base64,${base64Img}`;

        const newImg = await BannerModel.create({
            image: url,
        });

        res.status(200).json({ newImg });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to save image" });
    }


}

exports.getBanner = async (req, res) => {
    try {
        let allBanner = await BannerModel.find({}).exec()

        res.status(200).json(allBanner)

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Failed to get images"})  
    }
}

exports.deleteBanner = async (req, res) => {
  
    try {
        const { bannerId } = req.params;

        const deleteBanner = await BannerModel.findByIdAndDelete(bannerId).exec();

        if (!deleteBanner) {
            return res.status(404).json({ message: 'Banner not found' });
        }

        // If the banner is successfully deleted
        return res.status(200).json({ message: 'Banner deleted successfully' });
    } catch (error) {
        // Handle errors
        return res.status(500).json({ error: 'Internal server error' });
    }

}