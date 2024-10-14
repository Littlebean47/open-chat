"use client"
import React from "react"

function Login() {
    const [username, setUsername] = React.useState("")

    const handleUsername = (e) => {
        e.preventDefault()
        localStorage.setItem("username", username)
        location.reload()
    }

    return (
        <div>
            <input placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handleUsername} disabled={!username}>Enter</button>
        </div>
    )
}

export default Login