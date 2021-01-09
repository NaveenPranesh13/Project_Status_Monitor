import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';


import axios from 'axios';


const Todo = props =>(

  // <MuiAccordion square expanded={this.state.expnd} onChange={() => {this.setState({expnd:!this.state.expnd})}}>
  //       <MuiAccordionSummary aria-controls="panel1d-content" id="panel1d-header">
  //         <Typography>{props.todo.proj_name}</Typography>
  //         <Typography>{props.todo.proj_state}</Typography>
  //       </MuiAccordionSummary>
  //       <MuiAccordionDetails>
  //         <Typography>
  //         {props.todo.proj_desc}
  //         </Typography>
  //       </MuiAccordionDetails>
  //     </MuiAccordion>
  
  <TableRow>
    <TableCell>{props.todo.proj_name}</TableCell>
    <TableCell>{props.todo.proj_desc}</TableCell>
    <TableCell>{props.todo.proj_state}</TableCell>
    <TableCell><Link to={'/edit/'+props.todo._id}>Edit</Link></TableCell>
    <TableCell><Link to={'/delete/'+props.todo._id}>Delete</Link></TableCell>
  </TableRow>
)

class Viewdetails extends Component {

  constructor(props)
    {
        super(props);
this.state = { details:[],
  expnd:false
}
    }

componentDidMount() {
  axios.get('http://localhost:4018/mydb/view')
  .then(res => {
    this.setState({details:res.data});
  })
  .catch(function(error){
    console.log(error);
  })
}

componentDidUpdate() {
  axios.get('http://localhost:4018/mydb/view')
  .then(res => {
    this.setState({details:res.data});
  })
  .catch(function(error){
    console.log(error);
  })
}


viewprojdetails() {

  return this.state.details.map(function(x,i){
    return <Todo todo={x} key={i} />;
  })
}



  render() {
    return (
      <div className="App">
        <h3> Project Details </h3>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Project Title</TableCell>
                <TableCell>Description </TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.viewprojdetails()}
            </TableBody>
          </Table>
      </div>
    );
  }
}

export default Viewdetails;