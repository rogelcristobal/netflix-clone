import { createContext } from "react";
import useFetchUpcomingMovie from '../fetch/useFetchUpcomingMovie'
import useFetchGenre from '../fetch/useFetchGenre'
const MovieContext = createContext()


export const MovieProvider = ({children})=>{
    const {upcomingMovies} = useFetchUpcomingMovie()
    const {genre} = useFetchGenre()    
    return (
        <MovieContext.Provider value={{genre,upcomingMovies}}>{children}</MovieContext.Provider>
    )
}

export default MovieContext

