import React, { useState } from 'react';
import UsersList from "./UsersList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [users, setUsers] = useState([]);

  const userEvents = (events) => {
    setInputList (events.target.value);
  };


  const listOfUsers = () =>{
    setUsers((oldUsers) => {
      return [...oldUsers, inputList]
    });
    setInputList("");
  };
  const deleteUsers =(id) => {
    console.log("deleted");
    setUsers((oldUsers) =>{
      return oldUsers.filter((arrElem,index)=>{
        return index !== id;
      })
    })
}

  return (
    <>
      <div className="main_div">
          <div className="center_div">
            <br/>
            <h1> ToDo App </h1>
            <br/>
            <input type="text" placeholder="Add User Name" 
            value={inputList} onChange={userEvents}/>
            <button onClick={listOfUsers}> Add </button>
            <ul>
              {users.map((userName, index) => {
                return <UsersList 
                key={index}
                id= {index}
                text={userName}
                onSelect = {deleteUsers}
                />
              })}
            </ul>
          </div> 
      </div>
    </>
  )
}

export default App;