const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');


app.get('/api', (req ,res)=>{
  console.log("Asdasdasdas");
  res.json({
    status: true,
    msg:"WTF!!!"
  })
})

app.use(express.static(path.join(__dirname,'..','client','activat','build')))

// app.use('/',(req,res)=>res.end("HOME PAGE"));
app.listen(PORT , ()=>console.log(`SERVER RUNNING ON PORT ${PORT}`));
