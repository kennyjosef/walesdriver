import React from 'react'
import './Nav.css'
import Logo from '../../Images/icons8-menu.svg'
import { Link } from 'react-router-dom'

const Nav = () => {   
  return (
       <div>
        <header>
            <nav id='navbar' className='navbar'>
                <div className='logo' id='show'>
                    <h3 className='dont_show'>LOGO</h3>
                    <h3 className='show'>Wales Drive</h3>
                </div>
                <ul className='menu' id='menu'>
                    <Link to='/'>Home</Link>
                    <Link to='/'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/ipsum'>Ipsum</Link>
                </ul>
                <div className='navbar-toggle' id='navbar_toggle'>
                  <span className='close' id='close'>&times;</span>:<img id='bars' src={Logo} alt="pic"/>
                </div>
                
            </nav>
        </header>
       </div>
  )
}

export default Nav
