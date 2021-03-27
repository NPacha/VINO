const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String, 
    password: {type: String, select: false},
    favoriteWines: [{
        type: Schema.Types.ObjectId, ref: 'Wine'}]
})

const User = model('User', userSchema);

module.exports = User;