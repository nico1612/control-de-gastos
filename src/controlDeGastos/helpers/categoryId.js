
export const categoryId=({Category, Categories})=>{
    let id
     Categories.map(type=>{
        if(type.name===Category){
            id= type.id
        }
    })
    return id
}