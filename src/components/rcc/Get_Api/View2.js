import axios from 'axios'
import React, { Component } from 'react'
import '../../../App.css'
import WithRouter from './WithRouter'

  class View2 extends Component {

  
  constructor(props){
    super(props)
    this.state ={
      viewData2:{}
    }
  }
  componentDidMount = () => {
    this.getAppData()
  }

 async getAppData () {
    // console.log(this.props.params.id)
    const id =this.props.params.id;
    // console.log('componentDidMount');
    try {
      let response =await axios.get('https://jsonplaceholder.typicode.com/todos/'+id)
      console.log(response.data.id)

      this.setState({
        ...this.viewData2,
        viewData2:response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    // console.log('render')
    return (
      <div className='App App-header'>
        {/* {console.log(this.state.viewData2)} */}
        <table>
          <thead>
            <tr>
            <th>id</th>
            <th>title</th>
            <th>userId</th>
            <th>completed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.viewData2.id}</td>
              <td>{this.state.viewData2.title}</td>
              <td>{this.state.viewData2.userId}</td>
              <td>{JSON.stringify(this.state.viewData2.completed)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default WithRouter(View2);