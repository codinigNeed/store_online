// import './login.css';
// import BackAll from "../home/back_of_all_page";
// import Head from '../home/head/head';
// import { Link } from 'react-router-dom';
// export default function Contact() {
//     return (<>
//         <Head />
//         <div>
//             <h1>Custemer login</h1>
//             <div className='div_of_login'>
//                 <div className='div_login'>
//                     <h2>Register Custemer</h2>
//                     <p>If you have an account, sign in with your email address.</p>
//                     <form>
//                         <div>
//                             <label>Email<span style={{color:'red'}}>*</span></label><br />
//                             <input type='email' name='email' className='input_login' placeholder='enter email' />
//                         </div>
//                         <div>
//                             <label>Password<span style={{color:'red'}}>*</span></label><br />
//                             <input type='password' name='password' className='input_login' placeholder='enter password' />
//                         </div>
//                         <div style={{marginTop:'25px'}}>
//                             <input type='submit' value={'sing in'} className='singin_button'/>
//                             <span className='forgot_Pass'>Forgot Your Password?</span>
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
//                 <Link to={'/singup'}>
//                     <button className='singin_button'>Create An Account</button>
//                 </Link>
//                </div>
//             </div>
//         </div>
//         <BackAll />
//     </>)
// }
import './login.css';
import BackAll from "../home/back_of_all_page";
import Head from '../home/head/head';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    // const navigate = useNavigate('');
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', form);
            console.log('Login successful:', response.data);
            window.location.href = `http://localhost:5173/Dashpored`; // Redirect to the homepage or another page
        } catch (error) {
            console.error('There was an error logging in!', error);
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        }
    };

    return (
        <>
            <Head />
            <div>
                <h1>Customer Login</h1>
                <div className='div_of_login'>
                    <div className='div_login'>
                        <h2>Register Customer</h2>
                        <p>If you have an account, sign in with your email address.</p>
                        {error && <div className='error_message'>{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Email<span style={{ color: 'red' }}>*</span></label><br />
                                <input type='email' name='email' className='input_login' placeholder='Enter email' value={form.email} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Password<span style={{ color: 'red' }}>*</span></label><br />
                                <input type='password' name='password' className='input_login' placeholder='Enter password' value={form.password} onChange={handleChange} />
                            </div>
                            <div style={{ marginTop: '25px' }}>
                                <input type='submit' value={'Sign in'} className='singin_button' />
                                <span className='forgot_Pass'>Forgot Your Password?</span>
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
                        <Link to={'/singup'}>
                            <button className='singin_button'>Create An Account</button>
                        </Link>
                    </div>
                </div>
            </div>
            <BackAll />
        </>
    );
}
