"use client";
import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client'; // Import Socket.IO client
import styles from './styles.module.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useDispatch } from 'react-redux';
import { populateUsers } from '@/app/lib/features/user/users/onlineUsers';


function ChatContainer() {
  const [messageInput, setMessageInput] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [welcomeMessage, setWelcomeMessage] = React.useState("")
  const dispatch = useDispatch()

  const username = sessionStorage.getItem("username")
  const socketRef = useRef(null)

  useEffect(() => {
    // Ensuring socket is not created more than once
    socketRef.current = io('http://localhost:3001', {
      query: { username }
    });

    // Listen for welcome message
    socketRef.current.on("welcome", (message) => {
      setWelcomeMessage(message)
    })

    // Listen for incoming messages from the server
    socketRef.current.on('chat message', (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
    });

    // Listen for new users
    socketRef.current.on("user joined", (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
    })

    socketRef.current.on("online users", (users) => {
      dispatch(populateUsers(users))
    })

    socketRef.current.on("user left", (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData])
    })

    // Clean up the socketRef.current connection when the component unmounts
    return () => {
      socketRef.current.off("welcome")
      socketRef.current.off('chat message');
      socketRef.current.off("user joined")
      socketRef.current.off("online users")
      socketRef.current.off("user left")
      socketRef.current.disconnect()
    };
  }, [username]);

  const sendMessage = (e) => {
    e.preventDefault();

    const newMessage = {
      message: messageInput,
      key: Math.random(),
      sender: username,
    };

    // Emit the message to the server
    socketRef.current.emit('chat message', newMessage);

    setMessageInput("");
  };

  return (
    // TODO: Install React router dom
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <div className={styles.welcomeMessages}>
          <p className={styles.welcome}>
            {welcomeMessage}
          </p>
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
