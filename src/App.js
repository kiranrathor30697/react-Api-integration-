import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data,setData] = useState({})
  const getData = () => {
    // console.log("getdata");
    fetch(' https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())

    .then((data)=>{
      console.log(data);
      setData(data)
    })

    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    //  getData()
  },[])
  return (
    <div className="App App-header">

      <button className='btn btn-primary sm w-25 offset-4' onClick={getData}>Get Data</button>
      <br />
      <br />
      <br />
      
      <table className=''>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>userId</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody >
          {
            data.length > 0 &&
            data.map((cv)=>{
              console.log(cv.completed);
              
              return (
                <tr key={cv.id}>
                  <td>{cv.id}</td>
                  <td>{cv.title}</td>
                  <td>{cv.userId}</td>
                  <td>{cv.completed}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
