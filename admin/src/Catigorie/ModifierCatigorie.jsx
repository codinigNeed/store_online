import './ajouterCatigorie.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ModifierCatigorie() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [catigorie, setCatigorie] = useState({
        Nom: '',
        Code: '',
        Description: ''
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/categories/${id}`);
                setCatigorie(response.data);
            } catch (err) {
                console.log('Error:', err);
            }
        };
        getData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCatigorie({ ...catigorie, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/categories/${id}`, catigorie);
            navigate('/catigorie'); // Rediriger vers la liste des articles après la modification
        } catch (err) {
            console.log('Error:', err);
        }
    };

    return (
        <div>
            <div>
                <p>Modifier Catigorie</p>
                <div>
                    <form method='post' onSubmit={handleSubmit}>
                        <div>
                            <div className="div-label-and-input">
                                <label htmlFor="Nom">Nom produit</label><br />
                                <input type='text' name='categoriename' placeholder='Entrer un nom' value={catigorie.categoriename} onChange={handleChange} className='form-input' /><br />
                            </div>
                            <div className="div-label-and-input">
                                <label htmlFor="Code">Code produit</label><br />
                                <input type='text' name='categoriecode' placeholder='Entrer un code' value={catigorie.categoriecode} onChange={handleChange} className='form-input' /><br />
                            </div>
                            <div className="div-label-and-input">
                                <label htmlFor="Description">Description</label><br />
                                <input type='text' name='description' placeholder='Entrer une description' value={catigorie.description} onChange={handleChange} className='form-input' /><br />
                            </div>
                        </div>
                        <button type='submit' className='btn btn-primary mr-4'>Enregistrer</button>
                        <button type='reset' className='btn btn-danger'>Annuler</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
