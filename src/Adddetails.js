import React,{Component} from 'react';
import {Button, FormControl, InputLabel,Select} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import axios from 'axios';

class Adddetails extends Component {
    constructor(props)
    {
        super(props);

        this.updateMatchno=this.updateMatchno.bind(this)
        this.updateTeam=this.updateTeam.bind(this)
        this.result=this.result.bind(this)
        this.submitresult=this.submitresult.bind(this)
this.state = {
    matchnumber:'',
    favteam:'',
    result:'',
    openMenu:false,
    age:''
}
    }

     handleClose = () => {
      this.setState({openMenu:false});
    };
  
     handleOpen = () => {
      this.setState({openMenu:true});
    };

updateMatchno =(e) => {
this.setState({matchnumber: e.target.value });
}

updateTeam = (e) => {
    this.setState ({favteam: e.target.value});
}

result = (e) => {
    this.setState ({result: e.target.value});
}

submitresult = (e) => {
  
  e.preventDefault();

alert("The details are about to be updated in DB")
  console.log(this.state.matchnumber);
  console.log(this.state.favteam);
  console.log(this.state.result);

  const projstatus = {
    proj_name:this.state.matchnumber,
    proj_desc: this.state.favteam,
    proj_state: this.state.result
  };

  console.log(projstatus);
  axios.post('http://localhost:4018/mydb/add',projstatus)
  .then(res => console.log(res.data))
  
  this.setState({
    matchnumber: '',
    favteam: '',
    result: ''
  })

  this.props.history.push('/');
  
}
    
render () {
    
  return (
    <div className="App" style={{ textAlign: 'center'}}>
      
      <h2>Add Project Details</h2>
<br/>
<br/>
    <div>
        <TextField style = {{width:500}}
        id="outlined-basic" label="Project Title" variant="outlined" 
      onChange={this.updateMatchno}/>
    </div>
    <br/>
<br/>
    <div>
        <TextField style = {{width:500}} 
        id="outlined-basic" label="Description" variant="outlined"  
      onChange={this.updateTeam}/>
    </div>
    <br/>
<br/>
<div>
  <FormControl style = {{width:500}}>
    <InputLabel>SELECT</InputLabel>
    <Select onChange={this.result} labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={this.state.openMenu}
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          value={this.state.result}>
      <MenuItem value='Completed'>Completed</MenuItem>
      <MenuItem value='InProgress'>In Progress</MenuItem>
      <MenuItem value='Todo'>To do</MenuItem>
      <MenuItem value='Blocked'>Blocked</MenuItem>
    </Select>
  </FormControl>
          <br/>
<br/>
      
    </div>


    <Button type="submit" variant="contained" color="inherit" onClick={this.submitresult}>
      Click here to Update
     </Button>
    <br/>
    <br/>
    </div>
  );
}
}

export default Adddetails;