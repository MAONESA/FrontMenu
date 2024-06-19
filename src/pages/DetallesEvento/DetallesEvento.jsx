import React, { useState, useEffect } from "react";
import eventosimg from "../../assets/eventos.jpg";
import { Container, Article, Message } from "./DetallesEvento.styles";
import { useParams } from "react-router-dom";
import { getEventById } from "../../app/services/Event";

const DetallesEvento = () => {
  const [detallesEvento, setDetallesEvento] = useState({});
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
      {detallesEvento && detallesEvento.eventName ? (
        <Article>
          {/* <img src={eventosimg} alt="Evento" /> */}
          <h2>{detallesEvento.eventName}</h2>
          <p>{detallesEvento.descripcion || "Descripción del evento."}</p>
        </Article>
      ) : (
        <Message>No hay ningún evento disponible.</Message>
      )}
    </Container>
  );
};

export default DetallesEvento;
