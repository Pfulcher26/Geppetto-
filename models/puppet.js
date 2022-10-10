const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puppetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    personality: {
        type: String,
        required: true
    },
    dream: {
        type: String,
        required: true
    },
    story: {
        type: String, 
        required: true 
    },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Puppet', puppetSchema);