
import '../../components/ButtonPrimary/ButtonPrimary.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

export default function login() {
    const auth = getAuth();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const logearse = () => {

        signInWithEmailAndPassword(auth, email, password)
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
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="login-type" type="text" placeholder="Ingrese usuario" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="login-type" type="password" placeholder="Ingrese contraseña" />
                <button onClick={logearse} className='btn-login'>Ingresar</button>
            </div>
        </div>
    )
}