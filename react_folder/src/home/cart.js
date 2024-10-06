// import { useSelector,useDispatch } from 'react-redux';
// import { suprimer,addquantiter,subquantiter } from './action';
// import { useEffect, useState } from 'react';
// export default function cart(){
//   const [compter,setcompter] = useState(1);
//   const dispatch = useDispatch();
//   const carts = useSelector(data => data.cart);
//   const supprimer = (id)=>{
//     dispatch(suprimer({id}))
//   }
  
//   const subpr=(id)=>{
//     dispatch(subquantiter(id));
//     setcompter(value => value - 1);
//   }
//   const addpr=(id)=>{
//     dispatch(addquantiter(id));
//     setcompter (value => value + 1);
//   }
//     return(<>
//     {carts.map((it,index)=>{
//       console.log(it);
//       return(<div key={index}>
//       <img src={it.imag}/>
//           <p>{it.price}</p>
//           <button onClick={()=>addpr(it.id)}>+</button><span>{it.quantiter}</span> 
//           <button onClick={()=>subpr(it.id)}>-</button><br/>
//           <button onClick={()=>supprimer(it.id)}>suprimer</button>
//           <button>acheter</button>
//       </div>)
//   })}
//     </>)
// } 