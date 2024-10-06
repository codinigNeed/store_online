import './User.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function User() {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/users`);
                setUsers(response.data);
                console.log(response);
            } catch (err) {
                console.log('Error:', err);
            }
        };
        getData();
    }, []);
    
    const supprimer = async (id) => {
        const confirmation = window.confirm("Êtes-vous sûr(e) de vouloir supprimer cet utilisateur ?");
        if (confirmation) {
            try {
                await axios.delete(`http://localhost:8000/api/users/${id}`);
                setUsers(user.filter((u) => u.id !== id));
            } catch (err) {
                console.log(err);
            }
        }
    };
    console.log(user);
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(user.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, user.length);
    const currentuser = user.slice(startIndex, endIndex);

    return (
        <div>
            <div className='div-articles-ajouterArticle'>
                <div>
                    <p style={{ color: 'rgb(134, 133, 133)' }}>Utilisateur</p>
                </div>
                <div className='div-ajuoter-article'>
                    <Link to={'/ajouterUser'} style={{ textDecoration: 'none' }}>
                        <button type="button" className="btn btn-dark">Ajouter Utilisateur</button>
                    </Link>
                </div>
            </div>
            <div style={{ marginTop: "40px" }}>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                            <th>User Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentuser.map((it, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{it.email}</td>
                                        <td>{it.password}</td>
                                        <td>{it.name}</td>
                                        <td>
                                            <Link to={`/ModifierUser/${it.id}`} style={{ textDecoration: 'none' }}>
                                                <button type="button" className="btn btn-primary">
                                                    <BiEdit style={{ color: 'white' }} />
                                                </button>
                                            </Link>
                                            <button type="button" className="btn btn-danger" onClick={() => supprimer(it.id)}>
                                                <RiDeleteBinLine />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <footer className="card-footer d-flex justify-content-start align-items-center p-2">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="btn btn-light">
                        <BsChevronLeft />Previos
                    </button>
                    <span className="mx-2">
                        <button className='btn btn-primary'>{currentPage}</button>
                    </span>
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="btn btn-light">
                        Next<BsChevronRight />
                    </button>
                </footer>
            </div>
        </div>
    )
}
