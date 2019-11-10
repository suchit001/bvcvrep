const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
	cname: {
		type: String,
		required: true
	},
	cemail: {
		type: String,
		required: true
	},
	subject: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Contact',contactSchema);
