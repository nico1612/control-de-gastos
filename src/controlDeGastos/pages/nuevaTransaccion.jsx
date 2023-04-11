import { useFormAction } from "react-router-dom"
import { Navbar } from "../components"
import { useDispatch } from "react-redux"
import { createNewTransaccion } from "../../store/transacciones"

let formData={
    user:"",
    concept:"",
    category:"",
    amount:0,
    date:"",
    transactionType:""
}
export const NuevaTransaccion=()=>{
    
     const dispatch=useDispatch()
    const {name} =useSelector(state=>state.auth)

    const fecha=new Date()
    formData.date=`${fecha.getUTCFullYear()}-${fecha.getUTCMonth()}-${fecha.getUTCDate()}t${fecha.getUTCMinutes()}:${fecha.getUTCHours()}:${fecha.getUTCSeconds()}`
    formData.user=name
    const {user,concept,category,amount,date,transactionType,onInputChange}= useFormAction(formData)
    
    const onSubmit=()=>{
        console.log(formData)
        dispatch(createNewTransaccion())
    }

    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
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
                        <button type="button" className="btn btn-primary" onClick={onSubmit}>
                            crear
                        </button>
                    </form>
                </div>
            </div>
        </>
        
    )
}