import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './appSlice/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer
  },
});