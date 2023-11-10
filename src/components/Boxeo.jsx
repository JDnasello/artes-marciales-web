import React from 'react'

const Boxeo = ({ arteSeleccionado }) => {
    return (
        <div className='container-arte-marcial'>
            <h1>Caracteristicas del <span>{arteSeleccionado.titulo}</span></h1>
            <h3>Se cree que sus inicios fueron en Grecia y la Antigua Roma. Pero el boxeo que conocemos hoy en día, fue desarrollado en el siglo XVII en Inglaterra. Algunas características son:</h3>
            <div className="caracteristicas">
                <ul>
                    <li><b>Golpes de puño:</b> El boxeo se centra en el uso de los puños para golpear al oponente, con énfasis en la técnica, precisión y potencia de los golpes.</li>
                    <li><b>Reglas:</b> Se lleva a cabo en un ring, con reglas rigurosas que prohíben ciertos tipos de golpes ilegales y establecen límites de tiempo por asaltos.</li>
                    <li><b>Técnica y defensa:</b> El boxeo se centra en la habilidad de esquivar y bloquear los golpes del oponente, además de atacar de manera efectiva.</li>
                    <li><b>Disciplina y entrenamiento</b> Requiere un riguroso entrenamiento físico, técnico y mental, que incluye resistencia cardiovascular y fuerza.</li>
                    <li><b>Popularidad mundial:</b> Es uno de los deportes de combate más seguidos y practicados en todo el mundo, con una amplia base de fanáticos.</li>
                    <li><b>Beneficios para la salud:</b> El boxeo es una forma efectiva de mantenerse en forma, mejorar la agilidad, la coordinación y la resistencia cardiovascular.</li>
                </ul>
                <div className="caracteristicas-img">
                    <img src="/artes_marciales/combate-boxeo.jpg" alt="combate de boxeo" />
                </div>
            </div>
        </div>
    )
}

export default Boxeo
