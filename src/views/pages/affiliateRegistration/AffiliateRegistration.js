import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CCol,
  CContainer,
  CRow,
  CCardFooter,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";

import logo from "../../../assets/logo/logo-registration.png";

const AffiliateRegistration = () => {
  const [modal, setModal] = useState(false);

  const toggle = (form) => {
    setModal(!modal);
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCard>
              <CCardHeader className="text-center">
                <img
                  src={logo}
                  width="80%"
                  style={{ objectFit: "contain", marginBottom: "20px" }}
                  alt="Logo da CONAFER"
                />
                <h3>É TEMPO DE CRESCER!</h3>
              </CCardHeader>
              <CCardBody className="text-center">
                <div>
                  <h3>Área de Afiliação</h3>
                  <Link to="/affiliate-pj">
                    <CButton
                      onClick={() => toggle("PJ")}
                      color="primary"
                      className="mt-3 w-75"
                      active
                      tabIndex={-1}
                    >
                      PESSOA JURÍDICA
                    </CButton>
                  </Link>
                  <CButton
                    onClick={() => toggle("PF")}
                    color="primary"
                    className="mt-3 w-75"
                    active
                    tabIndex={-1}
                  >
                    PESSOA FÍSICA
                  </CButton>
                </div>
              </CCardBody>
              <CCardFooter className="text-center">
                <p>
                  Caso tenha alguma dúvida ou problema, consulte nosso FAQ ou
                  entre em contato
                </p>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>

      <CModal show={modal} onClose={toggle}>
        <CModalHeader closeButton>
          <h4>Deseja ter acesso ao Agro Fácil?</h4>
        </CModalHeader>
        <CModalBody>
          Preencha nosso formulário completo e tenha acesso ao Agro Fácil ou, se
          preferir, preencha nosso formulário simplificado e complete seu
          cadastro em outro momento se desejar ter acesso a ferramenta.
        </CModalBody>
        <CModalFooter className="justify-content-center">
          <Link to="/register">
            <CButton color="primary">Ir para formulário completo</CButton>{" "}
          </Link>
          <Link to="/affiliate-pf">
            <CButton color="secondary">Ir para formulário simplificado</CButton>
          </Link>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default AffiliateRegistration;
