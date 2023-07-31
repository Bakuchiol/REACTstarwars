import { createContext, useState } from "react";
import plot from '../models/plot';

export const AppContext = createContext();

function AppContextProvider(props){
    const [movie, setMovie] = useState(plot[0]) //first plot
    const [all, setAll] = useState(plot) //all plot

    console.log("PLOT ARRAY:", plot)

    return(
        <AppContext.Provider
            value={{
                movie, setMovie,
                all, setAll
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
