import React from 'react'
import styles from "./styles.module.css"
import LogoutIcon from '@mui/icons-material/Logout';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Sidebar() {
    const logout = () => {
        localStorage.setItem("username", "")
        location.reload()
    }
    return (
        <div className={styles.sidebar}>
            <div className={styles.logoutIcon}>
                <LogoutIcon fontSize='large' onClick={logout} />
            </div>
            <div className={styles.chatIcon}>
                <ChatBubbleIcon fontSize='large' />
            </div>
        </div>
    )
}

export default Sidebar