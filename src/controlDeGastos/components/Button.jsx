
export const Button=({Funcion,Name})=>{
    return(
        <button type="button" className="btn border" onClick={Funcion}>
            {Name}
        </button>
    )
}
