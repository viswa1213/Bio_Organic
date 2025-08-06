const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3000;
const registerroutes = require('./routes/register');
const loginroutes = require('./routes/login');
const path = require('path'); 
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

// imported the frontend
const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// routes for the pages login and register;
app.use('/register',registerroutes);
app.use('/login',loginroutes);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
