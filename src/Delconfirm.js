import React, { Component, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function Delconfirm(props) {

//     useEffect(() => 
// {
//     console.log(props.match.params.id)
//     axios.get('http://localhost:4018/mydb/delete/' + props.match.params.id)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
// });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose1 = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        console.log(props.match.params.id)
    axios.get('http://localhost:4018/mydb/delete/' + props.match.params.id)
        .then(response => {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    };

    return (
        <div className="App" style={{ textAlign: 'center', marginTop: 100}}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Click here to Delete permanently
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Confirm delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        On clicking 'Yes' you are agreeing to delete the project detail permanently. 
                        Are you sure you want to delete?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose1} color="primary">
                    <Link to='/view'>No</Link>
                </Button>
                    <Button onClick={handleClose} color="primary">
                        <Link to='/view'>Yes</Link>
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}