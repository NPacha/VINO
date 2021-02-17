const {Schema, model} = require('mongoose');

const wineSchema = new Schema ({
    ref: String,
    Name: String, 
    Winery: String,
    vintage: String,
    Varietal: String,
    Country: String, 
    Province: String,
    MyTastingNotes: String

})

module.exports = model('Wine', wineSchema);