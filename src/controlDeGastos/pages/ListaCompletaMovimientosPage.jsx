import { useDispatch } from "react-redux"
import { Navbar, TransaccionCards } from "../components"
import { useEffect } from "react"
import { startGettingTransaccionesAll } from "../../store/transacciones/thunks"


export const ListaCompletaMovimientosPage=()=>{

    const dispatch =useDispatch()

    const {transacciones} =useSelector(state=>state.transacciones)
    useEffect(()=>{
        dispatch(startGettingTransaccionesAll())
    },[transacciones])
    
    return(
        <>
            <Navbar/>

            {
                transacciones.map(transaccion=>( 
                    <TransaccionCards key={transaccion.id} {...transaccion}/>
                ))
            }
        </>
    )
}