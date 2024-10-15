"use client"
import React from "react"
import styles from './styles.module.css'

function Login() {
    const [username, setUsername] = React.useState("")

    const handleUsername = (e) => {
        e.preventDefault()
        localStorage.setItem("username", username)
        location.reload()
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <h2>Open-Chat</h2>
                <div className={styles.inputContainer}>
                    <input placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                    <button onClick={handleUsername} disabled={!username}>Enter</button>
                </div>
            </div>
        </div>
    )
}

export default Login