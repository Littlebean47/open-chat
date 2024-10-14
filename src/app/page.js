import ChatContainer from "./components/ChatContainer/ChatContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <ChatContainer />
    </div>
  );
}
