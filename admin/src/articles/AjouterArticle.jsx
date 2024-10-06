// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function AjouterArticle() {
//     const navigate = useNavigate();
//     const [values, setValues] = useState({
//         produitname: '',
//         quantity: 0,
//         price: 0,
//         instock: false,
//         imag: '',
//         categorie_id: 0,
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValues({ ...values, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/products', values);
//             console.log(response.data); // Assuming the response returns the created article
//             navigate('/article');
//         } catch (error) {
//             console.error('Error adding article:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Ajouter un Article</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="produitname">Nom du Produit</label><br />
//                     <input type="text" name="produitname" value={values.produitname} onChange={handleChange} /><br />
//                 </div>
//                 <div>
//                     <label htmlFor="quantity">Quantité</label><br />
//                     <input type="number" name="quantity" value={values.quantity} onChange={handleChange} /><br />
//                 </div>
//                 <div>
//                     <label htmlFor="price">Prix</label><br />
//                     <input type="number" name="price" value={values.price} onChange={handleChange} /><br />
//                 </div>
//                 <div>
//                     <label htmlFor="instock">En Stock</label><br />
//                     <input type="checkbox" name="instock" checked={values.instock} onChange={() => setValues({ ...values, instock: !values.instock })} /><br />
//                 </div>
//                 <div>
//                     <label htmlFor="imag">Image</label><br />
//                     <input type="text" name="imag" value={values.imag} onChange={handleChange} /><br />
//                 </div>
//                 <div>
//                     <label htmlFor="categorie_id">Catégorie ID</label><br />
//                     <input type="number" name="categorie_id" value={values.categorie_id} onChange={handleChange} /><br />
//                 </div>
//                 <button type="submit">Ajouter</button>
//                 <button type="button" onClick={() => navigate('/article')}>Annuler</button>
//             </form>
//         </div>
//     );
// }
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ajouterArticle.css';

export default function AjouterArticle() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        produitname: '',
        inscription:'',
        quantity: 0,
        price: 0,
        instock: false,
        categorie_id: 0,
    });
    const [imageFile, setImageFile] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const validateForm = () => {
        let formErrors = {};
        if (!values.produitname) formErrors.produitname = "Le nom du produit est requis";
        if (!values.inscription) formErrors.inscription = "Le nom du produit est requis";
        if (values.quantity <= 0) formErrors.quantity = "La quantité doit être supérieure à 0";
        if (values.price <= 0) formErrors.price = "Le prix doit être supérieur à 0";
        if (!values.categorie_id) formErrors.categorie_id = "L'ID de la catégorie est requis";
        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        const formData = new FormData();
        formData.append('produitname', values.produitname);
        formData.append('inscription', values.inscription);
        formData.append('quantity', values.quantity);
        formData.append('price', values.price);
        formData.append('instock', values.instock ? 1 : 0); // Fix instock value
        formData.append('categorie_id', values.categorie_id);
        if (imageFile) {
            formData.append('imag', imageFile);
        }

        try {
            const response = await axios.post('http://localhost:8000/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data); // Assuming the response returns the created article
            navigate('/article');
        } catch (error) {
            console.error('Error adding article:', error);
            if (error.response && error.response.data) {
                console.error('Server error response:', error.response.data);
            }
        }
    };

    return (
        <div className="ajouter-article-container">
            <h2 className="ajouter-article-heading">Ajouter un Article</h2>
            <form className="ajouter-article-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="produitname">Nom du Produit</label>
                    <input type="text" name="produitname" value={values.produitname} onChange={handleChange} className="form-control" />
                    {errors.produitname && <span className="error">{errors.produitname}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="inscription">Inscription</label>
                    <input type="text" name="inscription" value={values.inscription} onChange={handleChange} className="form-control" />
                    {errors.inscription && <span className="error">{errors.inscription}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantité</label>
                    <input type="number" name="quantity" value={values.quantity} onChange={handleChange} className="form-control" />
                    {errors.quantity && <span className="error">{errors.quantity}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="price">Prix</label>
                    <input type="number" name="price" value={values.price} onChange={handleChange} className="form-control" />
                    {errors.price && <span className="error">{errors.price}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="instock">En Stock</label>
                    <input type="checkbox" name="instock" checked={values.instock} onChange={() => setValues({ ...values, instock: !values.instock })} className="form-check-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="imag">Image</label>
                    <input type="file" name="imag" onChange={handleImageChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="categorie_id">Catégorie ID</label>
                    <input type="number" name="categorie_id" value={values.categorie_id} onChange={handleChange} className="form-control" />
                    {errors.categorie_id && <span className="error">{errors.categorie_id}</span>}
                </div>
                <div className="buttons">
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                    <button type="button" onClick={() => navigate('/article')} className="btn btn-secondary">Annuler</button>
                </div>
            </form>
        </div>
    );
}
