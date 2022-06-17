import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../App.css'
import Home from '../../../dashboard/Home';

 const Register = () => {
     const [userData,setUserdata] = useState({
         name:"",
         phone:"",
         email:"",
         password:""
     })

     const navigate = useNavigate();

     const handleChange = (e) =>{
        //  console.log(e.target.value);
        const {name,value} = e.target;
        setUserdata({
            ...userData,
            [name]:value
        })
        // console.log(name,value);
     }
     const registerForm = async(e) => {
         e.preventDefault()
        //  console.log("cliked");
        //  console.log(userData);
        try {
        let response = await fetch('http://192.168.1.6:4000/users/register', {
            method: "post",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
            });

            // console.log(response)
            if(response.status == 200){
                toast.success('User Register Successfully');
                setTimeout(()=>{
                    navigate('/login')
                },[3000])
               
            }
            if(response.status == 400){
                toast.error('Please Enter user Details');
            }
            if(response.status == 500){
                toast.error(' Email already Exist');
            }
        } catch (error) {
            console.log(error);
        }
     }
  return (
      <>
        <Home />
        <div className='App App-header offset-4 w-25'>  
        <form className='rounded border p-4'style={{backgroundColor: 'rgb(165, 162, 162)'}}>
            <input type='text' className='form-control' name='name' placeholder='Enter your Name' onChange={handleChange} /><br />
            <input type='number' className='form-control' name='phone' placeholder='Enter your Number' onChange={handleChange} /><br />
            <input type='email' className='form-control' name='email' placeholder='Enter your Email' onChange={handleChange} /><br />
            <input type='password' className='form-control' name='password' placeholder='Enter your Password' onChange={handleChange} /><br />
            <button type="submit" className='btn btn-secondary sm' onClick={registerForm} >User Register</button>
            <ToastContainer />
        </form>
    </div>
      </>
    
  );
}
export default Register;