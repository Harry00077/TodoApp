import React from 'react'
import "./App.css"

const UsersList = (props) => {
   
    return(
        
        <>
        <div className='list'>
        <li>{props.text}</li>
        <i className="fa-solid fa-pen-to-square" ></i>
        <i className="fa-solid fa-trash-can" onClick={() =>
        {props.onSelect (props.id)}}></i>
        </div>
        </>
    )
}

export default UsersList;
