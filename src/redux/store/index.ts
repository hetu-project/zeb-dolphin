import { combineReducers, configureStore } from '@reduxjs/toolkit';
import accountsReducer from './account/accountSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['accounts'],
};


const reducer = combineReducers({
  accounts: accountsReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
