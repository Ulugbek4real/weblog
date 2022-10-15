import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.scss";
import { useContext, useRef } from "react";
import axiosInstance from "../../config";

const Login = () => {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context)
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axiosInstance.post("/auth/login",{
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({type:"LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE"});
    }
  };

  return (
    <div className="login">
    <div className="floating">
      <h2>LOGIN</h2>
     <form className="loginForm" onSubmit={handleSubmit}>
  
  <label className="inputLabel">USERNAME</label>
  <input className="input" type="text" required placeholder="Enter your username..." ref={userRef}></input>
  <label className="inputLabel">PASSWORD</label>
  <input className="input" type="password" placeholder="Enter your password..." ref={passwordRef}></input>
 {/* <div  className="loginCheckbox" >
  <input type="checkbox" className="checkbox"></input><span>Show password</span>
 </div> */}
  <button className="loginUpdate" type="submit" disabled={isFetching}>LOGIN</button>
<div className="createAccount">
  <span>Do not have an account?</span>
  <Link to="/register">Create One</Link>
</div>
     </form>
    </div>
    </div>
  )
}

export default Login