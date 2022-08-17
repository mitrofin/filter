const User = ({ f_name, l_name, cit, ca, gen }) => {
  return (
    <div className="user_wraper">
      <div className="item">
        Name:{f_name} {l_name}
      </div>
      <div className="item">City: {cit}</div>
      <div className="item">Car: {ca}</div>
      <div className="item">Gender: {gen}</div>
    </div>
  );
};
export default User;
