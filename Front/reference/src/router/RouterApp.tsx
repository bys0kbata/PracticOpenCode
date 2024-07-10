import {Route, Routes} from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Main from "../pages/Main/Main.tsx";
import Ref from "../pages/Ref/Ref.tsx";

export default function RouterApp(){
    return(
    <Routes>
        <Route path="/"  element={ <Auth /> } />
        <Route path="/main"  element={ <Main /> } />
        <Route path="/ref"  element={ <Ref /> } />
   </Routes>
    )
}