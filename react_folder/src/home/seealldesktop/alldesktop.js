import React from "react";
import {produitdesk} from "../desktops/deskproduit";
import Head from "../head/head";
import BackAll from "../back_of_all_page";
import { ajouterCart } from "../../cart/Action";
import { useDispatch } from "react-redux";
import { images } from "../pc/produit";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './seeallpc.css';
export default function AllDesktop(){
    const dispatch = useDispatch();
    const [pc,setpc] = useState('');
    const [descktops,setdescktops] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/products`);
                setdescktops(response.data);
                } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();  
    }, []);
    const  descktop = descktops.filter((t)=>{return t.categorie_id == 7})
    
    return(<>
    <Head/>
    <div className="divimg">
            <img src="./puctures/Group 56.png" className="imgheder"/>
        </div>
        <h1>MSI PS Series (20)</h1>
        <div>
            <a>Back</a>
        </div>
    <div className="div_of_composant_allpc">
        <div className="div-scrolrnt">
            <div className="div_filter">
                <div>
                    <p>filter</p>
                    <button className="btn_filter">claer filter</button>
                </div>
                <div className="div-category-price">
                    <div>
                        <div className="filter-price">
                            <div>category</div><img src=""/><div className="grether-then-sumbole"> &gt;</div>
                        </div>
                        <div className="filter-price">
                            <div>CUSTOM PCS</div><img src=""/><div>15</div>
                        </div>
                        <div className="filter-price">
                            <div>MSI ALL-IN-ONE PCS</div><img src=""/><div>45</div>
                        </div>
                        <div className="filter-price">
                            <div>MSI ALL-IN-ONE divCS</div><img src=""/><div>45</div>
                        </div>
                    </div>
                    <div>
                        <div className="filter-price">
                            <div>Price</div><img src=""/>
                        </div>
                        <div className="filter-price">
                            <div>100$-1.000$</div><div>15</div>
                        </div>
                        <div className="filter-price">
                            <div>1.000$-2.000$</div><div>20</div>
                        </div>
                        <div className="filter-price">
                            <div>2.000$-3.000$</div><div>15</div>
                        </div>
                        <div className="filter-price">
                            <div>3.000$-4.000$</div><div>15</div>
                        </div>
                        <div className="filter-price">
                            <div>4.000$-5.000$</div><div>20</div>
                        </div>
                        <div className="filter-price">
                            <div>5.000$-6.000$</div><div>20</div>
                        </div>
                        <div className="filter-price">
                            <div>6.000$-7.000$</div><div>20</div>
                        </div>
                        <div className="filter-price">
                            <div>7.000$ and above</div><div>20</div>
                        </div>
                    </div>
                    <div>
                        <div className="filter-price">
                            <div>color</div><img src=""/>
                        </div>
                        <div className="filter-price">
                            <div></div><img src=""/><div>15</div>
                        </div>
                        <div className="filter-price">
                            <div><img src=""/></div><div>20</div>
                        </div>
                        <div className="filter-price">
                            <div><img src=""/></div><div>15</div>
                        </div>
                        <div className="filter-price">
                            <div><img src=""/></div><div>15</div>
                        </div>
                        <div className="filter-price">
                            <div><img src=""/></div><div>20</div>
                        </div>
                    </div>        
                </div>
            </div>
            <div>
                <div className="div_brands">
                    <div>
                        <p>Brands</p>
                        <button className="btn_filter">claer Brands</button>
                    </div>
                    <div className="div_brands_div2">
                        <div className="filter-Brands">
                            <img src="./puctures/Frame 22.png" className="img_frame"/> <img src="./puctures/Frame 23.png"className="img_frame"/>
                        </div>
                        <div className="filter-Brands">
                            <img src="./puctures/Frame 24.png" className="img_frame"/> <img src="./puctures/Frame 25.png" className="img_frame"/>
                        </div>
                        <div className="filter-Brands">
                            <img src="./puctures/Frame 27.png" className="img_frame"/> <img src="./puctures/Frame 34.png" className="img_frame"/>
                        </div>
                    </div>
               
                </div>

            </div>
            <div className="div_item">
                    <div>
                        <p>my wish list</p>
                    </div>
                        <div className="filter-item">
                            <p>you dont have any item</p>
                        </div>
                </div>
                <div>
            <img src="./puctures/image 49.png" className="imag_shize"/>
        </div>
        </div>
        <div>
            <div className="div_image_all_pc">
                 {descktop.map((item,index)=>{
                 return (<div key={index}>
                             <div>
                                <Link to={`/single/${item.id}`}>
                                <img src={`http://localhost:8000/storage/${item.imag}`} className="imagseeallpc"/>
                                </Link>
                             </div>
                             <div>
                             <img src={images.revieus} className="imagrev"/>
                             <img src={images.revieus} className="imagrev"/>
                             <img src={images.revieus} className="imagrev"/>
                             <img src={images.revieus} className="imagrev"/>
                             <img src={images.revieusin} className="imagrev"/><span style={{marginLeft:'10px',color:'rgba(162, 166, 176, 1)'}}>Revieus(4)</span>
                             </div>
                             <div>
                                 <p>{item.inscription}</p>
                             </div>
                             <div>
                                 <p>{item.price}$</p>
                             </div>
                                <div style={{textAlign:'center',height:"50px"}}>
                                <button className="button_add_to_cart_in_all_product" onClick={()=>dispatch(ajouterCart(item))}>Add to Cart</button>
                                        {/* <button className='Add-to-cart'><img src="../puctures/vector2.png"/> Add to cart</button> */}
                                </div>
                         </div>)
                 })}
             </div>
            <p>MSI has unveiled the Prestige Series line of business-class and gaming notebooks.
              Tuned for color accuracy, the Prestige Series also leverages True Color Technology, which
               allows users to adjust the display profile to best fit their computing needs.

                There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, 
                sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light,
                 and optimizing contrast for watching movies.<span className="p1">
                Given the various display profiles and discrete graphics chip, the Prestige Series
                 notebooks can be used for various design work as well as for office tasks given that the
                  screen can be adjusted for better clarity, color accuracy, or for eye strain reduction.
                   Users working with video or 3D rendering will appreciate the "movie mode" </span>
                   <span className="p2">for which contrast is increased.

                Home users or students can benefit from the "anti-blue" and the "office mode"
                 options, both of which are designed to reduce eye strain. This is helpful when 
                 working on the computer for extended periods of time. Additionally, in their down time,
                  students can also use the "gamer mode" to increase the screen brightness.</span></p>
                    <div style={{marginLeft:'350px'}}>
                        <button className="btn-learn">learn more</button>
                    </div>
        </div>
        
    </div>
    <div style={{backgroundColor:'red'}}>
        <BackAll/>
    </div>
    </>
    )
   
}