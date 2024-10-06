const initialstate = {cart:[
//     {id:48,imag:'../puctures/IMG1.jpeg',price:250,revieus:'../puctures/Star 9.png',insc:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',quantiter:1},
// {id:49,imag:'../puctures/img2.jpeg',price:300,revieus:'../puctures/Star 9.png',insc:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',quantiter:1},
]}
export const reducer = (state= initialstate,action)=>{
    switch(action.type){
        case 'addcart':
            console.log(action.payload.cart);
            return {...state,cart:[...state.cart,action.payload.cart]}
        case 'suprimerpr':
            return {...state,cart:state.cart.filter((t)=>t.id !== action.payload.id)}
        case 'addquantiter':
            return {...state,cart:state.cart.map((t)=>t.id == action.payload.id?{...t,qte:t.qte + 1}:t)}
        case 'subquantiter':
            return {...state,cart:state.cart.map((t)=>t.id == action.payload.id?{...t,qte :t.qte - 1}:t)}
        default:
            return state;
    }
}