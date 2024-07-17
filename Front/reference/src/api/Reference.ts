import axios from "axios";
import {IPserver} from "../../config.ts";

interface Reference{

}
export async function DeleteReference(idRef: number){
    const data = {
        idRef
    }
    await axios.delete( `${IPserver}/ref/delete`,{ data}  );
}
export async function CreateReference(ref: Reference){
    const data = {
        ref
    }
    await axios.post(`${IPserver}/ref/create`, data );
}
export async  function EditReference(ref: Reference) {
    const data = {
        ref
    }
    try{
        await axios.put(`${IPserver}/ref/put`, data)
        .then((res)=>{
            console.log(res);
        })
        .catch(()=>{
            console.log("Ошибка2");
        })
    }
    catch{
        console.log("Error1")
    }

}
export async  function getOneReference(idRef: number){
    const data = {
        idRef
    }
    try{
        await axios.get(`${IPserver}/ref/getone`, {data})
        .then((res)=>{
            console.log(res);
        })
            .catch(()=>{
                console.log("Ошибка2");
            })
    }catch{
        console.log("Error1")
    }
}
export async  function getAllReference(){
    try{
        await axios.get(`${IPserver}/ref/getall`)
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
