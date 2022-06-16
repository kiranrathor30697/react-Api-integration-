import { useEffect, useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';

const Get_api = () => {

  const [data,setData] = useState({});

  const navigate = useNavigate()

  const id = useId(data);

  const getData = () => {
    // console.log("getdata");
    fetch(' https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())

    .then((data)=>{
      // console.log(data);
      setData(data)
    })

    .catch((error)=>{
      console.log(error)
    })
  }

  let view_data = (e) => {
    // console.log("view");

    // console.log(e.currentTarget.value);

    let id = e.currentTarget.value;
    // console.log(id);

    navigate("/"+id+"")

  }
  return (
    <div className="App App-header">
      
      <button className='btn btn-primary sm w-25 offset-4' id='id_view' onClick={getData}>Get Data</button>
      <br />
      <br />
      <br />
      
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
            data.length > 0 &&
            data.map((cv)=>{
              // console.log(cv.completed);
              return (
                <tr key={cv.id}>
                  <td>{cv.id}</td>
                  <td>{cv.title}</td>
                  <td>{cv.userId}</td>
                  <td>{cv.completed.toString()}</td>
                  <td>
                    {
                      <button className='btn btn-success sm' id="btn_view" value={cv.id} onClick={view_data} >view</button>
                    }
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

export default  Get_api;

