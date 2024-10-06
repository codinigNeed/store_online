import React from "react";
import { Route, Routes } from "react-router-dom";
import Apphome from './home/App';
import Allpc from './home/seeallpc/allpc';
import Cart from "./cart/cart";
import Single from "./singleproduit/single";
import Contact from "./contactUs/contact";
import About from "./aboutUs/AboutUs";
import Login from "./loginPage/login";
import CartShopp from "./choppingCart2/cartShopp";
import CheckOut from "./checkOut_1/checkOut";
import Singup from "./singUp/singup";
import AllCustome from "./home/seeallcustome/allcustome";
import AllDesktop from "./home/seealldesktop/alldesktop";
import AllGamingMontor from "./home/seeallgamingmonitors/allgamingmonitor";
import AllIapad from "./home/seealliapad/alliapad";
import AllRedmi from "./home/seeallredmi/allredmi";
import AllSumsung from "./home/seeallsumsung/allsumsung";
import Payment from './Payment/payment';
export default function App(){
    return(<>
    <Routes>
        <Route path="/" element={<Apphome />}/>
        <Route path="/Allpc" element={<Allpc />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/single/:id" element={<Single/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/AboutUs" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/cartShopp2" element={<CartShopp/>}/>
        <Route path="/checkOut" element={<CheckOut/>}/>
        <Route path="/singup" element={<Singup/>}/>
        <Route path="/Allcustome" element={<AllCustome/>}/>
        <Route path="/Alldesktop" element={<AllDesktop/>}/>
        <Route path="/Allgamingmontor" element={<AllGamingMontor/>}/>
        <Route path="/Alliapad" element={<AllIapad/>}/>
        <Route path="/Allredmi" element={<AllRedmi/>}/>
        <Route path="/Allsumsung" element={<AllSumsung/>}/>
        <Route path="/payment" element={<Payment/>}/>
    </Routes>
    </>)
}