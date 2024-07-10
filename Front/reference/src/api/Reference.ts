import axios from "axios";

export async function DeleteReference(id: number){
    await axios.delete("https://api.openapi.com/oauth2/authorize?client_id=" + id);
}
export async function CreateReference(id: number){
    await axios.post("https://api.openapi.com/oauth2/authorize?client_id=" + id);
}
export async  function EditReference(id: number){
    await axios.put("https://api.openapi.com/oauth2/authorize?client_id=" + id)
}
