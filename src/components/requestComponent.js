import React, {useState, useEffect} from 'react';
import {Breadcrumb, BreadcrumbItem,Button, Row, Label,Col, Form, FormGroup, Input, Dialog} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Personaldetails from './personalDetailsComponent';
import Hospitaldetails from './hospitalDetailsComponent';
import Bankdetails from './bankDetailComponent';
import MyRequest from './myRequest';
import {useSelector, useDispatch} from 'react-redux';



const useStyles = makeStyles((theme) => ({
    root: {
      width: 550,

    },
    margin: {
      height: theme.spacing(5),
    },
  }));
  
  const marks = [
    {
        value: 0,
        label: '',
      },
    {
      value: 25,
      label: 'Personal',
    },
    {
      value: 50,
      label: 'Hospital',
    },
    {
      value: 75,
      label: 'Bank',
    },
    {
      value: 100,
      label: 'Request',
    },
  ];
 
  

function Request(){
    //const classes = useStyles();
    const status = useSelector(state => state.status.status);
    console.log('status',status);
    const Render =() =>{
      if(status === 0){
        return(<Personaldetails />);
      }
      else if(status === 25){
        return(<Hospitaldetails />);
      }
      else if(status === 50){
        return(<Bankdetails />);
      }
      else if(status === 75){
        return(<MyRequest />);
      }
      
    }
    
    return(
        <Render />
    );
 
}

export default Request;