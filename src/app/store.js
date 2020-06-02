import { configureStore } from '@reduxjs/toolkit';
import conversationReducer from '../features/conversations/conversationSlice';
import userReducer from '../features/user/userSlice';

export default configureStore({
  reducer: {
    conversations: conversationReducer,
    user: userReducer,
  },
});
