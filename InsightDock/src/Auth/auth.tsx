import { createContext, useState } from "react";

// type declaration
type AuthContextType = {
    user: string | null;
    login: (name: string) => void;
    logout: () => void
}


const AuthContext = createContext<AuthContextType | null>(null);

export function Authprovider({children}: any) {
    
    const [user, setUser] = useState<string | null>(null);
    const login = (name: string) => setUser(name);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return AuthContext;
}