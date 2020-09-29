import React from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Login = () => {
  return (
    <div className="c-app c-default-layout align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol sm="12" md="12" lg="8" xl="8">
            <CCardGroup className="d-flex flex-wrap">
              <CCard className="p-4 w-100">
                <CCardBody>
                  <CForm>
                    <h1>Painel Afiliado</h1>
                    <p className="text-muted">Faça login com sua conta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Email"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <Link to="/dashboard">
                          <CButton color="primary" className="px-4">
                            Entrar
                          </CButton>
                        </Link>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <Link to="/remember-password">
                          <CButton color="link" className="px-0">
                            Esqueceu sua senha?
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 w-100">
                <CCardBody className="text-center">
                  <img
                    src={"avatars/sistemalogo.png"}
                    width="50%"
                    style={{ objectFit: "contain" }}
                    alt="Logo da CONAFER"
                  />
                  <div>
                    <h2>Afiliar-se</h2>
                    <p>Quer se afiliar a CONAFER?</p>
                    <Link to="/sabermais">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        SAIBA MAIS!
                      </CButton>
                    </Link>
                    <Link to="/simplified-registration">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Afilia-se agora!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
