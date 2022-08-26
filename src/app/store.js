import { configureStore } from '@reduxjs/toolkit'
import  authReducer  from '../features/authSlice'
const store = configureStore({
  reducer:{
    authentication: authReducer
  } 
})

export default store