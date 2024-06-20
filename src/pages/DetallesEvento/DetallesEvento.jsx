import { useState, useEffect } from "react";
import { Container, Article } from "./DetallesEvento.styles";
import { useParams } from "react-router-dom";
import { getEventById } from "../../app/services/Event";

const DetallesEvento = () => {
  const [detallesEvento, setDetallesEvento] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getEventById(id).then((res) => {
      setDetallesEvento(res.data);
      console.log(res.data);
    });
  }, [id]);

  return (
    <Container>
      <h1>Detalles del Evento</h1>
      <Article>
        <h2>{detallesEvento.eventName}</h2>
        <p>Fecha: {detallesEvento.date}</p>
        <p>Localidad: {detallesEvento.locationEvent}</p>
        <p>Descripción: {detallesEvento.descriptionEvent}</p>
      </Article>
    </Container>
  );
};

export default DetallesEvento;
