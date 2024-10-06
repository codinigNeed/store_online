import { useState } from "react";
import './App.css';
export default function Login (){
    const [name, setName] = useState('');
    const [farstname, setfirstname] = useState('');
    const [lastname, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cin, setcin] = useState('');
    const [ville, setville] = useState('');
    const [gennre, setgennre] = useState('');
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
const renderErrorMessage = (name) =>
name === errorMessages.name && (
<div className="error">{errorMessages.message}</div>
);
const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, upass } = document.forms[0];
    setName(uname.value);
    const userData = database.find((user) => user.username === 
    uname.value);
    if (userData) {
    if (userData.password !== upass.value) {
    setErrorMessages({ name: "upass", message: errors.upass });
    } else {
    setIsSubmitted(true);
    }
    } else {
    setErrorMessages({ name: "uname", message: errors.uname });
    }
    }
    const database = [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" }
        ];
        const errors = { 
        uname: "Votre identifiant est incorrect.", 
        upass: "Votre mot de passe est incorrect."
        };
const renderForm = (
    <div className="login-form">
    <div className="title">Connexion</div>
    <div className="form">
    <form onSubmit={handleSubmit}>
    <div className="input-container">
    <label>first name </label>
    <input type="text" name="uname" value={farstname} onChange={(e)=>setfirstname(e.target.value)} required />
{renderErrorMessage("uname")}
</div>
<div className="input-container">
<label>last name</label>
<input type="password" name="upass" value={lastname} onChange={(e)=>setlastName(e.target.value)}  required />
{renderErrorMessage("upass")}
</div>
<div className="input-container">
    <label>Email </label>
    <input type="text" name="uname" value={email} onChange={(e)=>setemail(e.target.value)} required />
{renderErrorMessage("uname")}
</div>
<div className="input-container">
    <label>mot de passe </label>
    <input type="text" name="uname" value={password} onChange={(e)=>setpassword(e.target.value)} required />
{renderErrorMessage("uname")}
</div>
<div className="input-container">
    <label>cin </label>
    <input type="text" name="uname" value={cin} onChange={(e)=>setcin(e.target.value)} required />
{renderErrorMessage("uname")}
</div>
<div className="input-container">
    <label>ville </label>
    <input type="text" name="uname" value={ville} onChange={(e)=>setville(e.target.value)} required />
{renderErrorMessage("uname")}
</div>
<div className="input-container">
    <label>gennre</label>
    <input type="text" name="uname" value={gennre} onChange={(e)=>setgennre(e.target.value)} required />
{renderErrorMessage("uname")}
</div>

<div className="button-container">
<input type="submit" value="Se connecter" />
</div>
</form>
</div>
</div>
);
    return(
    <div className="app">
{isSubmitted ? <div><div
className="title">Accueil</div><div>Bonjour {name}</div></div> : renderForm}
</div>);
}