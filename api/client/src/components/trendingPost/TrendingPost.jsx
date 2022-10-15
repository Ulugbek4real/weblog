import "./trendingPost.scss";
import { Link } from "react-router-dom";
const TrendingPost = ({post}) => {
    const PF  = "https://weblogproject.herokuapp.com/images/"
  return (
    <div className="trendingPost">
     <div className="post trending-post">
  {post.categories.map((cat,i)=> <a key={i} className="cat" href="#">{cat}</a>)}
     <Link to={`/post/${post._id}`}><img className="postPic" src={PF + post.photo}></img></Link>
        <div className="postInfo">
            
            <div className="postTitle">
            <Link to={`/post/${post._id}`} className="title"><h2>{post.title}</h2></Link>
                 <div className="subtitle trendingSubtitle"><Link to={`/post/${post._id}`}><p>{post.desc}</p></Link></div>
            </div>
            <div className="postHeader">
                <Link to="#" className="author "><h4 className="trending-author"> By {post.username}</h4></Link>
            </div>
            <div className="postFooter">
                <div className="left">
                <p className="postDate">{new Date(post.createdAt).toLocaleDateString()}</p>
                <p class="dot">·</p>
                <p className="readTime">4 min read</p>
          
                </div>
                <div className="right">
                <i className=" saved fa-regular fa-bookmark"></i>
                </div>
            </div>

        </div>
       
           
       
    </div>
</div>
  )
}

export default TrendingPost