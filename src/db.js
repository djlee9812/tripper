const mongoose = require("mongoose");
const mongoURL = process.env.MLAB_URL;
const options = { useMongoClient: true};

mongoose.connect(mongoURL);
mongoose.Promise = global.Promise;
const dbConnection = mongoose.connection;

dbConnection.on("error", console.error.bind(console, "connection error:"));

dbConnection.on('connected', function() {
	console.log('database connected');
});