import axios from 'axios';
import React, { Component } from 'react'
import '../../../App.css'
import WithRouter from './WithRouter';
 class Get_Api2 extends Component {
 
    constructor(props){
      super(props);
      this.state = {
        data:{},
      }
    

      this.getValue =  this.getValue.bind(this);
    }
  
  componentDidMount(){
    // console.log("componetDitMount")

    fetch(' https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())

    .then((res)=>{
      
      this.setState({...this.state,data:res})
      // console.log(this.state);
    })

    .catch((error)=>{
      console.log(error)
    })
    
  }
  getValue(id){
    console.log("get data id",id);
    //console.log()
    
      this.props.navigate('/rcc/get_api2/'+id);
      console.log(this.props)
  }

  
  
  render() {
  //  console.log(this.props)
    return (
      
      <div className='App App-header'>
        
          <table>
            <thead>
              <tr>
              <th>id</th>
              <th>title</th>
              <th>userId</th>
              <th>completed</th>
              <th>Action</th>
              </tr>
            </thead>
            <tbody >
              {
                
                this.state.data.length > 0 &&
                this.state.data.map((cv)=>{
                  //  console.log(cv);
                  const id = cv.id
                  return (
                    <tr key={cv.id}>
                      <td>{cv.id}</td>
                      <td>{cv.title}</td>
                      <td>{cv.userId}</td>
                      <td>{cv.completed.toString()}</td>
                      <td>
                        {
                          <button className='btn btn-success sm' onClick={()=>{this.getValue(id)}} >view Data</button>
                        }
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
      </div>
    )
  }
}
export default WithRouter(Get_Api2)















//  view_data2 = (e) =>{
  //   // console.log("view_data2")
  //   // console.log(e.target.value);
  //    const id = e.target.value
  //    window.location.href = "/rcc/get_api2/"+id
  // }