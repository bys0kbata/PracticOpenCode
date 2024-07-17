import axios from "axios";
import {IPserver} from "../../config.ts";


export async function DeleteReference(idPost: number){
    await axios.delete( `${IPserver}/ref/delete`, );
}
export async function CreateReference(){
    await axios.post(`${IPserver}/ref/create` );
}
export async  function EditReference(idPost: number){
    await axios.put(`${IPserver}/ref/put` )
}
export async  function getOneReference(idPost: number){
    await axios.get(`${IPserver}/ref/getone` )
}
export async  function getAllReference(idPost: number){
    await axios.get(`${IPserver}/ref/getall` )
}
