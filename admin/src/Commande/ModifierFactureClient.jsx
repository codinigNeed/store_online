import './ajouterFactureClient.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ModifierFactureClient() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [facture, setFacture] = useState({
        Reference: '',
        ClientId: '',
        Date: '',
        Prix: '',
        Quantity: '', // Ajouté le champ de quantité
        Method_payment: ''
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/invoices/${id}`);
                setFacture(response.data);
            } catch (err) {
                console.error('Error:', err);
            }
        };
        getData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFacture({ ...facture, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/invoices/${id}`, facture);
            navigate('/FactureClient'); // Redirige vers la liste des factures après la modification
        } catch (err) {
            console.error('Error:', err);
        }
    };

    return (
        <div>
            <div className="div-tape">
                <Link to={'/DevisClient'} style={{ textDecoration: 'none' }}>
                    <div className='nav-articles'>Devis Client</div>
                </Link>
                <Link to={'/BonLVClient'} style={{ textDecoration: 'none' }}>
                    <div className='nav-articles'>Bon Livraison Client</div>
                </Link>
                <Link to={'/FactureClient'} style={{ textDecoration: 'none' }}>
                    <div className='nav-articles' style={{ backgroundColor: 'white' }}>Facture Client</div>
                </Link>
            </div>
            <div>
                <p>Modifier Facture</p>
                <div>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='div-of-formilaire'>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Reference">Reference</label><br />
                                    <select name='Reference' className='select-form' value={facture.Reference} onChange={handleChange}>
                                        <option value=''>Choisir une référence</option>
                                        <option value='Ref1'>Ref1</option>
                                        <option value='Ref2'>Ref2</option>
                                        <option value='Ref3'>Ref3</option>
                                    </select>
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Client">Client</label><br />
                                    <select name='ClientId' className='select-form' value={facture.ClientId} onChange={handleChange}>
                                        <option value=''>Choisir un client</option>
                                        <option value='1'>Client 1</option>
                                        <option value='2'>Client 2</option>
                                        {/* Ajoutez d'autres options si nécessaire */}
                                    </select>
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Date">Date</label><br />
                                    <input type='date' name='Date' placeholder='Entrer une date' className='form-input' value={facture.Date} onChange={handleChange} /><br />
                                </div>
                            </div>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Prix">Prix</label><br />
                                    <input type='text' name='Prix' placeholder='Entrer un prix' className='form-input' value={facture.Prix} onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Quantity">Quantité</label><br />
                                    <input type='text' name='Quantity' placeholder='Entrer une quantité' className='form-input' value={facture.Quantity} onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Method_payment">Méthode de paiement</label><br />
                                    <select name='Method_payment' className='select-form' value={facture.Method_payment} onChange={handleChange}>
                                        <option value=''>Choisir une méthode de paiement</option>
                                        <option value='Check'>Chèque</option>
                                        <option value='Cash'>Espèces</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='btn btn-primary mr-4'>Modifier</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
