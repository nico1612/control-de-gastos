import { useDispatch, useSelector } from "react-redux"
import { Navbar } from "../components"
import {  startingUpdating } from "../../store/transacciones/thunks"
import { useForm } from "../../hooks/useForm"
import { useEffect } from "react"

let formData
export const ModificarPage=()=>{
    const dispatch =useDispatch()
    const {active:transacion} =useSelector(state=>state.transaciones)
    console.log(transacion)
    useEffect(()=>{
        formData={
            id:transacion.id,
            user:transacion.user,
            concept:transacion.concept,
            category:transacion.category,
            amount:transacion.amount,
            date:transacion.date,
            transactionType:transacion.transactionType
        }
    },[])
    const {id,
        user,
        concept,
        category,
        amount,
        date,
        transactionType,
        onInputChange}= useForm(formData)

   
    const onSubmit=(event)=>{

        event.preventDefault()
       dispatch(startingUpdating({id,
        user,
        concept,
        category,
        amount,
        date, 
        transactionType}));
    }

    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                        <div>id:{id}</div>
                        <br/>
                        <div>user:{user}</div>
                        <br/>
                        <div>
                            <label className="form-label">concept </label>
                            <input type="text" className="form-control" name= "concept" value={concept} onChange={onInputChange}/>
                        </div>
                        <br/>
                        <div>category</div>
                        <div>
                            <div name="category" onChange={onInputChange}>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <input type="radio" value="Ingresos fijos" name="category"  checked={("Ingresos fijos"===category)} /> Ingresos fijos
                                    </li>
                                    <li className="list-group-item">
                                    <input type="radio" value="Ingresos ocasionales" name="category" checked={("Ingresos ocasionales"===category)} /> Ingresos ocasionales
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Viáticos" name="category" checked={("Viáticos"===category)} />Viáticos
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Alimentos y bebidas" name="category" checked={("Alimentos y bebidas"===category)} /> Alimentos y bebidas
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Víveres" name="category" checked={("Víveres"===category)} /> Víveres
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Salidas" name="category" checked={("Salidas"===category)} /> Salidas
                                    </li>
                                </ul>
                            </div>                        
                        </div>
                        <br/>
                        <div>
                            <label className="form-label">amount </label>
                            <input type="text" className="form-control" name= "amount" value={amount} onChange={onInputChange}/>
                        </div>
                        <br></br>
                        <div>transactionType</div>
                        <div name="transactionType" onChange={onInputChange}>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input type="radio" value="Ingresos" name="transactionType"  checked={("Ingresos"===transactionType)} /> Ingresos fijos
                                </li>
                                <li className="list-group-item">
                                    <input type="radio" value="Egresos" name="transactionType" checked={("Egresos"===transactionType)} /> Ingresos ocasionales
                                </li>
                            </ul>
                        </div>
                        <br></br>
                        <button type="button" className="btn btn-success" onClick={onSubmit}>
                            modificar
                        </button>
                    </form>
                </div>
            </div>
        </>
        
    )
}