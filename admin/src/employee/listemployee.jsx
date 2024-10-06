import './listemployee.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import axios from 'axios';

const itemsPerPage = 4;

export default function ListEmployee() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/employees`);
                setEmployees(response.data);
                console.log(response);
            } catch (err) {
                console.error('Error:', err);
            }
        };
        getData();
    }, []);

    const supprimer = async(id) => {
        const confirmation = window.confirm(
          "Êtes-vous sûr(e) de vouloir supprimer cet employé ?"
        );
        if (confirmation) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/employees/${id}`);
                setEmployees(employees.filter(employee => employee.id !== id));
            } catch (err) {
                console.error(err);
            }
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(employees.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage - 1, employees.length - 1);
    const currentEmployees = employees.slice(startIndex, endIndex + 1);

    return (
        <div>
            <div className='div-articles-ajouterArticle'>
                <div>
                    <p style={{color: 'rgb(134, 133, 133)'}}>Employees</p>
                </div>
                <div className='div-ajuoter-article'>
                    <Link to={'/ajouterEmployee'} style={{textDecoration: 'none'}}>
                        <button type="button" className="btn btn-dark">Ajouter Employé</button>
                    </Link>
                </div>
            </div>
            <div style={{marginTop: "40px"}}>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Titre</th>
                            <th>Date de Naissance</th>
                            <th>Adresse</th>
                            <th>Ville</th>
                            <th>Région</th>
                            <th>Travail</th>
                            <th>Téléphone</th>
                            <th>Salaire</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEmployees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.empName}</td>
                                <td>{employee.emplastname}</td>
                                <td>{employee.title}</td>
                                <td>{employee.birthdate}</td>
                                <td>{employee.adress}</td>
                                <td>{employee.city}</td>
                                <td>{employee.region}</td>
                                <td>{employee.job}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    <Link to={`/modifierEmployee/${employee.id}`}>
                                        <button type="button" className="btn btn-primary">
                                            <BiEdit style={{color: 'white'}} className='mr-5'/>
                                        </button>
                                    </Link>
                                    <button type="button" className="btn btn-danger" onClick={() => supprimer(employee.id)}>
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
                        <BsChevronLeft/> Précédent
                    </button>
                    <span className="mx-2">
                        <button className='btn btn-primary'>{currentPage}</button>
                    </span>
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="btn btn-light">
                        Suivant <BsChevronRight/>
                    </button>
                </footer>
            </div>
        </div>
    );
}
