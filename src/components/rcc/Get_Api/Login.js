import axios from 'axios';
import React, { Component } from 'react';
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../../../dashboard/Home';
import WithRouter from './WithRouter';

 class Login extends Component {
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }

    loginForm = async (e) => {
        e.preventDefault()
        // console.log('loginForm')
      
        const {email,password} = this.state
        const data = {
                        email:email,
                        password:password
                    }
        axios.post(`http://192.168.1.6:4000/users/login`, data)
        .then(res => {
            localStorage.setItem("token", res.data.data.token);
             console.log(res.data);

            if(res.status == 200){
                toast.success("Login Successfully");
                localStorage.setItem('token',"")
                setTimeout(()=>{
                    this.props.navigate('/');
                },3000)
            }
        })
        .catch((err)=>{
            if(err.response.status == 404){
                toast.error(" User Not Exist");
            }
        })
    }

    handleChange = (e) => {
        // console.log('handleChange');
        const {name,value} = e.target;
        // console.log(name,value);
        this.setState({
            ...this.state,
            [name]:value
        })
    }

  render() {
    return (
      <>
        <Home />
        <div className='App App-header offset-4 w-25'>
            <form className='rounded border p-4'style={{backgroundColor: 'rgb(165, 162, 162)'}}>
                <input type='email' className='form-control' name='email' placeholder='Enter your Email' onChange={(e)=>{this.handleChange(e)}} value={this.state.value} /><br />
                <input type='password' className='form-control' name='password' placeholder='Enter your Password' onChange={(e)=>{this.handleChange(e)}} value={this.state.value} /><br />
                <button type="submit" className='btn btn-secondary sm' onClick={(e)=>{this.loginForm(e)}} >User Register</button>
                <ToastContainer />
            </form>
        </div>
      </>
    );
  }
}

export default WithRouter(Login);