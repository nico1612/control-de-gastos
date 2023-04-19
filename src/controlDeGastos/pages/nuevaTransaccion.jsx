import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { categoryId, transacionId } from "../helpers"
import { startGettingTransaccionesAll } from "../../store/transacciones/thunks"
import { useForm } from "../../hooks"
import { crearTransaccion } from "../helpers/CrearTransaccion"


let formData
export const NuevaTransaccion=()=>{
    const dispatch =useDispatch()
    const {active:Transaction,Categories,TransactionTypes} =useSelector(state=>state.transaciones)
    const {userId,token} =useSelector(state=>state.auth)
    const navigate =useNavigate()

    useEffect(()=>{
       
        formData={
            UserId:userId,
            Concept:Transaction.concept,
            Category:Transaction.category,
            Amount:Transaction.amount,
            date:new Date('2022-08-01T00:00:00.000Z').toJSON(),
            TransactionType:Transaction.transactionType
        }

        dispatch(startGettingTransaccionesAll())
    },[])


    const {
        Concept,
        Category,
        Amount,
        date,
        TransactionType,
        onInputChange}= useForm(formData)

   
    const onSubmit=(event)=>{
        event.preventDefault()
        const TransactionTypeId =transacionId({TransactionType,TransactionTypes})
        const CategoryId= categoryId({Category, Categories});
        const data={
            userId,
            Concept,
            CategoryId,
            Amount,
            date,
            TransactionTypeId,
        }
        crearTransaccion({data,token})
        /*dispatch(createNewTransaccion({
            data,
            TransactionType,
            Category,
        }));*/
        navigate('/movimientos')
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                      
                        <br/>
                        <div>
                            <label className="form-label">concepto </label>
                            <input type="text" className="form-control" name= "Concept" value={Concept} onChange={onInputChange}/>
                        </div>
                        <br/>
                        <div>categoria</div>
                        <div>
                            <div name="category" onChange={onInputChange}>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <input type="radio" value="Ingresos fijos" name="Category"/> Ingresos fijos
                                    </li>
                                    <li className="list-group-item">
                                    <input type="radio" value="Ingresos ocasionales" name="Category"/> Ingresos ocasionales
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Viáticos" name="Category"/>Viáticos
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Alimentos y bebidas" name="Category"/> Alimentos y bebidas
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Víveres" name="Category"/> Víveres
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Salidas" name="Category"/> Salidas
                                    </li>
                                </ul>
                            </div>                        
                        </div>
                        <br/>
                        <div>
                            <label className="form-label">monto </label>
                            <input type="text" className="form-control" name= "Amount" value={Amount} onChange={onInputChange}/>
                        </div>
                        <br></br>
                        <div>tipo de transaccion</div>

                        <div name="TransactionType" onChange={onInputChange}>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input type="radio" value="Ingresos" name="TransactionType"/> Ingresos
                                </li>
                                <li className="list-group-item">
                                <input type="radio" value="Egresos" name="TransactionType"/> Egresos
                                </li>
                            </ul>
                        </div> 
                        <br></br>
                        <button type="button" className="btn btn-success" onClick={onSubmit}>
                            crear
                        </button>
                    </form>
                </div>
            </div>
        </>
        
    )
}