import { Link, useNavigate } from 'react-router-dom';
import './ajouteremployee.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';

export default function AjouterEmployee() {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        empName: '',
        emplastname: '',
        title: '',
        birthdate: '',
        adress: '',
        city: '',
        region: '',
        job: '',
        phone: '',
        salary: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://127.0.0.1:8000/api/employees`, employee);
            navigate("/listEmployee");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div>
                <p>Ajouter Employé</p>
                <div>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='div-of-formulaire'>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="empName">Nom</label><br />
                                    <input type='text' name='empName' placeholder='Entrer le nom' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="emplastname">Prénom</label><br />
                                    <input type='text' name='emplastname' placeholder='Entrer le prénom' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="title">Titre</label><br />
                                    <input type='text' name='title' placeholder='Entrer le titre' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="birthdate">Date de Naissance</label><br />
                                    <input type='date' name='birthdate' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="adress">Adresse</label><br />
                                    <input type='text' name='adress' placeholder='Entrer adresse' className='form-input' onChange={handleChange} /><br />
                                </div>
                            </div>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="city">Ville</label><br />
                                    <input type='text' name='city' placeholder='Entrer la ville' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="region">Région</label><br />
                                    <input type='text' name='region' placeholder='Entrer la région' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="job">Travail</label><br />
                                    <input type='text' name='job' placeholder='Entrer le travail' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="phone">Téléphone</label><br />
                                    <input type='text' name='phone' placeholder='Entrer le numéro de téléphone' className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="salary">Salaire</label><br />
                                    <input type='number' name='salary' placeholder='Entrer le salaire' className='form-input' onChange={handleChange} /><br />
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
