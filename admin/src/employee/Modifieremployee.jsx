import { useParams, useNavigate } from 'react-router-dom';
import './ajouteremployee.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ModifierEmployee() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        empName: '',
        emplastname: '',
        title: '',
        birthdate: '',
        adress: '',
        city: '',
        region: '',
        job: '',
        phone: '',
        salary: ''
    });

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/employees/${id}`);
                setEmployee(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchEmployee();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/employees/${id}`, employee);
            navigate("/listEmployee");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div>
                <p>Modifier Employé</p>
                <div>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='div-of-formulaire'>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="empName">Nom</label><br />
                                    <input type='text' name='empName' value={employee.empName} className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="emplastname">Prénom</label><br />
                                    <input type='text' name='emplastname' value={employee.emplastname} className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="title">Titre</label><br />
                                    <input type='text' name='title' value={employee.title} className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="birthdate">Date de Naissance</label><br />
                                    <input type='date' name='birthdate' value={employee.birthdate} className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="adress">Adresse</label><br />
                                    <input type='text' name='adress' value={employee.adress} className='form-input' onChange={handleChange} /><br />
                                </div>
                            </div>
                            <div>
                                <div className="div-label-and-input">
                                    <label htmlFor="city">Ville</label><br />
                                    <input type='text' name='city' value={employee.city} className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="region">Région</label><br />
                                    <input type='text' name='region' value={employee.region} className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="job">Travail</label><br />
                                    <input type='text' name='job' value={employee.job} className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="phone">Téléphone</label><br />
                                    <input type='text' name='phone' value={employee.phone} className='form-input' onChange={handleChange} /><br />
                                </div>
                                <div className="div-label-and-input">
                                    <label htmlFor="salary">Salaire</label><br />
                                    <input type='number' name='salary' value={employee.salary} className='form-input' onChange={handleChange} /><br />
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='btn btn-primary mr-4'>Modifier</button>
                        <button type='reset' className='btn btn-danger'>Annuler</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
