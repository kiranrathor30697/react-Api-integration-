import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function WithRouter(MyComponent) {

    const MyParams = (props) =>{
        const params = useParams();
        const navigate = useNavigate();

        return (
            <>
                <MyComponent params={params} navigate={navigate} {...props} /> 
                {/* {console.log(params)} */}
            </>
        )
    };
    return MyParams;
}
