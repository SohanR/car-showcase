const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
     title:String,
     carImages:[String],
     carDetails:{ 
        make:String,
        model:String,
        modelCode:String,
        enginType:String,
        loadingCapacity:String,
        cc:String,
        exteriorColor:String,
        driveType:String,
        transmission:String,
        condition:String,
        year:String,
        mileage:String,
        fuelType:String,
        engineSize:String,
        door:String,
        cylinder:String,        
     },
     addOn:{
      airLock:Boolean,
      powerSteering:Boolean,
      ac:Boolean,
      navigation:Boolean,
      antiLockBrakes:Boolean,
      leatherSeats:Boolean,
      tv:Boolean,
      fogLight:Boolean,
      alloyWheels:Boolean,
      grillGuard:Boolean,
      powerWindow:Boolean,
      roofRails:Boolean,
      dualAirBag:Boolean,
      sunRoof:Boolean,
      rearSpoiler:Boolean,
      blackTire:Boolean,
      keylessEntry:Boolean,
      centralLocking:Boolean,
      cd:Boolean,
      abs:Boolean,
      acFront:Boolean,
      acRear:Boolean
     },
     carFeatures:{
        convinience:[String],
        entertainment:[String],
        safety:[String],
        interior:[String],
        exterior:[String],
     },
     sellerInfo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
     },
     status:{
      type:String,
      default: 'pending'
     },
})

const CarModel = mongoose.model('Cars', CarSchema);

module.exports = CarModel;