"use client"
import React from 'react'
import styles from './styles.module.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ChatContainer() {
  const [messageInput, setMessageInput] = React.useState("")
  // const [messages, setMessages] = React.useState([])

  const messages = new Array(50).fill(0).map((item, i) => {
    return {
      message: i % 2 === 0 ? "Hello from userrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr" : "Hello from system",
      key: i,
      isUserMessage: i % 2 === 0, // Let's assume every other message is from the user
    }
  })

  const sendMessage = (e) => {
    e.preventDefault();
    messages.push({
      message: messageInput,
      key: Math.random()
    })
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        {
          messages.map((message) => (
            <p
              key={message.key}
              className={`${styles.message} ${message.isUserMessage ? styles.userMessage : ''}`}
            >
              {message.message}
            </p>
          ))
        }
        {/* hello */}
      </div>
      <div className={styles.chatBox}>
        <textarea
          className={styles.textArea}
          placeholder="Type your message here..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button className={styles.sendButton} onClick={sendMessage}>
          <ArrowUpwardIcon />
        </button>
      </div>
    </div>
  )
}

export default ChatContainer
