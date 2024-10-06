import React from "react";
import { produitchaise } from "./chaiseproduit";
import { Link } from "react-router-dom";
import { ajouterCart } from "../../cart/Action";
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import axios from "axios";
export default function Chaise(){
    const [chaises,setchaises] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/products`);
                setchaises(response.data);
                } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();  
    }, []);
    const  chaise = chaises.filter((t)=>{return t.categorie_id == 3})
    
    const dispatch = useDispatch();
    return(<div>
        <div className="div-imag-pc">
            <div>
                <img src="../puctures/desk5.png" className="imag2" alt="see all pc"/>
                <div className="aseeAllpc">
                    <Link to={'/Allpc'} className="see">
                    <a href="" className="seeAll">see all product</a>
                    </Link>
                </div>
            </div>
            {chaise.slice(0,4).map((item)=>{
        return (<><div className="divmere">
         <Link to={`/single/${item.id}`}>
        <img className="imag1" src={`http://localhost:8000/storage/${item.imag}`}/>
        </Link>
      <p style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
      <img src={'../puctures/Star 9.png'} className="imagrev"/>
            <img src={'../puctures/Star 9.png'} className="imagrev"/>
            <img src={'../puctures/Star 9.png'} className="imagrev"/>
            <img src={'../puctures/Star 9.png'} className="imagrev"/>
            <img src={'../puctures/Star 1.png'} className="imagrev"/>
            <div className="divreview"> Reviews(4)</div>
        </p>
        <p style={{fontSize:13}}>{item.inscription}</p>
         <p style={{color:'rgba(0, 0, 0, 0.337)'}}><del>{item.price + 100}$</del></p>
         <div className="price_cart">{item.price}$</div>
         <button className="button_add_to_cart" onClick={()=>dispatch(ajouterCart(item))}>Add to Cart</button>
          </div>
        </>)
    })}
    </div>
    </div>)
   
}