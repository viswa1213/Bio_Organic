const express = require('express');
const app = express();
const router = express.Router();
const  {body, validationResult} = require('express-validator');
const user = require('../model/register');
app.use(express.json());
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
    const users = new user({Email,Password});
    await users.save();
    res.json({
        message : 'user sucessfully registered'
    })


});

module.exports = router;