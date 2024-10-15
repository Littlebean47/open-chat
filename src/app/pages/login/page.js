"use client"
import React from "react"
import styles from './styles.module.css'
import { useDispatch } from "react-redux"
import { login } from "@/app/lib/features/user/userSlice"


function Login() {
    const dispatch = useDispatch()
    const [username, setUsername] = React.useState("")

    const handleUsername = (e) => {
        e.preventDefault()
        // localStorage.setItem("username", username)
        // location.reload()
        dispatch(login(username))
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <h2>Open-Chat</h2>
                <div className={styles.inputContainer}>
                    <input placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} name="usernameInput"/>
                    <button onClick={handleUsername} disabled={!username} name="usernameSubmit">Enter</button>
                </div>
            </div>
        </div>
    )
}

export default Login