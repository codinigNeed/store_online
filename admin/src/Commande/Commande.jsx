import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './FactureClient.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiEdit,BiShow } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const itemsPerPage = 4;

export default function ListOrder() {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/orders`);
                setOrders(response.data);
                console.log(response);
            } catch (err) {
                console.log('Error:', err);
            }
        };
        getData();
    }, []);

    const supprimer = async(id) => {
        const confirmation = window.confirm("Êtes-vous sûr(e) de vouloir supprimer cette commande ?");
        if (confirmation) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/orders/${id}`);
                setOrders(orders.filter(order => order.id !== id));
            } catch (err) {
                console.log(err);
            }
        }
    };

    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage - 1, orders.length - 1);
    const currentOrders = orders.slice(startIndex, endIndex + 1);

    return (
        <div style={{marginTop:'30px'}}>
            <div className='div-orders-ajouterOrder'>
                <div>
                    <p style={{ color: 'rgb(134, 133, 133)' }}>Orders</p>
                </div>
            </div>
            <div style={{ marginTop: "40px" }}>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th>Total</th>
                            <th>Client</th>
                            <th>Employee</th>
                            <th>datails Commande</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentOrders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.date}</td>
                                <td>{order.status}</td>
                                <td>{order.description}</td>
                                <td>{order.total}</td>
                                <td>{order.client.firstname}</td>
                                <td>{order.employee.empName}</td>
                                <td>
                                <Link to={`/showDetailCmd/${order.id}`}>
                                <button type="button" className="btn btn-success">detail Commande <BiShow/></button>
                                </Link>
                                </td>
                                <td>
                                    <Link to={`/modifierOrder/${order.id}`}>
                                        <button type="button" className="btn btn-primary">
                                            <BiEdit style={{ color: 'white' }} className='mr-5' />
                                        </button>
                                    </Link>
                                    <button type="button" className="btn btn-danger" onClick={() => supprimer(order.id)}>
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
                        <BsChevronLeft />Previous
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
    );
}
