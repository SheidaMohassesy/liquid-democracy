import React, { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

// Create the provider component
export const AppProvider = ({ children }) => {
  const [isListSelected, setIsListSelected] = useState(true);

  return (
    <AppContext.Provider value={{ isListSelected, setIsListSelected }}>
      {children}
    </AppContext.Provider>
  );
};
