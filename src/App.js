import { useState, useEffect } from "react";
import User from "./User";

import data from "./MOCK_DATA.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(data);

  const filterUser = (searchText, usersList) => {
    if (!searchText) {
      return usersList;
    }
    return usersList.filter(
      ({ first_name, car }) =>
        first_name.toLowerCase().includes(searchText.toLowerCase()) ||
        car.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredUsers = filterUser(searchTerm, data);
      setUsers(filteredUsers);
    }, 300);
    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  return (
    <>
      <div className="App">
        Find users
        <div className="Input">
          <input
            autoFocus
            type="text"
            autoComplete="off"
            placeholder=""
            onChange={(e) => setSearchTerm(e.target.value)}
            className=""
            style={{
              width: "200px",
            }}
          ></input>
          <div className="user_container">
            <ul className="list">
              {users.map((user, index) => {
                return (
                  <li key={index} className="user">
                    <User
                      key={index}
                      f_name={user.first_name}
                      l_name={user.last_name}
                      cit={user.city}
                      ca={user.car}
                      gen={user.gender}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
