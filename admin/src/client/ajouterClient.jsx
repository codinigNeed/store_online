import { Link, useNavigate } from 'react-router-dom';
import './ajouterClient.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';

export default function AjouterClient() {
    const navigate = useNavigate();
    const [client, setClient] = useState({
        firstname: '',
        lastname: '',
        email: '',
        adresse: '',
        adresse2: '',
        genre: '',
        contry: '',
        city: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post(`http://127.0.0.1:8000/api/clients`, client);
            console.log(result);
            navigate("/listClient");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div>
                <p>Ajouter Client</p>
                <div>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='div-of-formulaire'>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="lastname">Nom</label><br />
                                    <input type='text' name='lastname' placeholder='Entrer le nom' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="firstname">Prénom</label><br />
                                    <input type='text' name='firstname' placeholder='Entrer le prénom' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="phone">Numéro de Téléphone</label><br />
                                    <input type='text' name='phone' placeholder='Entrer le numéro de téléphone' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="adresse">Adresse</label><br />
                                    <input type='text' name='adresse' placeholder='Entrer adresse' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="adresse">Adresse 2</label><br />
                                    <input type='text' name='adresse2' placeholder='Entrer adresse' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="city">Ville</label><br />
                                    <select className='select-form' name='city' onChange={handleChange}>
                                        <option value={'casa'}>Casa</option>
                                        <option value={'safi'}>Safi</option>
                                        <option value={'rabat'}>Rabat</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="email">Email</label><br />
                                    <input type='email' name='email' placeholder='Entrer email' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="genre">Genre</label><br />
                                    <input type='radio' name='genre' value='M' onChange={handleChange} /> <label>M</label>
                                    <input type='radio' name='genre' value='F' onChange={handleChange} /> <label>F</label>
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="country">Pays</label><br />
                                    <input type='text' name='contry' placeholder='Entrer le pays' className='form-input' onChange={handleChange} /><br />
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
