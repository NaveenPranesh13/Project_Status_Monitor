const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    proj_name:{
        type:String
    },
    proj_desc:{
        type:String
    },
  
    proj_state:{
      type:String
  }  
})

const Naveen = mongoose.model("naveen",todoSchema);
module.exports=Naveen;