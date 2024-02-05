"use client";

import { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserProvider = ({ children }) => {
    const [userContextData, setUserContextData] = useState(null);
    const [userPaymentData, setUserPaymentData] = useState(null);

    return (
      <UserDataContext.Provider value={{ userContextData, setUserContextData, userPaymentData, setUserPaymentData}}>
        {children}
      </UserDataContext.Provider>
    );
};
