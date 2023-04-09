import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, ListaCompletaMovimientosPage,   } from "../pages"
import { ModificarPage } from "../pages/modificarpage"

export const ControlGastosRouter=()=>{
    return(
        <Routes>
            <Route path="home" element={<HomePage/>}/>
            <Route path="movimientos" element={<ListaCompletaMovimientosPage/>}/>
            <Route path="modificar" element={<ModificarPage/>}/>

            <Route path="/*" element={<Navigate to="/home"/>}/>
        </Routes>
    )
}