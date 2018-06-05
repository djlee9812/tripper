const mongoose = require("mongoose");

const daySchema = new mongoose.Schema({
	date: Date,
	places: [{lat: Number, lng: Number, time: Date, name: String}]
})

const citySchema = new mongoose.Schema( {
	location: { lat: Number, lng: Number},
	name: String,
	days: [daySchema]
})

const tripSchema = new mongoose.Schema( {
	creatorId: String,
	creatorName: String,
	timeStamp: { type: Date, default: Date.now },
	name: String,
	cities: [citySchema],
})

module.exports = mongoose.model("Trip", tripSchema);