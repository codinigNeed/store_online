import '../Stock/Stock.css';
import { Link } from 'react-router-dom';
import { BiShow } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { stock } from '../Stock/tablestock';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useState } from 'react';
export default function Stock(){
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(stock.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage - 1, stock.length - 1);
    const currentstock = stock.slice(startIndex, endIndex + 1);
    return(
        <div> 
             
            <div style={{marginTop:"40px"}}>
            <div>
                    <p style={{color:'rgb(134, 133, 133)',margin:'0px'}}>Etat de stock</p>
                </div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>image Produit</th>
            <th>Catigorie</th>
            <th>Nom Produit</th>
            <th>Quantity D'achat</th>
            <th>Quantity Vendu</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody> 
            {
                currentstock.map((it,index)=>{
                    return(<tr key={index}>
                            <td>{it.nomProduit}</td>
                            <td>{it.nomProduit}</td>
                            <td>{it.nomProduit}</td>
                            <td>{it.quantitydachat}</td>
                            <td>{it.quantityvendu}</td>
                            <td>{it.quantity}</td>
                    </tr>)
                })
            }
        </tbody>
      </table>
            </div>
            <div>
            <footer className="card-footer d-flex justify-content-start align-items-center p-2"> {/* Utilizing Bootstrap classes */}
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="btn btn-light"><BsChevronLeft/>Previos</button> {/* Using Bootstrap button classes */}
            <span className="mx-2"><button className='btn btn-primary'>{currentPage}</button></span> {/* Using Bootstrap margin utility class */}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="btn btn-light">Next<BsChevronRight/></button> {/* Using Bootstrap button classes */}
            </footer>
            </div>
        </div>
    )
}