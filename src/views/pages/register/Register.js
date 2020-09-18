import React from "react";

import { CContainer } from "@coreui/react";

import RegistroSubAfiliados from "../../../components/RegistroSubAfiliados";

const Register = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <RegistroSubAfiliados title="Registro de Afiliado" />
      </CContainer>
    </div>
  );
};

export default Register;
