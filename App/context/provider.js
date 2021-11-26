import React, {useState, createContext, useReducer} from "react";

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <GlobalContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            {children}
        </GlobalContext.Provider>
    )
};


export default GlobalProvider;