import React, { Component } from 'react';
import WithRouter from '../components/rcc/Get_Api/WithRouter';
class Delete extends Component {
    constructor(props){
        super(props)
        this.state = {
            deleteData:[]
        }
    }

    deleteData = () => {
        // console.log(this.props.params.id);
        const id = this.props.params.id;
        const token = JSON.parse(localStorage.getItem('token'));
        // console.log(token)
        fetch('http://192.168.1.11:8000/api/employees/'+id,{
            method:"delete",
            headers : {
            Authorization:token
            }
        })
        .then(rs=>rs.json())
        .then((d)=>{
            // console.log(d);
            this.setState({
                ...this.state,
                deleteData:d.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    componentDidMount(){
        this.deleteData()
    }
  render() {
    return (
      <div>
          <h1 className='text-white text-center mt-5'>Your Data Deleted Successfully</h1>
      </div>
    );
  }
}

export default WithRouter(Delete)