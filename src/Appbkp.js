
import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { AppBar, Switch, Tab, Tabs, TabList, Menu, MenuItem, Button } from '@material-ui/core'
import Adddetails from './Adddetails'
import Viewdetails from './Viewdetails'
import Edittodo from './Edittodo'
import Delconfirm from './Delconfirm'


export default function Appbkp() {

    const [anchorEl, setAnchorEl] = React.useState(null);
     const [showapptitle,setshowapptitle] = React.useState(true);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        //  setshowapptitle(!showapptitle);
        //  console.log("false set in use effect")
    };

//         useEffect(() => 
// {
//     setshowapptitle(showapptitle);
//     console.log("true set in use effect")
// });
    return (
        <div>
            
        <div className="App" style={{ textAlign: 'center', marginTop:100}}>
            <div>
            <h1>Project Progress Tracker</h1>
            <h3>Click on below menu</h3>
            <Button onClick={handleClick}>Open Menu</Button>
            </div>
            <div>
            <Router>

                <Menu id="menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={handleClose}> <Link to='/add'>Add details</Link></MenuItem>
                    <MenuItem onClick={handleClose}>  <Link to='/view'>view details</Link></MenuItem>
                </Menu>
                <div>
                <Route path='/add' component={Adddetails} />
                <Route path='/view' component={Viewdetails} />
                <Route path='/edit/:id' component={Edittodo} />
                <Route path='/delete/:id' component={Delconfirm} />
                </div>

            </Router>
            </div>
        </div>
        </div>
    )
}