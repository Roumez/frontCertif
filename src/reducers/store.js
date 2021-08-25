import {createStore, applyMiddleware, combineReducers} from 'redux';
import gamesReducer from './Games/gamesReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers ({
  gamesReducer
})

const store = createStore (rootReducer, applyMiddleware,(thunk))

export default store;