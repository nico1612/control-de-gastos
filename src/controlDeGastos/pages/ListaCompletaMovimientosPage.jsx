import { useDispatch, useSelector } from "react-redux"
import { ButtonModificar, Navbar, TransaccionCards, } from "../components"
import { useEffect } from "react"
import { startGettingTransaccionesAll } from "../../store/transacciones/thunks"
import { ButtonInicarCrear } from "../components/ButtonIniciarCrear"

export const ListaCompletaMovimientosPage=()=>{

    const dispatch =useDispatch()
    const {Transacciones} =useSelector(state=>state.transaciones)

    useEffect(()=>{
        dispatch(startGettingTransaccionesAll())
    },[])
    
    return(
        <>
            <Navbar/>

            <div className="d-grid gap-3">
                <div className="p-2">

                    {
                        Transacciones.map(transaccion=>( 
                            <TransaccionCards key={transaccion.id} transaccion={transaccion}/>
                        ))
                    }
                </div>
            </div>
            <ButtonInicarCrear/>
       </>
    )
}