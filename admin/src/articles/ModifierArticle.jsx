import './ajouterArticle.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ModifierArticle() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState({
        Nom: '',
        Reference: '',
        Description: '',
        SeuilMinimum: '',
        Prix: '',
        Emplacement: '',
        Catigorie: ''
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/articles/${id}`);
                setArticle(response.data);
            } catch (err) {
                console.log('Error:', err);
            }
        };
        getData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArticle({ ...article, [name]: value });
    };
    console.log(article);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/articles/${id}`, article);
            navigate('/article'); // Rediriger vers la liste des articles après la modification
        } catch (err) {
            console.log('Error:', err);
        }
    };

    return (
        <div>
            <div className='div-articles-ajouterArticle'></div>
            <div>
                <p>Modifier Article</p>
                <div>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='div-of-formilaire'>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="image">Image</label><br />
                                    <input type='file' name='image' /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Nom">Nom produit</label><br />
                                    <input type='text' name='Nom' placeholder='Entrer un nom' value={article.Nom} onChange={handleChange} className='form-input' /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Catigorie">Catigorie</label><br />
                                    <input type='text' name='Catigorie' placeholder='Entrer une catégorie' value={article.Catigorie} onChange={handleChange} className='form-input' /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Emplacement">Emplacement</label><br />
                                    <input type='text' name='Emplacement' placeholder='Entrer un emplacement' value={article.Emplacement} onChange={handleChange} className='form-input' /><br />
                                </div>
                            </div>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Reference">Référence</label><br />
                                    <input type='text' name='Reference' placeholder='Entrer une référence' value={article.Reference} onChange={handleChange} className='form-input' /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="SeuilMinimum">Seuil Minimum</label><br />
                                    <input type='text' name='SeuilMinimum' placeholder='Entrer un seuil minimum' value={article.SeuilMinimum} onChange={handleChange} className='form-input' /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="Prix">Prix</label><br />
                                    <input type='text' name='Prix' placeholder='Entrer un prix' value={article.Prix} onChange={handleChange} className='form-input' /><br />
                                </div>
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
