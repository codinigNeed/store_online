import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Articles from "./articles/article";
import AjouterArticle from "./articles/AjouterArticle";
import ModifierArticle from "./articles/ModifierArticle";
import ListClient from "./client/listClient";
import AjouterClient from "./client/ajouterClient";
import ModifierClient from "./client/ModifierClient";
import ListEmployee from "./employee/listemployee";
import AjouterEmployee from "./employee/ajouteremployee";
import ModifierEmployee from "./employee/Modifieremployee";
import {Routes,Route, Link,useNavigate} from 'react-router-dom';
import { BiBell, BiMessageSquare, BiUser,BiSearch,BiFile,BiSolidDashboard,BiMailSend,BiArchive} from 'react-icons/bi';
import { BiShoppingBag } from "react-icons/bi";
import Catigorie from "./Catigorie/Catigorie";
import AjouterCatigorie from "./Catigorie/AjouterCatigorie";
import ModifierCatigorie from "./Catigorie/ModifierCatigorie";
import User from "./User/User";
import AjouterUser from "./User/AjouterUser";
import ModifierUser from "./User/ModifierUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import Commande from "./Commande/Commande";
import ModifierFactureClient from "./Commande/ModifierFactureClient";
import Stock from "./Stock/Stock";
import Dashboard from "./dashpored/dashpored";
import Facture from './Facture/FactureClient';
import ListOrderDetails from './Commande/DetailsCmd';
function App() {

    const [sherch,setSherch] = useState(false);
    const handleSherch = (pos)=>{
        setSherch(pos);
    }
    const [afficherNotif,setAffichernotif] = useState(false);
    const afficherNotification = ()=>{
        setAffichernotif(!afficherNotif);
    }
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);
  const handleLogout = () => {
    window.location.href = 'http://localhost:3000/';
  };
    return (
     <>
     <div>
        <div className="div-head">
            <div className="div-head-premier">
                GT-stock
                
            </div>
            <div className="div-head-duexeme">
                <div className="button-sherch">
                        {sherch ?<form method="get">
                        <div className="button-sherch">
                        <input type="text" name="shercher"/>
                        <button className="icon-sherch" onClick={()=>handleSherch(true)} type="submit"><BiSearch/></button>
                        </div>
                        </form>:
                        <div className="icon-sherch" onClick={()=>handleSherch(true)}><BiSearch/></div>
                        }
                </div>
                <div className="div-icon-header">
                    <div className="icon-notification" onClick={afficherNotification}><BiBell /></div>
                    {
                        afficherNotif &&  <div className="div-of-notifications">
                            <h4>Notifications</h4>
                            <hr/>
                        </div>
                    }
                    <div className="icon-message"><BiMailSend/></div>
                    <div className="div-icon-user">
                        <div className="icon-user"><BiUser />
                        </div>
                        <div className="flex flex-col dropDownProfile">
                       <ul style={{listStyleType:'none',paddingLeft:'0px'}}>
                            <li className="li-dropDownProfile">My Acount</li>
                            <hr style={{marginBlock:'7px'}}/>
                            <li className="li-dropDownProfile">Settings</li>
                            <li className="li-dropDownProfile">Support</li>
                            <hr style={{marginBlock:'7px'}}/>
                            <li className="li-dropDownProfile" onClick={handleLogout}>Logout</li>
                       </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="div-all-body">
            <div className="home-navbar">
                <div style={{marginTop:'20px'}}>
                    <Link to={'/Dashpored'} style={{textDecoration:'none'}}>
                    <div className="div-link-user">
                        <BiSolidDashboard style={{height:'20px',width:'20px'}}/>
                        <p> dashpored</p>
                    </div>
                    </Link>
                    <Link to={'/Catigorie'} style={{textDecoration:'none'}}>
                    <div className="div-link-user">
                        <BiSolidDashboard style={{height:'20px',width:'20px'}}/>
                        <p> Catigorie</p>
                    </div>
                    </Link>
                    
                    <Link to={'/article'} style={{textDecoration:'none'}}>
                    <div className="div-link-user">
                    <BiArchive style={{height:'20px',width:'20px'}}/>
                        <p> articles</p>
                    </div>
                    </Link>
                    <Link to={'/listClient'} style={{textDecoration:'none'}}>
                    <div className="div-link-user">
                        <BiUser style={{height:'20px',width:'20px'}}/>
                        <p> Client</p>
                    </div>
                    </Link>
                    <Link to={'/listEmployee'} style={{textDecoration:'none'}}>
                    <div className="div-link-user">
                        <BiUser style={{height:'20px',width:'20px'}}/>
                        <p> Employee</p>
                    </div>
                    </Link>
                    <Link to={'/user'} style={{textDecoration:'none'}}>
                    <div className="div-link-user">
                        <BiUser style={{height:'20px',width:'20px'}}/>
                        <p> User</p>
                    </div>
                    </Link>
                    <Link to={'/Commande'} style={{textDecoration:'none'}}>
                    <div className="div-link-user">
                        <BiFile style={{height:'20px',width:'20px'}}/>
                        <p> Commande</p>
                    </div>
                    </Link>
                    <Link to={'/Facture'} style={{textDecoration:'none'}}>
                    <div className="div-link-user">
                        <BiFile style={{height:'20px',width:'20px'}}/>
                        <p> Facture</p>
                    </div>
                    </Link>
                </div>
            </div>
            <div>
               <Routes>
                <Route path="/article" element={<Articles/>} />
                <Route path="/ajouterArticle" element={<AjouterArticle/>}/>
                <Route path="/ModifierArticle/:id" element={<ModifierArticle/>}/>
                <Route path="/Catigorie" element={<Catigorie/>} />
                <Route path="/ajouterCatigorie" element={<AjouterCatigorie/>}/>
                <Route path="/ModifierCatigorie/:id" element={<ModifierCatigorie/>}/>
                <Route path="/listClient" element={<ListClient/>}/>
                <Route path="/ajouterClient" element={<AjouterClient/>}/>
                <Route path="/ModifierClient/:id" element={<ModifierClient/>}/>
                <Route path="/listEmployee" element={<ListEmployee />} />
                <Route path="/ajouterEmployee" element={<AjouterEmployee />} />
                <Route path="/modifierEmployee/:id" element={<ModifierEmployee />} />
                <Route path="/User" element={<User/>} />
                <Route path="/ajouterUser" element={<AjouterUser/>}/>
                <Route path="/ModifierUser/:id" element={<ModifierUser/>}/>
                <Route path="/ModifierFactureClient/:id" element={<ModifierFactureClient/>}/>
               <Route path="/Stock" element={<Stock/>} />
              <Route path="/Dashpored" element={<Dashboard/>}/>
                <Route path="/Commande" element={<Commande/>}/>
                <Route path="/showDetailCmd/:id" element={<ListOrderDetails/>}/>
                <Route path="/Facture" element={<Facture/>}/>
               </Routes>
            </div>
        </div>
      </div>
     </> 
     )
}

export default App;
