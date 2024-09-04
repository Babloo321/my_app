import Link from 'next/link'
import style from '../../../public/css/todosidebar.module.css';
import React from 'react'

const TodoSideBar = () => {
  return (
    <div className={style.container}>
  <h1>name and tag</h1>
  <input type='search' placeholder='search' /><hr />
  <div className={style.content_div}>
    <p>My day</p>
    <p>Today</p>
    <p>Important</p>
    <p>My day</p>
    <p>All</p>

  </div>
  <p>New List</p>

    </div>
  )
}

export default TodoSideBar