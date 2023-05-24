import React from 'react'
import '../App.css'

const RowData = (props) => {
    const user=props.user;
    const del=props.del;
    const upd=props.update;
  return (
   
        <tr>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><button style={{color:"blue"}} onClick={()=> del(user._id)}>Delete</button></td>
        <td><button  style={{color:"red"}} onClick={()=>upd(user._id)}>Update</button></td>
        </tr>
   
  )
}

export default RowData;