import { useState } from "react";
import { Box, Formulario, Titulo } from "./NuevoEvento.styles";

const NuevoEvento = () => {
  const direction = "column";
  const [perfiles, setPerfiles] = useState([]);

  return (
    <div>
      <Titulo>
        <h1>Nuevo Evento</h1>
      </Titulo>
      <Formulario>
        <Box>
          <label htmlFor="nameEvent">Nombre del Evento:</label>
          <input type="text" id="nameEvent" />
        </Box>
        <Box>
          <label htmlFor="dateEvent">Fecha del Evento:</label>
          <input type="date" id="dateEvent" />
        </Box>
        <Box>
          <label htmlFor="locationEvent">Localización del Evento:</label>
          <input type="text" id="locationEvent" />
        </Box>
        <Box direction={direction}>
          <label htmlFor="descriptionEvent">Descripción del Evento:</label>
          <textarea id="descriptionEvent" rows={10} cols={50} />
        </Box>
        <Box direction={direction}>
          <label htmlFor="usersEvent">Participantes:</label>
          <div id="usersEvent" className="participantes">
            {/* {perfiles.map{perfil=>{

    }}} */}
            {/* <button style={{width: '100%'}} onClick={()=>{inscribirPerfil}}>+</button> */}
          </div>
        </Box>
      </Formulario>
    </div>
  );
};
export default NuevoEvento;
