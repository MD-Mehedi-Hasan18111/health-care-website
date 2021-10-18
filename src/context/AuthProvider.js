import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const Context = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser, googleSignIn, logOut] = useFirebase();

    return (
        <Context.Provider value={[user, setUser, googleSignIn, logOut]}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;