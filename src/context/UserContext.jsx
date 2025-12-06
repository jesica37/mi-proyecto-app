import { createContext, useState } from "react";

export const UserContext = createContext();
const obtenerUsuarioInicial = () =>{
        try {
            const stored = localStorage.getItem("user")
            if (!stored) {
                return {token: "", email: ""}
            }
            const parsed = JSON.parse(stored)
            return {
                token: parsed.token || "",
                email: parsed.email || ""
            }
        } catch(e) {
            return {token: "", email: ""}
        }
    }

export default function UserProvider({ children }) {

    
    const [user, setUser] = useState(obtenerUsuarioInicial())

    const guardarUsuario = (token, email) => {
        localStorage.setItem("user", JSON.stringify({token:token,email:email}))
        setUser({
            token,
            email
        })
    }
    const cerrarSesion = () => {
        localStorage.removeItem("user")
        setUser({})
    }
    
    return (
        <UserContext.Provider value={{ user, guardarUsuario, cerrarSesion  }}>
            {children}
        </UserContext.Provider>
    )
}