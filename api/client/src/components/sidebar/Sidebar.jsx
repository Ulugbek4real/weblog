import "./sidebar.scss"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axiosInstance from "../../config";

const Sidebar = () => {
  const [ cats, setCats ] = useState([]);

  useEffect(()=>{
const getCats = async () => {
const res = await axiosInstance.get("/categories/");
setCats(res.data);
};
getCats();
  },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">DISCOVER MORE OF WHAT MATTERS TO YOU</span>
        <div className="sidebarLinks">
            {cats.map((c,index) => ( <Link key={index} to={`/?cat=${c.name}`} className="sidebarLink"><p>{c.name}</p></Link>))}
           

        </div>
        <div className="extraLinks">
        <a className="extraLink"><p>Help </p></a>
        <a className="extraLink"><p>Status </p></a>
        <a className="extraLink"><p>Writers </p></a>
        <a className="extraLink"><p>Blog </p></a>
        <a className="extraLink"><p>Careers </p></a>
        <a className="extraLink"><p>Privacy</p></a>
        <a className="extraLink"><p>Terms </p></a>
        <a className="extraLink"><p>About </p></a>
        <a className="extraLink"><p>Knowable </p></a>
        </div>

        </div>
    </div>
  )
}

export default Sidebar