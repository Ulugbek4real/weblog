import "./settings.scss";
import ProfPic from "../../assets/profilePic.jpeg";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axiosInstance from "../../config";
const Settings = () => {
  const {user, dispatch } = useContext(Context)
  const [ file, setFile ] = useState(null);
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ success, setSuccess ] = useState(false);

  
  const PF  = "http://localhost:3000/images/";

  const handleSubmit = async(e) =>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"});
    const updatedUser = {
      userId: user._id,
      username,
     email,
     password
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      updatedUser.profilePic = filename;
      try {
        await axiosInstance.post("/upload",data)
      } catch (err) {}
    }
    try {
    const res = await axiosInstance.put("/users/" + user._id, updatedUser);
    setSuccess(true)
    dispatch({type:"UPDATE_SUCCESS", payload : res.data })
     
    } catch (err) {
      dispatch({type:"UPDATE_FAILURE"})
    }
  
  };
  return (
    <div className="settings">
    <div className="floating">
      <h2>UPDATE</h2>
     <form className="settingsForm" onSubmit={handleSubmit}>
    <div className="img-container">
    <img src={file ? URL.createObjectURL(file): user.profilePic ?(PF + user.profilePic): (PF + "avatar.webp") } className="profPic"></img>
      <label className="imgLabel" htmlFor="fileInput">Update profile picture</label>
       <input type="file" id="fileInput" style={{display:"none"}} onChange={e => setFile(e.target.files[0])}></input>
    </div>
      
  <label className="inputLabel">USERNAME</label>
  <input className="input" type="text" required placeholder={user.username} onChange={e => setUsername(e.target.value)}></input>
  <label className="inputLabel">EMAIL</label>
  <input className="input" type="email" required  placeholder={user.email}  onChange={e => setEmail(e.target.value)}></input>
  <label className="inputLabel">PASSWORD</label>
  <input className="input" type="password" required onChange={e => setPassword(e.target.value)}></input>
 <div  className="settingsCheckbox" >
 </div>
  <button className="settingsUpdate" type="submit">UPDATE</button>
{ success && <span style={{color:"green",textAlign:"center"}}>Updated successfully ...</span>}

     </form>
    </div>
    </div>
  )
}

export default Settings