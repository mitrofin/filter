import User from "./User";

const UserList = ({ users, searchTerm }) => {
  return (
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
  );
};
export default UserList;
