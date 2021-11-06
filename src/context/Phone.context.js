import React, { useState, createContext } from 'react';

export const PhoneContext = createContext();

const PhoneContextProvider = (props) => {

    const [ phoneExpanded, setPhoneExpanded ] = useState(false);

    return (
        <PhoneContext.Provider value={{ phoneExpanded, setPhoneExpanded }}>
            {props.children}
        </PhoneContext.Provider>
    );
}

export default PhoneContextProvider;

