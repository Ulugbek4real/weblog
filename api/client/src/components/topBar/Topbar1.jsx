import "./topBar.scss";
import profilePic from "../../assets/profilePic.jpeg";
const TopBar = () => {
  return (
   <>
     <div className="topBar">
        <div className="top-left">
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className="top-center">
            <ul className="top-list">
                <li className="top-list-item">PROGRAMMING</li>
                <li className="top-list-item">MUSIC</li>
                <li className="top-list-item">ART</li>
                <li className="top-list-item">HEALTH</li>
            </ul>
        </div>
        <div className="top-right">
        <i className="topIcon fa-solid fa-magnifying-glass"></i>
        <i className="topIcon fa-regular fa-bookmark"></i>
        <img className="profImg" src={profilePic}></img>
        </div>
     </div>
 
   </>
  )
}

export default TopBar
<ul className="headerTitles">
{/* <li className="headerLinks">Trending</li>
<li className="headerLinks">Recent</li>
<li className="headerLinks">Categories  <i class="fa-solid fa-caret-down"></i></li>
</ul> */}