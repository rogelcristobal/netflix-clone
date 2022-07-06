import { createContext } from "react";
import { useState } from "react";
const MovieContext = createContext()

export const MovieProvider = ({children})=>{
    const [state,setState]=useState(0)
    return (
        <MovieContext.Provider value={{state}}>{children}</MovieContext.Provider>
    )
}

export default MovieContext

