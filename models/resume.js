const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema({
	name: String,
	lname: String,
	dob:String,
	school: String,
	spercent: String,
	college: String,
	cpercent: String,
	underg: String,
	cgpa: String,
	pg: String,
	pcgpa: String,
	company: String,
	role: String,
	strtdate: String,
	enddate: String

})

module.exports = mongoose.model('Resume',resumeSchema);