"use client"
import React, { useEffect } from 'react'
import Login from '@/components/login/page'
import Sidebar from '@/components/Sidebar/Sidebar'
import ChatContainer from '@/components/ChatContainer/ChatContainer'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./page.module.css"
import { login } from './lib/features/user/userSlice'

function App() {
    const username = useSelector((state) => state.user.value)
    const sessionStorageUsername = sessionStorage.getItem("username")
    const dispatch = useDispatch()

    useEffect(() => {
        // Resets redux memory after page refresh and keeps user logged in
        if (!username && sessionStorageUsername) dispatch(login(sessionStorageUsername))
    }, [username])

    return (
        <div>
            {!username ? <Login /> :
                <div className={styles.app}>
                    <Sidebar />
                    <ChatContainer />
                </div>
            }
        </div>
    )
}

export default App