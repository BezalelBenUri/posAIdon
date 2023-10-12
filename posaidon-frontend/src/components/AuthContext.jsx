import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Implement your authentication logic here
    // For now, we'll set isAuthenticated to true
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Implement your logout logic here
    // For now, we'll set isAuthenticated to false
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value = {{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
