import React from "react";
import { mask, unMask } from "remask";
import { useDispatch } from "react-redux";

import {
  CButton,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";

import {
  AccountBalanceOutlined,
  PhoneOutlined,
  MarkunreadMailboxOutlined,
  EventOutlined,
  RoomOutlined,
  AlternateEmailOutlined,
} from "@material-ui/icons";

import styles from "../../constants/styles";
import { editSyndicate } from "../../redux/actions/syndicate";
import SearchGoogleMaps from "../SearchGoogleMaps";

const ModalFormSindicato = ({ show, setShow, input, setInput }) => {
  const dispatch = useDispatch();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(editSyndicate(input));
    setShow(!show);
  };

  const handleChangeInput = (event) => {
    const { name, value, type } = event.target;

    if (type === "tel") {
      setInput({ ...input, [name]: mask(unMask(value), ["(99) 99999-9999"]) });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  return (
    <CModal show={show} size="lg">
      <CModalHeader closeButton>
        <CModalTitle>Editar Dados</CModalTitle>
      </CModalHeader>
      <CForm onSubmit={handleSubmitForm}>
        <CModalBody>
          <CRow>
            <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <AccountBalanceOutlined style={styles.icon} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                type="text"
                name="sindicato"
                title="Sindicato"
                placeholder="Sindicato"
                value={input.sindicato}
                onChange={handleChangeInput}
                required
              />
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <AlternateEmailOutlined style={styles.icon} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                type="text"
                name="email"
                title="E-mail"
                placeholder="E-mail"
                value={input.email}
                onChange={handleChangeInput}
                required
              />
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <PhoneOutlined style={styles.icon} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                type="tel"
                name="tel"
                value={input.tel}
                title="Telefone"
                placeholder="Telefone"
                onChange={handleChangeInput}
                required
              />
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <MarkunreadMailboxOutlined style={styles.icon} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                type="text"
                name="cnpj"
                title="CNPJ"
                placeholder="CNPJ"
                value={input.cnpj}
                onChange={handleChangeInput}
                required
              />
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <RoomOutlined style={styles.icon} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <SearchGoogleMaps input={input} setInput={setInput} />
            </CInputGroup>

            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <EventOutlined style={styles.icon} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                type="text"
                name="open"
                title="Data de Abertura"
                placeholder="Data de Abertura"
                value={input.open}
                onChange={handleChangeInput}
                onFocus={(event) => (event.currentTarget.type = "date")}
                onBlur={(event) => (event.currentTarget.type = "text")}
                required
              />
            </CInputGroup>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" type="submit">
            Salvar
          </CButton>
          <CButton color="secondary" onClick={() => setShow(!show)}>
            Cancelar
          </CButton>
        </CModalFooter>
      </CForm>
    </CModal>
  );
};

export default ModalFormSindicato;
