const { Schema, model } = require("mongoose")
const mongoose = require('mongoose')


const serviceSchema = new mongoose.Schema({
    serviceName: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true, },
    startingPrice: { type: String, required: true, },
    capacity: { type: String, required: true, },
    features: { type: [String], required: true, },
    idealFor: { type: String, required: true, },
    installationTime: { type: String, required: true, },
    warranty: { type: String, required: true, },
},
    { timestamps: true }
);


const Service = model('Service', serviceSchema)
module.exports = { Service };


