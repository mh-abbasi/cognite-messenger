import { createSlice } from '@reduxjs/toolkit'
import shortid from 'shortid'
import data from './data'

export const conversationSlice = createSlice({
  name: 'conversations',
  initialState: {
    isLoading: true,
    conversations: [],
  },
  reducers: {
    getConversations: state => {
      state.isLoading = false
      state.conversations = data
    },
    addMessage: (state,action) => {
      const { conversationId, text, from } = action.payload
      const messageId = shortid.generate()
      const conversationIndex = state.conversations.findIndex(conversation => conversation.id === conversationId)
      if( conversationIndex > -1 ) {
        state.conversations[conversationIndex].messages.push({
          id: messageId,
          from,
          content: text,
          timestamp: new Date().getTime(),
        })
      }

    },
  },
});

export const addMessageAsync = payload => dispatch => {
  setTimeout(() => {
    dispatch(addMessage(payload));
  }, 1000);
};


export const getConversationsAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(getConversations());
  }, 2000);
};

export const conversationsSelector = state => state.conversations

export const { getConversations, addMessage } = conversationSlice.actions;



export default conversationSlice.reducer;