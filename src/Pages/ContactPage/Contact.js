import React  from 'react'
import './Contact.css'
import C1 from '../../Images/C1.png'
import C2 from '../../Images/C2.png'
import C3 from '../../Images/C3.png'
import Nav from '../../Components/Navbar/Nav'
// import C4 from '../../Images/icons8-menu.svg'
const Contact = () => {

  // condition ? statement : statement
  return (
    <div className='cont'>
      <section className='sectn'>
        <Nav/>
      <div class="contact_hero">
            <h3>Get In Touch</h3>
            <p>Tell us how we can help and we’ll get in touch shortly</p>
      </div>
      </section>
      <div className='contact_form'>
        <form action=''>
          <div className='items1'>
            <div  className='control'>
              <label for="firstName">First Name</label> <br/>
              <input type="text" name="firstName" id="firstName" required/>
              <small id='badMessage'></small>
            </div>
            <div className='control'>
              <label for="lastName">Last Name</label> <br/>
              <input type="text" name="lastName" id="lastName" required/>
              <small id='badMessage'></small>
            </div>
          </div>
          <div className='items2'>
            <div className='control'>
              <label for="companyName">Company Name</label> <br/>
              <input type="text" name="companyName" id="companyName" required/>
              <small id='badMessage'></small>
            </div>
            <div className='control'>
              <label for="message">Message</label> <br/>
              <input type="text" name="message" id="message" required/>
              <small id='badMessage'></small>
            </div>
            <div className='btn' id='btn'>
              <button id='signUp'>Submit</button>
            </div>
          </div>
        </form>
      </div>
      {/* next */}
      <footer className='footers'>
      <div>
            <a href="./index.html"><h2>LOGO</h2></a>
        </div>
        <div>
            <h3>Our Products</h3>
            <p>Ride</p>
            <p>Drive</p>
            <p>Buses</p>
        </div>
        <div>
            <h3>About us</h3>
            <p>Contact us</p>
            <p>Privacy policy</p>
            <p>Buses</p>
        </div>
        <div className="footers_text">
            <h3>Address</h3>
            <p>Deserunt laboris consectetur laboris esse exercitation reprehenderit la</p>
        </div>
        <div className="footers_text">
            <h3>Contact</h3>
            <p>Deserunt laboris consectetur laboris esse exercitation rep</p>
        </div>
        <div>
          <h3>Follow us on social media</h3>
          <div className='facebook'>
            <img src={C1} alt='pic'/>
            <p>.</p>
            <img src={C2} alt='pic'/>
            <p>.</p>
            <img src={C3} alt='pic'/>
          </div>
        </div>
      </footer>
      <div class="pink"></div>
      <h1>thisis </h1>

    </div>
  )
}

export default Contact
