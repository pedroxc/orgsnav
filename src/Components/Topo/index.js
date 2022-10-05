import React from "react";
import logo from "../../assets/icons/logo.png";

import { Container, Imagem } from "./styles";

function Topo() {
  return (
    <Container>
      <Imagem src={logo} />
      <div>OLá Pedro</div>
      <span>Econtre os produtores mais próximos de você!</span>
    </Container>
  );
}

export default Topo;
