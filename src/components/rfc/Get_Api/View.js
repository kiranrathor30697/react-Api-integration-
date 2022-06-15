import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../App.css';

export const View = () => {

    const [viewData,setViewData] = useState({})

    const params = useParams();

    // console.log(params);

    useEffect(()=>{
        getData2();
    },[]);

    const getData2 = () => {
        // console.log("getdata");
        fetch(' https://jsonplaceholder.typicode.com/todos/'+params.id+'')
        .then(res=>res.json())
    
        .then((data)=>{
        //   console.log(data);
            // console.log(data.completed);
            // const com = data.completed.toString();

          setViewData(data);
        })
    
        .catch((error)=>{
          console.log(error)
        })
      }
     
  return (
    <div className='App App-header'>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>userId</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody >
            <tr>
                <td>{viewData.id}</td>
                <td>{viewData.title}</td>
                <td>{viewData.userId}</td>
                <td>{JSON.stringify(viewData.completed)}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}



