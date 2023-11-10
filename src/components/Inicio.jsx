import { useEffect } from "react"
import Aos from "aos"
import { Link } from "react-router-dom"


const Inicio = () => {

    useEffect(() => {
    Aos.init()
    }, [])

    return (
        <>
            <div className="container-inicio">
                <div data-aos="fade-up" data-aos-duration="1300" data-aos-once={true}>
                    <h1>Somos un equipo dedicado a enseñar distintos tipos de artes marciales y defensa personal.</h1>
                    <h2>NUNCA ES TARDE PARA EMPEZAR</h2>
                    <Link to="/explorar"><button>Comenzar ahora</button></Link>
                </div>
            </div>
        </>
    )
}

export default Inicio
