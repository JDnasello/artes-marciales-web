import React from 'react'

const KickBoxing = ({ arteSeleccionado }) => {
    return (
        <div className='container-arte-marcial'>
            <h1>Caracteristicas del <span>{arteSeleccionado.titulo}</span></h1>
            <h3>Originario de Japón y Estados Unidos. Algunas características son:</h3>
            <div className="caracteristicas">
                <ul>
                    
                    <li><b>Golpe de manos y piernas:</b> El Kickboxing se centra en el uso de puñetazos y patadas para atacar al oponente.</li>
                    <li><b>Versatilidad en el combate:</b> Los luchadores pueden utilizar una amplia gama de técnicas de golpeo, incluyendo puñetazos rectos, ganchos, patadas altas y bajas.</li>
                    <li><b>Estilos variados:</b> Existen varias modalidades de Kickboxing, como el Full Contact, el K-1, y el Kickboxing orientado a la defensa personal, lo que permite a los practicantes elegir el enfoque que mejor se adapte a sus objetivos.</li>
                    <li><b>Enfoque en la forma física:</b> El Kickboxing es un deporte que ayuda a desarrollar la fuerza, la velocidad, la resistencia y la agilidad.</li>
                    <li><b>Aplicación deportiva y recreativa</b> Además de competir, el Kickboxing se utiliza para mantenerse en forma, ganar confianza y aprender habilidades de autodefensa.</li>
                    <li><b>Popularidad mundial:</b> Es un deporte ampliamente practicado en todo el mundo, con una comunidad de seguidores y competidores en crecimiento.</li>
                    <li><b>Beneficios para la salud:</b> El Kickboxing es una excelente forma de ejercicio cardiovascular que contribuye a mejorar la condición física general.</li>
                    
                </ul>
                <div className='caracteristicas-img'>
                    <img src="/artes_marciales/combate-kickboxing.jpg" alt="combate de kickboxing" width={300} />
                </div>
            </div>
        </div>
    )
}

export default KickBoxing
