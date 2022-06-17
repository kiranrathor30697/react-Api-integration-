import axios from 'axios';
import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

 class Get_User_Data extends Component {

    state = {
       data:[]
    }

     getData = async () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiI2MmFjNGQyNmY0ODA0NWVhNjRkMjg1Y2EiLCJlbWFpbCI6ImtAZ21haWwuY29tIn0sImlhdCI6MTY1NTQ2NzEyMH0.qUFjgG73PtgaOUpsTv7HBQO1_MRmzVE1FkDm9EWiVsU"
        try {
             let result = await axios.get('http://192.168.1.6:4000/users/getalluser',{
                headers: {
                    'Authorization': `Basic ${token}` 
                }
             }
            )
             this.setState({
                 ...this.state,
                 data:result.data
             });
            if(result.status == 200){
                toast.success("Get Data Successfully");
            }
            // console.log(this.state)
        } catch (error) {
            console.log(error)
        }
    }
    async componentDidMount (){
        //  console.log('componentDidMount');
       this.getData()
     }
    
  render() {
    return (
      <div className='App App-header'>
          
        {/* <button className='btn btn-success mx-auto' onClick={()=>{this.Get_User()}} >Get User</button> */}
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.data.map((cv,idx,arr)=>{
                        // return console.log(cv)
                        console.log(typeof(cv._id),cv)
                        return (
                            <tr key={idx}>
                                <td>{idx+1}</td>
                                <td>{cv.name}</td>
                                <td>{cv.phone}</td>
                                <td>{cv.email}</td>
                                <td>{cv.password}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    );
  }
}
export default Get_User_Data;