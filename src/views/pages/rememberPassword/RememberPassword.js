import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import {
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
  CAlert,
} from "@coreui/react";

import { sendToRecoveryEmail } from "../../../redux/actions/rememberPassword";

import { successMessage, errorMessage } from "../../../redux/actions/messages";

const RememberPassword = () => {
  const dispatch = useDispatch();

  const { success, error } = useSelector((state) => state.MessagesReducer);

  const [input, setInput] = useState();

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    dispatch(sendToRecoveryEmail(input));
  };

  return (
    <div className="c-app c-default-layout align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol sm="12" md="12" lg="6" xl="6">
            <CCardGroup className="d-flex flex-wrap">
              <CCard className="p-4 w-100">
                <CCardHeader>
                  <CCardTitle>Recuperar Senha</CCardTitle>
                </CCardHeader>
                <CCardBody>
                  <CForm onSubmit={handleSubmitForm}>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>@</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChangeInput}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="12">
                        <CButton
                          color="primary"
                          type="submit"
                          className="px-4 mr-2"
                        >
                          Recuperar
                        </CButton>
                        <Link to="/">
                          <CButton color="secondary" className="px-4">
                            Voltar
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
                <CCardFooter>
                  <CAlert
                    color="success"
                    show={success}
                    onShowChange={(event) => {
                      if (success) {
                        dispatch(successMessage(event));
                      }
                    }}
                    closeButton
                  >
                    Cadastro realizado com sucesso!
                  </CAlert>
                  <CAlert
                    color="danger"
                    show={error}
                    onShowChange={(event) => {
                      if (success) {
                        dispatch(errorMessage(event));
                      }
                    }}
                    closeButton
                  >
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

export default RememberPassword;
