import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

import logo from '../img/logo-artes-marciales.png'

const NavBar = () => {

    const [headerScroll, setHeaderScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHeaderScroll(true)
            } else {
                setHeaderScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
        <header className={headerScroll ? 'header-scroll' : null}>
                <img
                    src={logo}
                    alt="artes marciales olavarria"
                    className='logo' />
                <div>
                    <nav>
                        <NavLink className={(estaActivo) => estaActivo ? "link-activo" : null} to='/'>Inicio</NavLink>
                        <NavLink className={(estaActivo) => estaActivo ? "link-activo" : null} to='/explorar'>Explorar</NavLink>
                        <NavLink className={(estaActivo) => estaActivo ? "link-activo" : null} to='/contacto'>Contacto</NavLink>
                    </nav> 
                </div>  
        </header>        
        </>    
    )
}

export default NavBar
