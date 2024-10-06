// import BackAll from "../home/back_of_all_page";
// import './singup.css';
// import Head from '../home/head/head';
// import { Link } from 'react-router-dom';
// export default function Singup() {
//     return (<>
//         <Head />
//         <div>
//             <h1>Custemer sing up</h1>
//             <div className='div_of_login'>
//                 <div className='div_singup'>
//                     <h2>Register Custemer</h2>
//                     <p>If you d'ont have an account, sign up.</p>
//                     <form>
//                     <div>
//                             <label>User Name<span style={{color:'red'}}>*</span></label><br />
//                             <input type='text' name='Username' className='input_login' placeholder='enter User Name' />
//                         </div>
//                         <div>
//                             <label>Phone<span style={{color:'red'}}>*</span></label><br />
//                             <input type='text' name='phone' className='input_login' placeholder='enter phone' />
//                         </div>
//                         <div>
//                             <label>Adresse<span style={{color:'red'}}>*</span></label><br />
//                             <input type='text' name='adresse' className='input_login' placeholder='enter adresse' />
//                         </div>
//                         <div>
//                             <label>Password<span style={{color:'red'}}>*</span></label><br />
//                             <input type='password' name='password' className='input_login' placeholder='enter password' />
//                         </div>
//                         <div>
//                             <label>Confirme Password<span style={{color:'red'}}>*</span></label><br />
//                             <input type='password' name='passwordConfirmer' className='input_login' placeholder='enter password confirmed' />
//                         </div>
//                         <div>
//                             <label>Email<span style={{color:'red'}}>*</span></label><br />
//                             <input type='email' name='email' className='input_login' placeholder='enter email' />
//                         </div>
//                         <div style={{marginTop:'25px'}}>
//                             <input type='submit' value={'sing up'} className='singin_button'/>
//                         </div>
//                     </form>
//                 </div>
//                <div className='div_login'>
//                 <h2>New Customer?</h2>
//                 <p>Creating an account has many benefits:</p>
//                 <ul>
//                     <li>Check out faster</li>
//                     <li>Keep more than one address</li>
//                     <li>Track orders and more</li>
//                 </ul>
//                 <Link to={'/login'}>
//                     <button className='singin_button'>Log in Account</button>
//                 </Link>
//                </div>
//             </div>
//         </div>
//         <BackAll />
//     </>)
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BackAll from "../home/back_of_all_page";
import './singup.css'; // Corrected the spelling
import Head from '../home/head/head';

export default function Signup() { // Corrected the spelling
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        passwordConfirmer: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.passwordConfirmer) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/register', formData);
            console.log('User registered:', response.data);
            alert('Registration successful');
        } catch (error) {
            console.error('There was an error registering the user!', error);
        }
    };

    return (
        <>
            <Head />
            <div>
                <h1>Customer Sign Up</h1>
                <div className='div_of_login'>
                   <div className='div_singup'>
                        <h2>Register Customer</h2>
                        <p>If you don't have an account, sign up.</p>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Username<span style={{color:'red'}}>*</span></label><br />
                                <input type='text' name='name' className='input_login' placeholder='Enter Username' value={formData.username} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Password<span style={{color:'red'}}>*</span></label><br />
                                <input type='password' name='password' className='input_login' placeholder='Enter Password' value={formData.password} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Confirm Password<span style={{color:'red'}}>*</span></label><br />
                                <input type='password' name='passwordConfirmer' className='input_login' placeholder='Confirm Password' value={formData.passwordConfirmer} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Email<span style={{color:'red'}}>*</span></label><br />
                                <input type='email' name='email' className='input_login' placeholder='Enter Email' value={formData.email} onChange={handleChange} />
                            </div>
                            <div style={{marginTop:'25px'}}>
                                <input type='submit' value={'Sign Up'} className='singin_button' />
                            </div>
                        </form>
                    </div>
                    <div className='div_login'>
                        <h2>New Customer?</h2>
                        <p>Creating an account has many benefits:</p>
                        <ul>
                            <li>Check out faster</li>
                            <li>Keep more than one address</li>
                            <li>Track orders and more</li>
                        </ul>
                        <Link to={'/login'}>
                            <button className='singin_button'>Log in Account</button>
                        </Link>
                    </div>
                </div>
            </div>
            <BackAll />
        </>
    );
}
