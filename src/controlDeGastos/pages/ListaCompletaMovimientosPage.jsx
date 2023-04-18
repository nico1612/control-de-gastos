import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import { startGettingTransaccionesAll } from "../../store/transacciones/thunks"
import { ButtonInicarCrear, TransaccionList } from "../components"

export const ListaCompletaMovimientosPage=()=>{

    const dispatch =useDispatch()

    const {chance} =useSelector(state=>state.transaciones)

    useEffect(()=>{
        dispatch(startGettingTransaccionesAll())
    },[chance])
    
    return(
        <>
            <br/>
            <TransaccionList/>
            <br/>
            <div class="container bg-light">
                <div class="col-md-12 text-center">
                    <ButtonInicarCrear/>
                </div>
            </div>
       </>
    )
}