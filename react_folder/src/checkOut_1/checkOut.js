// import Head from "../home/head/head";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import BackAll from "../home/back_of_all_page";
// import './checkOut.css';
// export default function CheckOut(){
//     const cart = useSelector(s=>s.cart);
//     return(<>
//             <Head/>
//             <div className="div_premier_de_page">
//                 <div>
//                     <h1>CheckOut</h1>
//                     <button>sing in</button>
//                 </div>
//                 <div style={{width:'300px',display:'flex',justifyContent:'center'}}>
//                     <div className="button_checkout1">
//                         <hr className="hrclass"/><button className="buttonCheck1">1</button>
//                         <div style={{textAlign:'center',marginTop:'0px'}}>Chipping</div>
//                     </div>
//                     <div className="button_checkout2">
//                         <hr className="hrclass"/><button className="buttonCheck2">2</button>
//                         <div style={{textAlign:'center',marginTop:'0px',color:'rgba(0, 0, 0, 0.484)'}}>Review & Payment</div>
//                     </div>
//                 </div>
//             </div>
//             <div className="div_of_page_checkout">
//                 <div>
//                     <form>
//                         <div style={{marginBottom:'13px'}}>
//                             <div><label>Email Adresse<span style={{color:'red'}}>*</span></label></div>
//                             <div><input type="text" placeholder="Enter Email Adresse" className="input_of_ckeckout_1"/></div>
//                         </div>
//                         <div style={{marginBottom:'13px'}}>
//                             <div><label>First Name<span style={{color:'red'}}>*</span></label></div>
//                             <div><input type="text" placeholder="Enter First Name" className="input_of_ckeckout_1"/></div>
//                         </div>
//                         <div style={{marginBottom:'13px'}}>
//                             <div><label>Last Name<span style={{color:'red'}}>*</span></label></div>
//                             <div><input type="text" placeholder="Enter Last Name" className="input_of_ckeckout_1"/></div>
//                         </div>
//                         <div style={{marginBottom:'13px'}}>
//                             <div><label>Street Adresse<span style={{color:'red'}}>*</span></label></div>
//                             <div><input type="text" placeholder="Enter Street Adresse" className="input_of_ckeckout_1"/></div>
//                             <div><input type="text" placeholder="Enter Street Adresse" className="input_of_ckeckout_1"/></div>
//                         </div>
//                         <div style={{marginBottom:'13px'}}>
//                             <div><label>City<span style={{color:'red'}}>*</span></label></div>
//                             <div><input type="text" placeholder="Enter City" className="input_of_ckeckout_1"/></div>
//                         </div>
//                         <div style={{marginBottom:'13px'}}>
//                             <div><label>State/Provinece<span style={{color:'red'}}>*</span></label></div>
//                             <div><input type="text" placeholder="Enter State" className="input_of_ckeckout_1"/></div>
//                         </div>
//                         <div style={{marginBottom:'13px'}}>
//                             <div><label>Postal Code<span style={{color:'red'}}>*</span></label></div>
//                             <div><input type="text" placeholder="Enter Postal Code" className="input_of_ckeckout_1"/></div>
//                         </div>
//                         <div style={{marginBottom:'13px'}}>
//                             <div><label>Country<span style={{color:'red'}}>*</span></label></div>
//                             <div><input type="text" placeholder="Enter Country" className="input_of_ckeckout_1"/></div>
//                         </div>
//                         <div style={{marginBottom:'13px'}}>
//                             <div><label>Phone Number<span style={{color:'red'}}>*</span></label></div>
//                             <div><input type="text" placeholder="Enter Phone Number" className="input_of_ckeckout_1"/></div>
//                         </div>
//                         <div style={{marginBottom:'13px'}}>
//                             <div><input type="submit" className="button_submit_of_ckeckout_1" value={'Next'}/></div>
//                         </div>
//                     </form>
//                 </div>
//                 <div>
//                 <div className='cart_chopping'>
//                 <h2>Order Summary</h2>
//                 <hr/>
//                 <p>{cart.length} Items in cart</p>
//                 {cart.map((it)=>{
//                     return(<>
//                     <div className="div_of_orderSummary">
//                         <div><img src={`http://localhost:8000/storage/${it.imag}`} className="imagSummary"/></div>
//                         <div>
//                             <div>{it.inscription}</div>
//                             <div>Qty {it.qte} ${it.price}</div>
//                         </div>
//                     </div>
//                     </>)
//                 })}
//                </div>
//                 </div>
//             </div>
//             <BackAll/>
//     </>)
// }
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Head from "../home/head/head";
import BackAll from "../home/back_of_all_page";
import './checkOut.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CheckOut() {
    const cart = useSelector(s => s.cart);
    const [cmddt,setcmddt] = useState([]);
    const [client,setclient] = useState([]);
    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const orderResponse = await fetch('http://localhost:8000/api/orders');
                if (!orderResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const ordersData = await orderResponse.json();
                setcmddt(ordersData);
            } catch (error) {
                console.error('There was an error fetching orders!', error);
            }

            try {
                const clientResponse = await fetch('http://localhost:8000/api/clients');
                if (!clientResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const clientsData = await clientResponse.json();
                setclient(clientsData);//i wanted to get the last object
                console.log(clientsData);
            } catch (error) {
                console.error('There was an error fetching clients!', error);
            }
        };
        fetchData();
    }, []);
    const [orderData, setOrderData] = useState({
        date:getCurrentDate(),
        requireddate:getCurrentDate(),
        status: 'check',
        description: 'la commande de client',
        total: cart.reduce((total, it) => { return (total + it.price) * it.qte }, 0),
        clientId: client.length > 0 ? client[client.length - 1].id+1 : 1,//and add the last object in the item client
        employeeId: 1
    });
    const [form, setForm] = useState({
        email: '',
        firstname: '',
        lastname: '',
        adresse: '',
        adresse2: '',
        genre: '',
        contry: '',
        city: '',
        phone: ''
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (cart) => {
        try {
            const response = await axios.post('http://localhost:8000/api/clients', form);
            console.log('Client added:', response.data);
        } catch (error) {
            console.error('There was an error adding the client!', error);
        }
        try {
            await axios.post('http://localhost:8000/api/orders', orderData);
            } catch (error) {
            console.error('There was an error adding the order!', error);
        }
            cart.map( async (t)=>
            {
                try {
                    await axios.post('http://localhost:8000/api/order-details', {total:cart.reduce((total, it) => { return (total + it.price) * it.qte }, 0),quantity:t.qte,product_id:1,orderID:cmddt.length > 0 ? cmddt[cmddt.length - 1].id : 1});
                    } catch (error) {
                     console.error('There was an error adding the order details!', error);
                }
            })
    };

    return (
        <>
            <Head />
            <div className="div_premier_de_page">
                <div>
                    <h1>CheckOut</h1>
                    <button>sign in</button>
                </div>
                <div style={{ width: '300px', display: 'flex', justifyContent: 'center' }}>
                    <div className="button_checkout1">
                        <hr className="hrclass" /><button className="buttonCheck1">1</button>
                        <div style={{ textAlign: 'center', marginTop: '0px' }}>Shipping</div>
                    </div>
                    <div className="button_checkout2">
                        <hr className="hrclass" /><button className="buttonCheck2">2</button>
                        <div style={{ textAlign: 'center', marginTop: '0px', color: 'rgba(0, 0, 0, 0.484)' }}>Review & Payment</div>
                    </div>
                </div>
            </div>
            <div className="div_of_page_checkout">
                <div>
                        <div style={{ marginBottom: '13px' }}>
                            <div><label>Email Address<span style={{ color: 'red' }}>*</span></label></div>
                            <div><input type="text" name="email" placeholder="Enter Email Address" className="input_of_ckeckout_1" value={form.email} onChange={handleChange} /></div>
                        </div>
                        <div style={{ marginBottom: '13px' }}>
                            <div><label>First Name<span style={{ color: 'red' }}>*</span></label></div>
                            <div><input type="text" name="firstname" placeholder="Enter First Name" className="input_of_ckeckout_1" value={form.firstname} onChange={handleChange} /></div>
                        </div>
                        <div style={{ marginBottom: '13px' }}>
                            <div><label>Last Name<span style={{ color: 'red' }}>*</span></label></div>
                            <div><input type="text" name="lastname" placeholder="Enter Last Name" className="input_of_ckeckout_1" value={form.lastname} onChange={handleChange} /></div>
                        </div>
                        <div style={{ marginBottom: '13px' }}>
                            <div><label>Street Address<span style={{ color: 'red' }}>*</span></label></div>
                            <div><input type="text" name="adresse" placeholder="Enter Street Address" className="input_of_ckeckout_1" value={form.adresse} onChange={handleChange} /></div>
                            <div><input type="text" name="adresse2" placeholder="Enter Street Address" className="input_of_ckeckout_1" value={form.adresse2} onChange={handleChange}/></div>
                        </div>
                        <div style={{ marginBottom: '13px' }}>
                            <div><label>City<span style={{ color: 'red' }}>*</span></label></div>
                            <div><input type="text" name="city" placeholder="Enter City" className="input_of_ckeckout_1" value={form.city} onChange={handleChange} /></div>
                        </div>
                        <div style={{ marginBottom: '13px' }}>
                            <div><label>State/Province<span style={{ color: 'red' }}>*</span></label></div>
                            <div><input type="text" name="genre" placeholder="Enter State" className="input_of_ckeckout_1" onChange={handleChange} /></div>
                        </div>
                        <div style={{ marginBottom: '13px' }}>
                            <div><label>Postal Code<span style={{ color: 'red' }}>*</span></label></div>
                            <div><input type="text" name="postalCode" placeholder="Enter Postal Code" className="input_of_ckeckout_1" onChange={handleChange} /></div>
                        </div>
                        <div style={{ marginBottom: '13px' }}>
                            <div><label>Country<span style={{ color: 'red' }}>*</span></label></div>
                            <div><input type="text" name="contry" placeholder="Enter Country" className="input_of_ckeckout_1" value={form.contry} onChange={handleChange} /></div>
                        </div>
                        <div style={{ marginBottom: '13px' }}>
                            <div><label>Phone Number<span style={{ color: 'red' }}>*</span></label></div>
                            <div><input type="text" name="phone" placeholder="Enter Phone Number" className="input_of_ckeckout_1" value={form.phone} onChange={handleChange} /></div>
                        </div>
                        <div style={{ marginBottom: '13px' }}>
                            <Link to={'/payment'}>
                            <div><button className="button_submit_of_ckeckout_1" onClick={()=>handleSubmit(cart)} value={'Next'} >Next</button></div>
                            </Link>
                        </div>
                </div>
                <div>
                 <div className='cart_chopping'>
                 <h2>Order Summary</h2>
                 <hr/>
                 <p>{cart.length} Items in cart</p>
                 {cart.map((it)=>{
                    return(<>
                    <div className="div_of_orderSummary">
                        <div><img src={`http://localhost:8000/storage/${it.imag}`} className="imagSummary"/></div>
                        <div>
                            <div>{it.inscription}</div>
                            <div>Qty {it.qte} ${it.price}</div>
                        </div>
                    </div>
                    </>)
                })}
               </div>
                </div>
            </div>
            <BackAll />
        </>
    );
}
