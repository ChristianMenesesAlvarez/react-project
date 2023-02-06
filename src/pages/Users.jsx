import { serverGet } from '../logic/fetch.js';
import { useState } from 'react';
import { useEffect } from 'react';

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await serverGet('users', '', sessionStorage.getItem('sessionToken'));
      const result = response.status === 200 ? response.data : 'Error';
      setUsers(result);
    }
    getData();
  }, [])

  return (
    <>
      <h1>Usuarios</h1>
      {users.map((item) =>
        <User key={item._id} data={item} />
      )}
    </>
  )
}

function User(props) {
  const { username, email, lastConnection } = props.data;

  return (
    <div style={{border: '2px solid black'}} >
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Last Connected: {lastConnection}</p>
    </div>
  )
}