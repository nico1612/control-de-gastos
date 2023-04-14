import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { startGettingTransaccionesAll } from "../../store/transacciones/thunks"
import { ButtonInicarCrear } from "../components/ButtonIniciarCrear"
import { TransaccionList } from "../components/TransaccionList"

export const ListaCompletaMovimientosPage=()=>{

    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(startGettingTransaccionesAll())
    },[])
    
    return(
        <>
            <TransaccionList/>
            <ButtonInicarCrear/>
       </>
    )
}