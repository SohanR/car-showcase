const mongoose = require('mongoose')


const OptionSchema = new mongoose.Schema({
    make:[String],
    model:[String],
    category:[String],
    driveType:[String],
    fuelType:[String],
    cylinder:[String],
    transmission:[String],
    color:[String],
    subType:[String],
    cc:[String],
    loadingCapacity:[String],
    steering:[String],
    port:[String],
    bodyType:[String],    
})

const OptionModel = mongoose.model('Options', OptionSchema);

module.exports = OptionModel;