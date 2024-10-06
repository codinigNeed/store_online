import { useParams, useNavigate } from 'react-router-dom';
import './ajouterClient.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ModifierClient() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [client, setClient] = useState({
        firstname: '',
        lastname: '',
        password: '',
        email: '',
        adresse: '',
        genre: '',
        country: '',
        city: '',
        phone: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/clients/${id}`);
                setClient(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/clients/${id}`, client);
            navigate("/listClient");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div>
                <p>Modifier Client</p>
                <div>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='div-of-formulaire'>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="lastname">Nom</label><br />
                                    <input type='text' name='lastname' value={client.lastname} placeholder='Entrer le nom' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="firstname">Prénom</label><br />
                                    <input type='text' name='firstname' value={client.firstname} placeholder='Entrer le prénom' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="phone">Numéro de Téléphone</label><br />
                                    <input type='text' name='phone' value={client.phone} placeholder='Entrer le numéro de téléphone' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="adresse">Adresse</label><br />
                                    <input type='text' name='adresse' value={client.adresse} placeholder='Entrer adresse' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="city">Ville</label><br />
                                    <select className='select-form' name='city' value={client.city} onChange={handleChange}>
                                        <option value={'casa'}>Casa</option>
                                        <option value={'safi'}>Safi</option>
                                        <option value={'rabat'}>Rabat</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="email">Email</label><br />
                                    <input type='email' name='email' value={client.email} placeholder='Entrer email' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="password">Mot de Passe</label><br />
                                    <input type='password' name='password' value={client.password} placeholder='Entrer le mot de passe' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="genre">Genre</label><br />
                                    <input type='radio' name='genre' value='M' checked={client.genre === 'M'} onChange={handleChange} /> <label>M</label>
                                    <input type='radio' name='genre' value='F' checked={client.genre === 'F'} onChange={handleChange} /> <label>F</label>
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="country">Pays</label><br />
                                    <input type='text' name='country' value={client.country} placeholder='Entrer le pays' className='form-input' onChange={handleChange} /><br />
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='btn btn-primary mr-4'>Modifier</button>
                        <button type='reset' className='btn btn-danger' onClick={() => navigate("/listClient")}>Annuler</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
