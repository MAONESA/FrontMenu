import { useState } from "react";
import { Box, Formulario, Titulo } from "./NuevoEvento.styles";
import { Button, Modal } from 'antd';

const NuevoEvento = () => {
  const direction = 'column';
  const [perfiles, setPerfiles] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

  <Box direction={direction}>
  <label htmlFor="descriptionEvent">Descripción del Evento:</label>
  <textarea id="descriptionEvent" rows={10} cols={50}/>
  </Box>
  
  <Box direction={direction}>
  <label htmlFor="usersEvent">Participantes:</label>
  <div id="usersEvent" className="participantes">
    {/* {perfiles.map{perfil=>{

    }}} */}

  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={(_) => (
          <>
            <Button type="primary">Añadir</Button>
          </>
        )}
>
        <input type="text" placeholder="Nombre del participante" style={{width:'100%'}}/>
        
  </Modal>
    
  <Button type="primary" onClick={showModal} style={{width:'100%'}}>+</Button>
  </div>
  </Box>
  </Formulario>

</div>
};
export default NuevoEvento;
