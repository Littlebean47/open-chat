"use client";
import React, { useEffect } from 'react';
import io from 'socket.io-client'; // Import Socket.IO client
import styles from './styles.module.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useSelector } from 'react-redux';

const socket = io('http://localhost:3001');

function ChatContainer() {
  const [messageInput, setMessageInput] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [usersJoined, setUsersJoined] = React.useState([])

  const username = useSelector((state) => state.user.value)


  useEffect(() => {
    socket.emit("username", username)

    // Listen for incoming messages from the server
    socket.on('chat message', (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
    });

    socket.on("message", (msg) => {
      setUsersJoined([...usersJoined, msg])
    })

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.off('chat message');
    };
  }, [username]);

  const sendMessage = (e) => {
    e.preventDefault();

    const newMessage = {
      message: messageInput,
      key: Math.random(),
      sender: username,
      isUserMessage: username === localStorage.getItem("username"),
    };

    // Emit the message to the server
    socket.emit('chat message', newMessage);

    setMessageInput("");
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <div className={styles.welcomeMessages}>
          {usersJoined.map((user) => {
            return <p className={styles.welcomeMessage} key={Math.random()}>{user}</p>
          })}
        </div>
        {messages.map((message) => (
          <div
            key={message.key}
            className={`${styles.message} ${message.sender === username ? styles.userMessage : ''}`}
          >
            <p className={styles.sender}>{message.sender}</p>
            {message.message}
          </div>
        ))}
      </div>
      <div className={styles.chatBox}>
        <textarea
          className={styles.textArea}
          placeholder="Type your message here..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          name='chatInput'
        />
        <button className={styles.sendButton} onClick={sendMessage} disabled={!messageInput}>
          <ArrowUpwardIcon />
        </button>
      </div>
    </div>
  );
}

export default ChatContainer;
