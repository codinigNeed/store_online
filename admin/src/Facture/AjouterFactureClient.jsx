import './ajouterFactureClient.css';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

export default function AjouterFactureClient() {
    const navigate = useNavigate();
    const [facture, setFacture] = useState({
        Reference: '',
        Client: '',
        Date: '',
        Prix: '',
        Method_payment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFacture({ ...facture, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/factures/create`, facture);
            navigate('/FactureClient'); // Redirect to the list of invoices after creation
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
           
            <div>
                <p>Ajouter Facture</p>
                <div>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='div-of-formilaire'>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Reference">Reference</label><br />
                                    <select name='Reference' className='select-form' onChange={handleChange}>
                                        <option value=''>Choisir une référence</option>
                                        <option value='Ref1'>Ref1</option>
                                        <option value='Ref2'>Ref2</option>
                                        <option value='Ref3'>Ref3</option>
                                    </select>
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Client">Client</label><br />
                                    <select name='ClientId' className='select-form' onChange={handleChange}>
                                        <option value=''>Choisir un client</option>
                                        <option value='Mohammed'>Mohammed</option>
                                        <option value='Youssef'>Youssef</option>
                                    </select>
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Date">Date</label><br />
                                    <input type='date' name='Date' placeholder='Entrer une date' className='form-input' onChange={handleChange} /><br />
                                </div>
                            </div>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Prix">Prix</label><br />
                                    <input type='text' name='Prix' placeholder='Entrer un prix' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Quantity">Quantity</label><br />
                                    <input type='text' name='Quantity' placeholder='Entrer un Quantity' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="PaymentMethod">Payment Method</label><br />
                                    <select name='Method_payment' className='select-form' onChange={handleChange}>
                                        <option value=''>Choisir une méthode de paiement</option>
                                        <option value='Check'>Check</option>
                                        <option value='Cash'>Cash</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='btn btn-primary mr-4'>Ajouter</button>
                        <button type='reset' className='btn btn-danger'>Annuler</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
