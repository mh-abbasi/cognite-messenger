import React from 'react'
import styles from './ConversationItem.module.css'

/**
 *
 * @param {object} conversation : the whole conversation object
 * @param {boolean} active : active state or not
 * @param {function} onClick : function handler for triggering switching between conversations
 * @param {string|number} userId : current user id
 * @returns {*}
 * @constructor
 */
const ConversationItem = ({conversation, active, onClick, userId}) => {
    const user = conversation.users.find(user => user.id !== userId)
    return (
        <div onClick={onClick} className={`${styles.container} ${active ? styles.active : ''}`}>
            <div className={styles.thumbnailContainer}>
                <img className={styles.thumbnail} src={`https://api.adorable.io/avatars/50/${user.fullName}.png`} alt=""/>
            </div>
            <span className={styles.title}>{user.fullName}</span>
        </div>
    )
}
export default ConversationItem