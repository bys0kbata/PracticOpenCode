import { useState } from "react";
import "./Auth.scss"
import {AuthUser} from "../../api/User.ts";

interface User{
    login: string ,
    password: string
}

export default function Auth(){
    const [login, setLogin] = useState<string >();
    const [password, setPassword] = useState<string>();
    const [viserror, setViserror] = useState(false);

    const data: User = {
        login: `${login}`,
        password: `${password}`
}

    const ErrorMessage = ()=>{ return(<p className="error" >Неверно введен логин или пароль. </p>)}

    const valid = (e)=>{
        e.preventDefault();
        AuthUser(data)
            .then(()=>{

            })

        setViserror(true);
    }

    return(
        <div className="Auth">
            <form className="FormAuth">
                <h1>Вход в систему</h1>
                {viserror && <ErrorMessage />}
                <input type="text" placeholder="Введите логин" onChange={(e)=>{setLogin(e.target.value)} } />
                <input type="password" placeholder="Введите пароль" onChange={(e: React)=>{setPassword(e.target.value)}} />
                <button onClick={(e)=>{ valid(e);}}>Войти</button>
            </form>
        </div>
    )
}