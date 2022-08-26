import { createSlice } from "@reduxjs/toolkit";
import {getAuth,signOut,signInWithEmailAndPassword} from 'firebase/auth'
import { useQuery } from "@tanstack/react-query";
const auth = getAuth()
export const authSlice = createSlice({
    name:'authentication',
    initialState:0,
    reducers:{
        Login:(action)=>{
            const handleLogin=({email,password})=>{
                signInWithEmailAndPassword(auth,email,password)
            }
            const {data} = useQuery(['login'],()=>handleLogin(action.payload))
            return data
        },
        logOut:()=>{
            signOut(auth)
        }
    }
})

export default authSlice.reducer
export const {logOut} = authSlice.actions