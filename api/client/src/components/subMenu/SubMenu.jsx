import "./subMenu.scss"
import { Link, useLocation } from "react-router-dom"
import { Context } from "../../context/Context";
import { useContext } from "react";
import axiosInstance from "../../config";
const SubMenu = () => {
  const {user,dispatch} = useContext(Context);
  const handleLogout = () => {
  dispatch({type:"LOGOUT"})
  };
  const handleDeleteAccount = async() => {
    await dispatch({type:"LOGOUT"})
try {
  await axiosInstance.delete("/users/" + user._id, { data :{userId:user._id}})
  window.location.replace("/")
} catch (err) {
  console.log(err);
}

  }
  return (
    <aside className="submenu">
    <Link to="/write">Write</Link>
    <Link to="/settings">Edit profile</Link>
    <Link to="/">Posts</Link>
    <Link to="/login" className="logout-red" onClick={handleLogout}>Logout</Link>
    <button onClick={handleDeleteAccount} className="logout-red">Delete account</button>
  

    </aside>
  )
}

export default SubMenu