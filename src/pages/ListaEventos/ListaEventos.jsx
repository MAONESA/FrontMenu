import { useEffect, useState } from "react";
import { getEvent } from "../../app/services/Event";
import { Link } from "react-router-dom";
import { Container, Title, EventList, EventItem, EventDetails, DetailField, CreateButton } from './ListaEventos.styles';

const ListaEventos = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    renderEvent();
  }, []);

  const renderEvent = async () => {
    await getEvent().then((res => {
      console.log(res.data);
      setEvent(res.data);
    }));
  };

  return (
    <Container>
      <Title>Lista de eventos:</Title>
      <EventList>
        {event?.map(e => (
          <EventItem key={e.id}>
            <Link to={`/detallesevento/${e.id}`}>
              <EventDetails>
                <DetailField data-label="Nombre:">{e.eventName}</DetailField>
                <DetailField data-label="Fecha:">{e.date}</DetailField>
              </EventDetails>
            </Link>
          </EventItem>
        ))}
      </EventList>
      <Link to={'/nuevoevento'}>
        <CreateButton>Crear Evento</CreateButton>
      </Link>
    </Container>
  );
};

export default ListaEventos;
