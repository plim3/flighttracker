const mongoose = require('mongoose');
const aprsSchema = mongoose.Schema;

let aprsSchema = new Schema({
    name: {type: String, required: true},
    lat: {type: Number, required: true},
    long: {type: Number, required: true},
    alt: {type: Number, required: true}
});


// Export the model
module.exports = mongoose.model('Aprs', aprsSchema);