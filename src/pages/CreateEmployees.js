import axios from 'axios';
import React, { Component } from 'react';

 class CreateEmployees extends Component {
    state = {
        name: "",
        email: "",
        dob: "",
        position: "",
        technologies_know:"",
        technologie_type:"",
      }
      handleChange = (e) =>{
        // console.log(e);
        const {name,value} = e.target;
        // console.log(name,value);
        this.setState({[name]:value})
        console.log(this.state)
      }
      handleSubmit = async (e) =>{
        e.preventDefault();
    
        try {
          let {name,email,dob,position,technologies_known,technologie_type} = this.state;
          let d = {
            "name":name,
            "email":email,
            "dob":dob,
            "position":position,
            "technologies_known":technologies_known,
            "technologie_type":technologie_type
          }
          console.log(d)
          const token = localStorage.getItem('token');
          console.log(token)
          let employees = await axios.post('http://192.168.1.11:8000/api/employees/',d,{
              headers : {
                Authorization:token
              }
          });
           console.log(employees);
          
        } catch (error) {
          console.log(error);
        }
      }
      render() {
        return (
          <div className='App App-header'>
            <form className='border bg-dark w-25 p-4 offset-4 rounded'>
              <input type='text' name='name' onChange={(e)=>{this.handleChange(e)}} className='d-block form-control mb-3' placeholder='Enter Name' />
              <input type='email' name='email' onChange={(e)=>{this.handleChange(e)}} className='d-block form-control mb-3' placeholder='Enter Email' />
              <input type='text' name='dob' onChange={(e)=>{this.handleChange(e)}} className='d-block form-control mb-3' placeholder='Enter Date of Birth' />
              <input type='text' name='position' onChange={(e)=>{this.handleChange(e)}} className='d-block form-control mb-3' placeholder='Enter Your Positon' />
              <input type='text' name='technologies_know' onChange={(e)=>{this.handleChange(e)}} className='d-block form-control mb-3' placeholder='Enter Technologies Know' />
              <input type='text' name='technologie_type' onChange={(e)=>{this.handleChange(e)}} className='d-block form-control mb-3' placeholder='Enter Technologie Type' />
              <button type='submit' name='submit' onClick={(e)=>{this.handleSubmit(e)}} className='btn btn-success'>Register Form</button>
            </form>
          </div>
        );
      }
    }
    export default CreateEmployees;