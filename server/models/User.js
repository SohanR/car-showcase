 const mongoose = require('mongoose')

 const UserSchema = new mongoose.Schema({
    name: String,
    email:{
        type: String,
        unique: true
    },
    number:String,
    password: String,
    role:{
        type: String,
        default: 'USER'
    }
 })

 const UserModel = mongoose.model('Users', UserSchema)
module.exports = UserModel
