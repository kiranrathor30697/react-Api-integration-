import axios from 'axios';
import React, { Component } from 'react';
import WithRouter from '../components/rcc/Get_Api/WithRouter';

 class Edit extends Component {

    componentDidMount(){
        
    }

    editFrom = async () => {
        const token =JSON.parse(localStorage.getItem('token'))
        const id = this.props.params.id
        const headers = {
                Authorization:token
                }
        const data = {
            name:'rudra'
        }
        try {
            let editData = await axios.patch('http://192.168.1.11:8000/api/employees/'+id,data,{headers:headers})
        } catch (error) {
            console.log(error)
        }
    }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
export default WithRouter(Edit);