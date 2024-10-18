"use client"
import React from 'react'
import styles from "./styles.module.css"
import LogoutIcon from '@mui/icons-material/Logout';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useDispatch } from 'react-redux';
import { userSlice } from '@/app/lib/features/user/userSlice';
import OnlineUser from '../utils/OnlineUserCard/OnlineUser';

function Sidebar() {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(userSlice.actions.logout())
        sessionStorage.clear()
    }

    const mockdata = new Array(20).fill(0).map((_, i)=>{
        return {
            user: "Fluco"
        }
    })
    console.log(mockdata)
    return (
        <div className={styles.sidebar}>
            <div className={styles.iconContainer}>
                <div className={styles.logoutIcon}>
                    <LogoutIcon fontSize='medium' onClick={logout} />
                </div>
                <div className={styles.chatIcon}>
                    <ChatBubbleIcon fontSize='medium' />
                </div>
            </div>
            <div className={styles.availableUsers}>
                <p>Online Users</p>
                {/* <OnlineUser username={"Fluco"} /> */}
                {
                    mockdata.map((user) => {
                        return <OnlineUser username={user.user} />
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar