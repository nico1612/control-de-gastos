import { useDispatch, useSelector } from "react-redux"
import { Navbar } from "../components"
import { useFormAction } from "react-router-dom"

export const ModificarPage=()=>{
    const dispatch =useDispatch()
    const {active} =useSelector(state=>state.transaciones)
    const {id,user,concept,category,amount,date,transactionType,onInputChange}= useFormAction(active)

    const eliminar=()=>{
        dispatch(startEliminar())
     }

    const onSubmit=(event)=>{

        event.preventDefault()

        //dispatch( startLogin( {email, password} ) );
    }

    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                        <div className="mb-6">
                            <label className="form-label"> concept</label>
                            <input type="email" className="form-control" name= "email" value={concept} onChange={onInputChange}>{concept}</input>
                        </div>
                        <div className="mb-6">
                            <label className="form-label"> category</label>
                            <input type="number" className="form-control" name= "category" value={category} onChange={onInputChange}/>
                        </div>
                        
                        <div className="mb-6">
                            <label className="form-label"> monto</label>
                            <input type="number" className="form-control" name= "amount" value={amount} onChange={onInputChange}/>
                        </div>
                        <div className="mb-6">
                            <label className="form-label"> transactionType</label>
                            <input type="number" className="form-control" name= "transactionType" value={amount} onChange={onInputChange}/>
                        </div>
                        <br/>
                        <button type="button" className="btn btn-primary" onClick={onSubmit}>actualizar</button>
                    </form>
                </div>
            </div>
            <div className="container-fluid h-100"> 
                <div className="row w-100">
                    <div className="d-grid gap-2">
                        <button type="button" className="btn btn-danger" onClick={eliminar}>
                            eliminar
                        </button>
                    </div>
                </div>
            </div>
        </>
        
    )
}