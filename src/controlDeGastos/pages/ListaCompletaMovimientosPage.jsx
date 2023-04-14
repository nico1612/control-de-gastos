import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { startGettingTransaccionesAll } from "../../store/transacciones/thunks"
import { ButtonInicarCrear } from "../components/ButtonIniciarCrear"
import { TransaccionList } from "../components/TransaccionList"

export const ListaCompletaMovimientosPage=()=>{

    const dispatch =useDispatch()

    const {chance} =useSelector(state=>state.transaciones)

    useEffect(()=>{
        dispatch(startGettingTransaccionesAll())
    },[chance])
    
    return(
        <>
            <TransaccionList/>
            <ButtonInicarCrear/>
       </>
    )
}