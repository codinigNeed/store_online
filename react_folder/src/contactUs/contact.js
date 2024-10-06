import './contact.css';
import BackAll from "../home/back_of_all_page";
import Head from '../home/head/head';
export default function Contact(){
    return(<>
    <Head />
    <div className='div_of_page_contact'>
        <div>
            <div>
                <h1>Contact Us</h1>
                <p>We love hearing from you, our Shop customers.<br/>
                Please contact us and we will make sure to get back to you as soon as we possibly can.</p> 
            </div>
            <div>
                <form>
                    <div style={{display:'flex',justifyContent:'flex-start',gap:'1rem'}}>
                        <div> <label>Your Name</label><br/>
                        <input type="text" name='name' placeholder="your name" className="input_of_contactUs"/>
                    </div>
                    <div>
                        <label className="label_of_contactUs">Your Email</label><br/>
                        <input type="text" name='email' placeholder="your name" className="input_of_contactUs"/><br/><br/>
                    </div>
                    </div>
                    <label className="label_of_contactUs">Your Phone number</label><br/>
                    <input type="text" name='phone' placeholder="your name" className="input_of_contactUs"/><br/><br/>
                    <label className="label_of_contactUs">Your Adress</label><br/>
                    <input type="text"name='adress' placeholder="your name" className="input_of_contactUs"/><br/><br/>
                    <label className="label_of_contactUs">What is your mind</label><br/>
                    <textarea cols={72} rows={10} name='mind'></textarea><br/>
                    <input type="submit" value='submit' className='button_submit'/>
                </form>
            </div>
        </div>
        <div className='div_of_adress'>
            <div style={{display:'flex',justifyContent:'flex-start',gap:'6px'}}>
                <div><img src="../puctures/bx_bx-time4.png" className="image_of_adress"/></div>
                <div>
                    <p>Adress:</p><p>1234 Street Adress City Address, 1234</p>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-start',gap:'6px'}}>
                <div><img src="../puctures/bx_bx-time.png" className="image_of_adress"/></div>
                <div>
                    <p style={{fontSize:'large'}}>Email:</p><p>mohammedElhilaly@gmail.com</p>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-start',gap:'6px'}}>
                <div><img src="../puctures/bx_bx-time1.png" className="image_of_adress"/></div>
                <div>
                    <p>Times:</p><p>in the 05:00AM AT 24:00PM</p>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-start',gap:'6px'}}>
                <div><img src="../puctures/bx_bx-time2.png" className="image_of_adress"/></div>
                <div>
                    <p>Phone:</p><p>+112 702232674,+112 703925432</p>
                </div>
            </div>
        </div>
    </div>
    <BackAll/>
    </>)
}