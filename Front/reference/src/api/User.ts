import axios from "axios";
import {IPserver} from "../../config.ts";

interface User{
    login: string,
    password: string
}
export async function getlistUser( position: string){
    const data = {
        position : position
    }
    try{
        await axios.post( `${IPserver}/auth/getlist`,data)
        .then((res)=>{
            console.log(res);
        })
            .catch(()=>{
                console.log("Ошибка2");
            })
    } catch{
        console.log("Ошибка1");
    }
}
export async function AuthUser(user: User){
    const data = {
       user
    }
    try {
        await axios.post(`${IPserver}/user/auth`, data)
        .then((res)=>{
            console.log(res);
        })
            .catch(()=>{
                console.log("Ошибка2");
            })
    } catch{
        console.log("Ошибка1");
    }

}
export async function getoneuser(){
    await axios.get( `${IPserver}/user/getone`, );
}
