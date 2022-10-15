import "./post.scss";
import AuthorPic from "../../assets/profilePic.jpeg";
import {  useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context"
import axiosInstance from "../../config";
const Post = ({post}) => {
  const PF  = "http://localhost:3000/images/"
  const {user} = useContext(Context);
  const handleDelete = async() => {
 
try{
await axiosInstance.delete("/posts/" +post._id, { data :{username:user.username}})
window.location.replace("/")
}catch (err) {
console.log(err)
}
  }
  return (
    
    <div className="post">
        <div className="postInfo">
            <div className="postHeader">
                <img className="authorPic" src={user?.username === post.username && user.profilePic ? PF + user.profilePic : post.userPic ? PF + post.userPic : PF + "avatar.webp"}></img>
                <Link to={`/?user=${post.username}`} className="author"><h4>{post.username}</h4></Link>
            </div>
            <div className="postTitle">
                <Link to={`/post/${post._id}`} className="title"><h2>{post.title}</h2></Link>
                 <div className="subtitle"><Link to={`/post/${post._id}`}><p>{post.desc}</p></Link></div>
            </div>
            <div className="postFooter">
                <div className="left">
                <p className="postDate">{new Date(post.createdAt).toLocaleDateString()}</p>
                <p class="dot firstDot">·</p>
                <p className="readTime">{post.long} min read</p>
                <p class="dot">·</p>
                {post.categories.map((name,index)=> (
                  <Link to={`/?cat=${name}`} key={index} className="" href="#">{name}</Link>
                  ))}
               
                </div>
                <div className="right">
              {user?.username === post.username && <i onClick={handleDelete} className="trash fa-regular fa-trash-can"></i>}
                <i className=" saved fa-regular fa-bookmark"></i>
                </div>
            </div>

        </div>
       <Link to={`/post/${post._id}`}><img className="postPic" src={PF + post.photo}></img></Link>
            
       
    </div>
  )
}

export default Post