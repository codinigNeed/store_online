import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './FactureClient.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiEdit, BiShow } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const itemsPerPage = 4;

export default function ListInvoices() {
    const [invoices, setInvoices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/invoices`);
                setInvoices(response.data);
            } catch (error) {
                console.error('Error fetching invoices:', error);
            }
        };
        fetchInvoices();
    }, []);

    const deleteInvoice = async (id) => {
        const confirmation = window.confirm("Are you sure you want to delete this invoice?");
        if (confirmation) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/invoices/${id}`);
                setInvoices(invoices.filter(invoice => invoice.id !== id));
            } catch (error) {
                console.error('Error deleting invoice:', error);
            }
        }
    };

    const totalPages = Math.ceil(invoices.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage - 1, invoices.length - 1);
    const currentInvoices = invoices.slice(startIndex, endIndex + 1);

    return (
        <div style={{marginTop:'30px'}}>
            <div className='div-articles-ajouterArticle'>
                <div>
                    <p style={{ color: 'rgb(134, 133, 133)' }}>Invoices</p>
                </div>
                <div className='div-ajuoter-article'>
                    <Link to={'/ajouterUser'} style={{textDecoration:'none'}}>
                        <button type="button" className="btn btn-dark">Ajouter Facture</button>
                    </Link>   
            </div>
            </div>
            <div style={{ marginTop: "40px" }}>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Total</th>
                            <th>Company Name</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Client ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentInvoices.map((invoice, index) => (
                            <tr key={index}>
                                <td>{invoice.total}</td>
                                <td>{invoice.namecompany}</td>
                                <td>{invoice.produitname}</td>
                                <td>{invoice.produitprice}</td>
                                <td>{invoice.clientId}</td>
                                <td>
                                    <Link to={`/editInvoice/${invoice.id}`}>
                                        <button type="button" className="btn btn-primary"><BiEdit/></button>
                                    </Link>
                                    <button type="button" className="btn btn-danger" onClick={() => deleteInvoice(invoice.id)}>
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
