import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { getToken, logout as apiLogout } from "../services/api";

interface User {
  name: string;
  avatarUrl: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // 🔹 Carregar user e token do localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = getToken();

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  // 🔹 Login: salva no state + localStorage
  const login = (userData: User, token: string) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  // 🔹 Logout: limpa state + localStorage
  const logout = () => {
    setUser(null);
    setToken(null);
    apiLogout(); // remove do localStorage
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  return context;
};
