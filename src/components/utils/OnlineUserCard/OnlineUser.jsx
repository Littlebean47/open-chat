import React from 'react';
import styles from "./styles.module.css"

function OnlineUser({ username }) {
    return (
        <div className={styles.onlineUserCard}>
            <div className={styles.userInfo}>
                <h3 className={styles.username}>{username}</h3>
                <div className={styles.statusIndicator}></div>
            </div>
        </div>
    );
}

export default OnlineUser;
