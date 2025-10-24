import { createContext, useContext, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PreviousPathContext = createContext();

export const PreviousPathProvider = ({ children }) => {
  const location = useLocation();
  const prevPathRef = useRef("/");

  // Update previous path on every navigation
  useEffect(() => {
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  return (
    <PreviousPathContext.Provider value={prevPathRef.current}>
      {children}
    </PreviousPathContext.Provider>
  );
};

// Custom Hook
export const usePreviousPath = () => {
  return useContext(PreviousPathContext);
};
