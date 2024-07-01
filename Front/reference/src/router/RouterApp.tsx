import {Route, Routes} from "react-router-dom";
import Auth from "../pages/Auth/Auth";

export default function RouterApp(){
    return(
    <Routes>
        <Route path="/"  element={<Auth />}/>
   </Routes>
    )
}