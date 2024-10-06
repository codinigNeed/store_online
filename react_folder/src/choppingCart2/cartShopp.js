import { useState } from 'react';
import Head from "../home/head/head";
import Back from '../home/back_of_all_page';
import './cartShopp.css';
import { useDispatch, useSelector } from 'react-redux';
import { suprimer } from '../cart/Action';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function CartShopp() {
    const cart = useSelector(s => s.cart);
    console.log(cart);
    const dispatch = useDispatch();
    const [compter, setcompter] = useState(1);
    const [chek, setchek] = useState(1);
    const addedquantiter = () => {
        setcompter(compter + 1);
    }
    const subedquantiter = () => {
        if(compter >= 1){
            setcompter(1)
        }else{
            setcompter(compter - 1);
        }
    }
    // const getCurrentDate = () => {
    //     const date = new Date();
    //     const year = date.getFullYear();
    //     const month = String(date.getMonth() + 1).padStart(2, '0');
    //     const day = String(date.getDate()).padStart(2, '0');
    //     return `${year}-${month}-${day}`;
    // };
    
    // const [orderData, setOrderData] = useState({
    //     date:getCurrentDate(),
    //     requireddate:getCurrentDate(),
    //     status: 'check',
    //     description: 'la commande de client',
    //     total: cart.reduce((total, it) => { return (total + it.price) * it.qte }, 0),
    //     clientId: 1,
    //     employeeId: 1
    // });
    // const handleSubmit = async (card) => {
        // try {
        //     await axios.post('http://localhost:8000/api/orders', orderData);
        //     } catch (error) {
        //     console.error('There was an error adding the order!', error);
        // }
        // card.map((t)=>
        // {
        //     try {
        //          axios.post('http://localhost:8000/api/order-details', {total:cart.reduce((total, it) => { return (total + it.price) * it.qte }, 0),quantity:t.qte,product_id:1,orderID:1});
        //         } catch (error) {
        //          console.error('There was an error adding the order details!', error);
        //     }
        // }
        // )

    // };
    return (<>
        <Head />
        <div className='div-page-cart'>
            <div style={{ backgroundColor: ' white' }} className='div-the-all-element'>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1>cart chapping</h1>
                    <p>price</p>
                </div>
                <hr />
                {
                    cart.map((it) => {
                        return (
                            <div key={it.id} className='div-mere'>
                                <div className='div-all-item-cart'>
                                    <div>
                                        <img src={`http://localhost:8000/storage/${it.imag}`} className='imag1-item' />
                                    </div>
                                    <div>
                                        <p>{it.inscription}</p>
                                        <p>In Stock</p>
                                        <p>pattern:{it.pat}</p>
                                        <p>Style:{it.core} | {it.rtx}</p>
                                        <button onClick={() => addedquantiter()}>+</button><span>{it.qte}</span>
                                        <button onClick={() => subedquantiter()}>-</button>
                                        <button onClick={() => dispatch(suprimer(it.id))}>suprimer</button>
                                    </div>
                                    <div>
                                        <h1>{it.price}$</h1>
                                    </div>
                                </div>
                                <hr /></div>)
                    })
                }
                <h2>subtotal: ({cart.length} item): {cart.reduce((total, it) => { return (total + it.price) * it.qte }, 0)}$</h2>
            </div>
            <div>
                <div className='div_checkout1'>
                    <div style={{ paddingInline: '15px' }}>
                        <div>
                            <h2 style={{ paddingTop: '15px' }}>subtotal: ({cart.length} item): {cart.reduce((total, it) => { return (total + it.price) * it.qte }, 0)}$</h2>
                        </div>
                        <div>
                            <form method='post'>
                                <label className='label_of_chek'>country</label><br/>
                                <select className='input_of_check' style={{height:'30px'}}>
                                    <option>morocco</option>
                                    <option></option>
                                    <option></option>
                                </select><br/>
                                <label className='label_of_chek'>State/Prevince</label><br/>
                                <input type='text' name='state/prevince' className='input_of_check'/><br/>
                                <label className='label_of_chek'>Zip/postalCode</label><br/>
                                <input type='text' name='state/prevince' className='input_of_check'/><br/>
                                <label className='label_of_chek' >Standard Rate</label><br/>
                                <input type='radio' value={"lklk "} name='Standard'/>
                                <label>Price may vary depending on the item/destination. <br />Shop Staff will contact you. $21.00</label><br/>
                                <br/><label className='label_of_chek' >Pickup from store</label><br/>
                                <input type='radio' value={"slfl^pf"} name='Standard'/>
                                <label>Price may vary depending on the item/destination. <br />Shop Staff will contact you. $21.00</label>
                                <hr />
                                <div className='div_of_all_details'>
                                    <div className='div_of_details'>
                                        <p>supptotal</p>
                                        <p>{cart.reduce((total, it) => { return (total + it.price) * it.qte}, 0)}$</p>
                                    </div>
                                    <div className='div_of_details'>
                                        <p>Shipping</p>
                                        <p>21$</p>
                                    </div>
                                    <div className='div_of_details'>
                                        <p>Tax</p>
                                        <p>1.91$</p>
                                    </div>
                                    <div className='div_of_details'>
                                        <p>GAS(10%)</p>
                                        <p>0.91$</p>
                                    </div>
                                    <div className='div_of_details'>
                                        <p>Order Total</p>
                                        <p>{cart.reduce((total, it) => { return (total + it.price) * it.qte }, 0)}$</p>
                                    </div>
                                </div>
                                <button className='button-proced-Paypal'>proceed to Paypal</button>
                                <Link to={'/checkOut'}>
                                    <button className='button-proced-checkout'>proceed to checkout</button>
                                </Link>
                               </form>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Back />
    </>)
}