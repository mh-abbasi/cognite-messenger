import React from 'react'
import styles from './MessagesList.module.css'
import Message from "../Message";
import {sortByKey} from '../../common'

const MessagesList = ({messages, selectedConversation, conversationUserId}) => {
    const isEmpty = !(selectedConversation && messages.length) ? styles.empty : ''
    return (
        <div className={`${styles.container} ${isEmpty}`}>
            {!selectedConversation && (
                <h1>Select a conversation</h1>
            )}
            {selectedConversation && (
                messages.length ? (
                    sortByKey(messages, 'timestamp').map(message => (
                        <Message key={message.id} message={message} conversationUserId={conversationUserId}/>
                    ))
                    ) :
                    (
                    <h1>Be the first one to start</h1>
                )
            )}
        </div>
    )
}
export default MessagesList