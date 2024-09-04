'use client';
import "../globals.css";
import { useState } from "react";
import MainPage from "./MainPage";
const Login = ({logout}) => {
  const [pageRedirect, setPageRedirect] = useState(false);
  const [data, setData] = useState({
    email: '',
    password:''
  });
  const handleClick = async(event) => {
    event.preventDefault();
    const result = await fetch("http://localhost:3000/api/post/postData",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
  
    // handling useState
      setPageRedirect(true);
    
  }
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData({...data,[name]:value})
  }
  function handlePros() {
    setPageRedirect(false);
  }

  return (
    pageRedirect ? (
      <MainPage onSendMessage={handlePros}/>
    ) : (
      <div className="container">
        <form>
          <div>
            <label><span>Email</span></label><br />
            <input
              type="email"
              value={data.email}
              className="input email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label><span>Password</span></label><br />
            <input
              type="password"
              value={data.password}
              className="input password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleClick}>
            Login
          </button>
        </form>
      </div>
    )
  );
}
export default Login;