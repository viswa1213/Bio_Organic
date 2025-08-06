const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3000;
const registerroutes = require('./routes/register');
const loginroutes = require('./routes/login');
app.use(cors());
app.use(express.json());

require('dotenv').config();
 
const MONGO_ULR =  process.env.Mongo_Url;

mongoose.connect( MONGO_ULR, {
       useNewUrlParser: true,
       useUnifiedTopology: true
}).then(()=>{
    console.log("mongodb connected sucessfully");
})
.catch(err => console.error("MongoDB connection failed:", err));


app.use('/register',registerroutes);
app.use('/login',loginroutes);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
