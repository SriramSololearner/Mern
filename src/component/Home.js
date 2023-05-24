import {React,useState,useEffect} from 'react'
import axios from "axios";
import RowData from './RowD';
import { useNavigate } from 'react-router-dom';
import "../App.css"

const Home = () => {
    const [data,setData]=useState([]);
    const navigate=useNavigate();
    

    useEffect(()=>{
        axios.get("http://localhost:8080/getData")
        .then((res)=>{
        
            setData(res.data);
            
        })
        .catch((err)=>console.log(err));
    },[])

    const del=(id)=>{
        axios.delete(`http://localhost:8080/del/${id}`).then(()=>{
            axios.get("http://localhost:8080/getData").then((res)=>{
                setData(res.data);
            }).catch((er)=>{
                console.log(er);
            })
            
        }).catch((er)=>{
            console.log(er);
        })
    
    };

    const upd=(id)=>{
        navigate(`/update/${id}`)
        
    }
  return (
    <div>
    <table>
    
 
    <tr><th>Users</th><th>UName</th><th>Email</th> <th>button</th> </tr>
    {
        data.map(   (user)=>
        
           <RowData user={user} del={del} update={upd}/>

        )
    }
   
     </table>
    </div>
  )

  
}
  

export default Home