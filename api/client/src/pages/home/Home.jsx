import { useEffect, useContext, useState } from "react";
import "./home.scss";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Trending from "../../components/tranding/Trending";
import axiosInstance from "../../config";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header"
import { Context } from "../../context/Context"


const Home = () => {
  const {user} = useContext(Context);
  const [ posts, setPosts ] = useState([]);
  const {search} = useLocation();
 
  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts"+search);
  setPosts(res.data)
     };
fetchPosts();
  },[search])

  return (
<>
 {!search && (!user &&<Header />)}
{ !search &&    <Trending posts={posts} />}

    <div className='home'>
    <Sidebar />
    <Posts posts={posts}/>
 
    </div>
    </>
  )
}

export default Home