"use client"
import React from 'react'
import styles from "./styles.module.css"
import LogoutIcon from '@mui/icons-material/Logout';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useDispatch } from 'react-redux';
// import { logout } from '@/app/lib/features/user/userSlice';
import { userSlice } from '@/app/lib/features/user/userSlice';

function Sidebar() {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(userSlice.actions.logout())
        localStorage.setItem("username", "")
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.logoutIcon}>
                <LogoutIcon fontSize='medium' onClick={logout} />
            </div>
            <div className={styles.chatIcon}>
                <ChatBubbleIcon fontSize='medium' />
            </div>
        </div>
    )
}

export default Sidebar