const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');


app.get('/api', (req ,res)=>{
  res.json({
    status: true,
    msg:"GSG!!!"
  })
})

app.use(express.static(path.join(__dirname,'..','client','activat','build')))

app.use('/agent' , express.static(path.join(__dirname,'..','client','activat','pureHtml','public')))

// app.use('/',(req,res)=>res.end("HOME PAGE"));
app.listen(PORT , ()=>console.log(`SERVER RUNNING ON PORT ${PORT}`));
