import { useDispatch } from "react-redux"
import {  Navbar } from "../components"
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
            <Navbar/>
            <TransaccionList/>
            <ButtonInicarCrear/>
       </>
    )
}