import "./trending.scss";
import PostPic from "../../assets/16608921909570_w8jlFZc7ywHFwRzc.jpeg";
import TrendingPost from "../trendingPost/TrendingPost.jsx";
import { Link } from "react-router-dom";
const Trending = ({posts}) => {

  return (
  
    <div  className="trending">
     
    <div className="wrapper">
    <div className="big-post POST">
    <div id="trending" className="trending-br"><h3> <i class="fa-solid fa-arrow-trend-up up"></i> Trending on Weblog</h3></div>
     <Link to="/post/62ff341e9e24d2eff6d2e48f"> <img className="big-post-img" src={PostPic}></img></Link>
      <div className="big-post-title"><h4>Featured post</h4>
      <h2>Is Every Age the Best Age to Be? </h2>
      <span>Like everybody’s dog is the best dog in the world</span>
      </div>
    </div>
    {posts.slice(0, 4).map((post,index)=>{
      return  <TrendingPost key={index} post={post} className="POST"/>
    })}
   
    </div>
       

    </div>
  )
}

export default Trending