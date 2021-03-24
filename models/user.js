const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: String, 
    password: {type: String, select: false}
})

const User = model('User', userSchema);

module.exports = User;