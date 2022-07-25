import { createContext } from "react";
import { useState } from "react";
const PaletteContext = createContext()


export const PaletteProvider = ({children}) => {
    const  [theme,setTheme] = useState({
        dark:{
            
        }
    })

  return <PaletteContext.Provider>{children}</PaletteContext.Provider>
}

export default PaletteContext;
