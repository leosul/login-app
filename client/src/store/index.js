import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import reducer from '../reducers'
import storage from 'redux-persist/lib/storage'
import createEncryptor from 'redux-persist-transform-encrypt'

const encryptor = createEncryptor({
    secretKey: process.env.REACT_APP_PERSIST_ENCRYPT_KEY
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
    transforms: [
        encryptor
    ]
}

const persistedReducer = persistReducer(persistConfig, reducer)

const middleware = [
    thunk,
    createLogger()
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    persistedReducer,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
)

const persistor = persistStore(store)

export { store, persistor }