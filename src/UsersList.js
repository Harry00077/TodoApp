import React from 'react'
import "./App.css"

const UsersList = (props) => {
   
    return(
        <>
        <div className='list'>
        <li>{props.text}</li>
        <button onClick={() =>
        {props.onSelect (props.id)}} > ✕ </button>
        </div>
        </>
    )
}

export default UsersList;
