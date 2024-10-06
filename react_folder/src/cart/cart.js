import { useState,useEffect } from 'react';
import Head from "../home/head/head";
import Back from '../home/back_of_all_page'; 
import './cart.css';
import { produitapp } from '../home/pc/produit';
import { ajouterCart } from './Action';
import { useDispatch, useSelector } from 'react-redux';
import { addquantiter,subquantiter,suprimer } from './Action';
import { images } from '../home/pc/produit';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Cart(){
    const cart = useSelector(s=>s.cart);
    const dispatch = useDispatch();
    const [compter,setcompter] = useState(1);
    const [chek,setchek] = useState(1);
    const addedquantiter = (id)=>{
        setcompter(compter + 1);
            dispatch(addquantiter(id));
    }
    const subedquantiter = (id) => {
        if(compter >= 1){
            setcompter(1)
        }else{
            setcompter(compter - 1);
            dispatch(subquantiter(id));
        }
    }
    const [articles,setArticles] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/products`);
                setArticles(response.data);
                } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();  
    }, []);
    return(<>
    <Head/>
    <div className='div-page-cart'>
        <div style={{backgroundColor:' white'}} className='div-the-all-element'>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <h1>cart chapping</h1>
                <p>price</p>
            </div>
           <hr/>
            {
                cart.map((it)=>{
                    return(
                    <div key={it.id} className='div-mere'>
                        <div className='div-all-item-cart'>
                    <div>
                        <img src={`http://localhost:8000/storage/${it.imag}`} className='imag1-item'/>
                    </div>
                    <div>
                        <p>{it.inscription}</p>
                        <p>In Stock</p>
                        <p>pattern:{it.pat}</p>
                        <p>Style:{it.core} | {it.rtx}</p>
                        <button onClick={()=>addedquantiter(it.id)}>+</button><span>{it.qte}</span> 
                        <button onClick={()=>subedquantiter(it.id)}>-</button>
                        <button onClick={()=>dispatch(suprimer(it.id))}>suprimer</button>
                    </div>
                    <div>
                        <h1>{it.price}$</h1>
                    </div>
                    </div>
                    <hr/></div>)
                })
            }
            <h2>subtotal: ({cart.length} item): {cart.reduce((total,it)=>{return (total + it.price) * it.qte},0)}$</h2>
        </div>
            <div>
                <div className='div_sum_price'>
                    <div style={{paddingLeft:'15px'}}>
                    <div>
                    <h2 style={{paddingTop:'15px'}}>subtotal: ({cart.length} item): {cart.reduce((total,it)=>{return (total + it.price) * it.qte},0)}$</h2>
                    </div>
                    <div>
                    <input type='checkbox' value={chek} onChange={(e)=>setchek(e.target.value)}/><label>cette commande contient un cadeau</label>
                    <Link to={'/cartShopp2'}>
                        <button className='button-proced-checkout'>proceed to checkout</button>
                    </Link>
                       </div>
                    </div>
                </div>
                <div className='div_nouveaux_achetés'>
                    <div style={{padding:'0px 15px'}}>
                        <div>
                            <h3>Nouveaux clients internationaux achetés</h3>
                        </div>
                        <div>
                           {articles.slice(0,5).map((it)=>{
                            return(<>
                            <div>
                                <div className='div_nouvaux_produit'>
                                    <div>
                                        <img src={`http://localhost:8000/storage/${it.imag}`} className='imag_nouveaux_achete'/>
                                    </div>
                                    <div>
                                        <p style={{margin:'2px',fontSize:'14px'}}>{it.inscription.substring(0,40)}</p>
                                        <img src={images.revieus} className="imagrev"/>
                                        <img src={images.revieus} className="imagrev"/>
                                        <img src={images.revieus} className="imagrev"/>
                                        <img src={images.revieus} className="imagrev"/>
                                        <img src={images.revieusin} className="imagrev"/>
                                        <p style={{margin:'2px'}}>$ {it.price}</p>
                                       <div>
                                        <button className='Add-to-cart-in-cart' onClick={()=>dispatch(ajouterCart(it))}>Add to cart</button>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            </>)
                           })
                           }
                        </div>
                    </div>
                    
                </div>
            </div>
    </div>
    <Back />
    </>)
}