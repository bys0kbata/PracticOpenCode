import {useState} from "react";

export default function FormAuth(){
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    return(
        <div className="FormAuth">
            <form>
                <h1>Вход в систему</h1>
                <input type="text" onChange={(e)=>{setLogin(e.target.value)} }/>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                <button>Войти</button>
            </form>
        </div>
    )
}