import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WithRouter from '../components/rcc/Get_Api/WithRouter';
import './../App.css'

 class CurdOperation extends Component {
     state = {
         myData:[]
     }

     getEmployeesData = async () => {
      const token = JSON.parse(localStorage.getItem('token'));
        try {
                let employees = await axios.get('http://192.168.1.11:8000/api/employees/',{
                    headers : {
                    Authorization:token
                    }
                  }
              );
              //  console.log(employees.data);
              this.setState({
                  ...this.state,
                  myData:employees.data
              })

          if(employees.status == 200){
            toast.success("Get Data Successfully");
          }
            
      }
      catch (error) {
          console.log(error);
        }
    }

    componentDidMount(){
        this.getEmployeesData();
    }

    deleteFrom = (id) => {
      // console.log('delete')

      // let id = e.currentTarget.value;
      // console.log(id);
      console.log(id)
      alert('Data Deleted Successfully')
      this.props.navigate('/curdoperation/'+id)
      setTimeout(()=>{
        this.props.navigate('/curdoperation/')
      },[2000])
    }
    editFrom = async (id) => {
      // console.log(id);
      this.props.navigate('/edit/'+id);
      
    }
  render() {
    // console.log(this.state.myData)
    return (
      <div className='App App-header'>  
       <table>
           <thead>
               <tr>
                   <th>Id</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Date of Birth</th>
                   <th>Position</th>
                   <th>Technologies known</th>
                   <th>Technologie Type</th>
               </tr>
           </thead>
           <tbody>
                {
                    // console.log(this.state.data)
                    // this.state.myData > 0 &&
                    this.state.myData.map((cv,idx,arr) =>{
                        //  console.log(cv);
                        const id = cv._id
                        return(  
                          <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{cv.name}</td>
                            <td>{cv.email}</td>
                            <td>{new Date(cv.dob).toISOString().split('T')[0]}</td>
                            <td>{cv.position}</td>
                            <td>{cv.technologies_known}</td>
                            <td>{cv.technologie_type}</td>
                            <td>
                              <button name='edit' className='btn btn-info btn-sm edit_btn' onClick={()=>{this.editFrom(id)}}>Edit</button>&nbsp;&nbsp;
                              <button name='edit' className='btn btn-danger btn-sm del_btn' value={cv._id} onClick={()=>{this.deleteFrom(id)}}>Delete</button>
                            </td>
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
export default WithRouter(CurdOperation);
