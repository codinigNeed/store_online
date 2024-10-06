import './ajouterUser.css';
import { Link,useParams,useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
export default function ModifierUser(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setuser] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/users/${id}`);
                setuser(response.data);
            } catch (err) {
                console.log('Error:', err);
            }
        };
        getData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value });
    };
    console.log(user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/users/${id}`, user);
            navigate('/User'); // Rediriger vers la liste des articles après la modification
        } catch (err) {
            console.log('Error:', err);
        }
    };

    return(
       <div>
          <div>
                <p>Modifier User</p>
                <div>
                <form method='post' onSubmit={handleSubmit}>
                <div className='div-of-formilaire'>
                        <div>
                            <div className="div-label-and-input" >
                                <label htmlFor="">Nom et Prénom</label><br/>
                                <input type='text' name='Nom' placeholder='entrer un image' className='form-input' value={user.Nom} onChange={handleChange}/><br/>
                            </div>
                            <div className="div-label-and-input" >
                                <label htmlFor="">Email</label><br/>
                                <input type='text' name='Email' placeholder='entrer un image' className='form-input' value={user.Email} onChange={handleChange}/><br/>
                            </div>
                            <div className="div-label-and-input" >
                                <label htmlFor="">Password</label><br/>
                                <input type='text' name='Password' placeholder='entrer un image' className='form-input' value={user.Password} onChange={handleChange}/><br/>
                            </div>
                            
                        </div>
                        <div>
                            <div className="div-label-and-input" >
                                <label htmlFor="">User Name</label><br/>
                                <input type='text' name='Nom_User' placeholder='entrer un image' className='form-input' value={user.Nom_User} onChange={handleChange}/><br/>
                            </div>
                            <div className="div-label-and-input" >
                                <label htmlFor="">avatar Path</label><br/>
                                <input type='text' name='Avatar_Path' placeholder='entrer un image' className='form-input' value={user.Avatar_Path} onChange={handleChange}/><br/>
                            </div>
                            <div className="div-label-and-input" >
                                <label htmlFor="">Role</label><br/>
                                <select className='select-form' name='Role' value={user.Role} onChange={handleChange}>
                                    <option>fjdsl</option>
                                    <option>fjdsl</option>
                                    <option>fjdsl</option>
                                </select>
                              </div>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mr-4'>Modifier</button>
                    <button type='reset' className='btn btn-danger'>Annuler</button>
                </form>
                </div>
            </div>
       </div>
    )
}