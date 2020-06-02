import React from 'react'
import styles from './ConversationsList.module.css'
import ConversationItem from "../ConversationItem";

/**
 * Left side of UI that renders the conversation list or a ugly loading text
 * @param {boolean} isLoading : wait for parent to finish the loading
 * @param {array} conversations : all the conversations in store coming from parent
 * @param {string} selectedConversation : ID of the selected conversation
 * @param {function} onSelectConversation : function handler to switch between conversations
 * @param {string|number} userId : current user id from store
 * @returns {*}
 * @constructor
 */
const ConversationsList = ({isLoading, conversations, selectedConversation, onSelectConversation, userId}) => {
    return (
        <div className={styles.container}>
            {isLoading
                ?
                    ( <h3>loading...</h3> )
                :
                    ( conversations.map(conversation => {
                        return <ConversationItem
                            conversation={conversation}
                            active={conversation.id === selectedConversation}
                            onClick={() => onSelectConversation(conversation.id)}
                            key={conversation.id}
                            userId={userId}
                            />
                    })
                    )
            }
        </div>
    )
}
export default ConversationsList