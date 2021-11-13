import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          id: Math.random().toString(),
          name: userName,
          age: userAge,
        },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
