import { useState } from "react";
import { Box, Formulario, Titulo } from "./NuevoEvento.styles";
import { createEvent } from "../../app/services/Event";
import { useNavigate } from "react-router-dom";

const NuevoEvento = () => {

  const direction = 'column';
  // const [perfiles, setPerfiles] = useState([])
  const [nameEvent, setNameEvent] = useState();
  const [dateEvent, setDateEvent] = useState();
  const [locationEvent, setLocationEvent] = useState();
  const [descriptionEvent, setDescriptionEvent] = useState();
  const navigate = useNavigate();

  const handleCreateEvent = async () => {
    try {
      const response = await createEvent({ date: dateEvent, eventName: nameEvent, locationEvent, descriptionEvent });
      if (response.status === 200) {
        navigate('/listaeventos')
      } else {
        alert('No se ha podido crear el evento');
      }
    } catch (error) {
      alert('No se ha podido crear el evento');
    }
  }

  return <div>
    <Titulo>
      <h1>Nuevo Evento</h1>
    </Titulo>
    <Formulario>
      <Box>
        <label htmlFor="nameEvent">Nombre del Evento:</label>
        <input type="text" id="nameEvent" onChange={(e) => setNameEvent(e.target.value)} />
      </Box>
      <Box>
        <label htmlFor="dateEvent">Fecha del Evento:</label>
        <input type="date" id="dateEvent" onChange={(e) => setDateEvent(e.target.value)} />
      </Box>
      <Box>
        <label htmlFor="locationEvent">Localización del Evento:</label>
        <input type="text" id="locationEvent" onChange={(e) => setLocationEvent(e.target.value)} />
      </Box>
      <Box direction={direction}>
        <label htmlFor="descriptionEvent">Descripción del Evento:</label>
        <textarea id="descriptionEvent" rows={10} cols={50} onChange={(e) => setDescriptionEvent(e.target.value)} />
      </Box>
      <Box direction={direction}>
        <label htmlFor="usersEvent">Participantes:</label>
        <div id="usersEvent" className="participantes">
          {/* {perfiles.map{perfil=>{

    }}} */}
          {/* <button style={{width: '100%'}} onClick={()=>{inscribirPerfil}}>+</button> */}
        </div>
      </Box>
      <button onClick={handleCreateEvent}>Crear</button>
    </Formulario>
  </div>
};
export default NuevoEvento;
