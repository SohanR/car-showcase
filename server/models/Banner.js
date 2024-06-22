const mongoose = require('mongoose')

const BannerSchema = new mongoose.Schema({
    image:String,
})

const BannerModel = mongoose.model('Banners', BannerSchema);

module.exports = BannerModel;