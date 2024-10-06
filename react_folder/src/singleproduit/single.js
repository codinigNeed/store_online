import { useParams } from "react-router-dom";
import { images } from "../home/pc/produit";
import { allproduit } from "../home/ALLPRDUCT";
import { ajouterCart } from "../cart/Action";
import Head from '../home/head/head';
import BackAll from "../home/back_of_all_page";
import './single.css';
import axios from "axios";
import { useEffect } from "react";
import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
export default function Single(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const [article,setArticle] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/products`);
                setArticle(response.data);
                } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
        setArticle(article.filter((t)=>{return t.id === parseInt(id)}));   
    }, []);
    const single = article.filter((it)=>it.id == parseInt(id));
    console.log(single);
    return(<>
    <Head/>
    <div>
    {
        single.map((t)=>{
            return(<div style={{backgroundColor:'#EAEDED',padding:'15px'}}>
            <div className="div_of_single_page">
                <div>
                    <img src={`http://localhost:8000/storage/${t.imag}`} className="image_of_single"/>
                </div>
                <div className="div_deux_of_single">
                    <div className="reference_of_single">{t.reference}</div>
                    <div>
                        <div style={{width:'400px'}}>{t.inscription}</div>
                    </div>
                    <div className="reference_of_single">Reviews:<img src={images.revieus} className="imagrev"/><img src={images.revieus} className="imagrev"/><img src={images.revieus} className="imagrev"/><img src={images.revieus} className="imagrev"/><img src={images.revieusin} className="imagrev"/></div>
                    <div style={{display:'flex',justifyContent:'start',gap:'20px',justifyItems:'center'}}><del>{t.price + 120}$</del>  <div className="price_of_single_page">{t.price}$</div></div>
                   <div>
                        <button className="button_add_to_cart_in_all_product" onClick={()=>dispatch(ajouterCart(t))}><ShoppingCart size={16}/>Add to Cart</button>
                    </div>
                </div>
            </div>
            </div>)
        })
    }
    </div>
    <BackAll />
    </>)
}