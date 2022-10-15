import {Link, useLocation} from 'react-router-dom';
import "./topBar.scss";
import avatar from "../../assets/avatar.webp";
import SubMenu from '../subMenu/SubMenu';
import { useState, useContext, useEffect } from 'react';
import { Context } from "../../context/Context"
function TopBar() {
 
const {user,dispatch} = useContext(Context);
const PF  = "http://localhost:3000/images/";
const handleLogout = () => {
dispatch({type:"LOGOUT"})
};
  const [ isSubmenuOpen, setIsSubmenuOpen ] = useState(false);
  const location = useLocation();
  useEffect(()=>{
  setIsSubmenuOpen(false);
  },[location.key])
  return (
    <>
      <div className="topBar">
        <div className="wrapper">
          <div className="top-left"><Link to="/"><h1>Weblog</h1></Link></div>
          <div className="top-right">
           { user ? <ul className="top-list">
              <li className="top-list-item dissappear">Our story</li>
              <li className="top-list-item dissappear" onClick={handleLogout}><Link to='/login'>Logout</Link></li>
              <li className="top-list-item dissappear"><Link to='/write'>Write</Link></li>
              <li className="top-list-item"><a href='/'><i className="topIcon fa-regular fa-bookmark"></i></a></li>
              <li className="top-list-item"><img onClick={()=>setIsSubmenuOpen(!isSubmenuOpen)} className="profImg" src={user.profilePic ? PF + user.profilePic : avatar}></img></li>
            </ul> : <ul className="top-list">
              <li className="top-list-item dissappear">Our story</li>
              <li className="top-list-item dissappear">Membership</li>
              <li className="top-list-item dissappear"><Link to='/write'>Write</Link></li>
              <li className="top-list-item dissappear"><Link to='/login'>Login</Link></li>
              <li className="top-list-item btn"><Link to='/register'>Get started</Link></li>
            </ul>}
        
            {isSubmenuOpen && <SubMenu />}
          </div>
        

        </div>
      </div>

    </>
  );
}

export default TopBar