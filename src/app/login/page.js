"use client"
import React from "react"
import styles from './styles.module.css'


function Login() {

    //////////////////////////////////////////////////////////////////////////////
    //This Component is purely used to diplay the differences in next.js routing//
    /////////////////////////////////////////////////////////////////////////////


    const [username, setUsername] = React.useState("")

    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <h2>Open-Chat</h2>
                <div className={styles.inputContainer}>
                    <input placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} name="usernameInput"/>
                    <button disabled={!username} name="usernameSubmit">Enter</button>
                </div>
            </div>
        </div>
    )
}

export default Login