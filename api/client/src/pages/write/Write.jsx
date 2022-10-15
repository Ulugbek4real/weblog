import "./write.scss";
import { useContext, useState } from "react";
import axiosInstance from "../../config";
import { Context } from "../../context/Context";
 
const Write = () => {
  const [ title, setTitle ] = useState("");
  const [ desc, setDesc ] = useState("");
  const [ text, setText ] = useState("");
  const [ categories, setCategries ] = useState([]);
  const [ long, setLong ] = useState(null)
  const [ file, setFile ] = useState(null);
const { user } = useContext(Context);

const handleSubmit = async(e) =>{
    e.preventDefault();
    const newPost = {
      username: user.username,
      userPic: user.profilePic,
      title,
      desc,
      text,
      categories,
      long,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo = filename;
      try {
        await axiosInstance.post("/upload",data)
      } catch (err) {}
    }
    try {
     const res = await axiosInstance.post("/posts/",newPost);
     window.location.replace("/post/" + res.data._id)
     
    }  catch (err) {
   
    }
  
  };
 
  return (
    <div className="write">
 {file &&    <img className="writeImage" src={URL.createObjectURL(file)}></img>}
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
        <label htmlFor="fileInput"><i class="fa-solid fa-plus"></i></label>
       <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=> setFile(e.target.files[0])}></input>
       <input type="text" placeholder="Add a title..." className ="writeInput" autoFocus={true} onChange={e => setTitle(e.target.value)}></input>
        </div>
        <input type="text" placeholder="Add a subtitle..." className ="writeInput write-sub"  onChange={e => setDesc(e.target.value)}></input>
        <input type="text" placeholder="Add a category..." className ="writeInput write-cat"  onChange={e => setCategries(e.target.value.split(" ")[0].charAt(0).toUpperCase() + e.target.value.split(" ")[0].slice(1))}></input>
       <div className="lastclass"> 
       {/* <span className="spanspan"> A </span>  */}
       <input type="number" className="write-long" required onChange={e => setLong(Number(e.target.value) <= 0 ? 1 : e.target.value)}></input>
       <span className="spanspan"> -minute read </span> 
       </div>
       <button className="sumbit-btn" type="submit">Publish</button>
        <div className="writeFormGroup">
              <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" onChange={e => setText(e.target.value)}></textarea>
 
        </div>


        </form>
  
    </div>
  )
}

export default Write