import './seeallpc/seeallpc.css';
export default function BackAll(){
    return(<>
    <div className="div-saving-account-support">
         <div className="product-saving">
            <img src="../puctures/Support.png" className="puctures-support"/>
           <p style={{color:'black',fontSize:'18px'}}>Product Support</p>
           <p>Up to 3 years on-site warranty availaible<br/> for your peace of mind.</p>
        </div>
         <div className="product-saving">
            <img src="../puctures/Account.png" className="puctures-support"/>
            <p style={{color:'black',fontSize:'18px'}}>Personal Account</p>
           <p>With big discounts, free delivery and a<br/> dedicated support specialist.</p>
       
        </div>
        <div className="product-saving">
            <img src="../puctures/Saving.png" className="puctures-support"/>
            <p style={{color:'black',fontSize:'18px'}}>Amazing Savings</p>
           <p>Up to 70% off new Products, you <br/>can be sure of the best price.</p>
        </div>
    </div>
    <div className="navbar-continer">
            <div className="sing-subscrube">
                <div>
                <p className="sing_up_to">Sign Up To Our Newsletter.</p>
                </div>
                <div>
                <input type="text" placeholder='adress-email' className="input_subs"/><button className="btn-subscrube">Subscribe</button>
                </div>
            </div>
            <div className="div-navbar">
                <div>
                    <div style={{marginLeft:'39px'}}>Information</div>
                    <div>
                        <ul>
                        <li>About Us</li>
                        <li>About Zip</li>
                        <li>Privacy Policy</li>
                        <li>Search</li>
                        <li>Terms</li>
                        <li>Orders and Returns</li>
                        <li>Contact Us</li>
                        <li> Advanced Search</li>
                        <li> Newsletter Subscription</li>

                        </ul>
                       </div>
                </div>
                <div>
                    <div style={{marginLeft:'39px'}}>PC Parts</div>
                    <div>
                        <ul>
                        <li>CPUS</li>
                    <li>Add On Cards</li>
                    <li>Hard Drives (Internal)</li>
                    <li>Graphic Cards</li>
                    <li>Keyboards / Mice</li>
                    <li>Cases / Power Supplies / Cooling</li>
                    <li>RAM (Memory)</li>
                    <li>Software</li>
                    <li>Speakers / Headsets</li>
                    <li>Motherboards</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div style={{marginLeft:'39px'}}>Desktop PCs</div>
                    <div>
                        <ul>
                        <li>Custom PCs</li>
                    <li>Servers</li>
                    <li>MSI All-In-One PCs</li>
                    <li>HP/Compaq PCs</li>
                    <li>ASUS PCs</li>
                    <li>Tecs PCs</li>
                        </ul>
                   </div>
                </div>
                <div>
                    <div style={{marginLeft:'39px'}}>Laptops</div>
                    <div>
                        <ul>
                        <li>Evryday Use Notebooks</li>
                        <li>MSI Workstation Series</li>
                        <li>MSI Prestige Series</li>
                        <li>Tablets and Pads</li>
                        <li>Netbooks</li>
                        <li>Infinity Gaming Notebooks</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='hr' style={{ color:'rgba(255, 255, 255, 0.514)'}}/>
            <div style={{display:'flex',justifyContent:'center',gap:'0.5rem'}}>
                <div>
                    <img src="./puctures/american-express.png" className="imag-bank"/>
                </div>
                <div>
                    <img src="./puctures/BANK-OF-AFRICA.webp" className="imag-bank"/>
                </div>
                <div>
                    <img src="./puctures/CIH-BANK.webp" className="imag-bank"/>
                </div>
                <div>
                    <img src="./puctures/paypal.png" className="imag-bank"/>
                </div>
                <div>
                    <img src="./puctures/discover.png" className="imag-bank"/>
                </div>
                <div>
                    <img src="./puctures/visa.png" className="imag-bank"/>
                </div>
              </div>
    </div>
    </>)
}