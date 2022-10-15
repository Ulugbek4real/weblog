import "./register.scss";
import ProfPic from "../../assets/avatarProfPic.jpeg";
import { useState } from "react";
import axiosInstance from "../../config";
import {Link} from "react-router-dom"

const Register = () => {
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState(false);

  const handleSubmit =async (e) =>{
e.preventDefault();
setError(false);
try {
  const res = await axiosInstance.post("/auth/register/", {
  username,
  email,
  password,
  profilePic: ProfPic,
});
  res.data && window.location.replace("/login")
} catch (err) {
  setError(true);
}


  };
  return (
   <div className="register">
    <div className="floating">
      <h2>REGISTER</h2>
     <form className="registerForm" onSubmit={handleSubmit}>
    <div className="img-container">
    <img src={ProfPic} className="profPic"></img>
      <label className="imgLabel" htmlFor="fileInput">Upload profile picture</label>
       <input type="file" id="fileInput" style={{display:"none"}}></input>
    </div>
      
  <label className="inputLabel">USERNAME</label>
  <input className="input" type="text" required onChange={(e) => setUsername(e.target.value)}></input>
  <label className="inputLabel">EMAIL</label>
  <input className="input" type="email" required onChange={(e) => setEmail(e.target.value)}></input>
  <label className="inputLabel">PASSWORD</label>
  <input className="input" type="password" onChange={(e) => setPassword(e.target.value)}></input>
 <div  className="registerCheckbox" >
 </div>
  <button className="registerUpdate" type="submit">REGISTER</button>
{ error &&   <span style={{color:"red"}}>Something went wrong!</span>}
  <div className="loginAccount">
  <span>Already have an account?</span>
  <Link to="/login" href="#">Login</Link>
</div>

     </form>
    </div>
    </div>
  )
}

export default Register