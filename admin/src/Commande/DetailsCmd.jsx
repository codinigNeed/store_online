import './FactureClient.css';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import axios from 'axios';

const itemsPerPage = 4;

export default function ListOrderDetails() {
    const [orderDetails, setOrderDetails] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/order-details');
                const filteredData = response.data.filter(it => it.orderID == id);
                setOrderDetails(filteredData);
                console.log(filteredData);
            } catch (err) {
                console.error('Error:', err);
            }
        };
        getData();
    }, []);
    console.log(id);
        console.log(orderDetails);
    const supprimer = async(id) => {
        const confirmation = window.confirm(
          "Êtes-vous sûr(e) de vouloir supprimer ce détail de commande ?"
        );
        if (confirmation) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/order-details/${id}`);
                setOrderDetails(orderDetails.filter(detail => detail.id !== id));
            } catch (err) {
                console.error(err);
            }
            console.log(orderDetails);
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(orderDetails.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage - 1, orderDetails.length - 1);
    const currentOrderDetails = orderDetails.slice(startIndex, endIndex + 1);

    return (
        <div>
            <div className='div-articles-ajouterArticle'>
                <div>
                    <p style={{color: 'rgb(134, 133, 133)'}}>Détails de Commandes</p>
                </div>
                <div className='div-ajuoter-article'>
                    <Link to={'/ajouterOrderDetail'} style={{textDecoration: 'none'}}>
                        <button type="button" className="btn btn-dark">Ajouter Détail Commande</button>
                    </Link>
                </div>
            </div>
            <div style={{marginTop: "40px"}}>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Total</th>
                            <th>Quantité</th>
                            <th>Produit</th>
                            <th>Commande</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentOrderDetails.map((detail, index) => (
                            <tr key={index}>
                                <td>{detail.total}</td>
                                <td>{detail.quantity}</td>
                                <td>{detail.product_id}</td>
                                <td>{detail.orderID}</td>
                                <td>
                                    <Link to={`/modifierOrderDetail/${detail.id}`}>
                                        <button type="button" className="btn btn-primary">
                                            <BiEdit style={{color: 'white'}} className='mr-5'/>
                                        </button>
                                    </Link>
                                    <button type="button" className="btn btn-danger" onClick={() => supprimer(detail.id)}>
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
