import { product } from "../product";
import { ajouterCart } from "./action";
import { useDispatch } from 'react-redux';
export default function Shopping(){
    const dispatch = useDispatch();
    const addshopp = (item)=>{
            dispatch(ajouterCart(item));
        console.log(item);
    }
    console.log(product);
    return(<>
    <div>
        {product.map((item,index)=>{
            return(
            <div key={index}>
                <img src={item.imag}/>
                <p>{item.price}$</p>
                <button onClick={()=>addshopp(item)} >shopping</button>
            </div>
            )
        })}
    </div>
    </>)
}