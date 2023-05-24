import {React,useState,useRef} from 'react';
import axios from "axios";
import "../App.css";

const Search = () => {
    const [search,setSearch]=useState(null);
    let inputRef=useRef();

    const searchData=()=>{
        let data=inputRef.current.value;
        axios.get(`http://localhost:8080/SearchId/${data}`).then((res)=>{
            setSearch(res.data);
            console.log(res.data)
        }).catch((er)=>{
            console.log(er);
        })
            

    }
    
  return (
    <div className='View'>
    <input type="search" ref={inputRef}/>
    <button style={{marginLeft:"20px"}} onClick={searchData}>Search</button>

    {
         search==null ? <div>Not found...</div>:<div>
            <div>name: {search.name}</div>
            <div>email: {search.email}</div>
            <div>phone: {search.Phone}</div>

        </div> 
    }
    </div>

    

    
  )
}

export default Search