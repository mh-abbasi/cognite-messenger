import React, {useState} from 'react'
import styles from './MessageBox.module.css'

/**
 *
 * @param {function} onSubmit : function handler for submitting the messages
 * @returns {*}
 * @constructor
 */
const MessageBox = ({onSubmit}) => {
    const [message, setMessage] = useState('')
    /**
     * Handle input changes
     * @param event
     */
    const onChange = event => {
        setMessage(event.target.value)
    }
    /**
     * passing the trimmed version of message string and isSneak boolean to parent onSubmit function and resetting
     * the textarea value
     * @param {boolean} sneak
     */
    const onClick = (sneak = false) => {
        onSubmit(message.trim(), sneak)
        setMessage('')
    }
    return (
        <div className={styles.container}>
            <textarea className={styles.input} placeholder="Your Message..." value={message} onChange={onChange} />
            <button className={styles.sendButton} disabled={!message} onClick={()=> onClick()}>Send</button>
            <button className={styles.sneakButton} disabled={!message} onClick={()=> onClick(true)}>Sneak</button>
        </div>
    )
}
export default MessageBox