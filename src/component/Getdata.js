import {React,useState} from 'react'
import Axios from "axios";
import {  useNavigate } from 'react-router-dom';
import "../App.css"



function Getdata(){
  
    const[data,setData]=useState({});

    const navigate=useNavigate();
    

    const upd=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        
    }


    const Add=()=>{
 

        Axios.post("http://localhost:8080/addData",data)
        .then((res)=>
          navigate("/")
            ).catch(err=>{console.log(err)});
    }
 
  return (
    <div className='form'>
    Add Data
      <input type='text' name="_id"  onChange={upd} placeholder='enter userId'/><br/><br/>
      
      <input type='name' name="name" onChange={upd} placeholder='enter userName'/><br/>
      <input type='email' name="email" onChange={upd} placeholder='enter userEmail'/><br/>
      <input type='password' name="password" onChange={upd} placeholder='enter pwd'/><br/><br/>
      <input type='text' name="Phone" onChange={upd} placeholder='enter mobile number' /><br/> 
      <button onClick={Add}>save</button>

    </div>
  )
}

export default Getdata;



