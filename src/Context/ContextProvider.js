import React from "react";
import Context from "./Context";

const ContextProvider = (props) => {
    const value ={}

    return ( 
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
}
export default ContextProvider;