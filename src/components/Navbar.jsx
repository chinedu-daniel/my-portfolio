import React from 'react'

const Navbar = () => {
  return (
        <nav className='navbar'>
            <div>
                <span>Chinedu Daniel</span>
            </div>

            <div className='nav-links'>
                <a href="/" className='home'>Home</a>
                <a href="/about" id="about">About</a>
                <a href="/projects" id="projects">Projects</a>
                <a href="/skills" id="skills">Skills</a>
                <a href="/contacts" id="contacts">Contacts</a>
            </div>
            <div className='nav-button'>
                <button>Let's Connect</button>
            </div>
            
        </nav>
  )
}

export default Navbar
