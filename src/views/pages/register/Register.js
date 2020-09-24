import { Container } from "@material-ui/core";
import React from "react";

import RegistroSubAfiliados from "../../../components/RegistroSubAfiliados";

const Register = () => {
  return (
      <Container className="c-app c-default-layout d-flex align-items-center">
        <RegistroSubAfiliados title="Registro de Afiliado" />
      </Container>
  );
};

export default Register;
