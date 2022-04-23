import { Link } from "react-router-dom";
import "./topbar.css";

function Topbar() {
  const currentUser = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">About</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">Contact</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">Write</Link>
          </li>
          <li className="topListItem">{currentUser && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
        {currentUser ? (
          <img
            className="topImg"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="profile-pic"
          />
        ) : (
          <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">Login</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/register">Register</Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
export default Topbar;
