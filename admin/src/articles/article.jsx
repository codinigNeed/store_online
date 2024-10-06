import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const itemsPerPage = 4;

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/products');
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage - 1, articles.length - 1);
    const currentItems = articles.slice(startIndex, endIndex + 1);

    const deleteArticle = async (id) => {
        const confirmation = window.confirm("Êtes-vous sûr(e) de vouloir supprimer cet article ?");
        if (confirmation) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
                setArticles(articles.filter(article => article.id !== id)); // Update state after deletion
            } catch (error) {
                console.error('Error deleting article:', error);
            }
        }
    };

    return (
        <div>
            <div className='div-articles-ajouterArticle'>
                <div>
                    <p style={{ color: 'rgb(134, 133, 133)' }}>Articles</p>
                </div>
                <div className='div-ajuoter-article'>
                    <Link to={'/ajouterArticle'}>
                        <button type="button" className="btn btn-dark">Ajouter Article</button>
                    </Link>
                </div>
            </div>
            <div style={{ marginTop: "40px" }}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Nom du produit</th>
                            <th>Inscription</th>
                            <th>Quantité</th>
                            <th>Prix</th>
                            <th>En stock</th>
                            <th>Catégorie</th>
                            <th>Modifier</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(article => (
                            <tr key={article.id}>
                              <td>
                                {article.imag && (
                                <img src={`http://localhost:8000/storage/${article.imag}`} alt={article.produitname} style={{width:"50px",height:'50px'}}/>
                                )}
                              </td>
                                <td>{article.produitname}</td>
                                <td>{article.inscription.slice(0,30)}</td>
                                <td>{article.quantity}</td>
                                <td>{article.price}</td>
                                <td>{article.instock ? "Oui" : "Non"}</td>
                                <td>{article.categorie_id}</td>
                                <td>
                                    <Link to={`/ModifierArticle/${article.id}`}>
                                        <button type="button" className="btn btn-primary">
                                            <BiEdit style={{ color: 'white' }} />
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => deleteArticle(article.id)}>
                                        <RiDeleteBinLine />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <footer className="card-footer d-flex justify-content-start align-items-center p-2">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="btn btn-light">
                    <BsChevronLeft /> Précédent
                </button>
                <span className="mx-2">
                    <button className="btn btn-primary">{currentPage}</button>
                </span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(articles.length / itemsPerPage)} className="btn btn-light">
                    Suivant <BsChevronRight />
                </button>
            </footer>
        </div>
    );
}
