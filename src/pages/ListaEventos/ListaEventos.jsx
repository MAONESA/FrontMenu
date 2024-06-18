
import { useEffect, useState } from "react"
import { getEvent } from "../../app/service/Event";
const ListaEventos = () => {

  const [event, setEvent] = useState([]);

  useEffect(() => {
    renderEvent();
  }, [])

  const renderEvent = () => {
    getEvent().then((res => {
      console.log(res.data);
      setEvent(res.data);
    }))
  }

  return (
    <div>
      <h2>Lista de eventos:</h2>
      <ul>
        {event?.map(e => (
          <div key={e.id}>
            <li>Nombre: {e.eventName} ------ Fecha: {e.date}</li>
          </div>)
        )}
      </ul>
    </div>
  )
}

export default ListaEventos
