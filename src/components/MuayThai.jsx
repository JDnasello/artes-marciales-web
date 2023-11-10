import React from 'react'

const MuayThai = ({ arteSeleccionado }) => {
    return (
        <div className='container-arte-marcial'>
            <h1>Caracteristicas del <span>{arteSeleccionado.titulo}</span></h1>
            <h3>El Muay Thai, también conocido como Thai Boxing, es un arte marcial y deporte de combate originario de Tailandia. Sus principales características son:</h3>
            <div className='caracteristicas'>
                <ul>
                    <li><b>Técnicas de golpeo:</b> El Muay Thai se enfoca en el uso de puños, codos, rodillas y piernas para golpear al oponente.</li>
                    <li><b>Clinch:</b> Los luchadores pueden agarrarse mutuamente en el clinch para realizar golpes y rodillazos desde una posición cercana.</li>
                    <li><b>Potencia y resistencia:</b> Requiere fuerza, agilidad y resistencia cardiovascular, ya que los combates pueden ser intensos y prolongados.</li>
                    <li><b>Tradición y cultura:</b> El Muay Thai tiene una rica herencia cultural en Tailandia, con rituales y simbolismo en cada combate.</li>
                    <li><b>Disciplina y entrenamiento:</b>  Se enfatiza la formación rigurosa, que incluye entrenamiento físico, técnico y mental.</li>
                    <li><b>Popularidad mundial:</b> Es uno de los deportes de contacto más populares en todo el mundo, con una creciente base de seguidores y competidores.</li>
                    <li><b>Beneficios para la salud:</b> Practicar Muay Thai puede mejorar la condición física, la confianza y la disciplina personal.</li>
                </ul>
                <div className='caracteristicas-img'>
                    <img src="/artes_marciales/sport-action-muay-thai-fight.jpg" alt="combate de Muay Thai" width={300}/>
                </div>
            </div>
        </div>
    )
}

export default MuayThai
