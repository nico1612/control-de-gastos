

export const ButtonEliminar=()=>{

    const dispatch=useDispatch()

    const eliminar=()=>{
        dispatch(logout)
    }

    return(
        <button type="button" className="btn btn-warning btn-outline-warning" onClick={eliminar}>
            logout
        </button>
    )
}