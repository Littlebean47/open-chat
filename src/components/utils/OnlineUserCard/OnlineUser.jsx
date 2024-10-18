import React from 'react';
import styles from "./styles.module.css"

function OnlineUser({ username }) {

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const randomGradient = `linear-gradient(135deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`;
    return (
        <div className={styles.onlineUserCard} style={{ background: randomGradient }}>
            <div className={styles.userInfo}>
                <h3 className={styles.username}>{username}</h3>
                <div className={styles.statusIndicator}></div>
            </div>
        </div>
    );
}

export default OnlineUser;
