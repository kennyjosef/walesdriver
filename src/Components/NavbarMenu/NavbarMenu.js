import React from 'react'
import './NavbarMenu.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavbarMenu = () => {
    const [toggle, setToggle] = useState(true)

    function handleClick(){
        return setToggle(preToggle=> !preToggle)
    }
  return (
    <div>
        <header className='header'>
        <nav>
            <div>
                <h3 className='logo'>LOGO</h3>
                {/* <h3>Wales Drive</h3> */}
            </div>
            <ul className={toggle? ' ul' : 'navShow'}>
                    <Link to='/'>Home</Link>
                    <Link to='/'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/ipsum'>Ipsum</Link>
            </ul>
            <div className='hamburger' onClick={handleClick} >
                {toggle?<span>&#9776;</span>:<span>&times;</span>
                }
            </div>

        </nav>
        </header>
    </div>
  )
}

export default NavbarMenu
