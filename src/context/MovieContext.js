import { createContext } from "react";
import useFetchUpcomingMovie from '../fetch/useFetchUpcomingMovie'
const MovieContext = createContext()


export const MovieProvider = ({children})=>{
    const {upcomingMovies} = useFetchUpcomingMovie()    
    return (
        <MovieContext.Provider value={{upcomingMovies}}>{children}</MovieContext.Provider>
    )
}

export default MovieContext

