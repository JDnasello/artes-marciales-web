import { useEffect } from "react"
import { Link } from "react-router-dom"
import Aos from "aos"
import 'aos/dist/aos'

import { lista } from "../data/listaArtesMarciales"

const Explorar = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="explorar">
            <div>
                <h2 className="frase">"En el tatami de la vida, cada técnica perfeccionada y cada obstáculo superado te llevan un paso más cerca de convertirte en la mejor versión de ti mismo."</h2>
                <h1 data-aos={window.innerWidth >= 768 ? 'fade-up' : null}
                    data-aos-duration={window.innerWidth >= 768 ? '1600' : null}
                    data-aos-once={true}>
                    Descubre tu arte marcial
                </h1>
            </div>
            <div className={`container-artes-marciales`}
                data-aos={window.innerWidth >= 768 ? "fade-up" : null}
                data-aos-duration={window.innerWidth >= 768 ? 1600 : null}>
            {
                lista.map(arte =>
                    <div key={arte.id} className="container-individual" style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(/artes_marciales/${arte.nombre}.jpg)`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center"
                    }}>
                        <div className="titulo-descripcion">
                            <h2>{arte.titulo}</h2>
                            <h4>{arte.descripcionBreve}</h4>
                        </div>    
                        <Link to={`/artes/${arte.id}`}><button>Investigar</button></Link>
                    </div>
                )
            }
        </div>
        </div>
    )
}

export default Explorar
