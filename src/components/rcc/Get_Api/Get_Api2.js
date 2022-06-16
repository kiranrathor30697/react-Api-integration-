import axios from 'axios';
import React, { Component } from 'react'
import '../../../App.css'
export default class Get_Api2 extends Component {

  state = {
    data:{},
  }
  
  componentDidMount(){
    // console.log("componetDitMount")

    fetch(' https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())

    .then((res)=>{
      
      this.setState({...this.state,data:res})
      console.log(this.state);
    })

    .catch((error)=>{
      console.log(error)
    })
    
  }
  
  render() {
   
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
                  return (
                    <tr key={cv.id}>
                      <td>{cv.id}</td>
                      <td>{cv.title}</td>
                      <td>{cv.userId}</td>
                      <td>{cv.completed.toString()}</td>
                      {/* <td>
                        {
                          <button className='btn btn-success sm' id="btn_view" value={cv.id} onClick={view_data} >view</button>
                        }
                      </td> */}
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
























































































































































































































































