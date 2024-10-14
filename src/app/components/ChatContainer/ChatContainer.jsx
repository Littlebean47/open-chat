import React from 'react'
import styles from './styles.module.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ChatContainer() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        {/* TODO: Develop send message logic */}
      </div>
      <div className={styles.chatBox}>
        <textarea
          className={styles.textArea}
          placeholder="Type your message here..."
        />
        <button className={styles.sendButton}><ArrowUpwardIcon /></button>
      </div>
    </div>
  )
}

export default ChatContainer
