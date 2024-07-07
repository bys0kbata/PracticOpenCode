import { useState } from "react";
import "./Auth.scss"

export default function Auth(){
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [viserror, setViserror] = useState(false);
    const ErrorMessage = ()=>{ return(<p className="error" >Неверно введен логин или пароль. </p>)}
    const valid = (e)=>{
        e.preventDefault();
        setViserror(true);
    }

    return(
        <div className="Auth">
            <form className="FormAuth">
                <h1>Вход в систему</h1>
                {viserror && <ErrorMessage />}
                <input type="text" placeholder="Введите логин" onChange={(e)=>{setLogin(e.target.value)} } />
                <input type="password" placeholder="Введите пароль" onChange={(e)=>{setPassword(e.target.value)}} />
                <button onClick={(e)=>{ valid(e);}}>Войти</button>
            </form>
        </div>
    )
}