import React, { useState } from "react";
import './App.css';
import Connec from "./connection";
import BackAll from "./back_of_all_page";
//import Shopping from "./shopping";
import Head from "./head/head";
import Cart from "./cart";
import Body1 from "./body_of_home/body1";
import Computer from './pc/pc';
import Desktop from "./desktops/desk";
import Sumsung from "./sumsung/sumsung";
import Redmi from "./redmi/redmi";
import Chaise from "./chaise/chaise";
import Iapad from "./iapad/iapad";
import Custome from "./custome/custome";
import Login from "./login";
import { ShoppingCart } from "phosphor-react";
import { Route,Routes,Link, BrowserRouter } from "react-router-dom";
import Monitor from "./gamingMonitors/monitor";

export default function App(){
    const [id,setid] = useState('');
    const handleshid = (id) =>{
        setid(id)
        console.log(id);
    }
    const [count,setCount] = useState(1);
    const redmi = ()=>{
        setCount(2);
    }
    const chaise = ()=>{
        setCount(3);
    }
    const sumsung = ()=>{
        setCount(4);
    }
    const iapad = ()=>{
        setCount(5);
    }
    return(<>
     <div>
        <Head />
        <Body1/>
    </div> 
    <div> <Custome/></div>
    <div> <Computer/></div>
    <div>
        <div style={{display:"flex",gap:40,padding:20,paddingLeft:40}}>
            <div onClick={redmi} style={{cursor:'pointer'}}>redmi</div>
            <div to={'/chaize'} onClick={chaise} style={{cursor:'pointer'}}>chaize</div>
            <div to={'/sumsung'} onClick={sumsung} style={{cursor:'pointer'}}>sumsung</div>
            <div to={'/iapad'} onClick={iapad}style={{cursor:'pointer'}}>iapad</div>
        </div>
    </div>
     <Routes>
        {/*<Route path="/" element={<Shopping handleid={handleshid} />}></Route>*/}
        {/* <Route path="/cart" element={<Cart id={id}/>}/> */}
        <Route path="/connix" element={<Connec/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/redmi" element={<Redmi />}/>
        <Route path="/chaise" element={<Chaise />}/>
        <Route path="sumsung" element={<Sumsung />}/>
        <Route path="/iapad" element={<Iapad />}/>
    </Routes>
        {count === 2 &&<div><Redmi /></div>}
        {count === 3 &&<div><Chaise /></div>}
        {count === 4 &&<div><Sumsung /></div>}
        {count === 5 &&<div><Iapad /></div>}
    <div><Desktop /></div>
    <div><Monitor/></div>
    <div style={{display:'flex',justifyContent:'space-around',marginTop:'60px'}}>
        <div>
            <img src="./puctures/Frame 22.png" className="home_puctures_frame"/>
        </div>
        <div>
            <img src="./puctures/Frame 23.png" className="home_puctures_frame"/>
        </div>
        <div>
            <img src="./puctures/Frame 24.png" className="home_puctures_frame"/>
        </div>
        <div>
            <img src="./puctures/Frame 25.png" className="home_puctures_frame"/>
        </div>
        <div>
            <img src="./puctures/Frame 27.png" className="home_puctures_frame"/>
        </div>
        <div>
            <img src="./puctures/Frame 34.png" className="home_puctures_frame"/>
        </div>
    </div>
    <div>
        <p style={{fontSize:'22px',marginLeft:'55px'}}>Follow us on Instagram for News, Offers & More</p>
    </div>
    <div>
        <div className="divs_of_images_follow_me_as">
            <div className="div_images_follow_me_as">
            <img src="./puctures/image 29.png" className="image_follow_me_as"/>
            <p>If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            </div>
            <div className="div_images_follow_me_as">
            <img src="./puctures/image 30.png" className="image_follow_me_as"/>
            <p>If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            </div>
            <div className="div_images_follow_me_as">
            <img src="./puctures/image 31.png" className="image_follow_me_as"/>
            <p>If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            </div>
            
            <div className="div_images_follow_me_as">
            <img src="./puctures/image 35.png" className="image_follow_me_as"/>
            <p>If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            
            </div>
            <div className="div_images_follow_me_as">
            <img src="./puctures/image 36.png" className="image_follow_me_as"/>
            <p>If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            
            </div>
            <div className="div_images_follow_me_as">
            <img src="./puctures/image 37.png" className="image_follow_me_as"/>
            <p>If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            
            </div>
            <div className="div_images_follow_me_as">
            <img src="./puctures/image 38.png" className="image_follow_me_as"/>
            <p>If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            
            </div>
        </div>
    </div>
        <BackAll/>
    </>)
}