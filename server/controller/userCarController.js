const CarModel = require('./../models/Cars')


exports.carUpload =async (req,res)   => {
    try {
        const {title} = req.body;
        const files = req.files;

        const carDetails = JSON.parse(req.body.carDetails);
        const carFeatures = JSON.parse(req.body.carFeatures);
        const addOn = JSON.parse(req.body.addOn);


        
        if(!files) { return res.status(400).json({ message: 'Image is Required' })}

        const imageArray = files.map(file => {
            return {
                data:file.buffer,
                contenType:file.mimetype,               
            }
        })

        
        const imageUrl = imageArray.map(image =>{
            const base64Img = Buffer.from(image.data).toString('base64');
            const url = `data:${image.contenType};base64,${base64Img}`
            return url;
        })

        const newCar = await CarModel.create({
            title:title,
            carDetails:carDetails,
            carFeatures:carFeatures,
            addOn:addOn,
            carImages:imageUrl,
            sellerInfo:req.user._id,
            status:"pending"
        })

        res.status(200).json({car:newCar})


        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Failed to save car"})
    }
} 

exports.myCars = async (req, res) => {
    try {
        let cars = await CarModel.find({
            sellerInfo: req.user._id,
            status: "approved"
        }).exec();

        res.status(200).json(cars); // Changed `allCars` to `cars`
    } catch (error) {
        res.status(500).json({ error: "Error fetching car result" });
    }
};
