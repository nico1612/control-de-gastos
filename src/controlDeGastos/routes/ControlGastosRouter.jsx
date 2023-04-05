import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, ListaCompletaMovimientosPage,   } from "../pages"

export const ControlGastosRouter=()=>{
    return(
        <Routes>
            <Route path="home" element={<HomePage/>}/>
            <Route path="movimientos" element={<ListaCompletaMovimientosPage/>}/>

            <Route path="/*" element={<Navigate to="/home"/>}/>
        </Routes>
    )
}