import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './../App.css';
import WithRouter from '../components/rcc/Get_Api/WithRouter'

 class Login2 extends Component {

  state = {
    userName: "",
    password: ""
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

    let data = {
      userName: this.state.userName,
    password: this.state.password
    }

    try {
      let login2 = await axios.post('http://192.168.1.11:8000/api/user/login',data);
      // console.log(login2.status);
      if(login2.status == 200){
        toast.success("Login Successfully");

        localStorage.setItem('token',JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmIwNjFkZTVhN2VhZTY2YmMzZjU5NGUiLCJpYXQiOjE2NTU3MjY1ODF9.fLpbHZhoLIUnEYhYK0r5uwdDse29GKim2PGwEhoDk4c'))
        
        this.props.navigate('/home');
      }
    } catch (error) {
      // console.log(error.response.status);
      if(error.response.status == 404){
        toast.error("User Not Exist");
        console.log("errprr")
      }
    }
  }
  render() {
    return (
      <div className='App App-header'>
        <form className='border bg-dark w-25 p-4 offset-4 rounded'>
          <input type='text' name='userName' onChange={(e)=>{this.handleChange(e)}} className='d-block form-control mb-3' placeholder='Enter user Name' />
          <input type='password' name='password' onChange={(e)=>{this.handleChange(e)}} className='d-block form-control mb-3' placeholder='Enter Password' />
          <button type='submit' name='submit' onClick={(e)=>{this.handleSubmit(e)}} className='btn btn-success'>Register Form</button>
        </form>
      </div>
    );
  }
}
export default WithRouter(Login2);