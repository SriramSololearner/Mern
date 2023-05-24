import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Axios from "axios";

const Update = () => {
    const url=useParams();
    const navigate=useNavigate();
    const [state,setState]=useState({});
    
    
    useEffect(()=>{
       
        Axios.get(`http://localhost:8080/SearchId/${url.id}`).then((res)=>{
            setState(res.data);
    })
},[])

const upd=(e)=>{
    setState({...state,[e.target.name]:e.target.value});
    
}
const Add=()=>{
    Axios.put("http://localhost:8080/update",state).then(()=>{
        navigate("/");
    }).catch((er)=>{
        console.log(er);
    })

}
  return (
    <div>
     <input type='text' name="_id"  onChange={upd} value={state._id} placeholder='enter userId' readOnly/><br/><br/>
    
     <input type='name' name="name" onChange={upd} value={state.name} placeholder='enter userName'/><br/>
     <input type='email' name="email" onChange={upd} value={state.email}  placeholder='enter userEmail'/><br/>
    <input type='password' name="password" onChange={upd} value={state.password} placeholder='enter pwd'/><br/><br/>
    <input type='text' name="Phone" onChange={upd} value={state.Phone}placeholder='enter mobile number' /><br/>
    <button onClick={Add}>save</button>


    </div>
  )
}

export default Update