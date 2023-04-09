import { useDispatch } from "react-redux"


export const ButtonActualizar=()=>{

    const dispatch=useDispatch()

    const Actualizar=()=>{
        dispatch()
    }

    return(

        <button type="button" className="btn btn-primary" onClick={Actualizar}>actualizar</button>
    )
}