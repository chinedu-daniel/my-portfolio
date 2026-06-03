import React from 'react'

const navlinks = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Projects",
        link: "/projects"
    },
    {
        name: "Skills",
        link: "/skills"
    },
    {
        name: "Contacts",
        link: "/contacts"
    }
];

const Navbar = () => {
  return (
        <nav className='navbar'>
            <div>
                <span>Chinedu Daniel</span>
            </div>

            <div className='nav-links'>
                {navlinks.map((navlink, index) => (
                    <a href={navlink.link} key={index}>
                        {navlink.name}
                    </a>
                ))}
            </div>
            
            <div className='nav-button'>
                <button>Let's Connect</button>
            </div>
            
        </nav>
  )
}

export default Navbar
