const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    Email : {type : String ,required : true, unique : true },
    Password : {type :  String,required : true}
});
module.exports  = mongoose.model('users',userschema);