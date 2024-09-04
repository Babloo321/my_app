'use client';
import { useState } from 'react';
import MainPage from '../components/MainPage';
import style from '../../../public/css/signup.module.css';
// import Link from 'next/link';
const Login = ({ logout })=> {
  const [pageRedirect, setPageRedirect] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleClick = async (event) => {
    event.preventDefault();
    const result = await fetch('http://localhost:3000/api/post/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    setData({
      email: '',
      password: '',
    });

    // handling useState
    setPageRedirect(!pageRedirect);
  };
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  function handlePros() {
    setPageRedirect(false);
  }

  return pageRedirect ? (
    <MainPage onSendMessage={handlePros} />
  ) : (
  // return (
    <div className={style.container}>
      <div className={style.form_control}>
        <h1>Login</h1>
        <form
          action="http://localhost:3000/api/post/login"
          method="POST"
          className="form form-control"
        >
          <label for="username" className={style.label}>
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className={style.email}
            id="email"
            name='email'
            value={data.email}
            onChange={handleChange}
          />
        
          <label for="username" className={style.label}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your Password"
            className={style.password}
            id="password"
            name='password'
            value={data.password}
            onChange={handleChange}
          />
          <input
            type="submit"
            value={'Login'}
            className={style.btn}
            onClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
};
export default Login;
