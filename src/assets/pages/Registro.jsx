
import { useState } from 'react';
import '../../components/ButtonPrimary/ButtonPrimary.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function registro() {

    const auth = getAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registrarse = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div className="login">
            <div className='login-datos'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="login-type" type="text" placeholder="Ingrese email" />
                <input className="login-type" type="password" placeholder="Ingrese nombre" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Ingrese contraseña" />
                <button onClick={registrarse} className='btn-login'>Registrar</button>
            </div>
        </div>
    )
}