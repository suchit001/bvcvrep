const express = require('express');
const router = express.Router();
const User = require('../models/employee');
const Contact = require('../models/contact');
const passwordhash = require('password-hash');

// router.get('/all', async (req,res)=>{
// 	try{
// 	const allposts = await Employee.find();
// 	res.json(allposts);
// }catch(err)
// {
// 	res.json({message:err});
// }
// })

// //NEW EMPLOYEE
// router.post('/signup',(req,res)=>{
// 	console.log(req.body);
// 	const user = new User({
// 		name: req.body.name,
// 		email: req.body.email
// 	});
// 	user.save()
// 	.then(data =>{
// 		res.json(data);
// 	})
// 	.catch(err=>{
// 		res.json({message:err});
// 	})
// })

router.post('/resume',(req,res)=>{
	console.log(req.body);
	const resume = new Resume({
		name: req.body.name,
		lname: req.body.lname,
		dob:req.body.dob,
		school: req.body.school,
		spercent: req.body.spercent,
		college: req.body.college,
		cpercent: req.body.cpercent,
		underg: req.body.underg,
		cgpa: req.body.cgpa,
		pg: req.body.pg,
		pcgpa: req.body.pcgpa,
		company: req.body.company,
		role: req.body.role,
		strtdate: req.body.strtdate,
		enddate: req.body.enddate
	})
	resume.save()
	.then(data =>{
		res.json(data);
	})
	.catch(err=>{
		res.json({message:err});
	})
})

//---------------------------------------------------------------------------------------------------------------

// //ALL EMPLOYEES
// router.get('/all', async (req,res)=>{
// 	try{
// 	const allposts = await User.find();
// 	res.json(allposts);
// }catch(err)
// {
// 	res.json({message:err});
// }
// })


router.get('/disp',async (req,res)=>{
	try{
	const emp = await User.find();
	console.log(emp);
	res.json(emp);
}catch(err)
{
	res.json({message:err});	
}
})

//NEW EMPLOYEE
router.post('/signup',(req,res)=>{
	console.log(req.body);
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		phonenumber: req.body.phonenumber,
		password: passwordhash.generate(req.body.password)
	});
	user.save()
	.then(data =>{
		res.json(data);
	})
	.catch(err=>{
		res.json({message:err});
	})
})


//FIND EMPLOYEE
router.get('/find/:empName',async(req,res)=>{
	try{
	const post = await User.findById(req.params.empName);
	res.json(post);
}catch(err){
	res.json({message:err});
}
})


router.post('/login',async(req,res)=>{
	console.log(req.body);
	console.log(passwordhash.generate(req.body.password));
	try{
	const user = await User.find({email: req.body.email});
	console.log(user)
	if(!user){
		res.json({message:"User not found"});
	}
	else if(passwordhash.verify(req.body.password,user[0].password))
	{
		res.json(user);
	}
	else
	{
		res.json({message:"Password Incorrect"});

	}
}catch(err){
	res.json({message:err});
}
})

//CONTACT FORM
router.post('/contact',async(req,res)=>{
	const contact = new Contact({
		cname: req.body.cname,
		cemail: req.body.cemail,
		subject: req.body.subject,
		message: req.body.message		
	})
	contact.save()
	.then(data =>{
		res.json(data);
	})
	.catch(err=>{
		res.json({message:err});
	})
})

module.exports = router;

