const CarModel = require('./../models/Cars')

exports.carUpload = async (req, res) => {
    
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

        //console.log("img url ", imageUrl);

        const newCar = await CarModel.create({
            title:title,
            carDetails:carDetails,
            carFeatures:carFeatures,
            addOn:addOn,
            carImages:imageUrl,
            sellerInfo:req.user._id,
            status:"approved"
        })

        res.status(200).json({car:newCar})
    } catch (error) {

        console.log(error);
        res.status(500).json({error:"Failed to save car"})
    }

}

exports.getCars = async (req, res) => {
    try {
        let allCars = await CarModel.find({}).exec()
        res.status(200).json(allCars)
    } catch (error) {
        res.status(500).json({error:"Error Fetch car result"})
    }
}

exports.getCarById = async (req, res) => {

    try {

        const {carId} = req.params;

        // const car = await CarModel.findById(carId);

        const car = await CarModel.findById(carId)
            .populate({
                path: 'sellerInfo',
                select: '-password -role'
            })
            .exec();

        if(!car) { return res.status(404).json({message: "Car not found"})}

        res.status(200).json({car: car})
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error:"Error Fetch car result"})
    }

    
}


exports.editCar = async (req, res) => {
    try {
        const {carId} = req.params;
        const {title} = req.body;
        const files = req.files;

        const carDetails = JSON.parse(req.body.carDetails);
        const carFeatures = JSON.parse(req.body.carFeatures);    

        const car = await CarModel.findById(carId);

        if(!car) { return res.status(404).json({message: "Car not found"})}

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

        console.log("img url ", imageUrl);

        const update = await CarModel.findOneAndUpdate(
            {_id: car._id},
            {
                $set:{
                    title:title,
                    carDetails:carDetails,
                    carFeatures:carFeatures,
                    carImages:imageUrl,
                }
            },
            {new:true}
        )

        res.status(200).json({message:'car successfully updated',update})


    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Failed to update car"})

    }
}

exports.deleteCar = async (req, res) => {
    try {
        const {carId} = req.params;
        console.log(carId);

        if(!carId) { return res.status(400).json({ message: 'Car Id is Required' })}

        let getCarById = await CarModel.findById(carId).exec()

        if(!getCarById) { return res.status(400).json({ message: 'Car not found' })};
        
        let deletedCar = await CarModel.findByIdAndDelete(carId).exec()
        
        res.status(200).json({message:"Car deleted successfully"})
    } catch (error) {
        res.status(500).json({error:"Failed to delete car"})
    }
}

exports.approved = async (req, res) => {
    try {
        const {carId} = req.params;
        console.log(carId);

        const car = await CarModel.findById(carId).exec()

        if(!car) { return res.status(400).json({message:"No Car found"})};

        if(car.status ==='approved') { return res.status(200).json({message:"Car already approved"}); }

        const update = await CarModel.updateOne(
            {_id: car._id},
            {$set:{status: 'approved'}}
        )

        res.status(200).json({message:'Car is Approved', update})
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Failed to update car"})
    }
}

exports.reject = async (req,res) =>{
    try {
        const {carId} = req.params;

        const car = await CarModel.findById(carId).exec();

        if(!car){ return res.status(400).json({message:"No car found"})}

        const deleteCar = await CarModel.deleteOne({_id:car._id, status:'pending'})

        res.status(200).json({message:"Car Rejected", deleteCar})        

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Failed to Reject car"})        
    }
}