const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const employeeRoute = require('./routes/employee.js');
app.use('/employee',employeeRoute);
app.get('/',(req,res)=>{
	res.send('Welcome to homepage');
})


mongoose.connect(process.env.DB_CONNECTION,
				{ useNewUrlParser: true },
				() => console.log('connected to db'));

app.listen(3000);


//CLIENT CODE
// fetch('http://localhost:3000/employee/all')
// .then(result=>{
//   return result.json();
// })
// .then(data=>{
//   console.log(data);
// })
