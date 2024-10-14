import React from 'react'
import styles from "./styles.module.css"
import Person2Icon from '@mui/icons-material/Person2';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.personIcon}>
                <Person2Icon fontSize='large' />
            </div>
            <div className={styles.chatIcon}>
                <ChatBubbleIcon fontSize='large' />
            </div>
        </div>
    )
}

export default Sidebar