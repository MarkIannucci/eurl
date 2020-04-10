// grab the things we need
const mongoose = require('mongoose');

// connect to db and define db schema
//mongoose.connect(process.env.MONGO_URI, {useMongoClient: true}); - removed by TH
mongoose.connect(process.env.MONGO_URI, {}); //edit by TH

const Schema = mongoose.Schema;

// create a schema
const publicspaceSchema = new Schema({
	spaceId: String,
	teamId: String,
	title: String,
	description: String,
	logoUrl: String,
	isLocked: Boolean,
	shortId: String,
	previousShortId: String,
	active: Boolean,
	list: Boolean,
	internal: Boolean,
	internalDomains: [String],
	hits: Number,
	created: Date,
	updated: Date
});

// the schema is useless so far
// we need to create a model using it
var Publicspace = mongoose.model('Publicspace', publicspaceSchema);

// make this available to our users in our Node applications
module.exports = Publicspace;
