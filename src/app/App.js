"use client"
import React from 'react'
import Login from '@/components/login/page'
import Sidebar from '@/components/Sidebar/Sidebar'
import ChatContainer from '@/components/ChatContainer/ChatContainer'
import { useSelector } from 'react-redux'
import styles from "./page.module.css"

function App() {
    const username = useSelector((state) => state.user.value)
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