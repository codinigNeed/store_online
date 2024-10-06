import React from "react";
import './body1.css';
import { newproduct } from "./newproduct";
import { Link } from "react-router-dom";
import { ajouterCart } from "../../cart/Action";
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import axios from "axios";
export default function Body1(){
    const dispatch = useDispatch();
    const [newproduits,setnewproduits] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/products`);
                setnewproduits(response.data);
                } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        setnewproduits(newproduits.filter((t)=>{return t.categorie_id === parseInt(2)}));   
    }, []);
    return(<div>
        <div style={{textAlign:'center'}}>
        <img src="../puctures/image30.png" className="imaghome"/>
        </div>
        <div className="div_of_body_mater">
        {newproduits.slice(0,5).map((item,index)=>{
        return (<>
        <div className="divmere" key={index}>
            <div>
                <Link to={`/single/${item.id}`}>
                    <img src={`http://localhost:8000/storage/${item.imag}`} className="imag_new_product"/>
                </Link>
            </div>
            <p style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
      <img src={'../puctures/Star 9.png'} className="imagrev"/>
            <img src={'../puctures/Star 9.png'} className="imagrev"/>
            <img src={'../puctures/Star 9.png'} className="imagrev"/>
            <img src={'../puctures/Star 9.png'} className="imagrev"/>
            <img src={'../puctures/Star 1.png'} className="imagrev"/>
            <div className="divreview"> Reviews(4)</div>
        </p>
        <p style={{fontSize:13}}>{item.inscription}</p>
         <p style={{color:'rgba(0, 0, 0, 0.337)'}}><del>{item.price+130}$</del></p>
         <div className="price_cart">{item.price}$</div>
         <button className="button_add_to_cart" onClick={()=>dispatch(ajouterCart(item))}>Add to Cart</button>
          </div>
        </>)
    })}
            </div>
            <div className="div_of_vector">
                <div className="div_pucture_vector1"><img src="./puctures/Vector12.png" className="puctures-Vector12"/></div>
                <div className="div_pucture_vector2"><img src="./puctures/Vector11.png" className="puctures-Vector12"/></div>
            </div>
        </div>)
}