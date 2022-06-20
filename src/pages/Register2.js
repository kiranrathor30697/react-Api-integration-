import axios from 'axios';
import React, { Component } from 'react';
import './../App.css'

export default class Register2 extends Component {

  state = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
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
      let {userName,email,password,confirmPassword} = this.state;
      let d = {
        userName: userName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      }
      console.log(d)

      let login2 = await axios.post('http://192.168.1.11:8000/api/user/register',d);
       console.log(login2.status);
      
      if(login2.status == 201){
        // console.log("success");
        this.props.navigate('/login2');
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className='App App-header'>
        <form className='border bg-dark w-25 p-4 offset-4 rounded'>
          <input type='text' name='userName' onChange={(e)=>{this.handleChange(e)}} className='d-block form-control mb-3' placeholder='Enter user Name' />
          <input type='email' name='email' onChange={(e)=>{this.handleChange(e)}} className='d-block form-control mb-3' placeholder='Enter Email' />
          <input type='password' name='password' onChange={(e)=>{this.handleChange(e)}} className='d-block form-control mb-3' placeholder='Enter Password' />
          <input type='password' name='confirmPassword' onChange={(e)=>{this.handleChange(e)}} className='d-block form-control mb-3' placeholder='Enter Confirm password' />
          <button type='submit' name='submit' onClick={(e)=>{this.handleSubmit(e)}} className='btn btn-success'>Register Form</button>
        </form>
      </div>
    );
  }
}
