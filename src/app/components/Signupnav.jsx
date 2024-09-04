'use client';
import Link from "next/link";
import "../globals.css";
import style from '../../../public/css/signupnav.module.css'
const Signupnav = () => {
  return (
    <div className="navbar bg-base-100 header">

    <div className="navbar-start chatbot">
      <a className="btn btn-ghost text-xl">ChatBot</a>
    </div>
  
    <div className="navbar-end login_signup">
     
      <Link href={"/signup"} className="btn">Signup</Link>
      <Link href={"/login"} className="btn">Login</Link>
     
      <label className="cursor-pointer  toogler">
    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
  </label>
    </div>
    </div>
  )
}
export default Signupnav;