import React from 'react'
import styles from './Message.module.css'

const Message = ({message, conversationUserId}) => {
    const {timestamp, content, from} = message
    const date = new Date(timestamp)
    const dateString = (date.getHours() < 10 ? '0' : '') + date.getHours() +':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
    return (
        <div className={styles.container}>
            <div className={`${styles.bubble} ${from === conversationUserId ? '' : styles.to}`}>{content}</div>
            <span className={styles.time}>{dateString}</span>
        </div>
    )
}
export default Message