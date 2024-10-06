import './listClient.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiEdit,BiShow } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import axios from 'axios';

const itemsPerPage = 4;

export default function ListClient() {
    const [clients, setClients] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/clients`);
                setClients(response.data);
            } catch (err) {
                console.log('Error:', err);
            }
        };
        getData();
    }, []);

    const handleDelete = async (id) => {
        const confirmation = window.confirm("Êtes-vous sûr(e) de vouloir supprimer ce client ?");
        if (confirmation) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/clients/${id}`);
                setClients(clients.filter(client => client.id !== id));
            } catch (err) {
                console.log(err);
            }
        }
    };

    const totalPages = Math.ceil(clients.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, clients.length);
    const currentClients = clients.slice(startIndex, endIndex);

    return (
        <div style={{width:'100%'}}>
            <div className='div-articles-ajouterArticle'>
                <div>
                    <p style={{ color: 'rgb(134, 133, 133)' }}>Client</p>
                </div>
                <div className='div-ajuoter-article'>
                    <Link to={'/ajouterClient'} style={{ textDecoration: 'none' }}>
                        <button type="button" className="btn btn-dark">Ajouter Client</button>
                    </Link>
                </div>
            </div>
            <div style={{ marginTop: "40px" }}>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Téléphone</th>
                            <th>Adresse</th>
                            <th>Contry</th>
                            <th>Ville</th>
                            <th>Email</th>
                            <th>Genre</th>
                           <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentClients.map((client, index) => (
                            <tr key={index}>
                                <td>{client.lastname}</td>
                                <td>{client.firstname}</td>
                                <td>{client.phone}</td>
                                <td>{client.adresse}</td>
                                <td>{client.contry}</td>
                                <td>{client.city}</td>
                                <td>{client.email}</td>
                                <td>{client.genre}</td>
                                <td>
                                    <Link to={`/ModifierClient/${client.id}`}>
                                        <button type="button" className="btn btn-primary">
                                            <BiEdit style={{ color: 'white' }} className='mr-5' />
                                        </button>
                                    </Link>
                                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(client.id)}>
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
