'use client';
import { useState } from 'react';
import MainPage from '../components/MainPage';
import style from '../../../public/css/signup.module.css';
import Link from 'next/link';
const Signup = ({ logout }) => {
  const [pageRedirect, setPageRedirect] = useState(false);
  const [data, setData] = useState({
    username: '',
    email: '',
    mobile:Number,
    password: '',
  });
  const handleClick = async (event) => {
    event.preventDefault();
    const result = await fetch('http://localhost:3000/api/post/postData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    setData({
      username: '',
      email: '',
      mobile:Number,
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
    <div className={style.container}>
      <div className={style.form_control}>
        <h1>Signup</h1>
        <form
          action="http://localhost:3000/api/post/postData"
          method="POST"
          className="form form-control"
        >
          <label for="username" className={style.label}>
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your Username"
            className={style.username}
            id="username"
            name='username'
            value={data.username}
            onChange={handleChange}
          />
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
            Mobile
          </label>
          <input
            type="number"
            placeholder="Enter your Phone number"
            className={style.phone}
            id="phone"
            name='mobile'
            value={data.mobile}
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
            value={'Signup'}
            className={style.btn}
            onClick={handleClick}
          />
        </form>
        <div className={style.link}>
          <p>
            Already have an account?{' '}
            <Link href={'/login'} className={style.login}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup;
