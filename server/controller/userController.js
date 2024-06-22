const bcrypt = require('bcrypt')
const UserModel = require('./../models/User');
const jwt = require('jsonwebtoken')


exports.register =async (req, res) =>{
    try {
        const {name,email,number, password} = req.body;

        const exist = await UserModel.findOne({email: email})
        if(exist){
            return res.status(400).json({error: "User already exist"})
        }

        const hashedPass = await bcrypt.hash(password,10);
        const newUser = await UserModel.create({name,email,number,password:hashedPass})

        return res.status(200).json({status:"success", user:newUser})
        
    } catch (error) {
        return  res.status(500).json({error:error})        
    }
 
}

exports.login = async (req, res) =>{
    try {
        const {email,password} = req.body;
        const user = await UserModel.findOne({email: email})

        if(!user){
            return res.status(400).json({error: "No User With This Email"})
        }
        
        const isMatch = await bcrypt.compare(password,user.password)
        
        if(!isMatch){
            return res.status(400).json({error: "Invalid Password"})
        }

        const token = jwt.sign({_id: user._id, role:user.role}, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })

        res.cookie('token', token)

        return res.status(200).json({status:"success", user:user,token})

    } catch (error) {
        console.log(error);
    }
}

exports.getAllUser = async (req, res) => {

    try {
        let allUser = await UserModel.find({}).exec();

        console.log(allUser);

        res.status(200).json(allUser)

    } catch (error) {
        console.log(error);

        res.status(500).json({error:"Error Fetch user"})

    }

}

exports.getSingleUser = async (req, res) => {

    try {
        const {userId} = req.params;

        const user = await UserModel.findById(userId)        

        if(!car) { return res.status(404).json({message: "user not found"})}

        res.status(200).json({user})


    } catch (error) {
        console.log(error);

        res.status(500).json({error:"Error Fetch user"})
    }

}

exports.updateRole = async (req, res) => {

    try {
        const  {userId, role} = req.params; 


    
        const user = await UserModel.findByIdAndUpdate(
            {_id: userId},
            {$set: {role: role}},
            {new:true}
        ).exec()
    
        res.status(200).json({user})
    } catch (error) {
        console.log(error);

        res.status(500).json({error:"failed to update role"})
    }
 
}