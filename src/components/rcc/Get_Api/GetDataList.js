import React, { Component } from "react";
import axios from 'axios';
import '../../../App.css'

export default class GetDataList extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      result => {
        this.setState({
          isLoaded: true,
          items: result.data
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul style={{color:'white'}}>
          {items.map(item => (
            <li key={item.username} >
              {item.username}: {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}