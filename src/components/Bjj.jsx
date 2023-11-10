import React, { useEffect } from 'react'
import Aos from 'aos'

const Bjj = ({ arteSeleccionado }) => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className='container-arte-marcial'>
            <h1>Caracteristicas del <span>{arteSeleccionado.titulo}</span></h1>
            <h3>El Jiu Jitsu Brasileño es un arte marcial desarrollado en Brasil y proveniente de Japón. Se caracteriza por:</h3>
            <div className="caracteristicas">
                <ul>
                    <li><b>Enfoque en la técnica:</b> Se centra en el uso de la técnica y la habilidad en lugar de la fuerza bruta, lo que lo hace adecuado para personas de diferentes tamaños y niveles de condición física.</li>
                    <li><b>Lucha en el suelo:</b> El Jiu Jitsu se desarrolla principalmente en el suelo, con énfasis en las técnicas de sumisión, estrangulamientos y luxaciones.</li>
                    <li><b>Grappling:</b>  Involucra la lucha cuerpo a cuerpo, donde los practicantes buscan someter o controlar a su oponente mediante agarres y posicionamiento.</li>
                    <li><b>Gi (Kimono):</b> A menudo se practica con un uniforme similar a un kimono, lo que permite una mayor variedad de agarres y estrangulamientos.</li>
                    <li><b>Cinturones:</b> Los practicantes avanzan en el sistema de cinturones, desde el cinturón blanco (inicial) hasta el cinturón negro (más alto), a través de la adquisición de habilidades y experiencia.</li>
                    <li><b>Desarrollo personal:</b> Además de ser un deporte competitivo, el Jiu Jitsu promueve el crecimiento personal, la disciplina y la resiliencia.</li>
                    <li><b>Popularidad global:</b> Ha ganado popularidad en todo el mundo, con una comunidad de seguidores y competidores en constante crecimiento.</li>
                </ul>

                <h2>Sistema de cinturones</h2>
                <div className='cinturones-bjj'
                    data-aos={window.innerWidth >= 768 ? 'fade-right' : null}
                    data-aos-duration={window.innerWidth >= 768 ? 1600 : null}
                    data-aos-once={true}>
                    <div className="columna">
                        <div className="nombre-cinturon">
                            <p>Cinturón blanco</p>
                        </div>
                        <div className="nombre-cinturon">
                        <p>Cinturón azul</p>
                        </div>
                        <div className="nombre-cinturon">
                        <p>Cinturón violeta</p>
                        </div>
                        <div className="nombre-cinturon">
                        <p>Cinturón marrón</p>
                        </div>
                        <div className="nombre-cinturon">
                        <p>Cinturón negro</p>
                        </div>
                    </div>

                    <div className="columna">
                        <div className="img-cinturon">
                            <img src="/artes_marciales/cinturon-blanco-bjj.jpg" alt="cinturon blanco" />
                        </div>
                        <div className="img-cinturon">
                            <img src="/artes_marciales/cinturon-azul-bjj.jpg" alt="cinturon azul" />
                        </div>
                        <div className="img-cinturon">
                            <img src="/artes_marciales/cinturon-violeta-bjj.jpg" alt="cinturon violeta" />
                        </div>
                        <div className="img-cinturon">
                            <img src="/artes_marciales/cinturon-marron-bjj.jpg" alt="cinturon marron" />
                        </div>
                        <div className="img-cinturon">
                            <img src="/artes_marciales/cinturon-negro-bjj.jpg" alt="cinturon negro" />
                        </div>
                    </div>    
                </div>
                <div className="caracteristicas-img">
                    <img src="/artes_marciales/combate-bjj.jpg" alt="combate de bjj" width={350}/>
                </div>
            </div>
        </div>
    )
}

export default Bjj
