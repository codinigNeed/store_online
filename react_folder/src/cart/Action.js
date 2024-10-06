export const ajouterCart = (cart)=>{
    return {type:'addcart',payload:{cart}}
}
export const suprimer = (id)=>{
return {type:'suprimerpr',payload:{id}}
}
export const addquantiter = (id)=>{
    return {type:'addquantiter',payload:{id}}
}
export const subquantiter = (id)=>{
    return {type:'subquantiter',payload:{id}}
}