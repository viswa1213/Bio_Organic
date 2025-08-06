const express = require('express');
const app = express();
const router = express.Router();
const  {body, validationResult} = require('express-validator');
const user = require('../model/register');
app.use(express.json());


//unique userid creation and validation

function generateRandomUserId() {
  return Math.floor(100000 + Math.random() * 900000);
}

async function generateUniqueUserId() {
  let userId;
  let exists = true;

  while (exists) {
    userId = generateRandomUserId();
    const existing = await user.findOne({ UserId: userId });
    if (!existing) exists = false;
  }

  return userId;
}


router.post('/' , [
    body('Email').isEmail().withMessage('Invalid email'),
    body('Password').isLength({min:8}).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/).withMessage('Password must contains 1 uppercase 1 character & 1 number'),
] ,async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }
    const {Email,Password} = req.body;
    const Existing = await user.findOne({Email});
    if(Existing){
        return res.status(400).json({
            message : 'user Already Exists'
        });
    }
    
     
    const UserId = await generateUniqueUserId();
    const users = new user({UserId,Email,Password});
    await users.save();
    res.json({
        message : 'user sucessfully registered'
    })


});

module.exports = router;