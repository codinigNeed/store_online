import './Catigorie.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import axios from 'axios';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const itemsPerPage = 4;

export default function Catigorie() {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(categories.length / itemsPerPage);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/categories`);
                setCategories(response.data);
            } catch (err) {
                console.log('Error:', err);
            }
        };
        getData();
    }, []);

    const supprimer = async (id) => {
        const confirmation = window.confirm("Êtes-vous sûr(e) de vouloir supprimer cet article ?");
        if (confirmation) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`);
                setCategories(categories.filter(category => category.id !== id));
            } catch (err) {
                console.log(err);
            }
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage - 1, categories.length - 1);
    const currentCategories = categories.slice(startIndex, endIndex + 1);

    return (
        <div>
            <div className='div-articles-ajouterArticle'>
                <div>
                    <p style={{ color: 'rgb(134, 133, 133)' }}>Catigorie</p>
                </div>
                <div className='div-ajuoter-article'>
                    <Link to={'/ajouterCatigorie'} style={{ textDecoration: 'none' }}>
                        <button type="button" className="btn btn-dark">Ajouter Catigorie</button>
                    </Link>
                </div>
            </div>
            <div style={{ marginTop: "40px" }}>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Nom produit</th>
                            <th>Code Produit</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentCategories.map((category, index) => (
                            <tr key={index}>
                                <td>{category.categoriename}</td>
                                <td>{category.categoriecode}</td>
                                <td>{category.description}</td>
                                <td>
                                    <Link to={`/ModifierCatigorie/${category.id}`} style={{ textDecoration: 'none' }}>
                                        <button type="button" className="btn btn-primary">
                                            <BiEdit style={{ color: 'white' }} />
                                        </button>
                                    </Link>
                                    <button type="button" className="btn btn-danger" onClick={() => supprimer(category.id)}>
                                        <RiDeleteBinLine />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <footer className="card-footer d-flex justify-content-start align-items-center p-2">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="btn btn-light">
                        <BsChevronLeft /> Previous
                    </button>
                    <span className="mx-2">
                        <button className='btn btn-primary'>{currentPage}</button>
                    </span>
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="btn btn-light">
                        Next <BsChevronRight />
                    </button>
                </footer>
            </div>
        </div>
    );
}
