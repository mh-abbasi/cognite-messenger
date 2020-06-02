import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {conversationsSelector, getConversationsAsync, addMessageAsync} from './conversationSlice'
import styles from './Conversations.module.css'
import ConversationsList from "../../components/ConversationsList";
import MessagesList from "../../components/MessagesList";
import MessageBox from "../../components/MessageBox";
import {userSelector} from "../user/userSlice";

/**
 * Main component for chat UI
 * All the business logic for application is in this component
 *
 * @see {ConversationsList, MessagesList, MessageBox}
 *
 */
const Conversations = () => {
    const dispatch = useDispatch()
    const {conversations, isLoading} = useSelector(conversationsSelector)
    const {id: userId} = useSelector(userSelector)
    const [selectedConversation, setSelectedConversation] = useState(null)
    const [conversationIndex, setConversationIndex] = useState(-1)

    /**
     * Main component for chat UI// Get the conversations list after loading the store
     */
    useEffect(() => {
        dispatch(getConversationsAsync())
    }, [dispatch])

    // Store index of selected conversation in conversations array into the selectedConversation local state
    useEffect(() => {
        if (Array.isArray(conversations)) {
            const index = conversations.findIndex(conversation => conversation.id === selectedConversation)
            setConversationIndex(index)
        }
    }, [selectedConversation])

    /**
     * Handling message submission
     * @param {string} message is the message text content
     * @param {boolean} isSneaky send messages instead of your friend
     */
    const onSubmit = (message, isSneaky = false) => {
        const payload = {
            conversationId: selectedConversation,
            text: message,
            from: !isSneaky ? userId : conversations[conversationIndex]['users'].find(user => user.id !== userId).id,
        }
        dispatch(addMessageAsync(payload))
    }

    return (
        <div className={styles.container}>
            <ConversationsList
                isLoading={isLoading}
                selectedConversation={selectedConversation}
                conversations={conversations}
                onSelectConversation={setSelectedConversation}
                userId={userId}
            />
            <div className={styles.messagesContainer}>
                <MessagesList
                    messages={conversationIndex > -1 ? conversations[conversationIndex].messages : []}
                    selectedConversation={selectedConversation}
                    conversationUserId={conversationIndex > -1 ? conversations[conversationIndex]['users'].find(user => user.id !== userId).id : undefined}
                />
                {conversationIndex > -1 && (
                    <MessageBox onSubmit={onSubmit}/>
                )}
            </div>

        </div>
    )
}
export default Conversations