const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

console.log(path.join(__dirname,'..','client','static'));
app.use(express.static(path.join(__dirname,'..','client','activat','build')))

// app.use('/',(req,res)=>res.end("HOME PAGE"));
app.listen(PORT , ()=>console.log(`SERVER RUNNING ON PORT ${PORT}`));
