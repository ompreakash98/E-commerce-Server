const express=require('express')
const cors= require('cors');


const app=express()

app.use(cors())
app.use(express.json())
//route import
const products=require('./routes/productRoute');
const user=require('./routes/userRoute')
const exp = require('constants');
app.use('/api/v1',products)
app.use('/api/v1',user);

module.exports=app