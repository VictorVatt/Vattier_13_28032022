import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
// store configuration with only one userReducer beacause only one feature in the project
const store = configureStore({
    reducer: {
       user: userReducer 
    }
})

export default store 