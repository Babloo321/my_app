import TodoSideBar from "../components/TodoSideBar";
import TodoContext from "../components/TodoContext";
import style from '../../../public/css/userdata.module.css';
export default function Home() {

  return (
      <>
      <div className={style.container}>
       <TodoSideBar />
       <TodoContext />
      </div>
      </>
  );
}