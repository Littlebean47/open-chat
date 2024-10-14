"use client"
import React from 'react'
import styles from './styles.module.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ChatContainer() {
  const [messageInput, setMessageInput] = React.useState("")
  const [messages, setMessages] = React.useState([])
  const username = localStorage.getItem("username")

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, {
      message: messageInput,
      key: Math.random(),
      sender: username,
      isUserMessage: username === localStorage.getItem("username")
    }])
    setMessageInput("")
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        {
          messages.map((message) => (
            <p
              key={message.key}
              className={`${styles.message} ${message.sender === username ? styles.userMessage : ''}`}
            >
              <p className={styles.sender}>{message.sender}</p>
              {message.message}
            </p>
          ))
        }
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
