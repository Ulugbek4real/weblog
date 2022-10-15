import "./header.scss";
import { Link} from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
   <div className="wrapper">
   <div className="left">
   <div className="back-square"></div>
   <div className="back-square"></div>
   <div className="back-square"></div>
   <div className="back-square"></div>
   <h1> Create and share your stories</h1>
   <p>Find your inspiration through stories by different authors and share your own & inspire others.</p>
  <div className="action-btn">
  <a href="#trending" className="action-btn1">Start reading</a>
  <Link className="action-btn2" to='/write'>Start writing</Link>
  </div>
   </div>
   </div>
    </div>
  );
}

export default Header