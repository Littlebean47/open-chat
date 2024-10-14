"use client"
import ChatContainer from "./components/ChatContainer/ChatContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./page.module.css";
import Login from "./pages/login/page";

export default function Home() {
  const username = localStorage.setItem("username", "jello")
  if (typeof window !== 'undefined') {
    console.log('Currently on Client side')
  } else {
    console.log('Currently on Server Side');
  }
  return (
    <div >
      {!username ? <Login /> :
        <div className={styles.app}>
          <Sidebar />
          <ChatContainer />
        </div>
      }
    </div>
  );
}