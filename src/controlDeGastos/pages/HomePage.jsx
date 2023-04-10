import { useEffect } from "react"
import { Navbar, TransaccionCards } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { startGettingTransacciones } from "../../store/transacciones/thunks"
import { useNavigate } from "react-router-dom"


export const HomePage=()=>{

    const dispatch =useDispatch()
    const navigate=useNavigate()

    

    const {Transacciones,actualBalance} =useSelector(state=>state.transaciones)

    useEffect(()=>{
        console.log("hola")
        dispatch(startGettingTransacciones())
    },[])

    const Movimientos=()=>{
        navigate("/movimientos")
    }
    return(

        
        <>

            <Navbar/>

            <div>monto actual: {actualBalance}</div>
            
            <div className="d-grid gap-3">
                <div className="p-2">
                    {
                        Transacciones.map(transaccion=>( 
                        <TransaccionCards key={transaccion.id} transaccion={transaccion}/>
                        ))
                    }
                </div>
            </div>
            
            <button className="" onClick={Movimientos}>
            mas...
            </button> 
            
        </>


        
    )
}