const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    project_name:{
        type:String
    },
    project_description:{
        type:String
    },
  
  proj_state:{
      type:String
  }  
})

const Naveen = mongoose.model("naveen",todoSchema);
module.exports=Naveen;