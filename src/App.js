import { useState } from "react";

import data from "./MOCK_DATA.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(data);
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
                    {user.city}
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
