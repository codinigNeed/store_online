import './ajouterCatigorie.css';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';

export default function AjouterCatigorie() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        categoriecode: 'Z.ELK',
        categoriename: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post(`http://127.0.0.1:8000/api/categories`, values);
            console.log(result);
            navigate("/Catigorie");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div>
                <p>Ajouter Catigorie</p>
                <div>
                    <form method='post' onSubmit={handleSubmit}>
                        <div>
                            <div className="div-label-and-input">
                                <label htmlFor="Nom">Nom produit</label><br />
                                <input type='text' name='categoriename' placeholder='Entrer un nom' className='form-input' onChange={handleChange} /><br />
                            </div>
                            <div className="div-label-and-input">
                                <label htmlFor="Code">Code produit</label><br />
                                <input type='text' name='categoriecode' placeholder='Entrer un code' className='form-input' onChange={handleChange} /><br />
                            </div>
                            <div className="div-label-and-input">
                                <label htmlFor="Description">Description</label><br />
                                <input type='text' name='description' placeholder='Entrer une description' className='form-input' onChange={handleChange} /><br />
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
