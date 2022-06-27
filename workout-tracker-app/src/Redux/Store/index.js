import rootReducer from '../Reducer'

const { createStore } = require('redux')

const store = createStore(rootReducer)

export default store
