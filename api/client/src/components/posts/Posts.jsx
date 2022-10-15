import "./posts.scss"
import Post from "../post/Post"
import { useLocation } from "react-router-dom"
const Posts = ({posts}) => {
  const {search} = useLocation();
  let word = ""
  const searchResult = (searching) => {
  if( searching.split("=")[0] == "?user"){
      word = " Recant posts by " + searching.split("=")[1] 
  } else{
    word = " Recant posts on " + searching.split("=")[1] 
  }
  }
  searchResult(search)
  // " Recant on "+ search.split("=")[1]

  return (
    <div className="posts">
    <div className="recent-br"><h3><i class="fa-regular fa-clock clock"></i>{ search ? word :" Recent posts on Weblog"}</h3></div>
        {posts.map((p)=>(
           <Post key={p._id} post={p}/>
      ))}
       
    </div>
  )
}

export default Posts