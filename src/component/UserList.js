import React, { useState, useEffect } from 'react';
import axios from 'axios';


function UserList() {
  // state to hold the list of users
  const [listOfUsers, setListOfUsers] = useState([]);

  // fetch the list of users from the API when the component mounts
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => setListOfUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  // render the list of users
  return (
    <div className='container'>
      <h1>List of Users</h1>
      <ul>
      {listOfUsers.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong>
          <br />
          Email: {user.email}
          <br />
          Username: {user.username}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
