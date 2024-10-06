import React from "react";
import { ShoppingCart } from "phosphor-react";
import { useSelector } from "react-redux";
import './head.css';
import '../App.css';
import { Link } from "react-router-dom";
export default function Head(){
    const cart = useSelector(s=>s.cart)
    return(<div>
        <div className="divM">
            <h1>SHOP TECH</h1>
            <form className="form">
            <input type="text" placeholder="SHERCH" className="sherchinp"/>
            <input type="submit" value='SHERCH' className="sherchbutt"/>
            </form>
                <Link to={'/cart'}>
                <button className="btnshoping">
                <ShoppingCart style={{width:'2rem',height:'2rem',cursor:'pointer',color:'white',backgroundColor:'rgba(255, 183, 75, 1)'}}/>
                <span className="button_number_item">{cart?cart.length:0}</span><span className="spanacheter">Cart</span>
                </button> 
                </Link>
                <Link to={'/Login'}>
                    <button className="singlog">log in</button>
                </Link>
              </div>
        <div className="divheader">
            <ul className="liste">
               <li>
                 <Link to={'/'} className="a-inlink">HOME</Link>
                </li>
                <li><a href="">PRIME</a></li>
                <li>
                    <Link to={'/AboutUs'}>
                        ABOUT US
                    </Link>
                </li>
                <li>
                    <Link to={'/contact'}>
                        CONTACT US
                    </Link>
                </li>
            </ul>
        </div>
    </div>)
}