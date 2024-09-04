import '../globals.css';
import Image from 'next/image';
import profileImage from '../../../public/images/babloo_image.jpg';
import style from '../../../public/css/mainpage.module.css'
import Link from 'next/link';
import { useEffect } from 'react';
const MainPage = ({ onSendMessage }) => {
  const handleProfile = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }
  const handleLogout = (e) => {
    e.preventDefault();
    onSendMessage();
  }

  const handleTodoClilck = () => {
    <Link href={'/userdata'} />
  }
  return (
    <div className={style.navigation}>
    <div className={style.innerdiv}>
      <nav className={style.nav}>
        <Link href={'/userdata'}><p className={style.para}>TODO</p></Link>
      </nav>
      <div className={style.profile}>
        <button type='button' onClick={handleProfile} className={style.profile_btn} value={"Profile"}>Profile</button>
        <button type='button' onClick={handleLogout} className={style.profile_btn}>Logout</button>
      </div>
    </div>
    <div className="card card-side bg-base-100 shadow-xl">
  <figure>
  <Image
        className='profile_img'
        src={profileImage} // Path to your image
        alt="profile"
       height={200}
       width={200}
      />
  </figure>
  <div className="card-body card">
    <h2 className="card-title">My first profile to visit you</h2>
    <p>If you want to know more about me. Click the <strong>Watch</strong> button</p>
    <div className="card-actions justify-end">
      <Link href={'/userdata'} className="btn btn-primary">Watch</Link>
    </div>
  </div>
</div>

<div className="card card-side bg-base-100 shadow-xl">
  <figure>
  <Image
        className='profile_img'
        src={profileImage} // Path to your image
        alt="profile"
       height={200}
       width={200}
      />
  </figure>
  <div className="card-body card">
    <h2 className="card-title">My first profile to visit you</h2>
    <p>If you want to know more about me. Click the <strong>Watch</strong> button</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
</div>
  )
}

export default MainPage