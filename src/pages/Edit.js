import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import React, { Component } from 'react';
import WithRouter from '../components/rcc/Get_Api/WithRouter';

 class Edit extends Component {
  state = {
    myData:{
        name: "",
        email: "",
        dob: "",
        position: "",
        technologies_known:"",
        technologie_type:"",
    }
  }
    componentDidMount(){
         this.getEditData()
    }

     getEditData = async () => {
      const id = this.props.params.id
      const token = JSON.parse(localStorage.getItem('token'));
      try {
        let edit = await axios.get('http://192.168.1.11:8000/api/employees/'+id,{
            headers : {
            Authorization:token
            }
          }
        );
        // let dob = new Date(this.state.myData.dob)
        // console.log(dob.toISOString().split('T')[0])
        // dob = dob.toISOString().split('T')[0]
        //   // console.log(edit.data);

          //edit.data.dob,
        this.setState({
            ...this.state.myData,
            myData:{
              ...this.state.myData,
                name: edit.data.name,
                email: edit.data.email,
                dob: new Date(edit.data.dob).toISOString().split('T')[0],
                position: edit.data.position,
                technologies_known:edit.data.technologies_known,
                technologie_type:edit.data.technologie_type,
              }

          })   
        
      }
      catch (error) {
        console.log(error);
      }
    }
    handleChange = (e) => {

      const {name,value} = e.target
      // console.log(name, email, dob, position, technologies_known,technologie_type)
      console.log(name,value);
      this.setState({
        myData:{
          ...this.state.myData,
          [name]:value
        }
      })
        console.log(this.state.name)

    }

    editFrom = async () => {
        const token =JSON.parse(localStorage.getItem('token'))
        const id = this.props.params.id
        const headers = {
                Authorization:token
                }
        const {name,value} = this.state.myData;

        // const data = this.setState({
        //     myData:{
        //       ...this.state.myData,
        //       [name]:value
        //     }
          // })
        try {
            let editData = await axios.patch('http://192.168.1.11:8000/api/employees/'+id,{
              name: this.state.myData.name,
              email: this.state.myData.email,
              dob: this.state.myData.dob,
              position: this.state.myData.position,
              technologies_known:this.state.myData.technologies_known,
              technologie_type:this.state.myData.technologie_type,
            },
            {
              headers:headers
            })
            if(editData.status == 200){
              this.props.navigate('/curdoperation');
            }
               console.log(editData.status)
          } catch (error) {
            console.log(error)
        }
    }

    handleSubmit = (e) => {
      e.preventDefault()
       this.editFrom()
    }
  render() {
    return (
      <div className='App App-header'>
            <form className='border bg-light w-25 p-4 offset-4 rounded'>
              <input type='text' name='name' onChange={(e)=>{this.handleChange(e)}} value={this.state.myData.name} className='d-block form-control mb-3' placeholder='Enter Name' />
              <input type='email' name='email' onChange={(e)=>{this.handleChange(e)}} value={this.state.myData.email} className='d-block form-control mb-3' placeholder='Enter Email' />
              <input type='date' name='dob' onChange={(e)=>{this.handleChange(e)}} value={this.state.myData.dob} className='d-block form-control mb-3' placeholder='Enter Date of Birth' />
              <input type='text' name='position' onChange={(e)=>{this.handleChange(e)}} value={this.state.myData.position} className='d-block form-control mb-3' placeholder='Enter Your Positon' />
              <input type='text' name='technologies_known' onChange={(e)=>{this.handleChange(e)}} value={this.state.myData.technologies_known} className='d-block form-control mb-3' placeholder='Enter Technologies Know' />
              <input type='text' name='technologie_type' onChange={(e)=>{this.handleChange(e)}} value={this.state.myData.technologie_type} className='d-block form-control mb-3' placeholder='Enter Technologie Type' />
              <button type='submit' onClick={(e)=>{this.handleSubmit(e)}} value={this.state.myData.name} className='btn btn-success'>Update Form</button>
            </form>
          </div>
    );
  }
}
export default WithRouter(Edit);