import React, { Component } from 'react';
import axios from 'axios';
import {Button, FormControl, InputLabel,Select} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default class Edittodo extends Component {


    constructor(props) {
        super(props);

        this.state = {
            proj_name: '',
            proj_desc: '',
            proj_state: '',
            proj_state1:'',
            openMenu:false
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get('http://localhost:4018/mydb/view/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    proj_name: response.data.proj_name,
                    proj_desc: response.data.proj_desc,
                    proj_state: response.data.proj_state,
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeTochangeprojname = (e) => {
        this.setState({
            proj_name: e.target.value
        });
    }

    onChangeTochangeprojdesc = (e) => {
        this.setState({
            proj_desc: e.target.value
        });
    }

    onChangeTochangestate = (e) => {
        this.setState({
            proj_state: e.target.value
        });
    }

    handleClose = () => {
        this.setState({openMenu:false});
      };
    
       handleOpen = () => {
        this.setState({openMenu:true});
      };

      submitedit = (e) => {
        e.preventDefault();
        const obj = {
            proj_name: this.state.proj_name,
            proj_desc: this.state.proj_desc,
            proj_state: this.state.proj_state,
            
        };
        axios.post('http://localhost:4018/mydb/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
              <div className="App" style={{ textAlign: 'center'}}>
      
            <h1>Edit Details</h1>
      <br/>
      <br/>
          <div>
              <TextField style = {{width:500}}
              id="outlined-basic" label="Project Title" variant="outlined" 
            onChange={this.onChangeTochangeprojname} value={this.state.proj_name}/>
          </div>
          <br/>
      <br/>
          <div>
              <TextField style = {{width:500}} 
              id="outlined-basic" label="Description" variant="outlined"  
            onChange={this.onChangeTochangeprojdesc} value={this.state.proj_desc}/>
          </div>
          <br/>
      <br/>
      <div>
        <FormControl style = {{width:500}}>
          <InputLabel>SELECT</InputLabel>
          <Select onChange={this.onChangeTochangestate} labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={this.state.openMenu}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                value={this.state.proj_state}>
            <MenuItem value='Completed'>Completed</MenuItem>
            <MenuItem value='InProgress'>In Progress</MenuItem>
            <MenuItem value='Todo'>To do</MenuItem>
            <MenuItem value='Blocked'>Blocked</MenuItem>
          </Select>
        </FormControl>
                <br/>
      <br/>
            
          </div>
      
      
          <Button type="submit" variant="contained" color="inherit" onClick={this.submitedit}>
            Click here to Update
           </Button>
          <br/>
          <br/>
          </div>
        )
    }
}