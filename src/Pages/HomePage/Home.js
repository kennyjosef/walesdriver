import React from 'react';
import './Home.css'
import Cards from '../../Components/Cards/Cards'
import Logo2 from '../../Images/googlePlay.png';
import Logo3 from '../../Images/applePlay.png';
import Logo4 from '../../Images/walePhoto.png';
import Logo5 from '../../Images/mobileWale.svg';
import Logo6 from '../../Images/p2.svg';
import Logo7 from '../../Images/p3.svg';
import Logo8 from '../../Images/p1.svg';
import Logo9 from '../../Images/iPhone.png'
import Logo10 from '../../Images/googlePlay.png';
import Logo11 from '../../Images/applePlay.png';
import Logo12 from '../../Images/first.png';
import Logo13 from '../../Images/second.png';
import Logo14 from '../../Images/third.png';
import Logo15 from '../../Images/last.png';
import Logo16 from '../../Images/googlePlay.png';
import Logo17 from '../../Images/applePlay.png';
import Logo18 from '../../Images/Vector.png';
import Logo19 from '../../Images/googlePlay.png';
import Logo20 from '../../Images/applePlay.png';
import Logo21 from '../../Images/googlePlay.png';
import Logo22 from '../../Images/applePlay.png';
import Logo23 from '../../Images/twiiter.png';
import Logo24 from '../../Images/instagram.png';
import Logo25 from '../../Images/facebook.png';
import CardSecond from '../../Components/Cards/CardSecond';
import NavbarMenu from '../../Components/NavbarMenu/NavbarMenu';

const Home = () => {
    const title1 = 'Order a ride'
    const title2 = 'Fair prices'
    const textContent = 'Irure consectetur occaecat nostrud do Lorem cillum Irure consectetur occaecat nostrud do Lorem cillum.'
    const data = [
        {id: 1,  img: Logo6, title: title1, content: textContent  },
        {id: 2,  img: Logo7, title: title2, content: textContent  },
        {id: 3,  img: Logo8, title: title2, content: textContent  }
    ]
    const para='Irure consectetur occaecat nostrud do Lorem cillum Irure cons.'
    const data2 =[
        {id:1, logo: Logo12, text:para},
        {id:2, logo: Logo13,text:para},
        {id:3, logo: Logo14,text:para},
        {id:4, logo: Logo15,text:para}

    ]
  return (
    <>
    <NavbarMenu/>
    <div className='hero' id='top'>
        <div className="hero_article">
            <h1>Irure consectetur occaecat nostrud do Lorem cillum.</h1>
            <p>Irure consectetur occaecat nostrud do Lorem cillum Irure consectetur occaecat nostrud do Lorem cillum.</p>
            <div className='playstore'>
                <img className='googleplay' src={Logo2} alt="pic"/>
                <img className='appleplay' src={Logo3} alt="pic"/>
            </div>
        </div>
            <div className='hero_image'>
                <img className='desktop' src={Logo4} alt="pic" />
                <img className='mobile' src={Logo5} alt="pic" />
                <div className='circle'></div>
            </div>
    </div>
    {/* second section */}
    <section className='work'>
        <div className='work_article'>
            <h3 className="work_h3">How it works</h3>
            <div className="slash">
                <span className="bars"></span>
            </div>
        </div>
        <div className='work_pictures'>
            {
            data.map(item=>(
            <Cards img={item.img} title={item.title} content={item.content} key={item.key}/>
             ))
             }
        </div>
    </section>
    {/* third section */}
    <section className='ride'>
        <div className='content'>
            <div className='item1'>
                <img src={Logo9} alt="pic"/>
            </div>
            <div className='item2'>
                <h3>Get a ride in seconds!</h3>
                <div className='reverse'>
                    <p>Irure consectetur occaecat nostrud do Lorem cillum Irure consectetur occaecat nostrud do Lorem cillum.</p>
                    <div className='ride_play'>
                        <img src={Logo10} className='gplay' alt="pic"/>
                        <img src={Logo11} className='aplay' alt="pic"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* forth section */}
    <section className='offer'>
        <div>
            <h3 className='work_h3'>What we offer</h3>
            <div className='slash'>
                <span className='bars'></span>
            </div>
        </div>
        <div className='offer_items' id='offer'>
            {
                data2.map(items=>(
                    <CardSecond logo={items.logo} text={items.text} key={items.id}/>
                ))
            }
        </div>
    </section>
    <section className="booking">
        <div className="booking1">
            <h3>Get a ride in seconds!</h3>
            <p>Be your own boss and earn money as a driver</p>
            <button>Sign up to drive</button>
        </div>
        <div className="booking2">
            <h3>Sign up to drive</h3>
            <p>Download the Wales Drive app</p>
            <div class="booking_play">
                <img className="gplay" src={Logo16} alt="googlePlay"/>
                <img className="aplay" src={Logo17} alt="applePlay"/>
            </div>
        </div>
    </section>
    {/* Last Section */}
    <section className="last">
        <footer>
            <div className="foot">
                <div className="foot_img">
                    <img src={Logo18} alt="pic"/>
                </div>
                <div class="foot_play ">
                    <img className="gplay" src={Logo19} alt="googlePlay"/>
                    <img className="aplay" src={Logo20} alt="applePlay"/>
                </div>
            </div>
            <div className="footer_menu">
                <div  className="footer_menu1">
                    <h5>Our Product</h5>
                    <p>Rider</p>
                    <p>Drive</p>
                    <p>Safety</p>
                </div>
                <div className="footer_menu2">
                    <h5 id="about">About us</h5>
                    <p>Cities</p>
                    <p>Contact</p>
                </div>
            </div>
        </footer>
        <div className="foot_play block ">
            <img className="gplay" src={Logo21} alt="googlePlay"/>
            <img className="aplay" src={Logo22} alt="applePlay"/>
        </div>
        <div className="lines">

        </div>
        <div className='social_media'>
            <img src={Logo23}alt="pic"/>
            <img src={Logo24} alt="pic"/>
            <img src={Logo25} alt="pic"/>
        </div>
        
    </section>
    </>
  )
}

export default Home
