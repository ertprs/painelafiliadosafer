import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CIcon from "@coreui/icons-react";
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardTitle,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";

import { registration } from "../../../redux/actions/simplifiedRegistration";

const SimplifiedRegistration = () => {
  const dispatch = useDispatch();

  const { success, error } = useSelector(
    (state) => state.SimplifiedRegistrationReducer
  );

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [passwordIncorrect, setPasswordIncorrect] = useState(false);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (input.password !== input.password2) {
      setPasswordIncorrect(true);
    } else {
      dispatch(registration(input));
    }
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setInput({ ...input, [name]: value });
  };

  return (
    <div className="c-app c-default-layout align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol sm="12" md="12" lg="8" xl="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardHeader>
                  <CCardTitle>Cadastre-se</CCardTitle>
                </CCardHeader>
                <CCardBody>
                  <CForm onSubmit={handleSubmitForm}>
                    <CRow>
                      <CInputGroup className="mb-3 mb-3 col-sm-12 col-md-6  col-lg-6 col-xs-6">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          name="name"
                          placeholder="Nome"
                          title="Nome"
                          onChange={handleChangeInput}
                          required
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3 col-sm-12 col-md-6  col-lg-6 col-xs-6">
                        <CInputGroupPrepend>
                          <CInputGroupText>@</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          name="email"
                          placeholder="Email"
                          title="Email"
                          onChange={handleChangeInput}
                          required
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3 mb-3 col-sm-12 col-md-6  col-lg-6 col-xs-6">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="password"
                          name="password"
                          placeholder="Digite uma senha"
                          title="Digite uma senha"
                          onChange={handleChangeInput}
                          required
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3 mb-3 col-sm-12 col-md-6  col-lg-6 col-xs-6">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="password"
                          name="password2"
                          placeholder="Digite a mesma senha novamente"
                          title="Digite a mesma senha novamente"
                          onChange={handleChangeInput}
                          onFocus={() => setPasswordIncorrect(false)}
                          style={
                            passwordIncorrect
                              ? {
                                  backgroundColor: "orange",
                                  borderColor: "red",
                                }
                              : {}
                          }
                        />
                      </CInputGroup>
                    </CRow>
                    <CRow className="mt-2">
                      <CCol xs="12">
                        <CButton color="primary" type="submit" className="px-4">
                          Cadastrar
                        </CButton>
                        <Link to="/">
                          <CButton color="secondary" className="px-4 ml-2">
                            Voltar
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
                <CCardFooter>
                  <CAlert color="success" show={success} closeButton>
                    Cadastro realizado com sucesso!
                  </CAlert>
                  <CAlert color="danger" show={error} closeButton>
                    Ocorreu um erro em seu cadastro!
                  </CAlert>
                </CCardFooter>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default SimplifiedRegistration;
