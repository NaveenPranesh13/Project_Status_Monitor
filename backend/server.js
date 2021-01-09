const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const apiPort = 4018
const mongoose = require('mongoose');
const mernproj = express.Router();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

const Naveen = require('./proj.model');

mongoose.connect('mongodb://127.0.0.1:27017/mydb',{useNewUrlParser: true,useUnifiedTopology:true});
const connection = mongoose.connection;

connection.once('open',function(){
    console.log("Mongo db connected successfully")
})

mernproj.post("/add",(req, res,)  => {
    const proj = new Naveen(req.body);
proj.save();
    proj.save((err)=> {
        if(err) return res.status(400).json({success:false,err})
        return res.status(200).json({success:true})
    })
});
    
mernproj.route('/view').get(function(req, res,) {
    Naveen.find(function(err,details){
        if(err){
            console.log(err);
            console.log("get failed")
        } else {
            res.json(details);
            console.log("get success")
            // console.log(res.json(details));
        }
    })
});

mernproj.route('/view/:id').get(function(req, res) {
    let id = req.params.id;
    Naveen.findById(id, function(err, details) {
        res.json(details);
    });
});

mernproj.route('/update/:id').post(function(req, res) {
    Naveen.findById(req.params.id, function(err, details) {
        if (!details)
            res.status(404).send('data is not found');
        else
        details.proj_name = req.body.proj_name;
        details.proj_desc = req.body.proj_desc;
        details.proj_state = req.body.proj_state;

        details.save().then(details => {
                res.json('Edited details updated');
            })
            .catch(err => {
                res.status(400).send("Edit details Update failed");
            });
    });
    
});


mernproj.route('/delete/:id').get(function(req, res) {
    let id = req.params.id;
    Naveen.findByIdAndRemove(id, function(err, details) {
        res.json(details);
    });
});


    app.use('/mydb',mernproj);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))