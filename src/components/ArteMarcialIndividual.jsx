import { useParams } from "react-router-dom";

import { lista } from "../data/listaArtesMarciales";
import MuayThai from "./MuayThai";
import KickBoxing from "./KickBoxing"
import Boxeo from "./Boxeo";
import Bjj from "./Bjj"

const ArteMarcialIndividual = () => {

    const { arteid } = useParams()
    const arteSeleccionado = lista.find(arte => arte.id === parseInt(arteid))

    if (!arteSeleccionado) {
        console.log('No se encuentra el arte marcial')
    }

    return (
        <div style={{backgroundColor: "#f1f1f1"}}>
            {arteSeleccionado.id === 1 && <MuayThai arteSeleccionado={arteSeleccionado} />}
            {arteSeleccionado.id === 2 && <KickBoxing arteSeleccionado={arteSeleccionado} />}
            {arteSeleccionado.id === 3 && <Boxeo arteSeleccionado={arteSeleccionado} />}
            {arteSeleccionado.id === 4 && <Bjj arteSeleccionado={arteSeleccionado} />}
        </div>
    )
}

export default ArteMarcialIndividual;

