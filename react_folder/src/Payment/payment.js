import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Head from "../home/head/head";
import BackAll from "../home/back_of_all_page";
import './checkOut.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CheckOut() {
    const cart = useSelector(s => s.cart);
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
                const clientResponse = await fetch('http://localhost:8000/api/clients');
                if (!clientResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const clientsData = await clientResponse.json();
                setclient(clientsData);
                console.log(clientsData);
            } catch (error) {
                console.error('There was an error fetching clients!', error);
            }
        };
        fetchData();
    }, []);
    const [form, setForm] = useState({
        numrio_cart: '',
        type_cart: '',
        soldout: cart.reduce((total, it) => { return (total + it.price) * it.qte }, 0),
        clientId:client.length > 0 ? client[client.length - 1].id+1 : 1,
    });
    const [orderData, setOrderData] = useState({
        date:getCurrentDate(),
        namecompany:'SHOPTECH',
        tva: cart.reduce((total, it) => { return (total + it.price) * it.qte }, 0) * 0.2,
        total: cart.reduce((total, it) => { return (total + it.price) * it.qte }, 0),
        clientId: client.length > 0 ? client[client.length - 1].id+1 : 1,
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const navigate = useNavigate();
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/payments', form);
            console.log('Client added:', response.data);
        } catch (error) {
            console.error('There was an error adding the client!', error);
        }
        try {
            const response = await axios.post('http://localhost:8000/api/invoices', orderData);
            console.log('Client added:', response.data);
        } catch (error) {
            console.error('There was an error adding the client!', error);
        }
        alert('your chopp is succefely');
        navigate('/')
    };

    return (
        <>
            <Head />
            <div className="div_premier_de_page">
                <div>
                    <h1>Payment</h1>
                </div>
                <div style={{ width: '300px', display: 'flex', justifyContent: 'center' }}>
                    <div className="button_checkout1">
                        <hr className="hrclass" /><button className="buttonCheck1">1</button>
                        <div style={{ textAlign: 'center', marginTop: '0px', color: 'rgba(0, 0, 0, 0.484)' }} >Shipping</div>
                    </div>
                    <div className="button_checkout2">
                        <hr className="hrclass" style={{ textAlign: 'center', marginTop: '8px' }}/><button className="buttonCheck2">2</button>
                        <div >Review & Payment</div>
                    </div>
                </div>
            </div>
            <div className="div_of_page_checkout">
                <div>
                        <div style={{ marginBottom: '13px' }}>
                            <div><label>Rip<span style={{ color: 'red' }}>*</span></label></div>
                            <div><input type="text" name="numrio_cart" placeholder="Enter Email Address" className="input_of_ckeckout_1" value={form.numrio_cart} onChange={handleChange} /></div>
                        </div>
                        <div style={{ marginBottom: '13px' }}>
                            <div><label>type cart<span style={{ color: 'red' }}>*</span></label></div>
                            <div><input type="text" name="type_cart" placeholder="Enter First Name" className="input_of_ckeckout_1" value={form.type_cart} onChange={handleChange} /></div>
                        </div>
                        <div style={{ marginBottom: '13px' }}>
                            <div><label>solde Out</label></div>
                            <div><input type="number" name="soldout" placeholder="Enter Last Name" className="input_of_ckeckout_1" value={cart.reduce((total, it) => { return (total + it.price) * it.qte }, 0)} readOnly onChange={handleChange} /></div>
                        </div>
                        <div style={{ marginBottom: '13px' }}>
                            <div><button className="button_submit_of_ckeckout_1" onClick={handleSubmit} value={'check'} >check</button></div>
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
