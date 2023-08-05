import {Route,Routes} from "react-router-dom";

import AppCoz from './pages/AppCoz2';
import AppBar from './pages/AppCoz1';
import AppGar2 from './pages/AppGar2';
import AppGar1 from './pages/AppJony';
import TelaCodigo from './pages/tela_codigo';
import TelaLogin from './pages/App_TelaLogin';
import TelaFav from './pages/App_TelaFavoritos';
import TelaMenu from './pages/App_TelaMenu';

export default function AppRouter(){
    return(
        
        <Routes>
            <Route path="/" element={<TelaMenu/>}></Route>
            <Route path="/Coz" element={<AppCoz/>}></Route>
            <Route path="/login" element={<TelaLogin/> }></Route>
            <Route path="/favoritos" element={<TelaFav/> }></Route>
            <Route path="/appbar" element={<AppBar/> }></Route>   
            <Route path="/appgar1" element={<AppGar1/> }></Route> 
            <Route path="/appgar2" element={<AppGar2/> }></Route> 
            <Route path="/tela_codigo" element={<TelaCodigo/> }></Route> 
        </Routes>
    )
}