import React from "react";
import Topo from "../../Components/Topo";
import Produtores from "../../mocks/produtores";

import { Container, Card } from "./styles";

function home() {
  const { lista } = Produtores;
  console.log(lista);
  return (
    <>
      <Topo />
      <Container>
        Produtores
        {lista.map((e) => {
          return (
            <Card>
              <img src={e.imagem} />
              {e.nome}
            </Card>
          );
        })}
      </Container>
    </>
  );
}

export default home;
