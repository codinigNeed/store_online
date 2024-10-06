import './about.css';
import Head from '../home/head/head';
import BackAll from '../home/back_of_all_page';
export default function About(){
    return(<>
    <Head/>
    <div>
        <h1 style={{marginLeft:'90px'}}>About Us</h1>
    </div>
    <div className='div_premier_element'>
        <div style={{width:'400px',color:'white'}}>
            <h1>A Family That Keeps On Growing</h1>
            <p style={{fontFamily:'18px'}}>We always aim to please the home market, supplying
                 great computers and hardware at great prices to non-corporate customers,
                  through our large Melbourne CBD showroom and our online store.<br/><br/>

                    Shop management approach fosters a strong customer service focus in our staff.
                    We prefer to cultivate long-term client relationships rather than achieve quick sales,
                demonstrated in the measure of our long-term success.
            </p>
        </div>
        <div>
            <img src="../puctures/rectangle 54.png" className="imag_about_1"/>
        </div>
    </div> 
    <div className='div_2_element'>
        <div>
            <img src="../puctures/rectangle 11.png" className="imag_about_1"/>
        </div>
        <div style={{width:'400px'}}>
            <h1><img src="../puctures/frame 205.png" style={{width:'40px',height:'40px'}}/> shopp.com</h1>
            <p style={{fontFamily:'18px'}}>We always aim to please the home market, supplying
                 great computers and hardware at great prices to non-corporate customers,
                  through our large Melbourne CBD showroom and our online store.<br/><br/>

                    Shop management approach fosters a strong customer service focus in our staff.
                    We prefer to cultivate long-term client relationships rather than achieve quick sales,
                demonstrated in the measure of our long-term success.
            </p>
        </div>
    </div> 
    <div className='div_premier_element'>
        <div style={{width:'400px',color:'white'}}>
            <h1><img src="../puctures/Group 174.png" style={{width:'40px',height:'40px'}}/> Now You're In Safe Hands</h1>
            <p style={{fontFamily:'18px'}}>Experience a 40% boost in computing from last generation.
             MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing
              power to bring you an unparalleled gaming experience.

                *Performance compared to i7-9700. Specs varies by model.
            </p>
        </div>
        <div>
            <img src="../puctures/Mask Group1.png" className="imag_about_1"/>
        </div>
    </div> 
    <div className='div_2_element'>
        <div>
            <img src="../puctures/rectangle 13.png" className="imag_about_1"/>
        </div>
        <div style={{width:'400px'}}>
            <h1><img src="../puctures/group 175.png" style={{width:'40px',height:'40px'}}/> The Highest Quality of Products</h1>
            <p style={{fontFamily:'18px'}}>We guarantee the highest quality of the products we sell.
             Several decades of successful operation and millions of happy customers let us feel
              certain about that. Besides, all items we sell pass thorough quality control,
               so no characteristics mismatch can escape the eye of our professionals.
            </p>
        </div>
    </div> 
    <div className='div_premier_element'>
        <div style={{width:'400px',color:'white'}}>
            <h1><img src="../puctures/Group 176.png" style={{width:'40px',height:'40px'}}/> We Deliver to Any Regions</h1>
            <p style={{fontFamily:'18px'}}>
                We Deliver to Any Regions
                We deliver our goods all across Australia.
                 No matter where you live, your order will 
                 be shipped in time and delivered right to your door
                  or to any other location you have stated. The packages are 
                  handled with utmost care, so the ordered products will be handed 
                  to you safe and sound, just like you expect them to be.
            </p>
        </div>
        <div>
            <img src="../puctures/Mask Group.png" className="imag_about_1"/>
        </div>
    </div> 
    <BackAll/>
    </>)
}