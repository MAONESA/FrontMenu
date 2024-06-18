import { useState, useEffect } from "react";
// import eventosimg from "../../assets/eventos.jpg";
import { Container, Article } from "./DetallesEvento.styles";
import { useParams } from "react-router-dom";
import { getEventById } from "../../app/service/Event";

const DetallesEvento = () => {
  const [detallesEvento, setDetallesEvento] = useState();
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
        {/* <img src={eventosimg} /> */}
        <h2>Evento X</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sed
          suscipit, ea fugiat ducimus delectus ex velit neque corrupti, vitae
          odit numquam maxime corporis quas veritatis illum labore sunt harum?
        </p>
      </Article>
    </Container>
  );
};
export default DetallesEvento;
