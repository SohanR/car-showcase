const mongoose = require('mongoose')


const StorySchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String
})

const StoryModel = mongoose.model('Stories', StorySchema)

module.exports = StoryModel