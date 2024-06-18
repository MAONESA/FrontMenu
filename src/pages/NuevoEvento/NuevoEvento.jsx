import { Box, Formulario, Titulo } from "./NuevoEvento.styles";

const NuevoEvento = () => {

  return <div>
    <Titulo>
  <h1>Nuevo Evento</h1>
  </Titulo>
  <Formulario>
    <Box>
  <label htmlFor="nameEvent">Nombre del Evento:</label>
  <input type="text" id="nameEvent"/>
  </Box>
  <Box>
  <label htmlFor="dateEvent">Fecha del Evento:</label>
  <input type="date" id="dateEvent"/>
  </Box>
  <Box>
  <label htmlFor="locationEvent">Localización del Evento:</label>
  <input type="text" id="locationEvent"/>
  </Box>
  <Box>
  <label htmlFor="usersEvent">Participantes:</label>
  <div id="usersEvent" className="participantes">
  </div>
  </Box>
  </Formulario>
  <button>+</button>
</div>
};
export default NuevoEvento;
