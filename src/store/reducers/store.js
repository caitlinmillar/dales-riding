import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage
import { useDispatch, useSelector } from 'react-redux'
import dataReducer from './data'

const rootReducer = combineReducers({
    data: dataReducer
})

const persistedReducer = persistReducer(
    {
        key: 'root',
        storage,
        whitelist: ['data']
    },
    rootReducer
)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})


export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector

export const persistor = persistStore(store)
