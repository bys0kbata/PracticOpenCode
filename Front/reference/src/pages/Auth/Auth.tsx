import {useState} from "react";

export default function Auth(){
    const [vis, setVis] = useState(false);

    return(
        <>
            <form>
                <input  type="text"  name="email" placeholder="Введите логин" />
                <input type="text"  name="password" placeholder="Введите пароль" />
                <button>Войти</button>
            </form>
        </>
    )
}