const express = require('express');
const app = express();
const router = express.Router();
const  {body, validationResult} = require('express-validator');
const user = require('../model/register');
app.use(express.json()); 

router.post('/',async (req,res)=>{
    const {Email,Password} = req.body;
    const ExistingEmail = await user.findOne({Email});
    const ExistingPassword = await user.findOne({Password})
    if(ExistingEmail && ExistingPassword){
        return res.status(200).json({
            message : 'Login Sucessfully'
        });
    }
    else{
        return res.status(400).json({
            message : 'Email does not Exists'
        })
    }
});

module.exports = router;