const mongoose = require('mongoose');

const newspaperSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    bestHeadline: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const NewsPaper = mongoose.model('NewsPaper', newspaperSchema);

module.exports = NewsPaper;