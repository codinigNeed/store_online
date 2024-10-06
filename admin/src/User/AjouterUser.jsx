import './ajouterUser.css';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
export default function AjouterUser(){
    const navigate = useNavigate();
    const [user,setuser] = useState({
});
const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
};
console.log(user);
const handleSubmit = async (e)=>{
    e.preventDefault();
        await axios.post(`http://localhost:5000/users/create`,user)
          .then((result) => {
            console.log(result);
            navigate("/User");
          })
          .catch((err) => console.error(err));
      };
    return(
       <div>
         <div>
                <p>Ajouter Emplacement</p>
                <div>
                <form method='post' onSubmit={handleSubmit}>
                    <div className='div-of-formilaire'>
                        <div>
                            <div className="div-label-and-input" >
                                <label htmlFor="">Email</label><br/>
                                <input type='text' name='Email' placeholder='entrer un image' className='form-input' value={user.Email} onChange={handleChange}/><br/>
                            </div>
                            <div className="div-label-and-input" >
                                <label htmlFor="">Password</label><br/>
                                <input type='text' name='Password' placeholder='entrer un image' className='form-input' value={user.Password} onChange={handleChange}/><br/>
                            </div>
                            <div className="div-label-and-input" >
                                <label htmlFor="">User Name</label><br/>
                                <input type='text' name='Nom_User' placeholder='entrer un image' className='form-input' value={user.Nom_User} onChange={handleChange}/><br/>
                            </div>
                            <div className="div-label-and-input" >
                                <label htmlFor="">Role</label><br/>
                                <select className='select-form' name='Role' value={user.Role} onChange={handleChange}>
                                    <option value={'admin'}>admin</option>
                                    <option value={'owner'}>owner</option>
                                </select>
                              </div>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mr-4'>Ajouter</button>
                    <button type='reset' className='btn btn-danger'>Annuler</button>
                </form>
                </div>
            </div>
       </div>
    )
}