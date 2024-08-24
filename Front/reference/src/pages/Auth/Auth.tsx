import {useEffect, useState} from "react";
import "./Auth.scss"
import {AuthUser} from "../../api/User.ts";
import {$user, updateUser} from "../../store/userStore.ts";

interface User{
    login: string,
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
    const data2 ={
        isAuth: true,
        name: 'Nike',
        email: 'denis@gmail.com',
        role: 'U'
    }

    const ErrorMessage = ()=>{ return(<p className="error" >Неверно введен логин или пароль. </p>)}

    const valid = (e)=>{
        e.preventDefault();
        // AuthUser(data)
        //     .then(()=>{
                
        //         updateUser(data2)
        //     }) eUser(data2,)
        updateUser(data2)
        setViserror(true);
    }
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.backgroundImage = `url('/picture.svg')`;
    }, []);
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