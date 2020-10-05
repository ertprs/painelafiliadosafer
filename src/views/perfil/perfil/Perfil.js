import React, { useState, useEffect } from "react";

import { mask, unMask } from "remask";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CCardTitle,
  CButton,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CForm,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInput,
  CLabel,
} from "@coreui/react";

import {
  Event,
  CreditCardOutlined,
  GroupOutlined,
  WcOutlined,
  AccountBalanceOutlined,
  PeopleOutline,
  NaturePeopleOutlined,
  AccountCircleOutlined,
} from "@material-ui/icons";

import CIcon from "@coreui/icons-react";

import PerfilData from "./PerfilData";

import styles from "./styles";

import FormularioCadastroAfiliadoPf from "../../../components/FormularioCadastroAfiliadoPF";

const Perfil = () => {
  const [openEditProfile, setOpenEditProfile] = useState(false);

  const [input, setInput] = useState({
    photo: undefined,
    name: "",
    birthDate: "",
    maritalStatus: "",
    sex: "",
    nacionality: "",
    cpf: "",
    rg: "",
    emittingOrgan: "",
    emissionDate: "",
    voterTitle: "",
    electoralZone: "",
    section: "",
    familyGroup: "",
    address: "",
    cep: "",
    city: "",
    state: undefined,
    phone: "",
    email: "",
    entityGroup: "",
    profession: "",
    agree: false,
  });

  const [fileName, setFileName] = useState("");

  useEffect(() => {
    setInput(PerfilData);
  }, []);

  const handleChangeInput = (event) => {
    const { name, value, type } = event.target;

    if (type === "tel") {
      setInput({
        ...input,
        [name]: mask(unMask(value), ["(99) 99999-9999"]),
      });
    } else {
    setInput({ ...input, [name]: value });
    }
  };

  const handleChangeInputFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInput({ ...input, [name]: value });
    setFileName(value ? value.name : "");
  };

  const toggle = () => {
    setOpenEditProfile(!openEditProfile);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <CCardTitle>Meu Perfil</CCardTitle>
              <CButton onClick={toggle} color="primary">
                Editar Perfil
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CRow className="justify-content-center">
                <img src={PerfilData.photo} style={styles.profile} alt="" />
              </CRow>
              <CRow className="mb-3">
                <CCol className="col-12">
                  <h5>Dados Pessoais</h5>
                  <hr />
                </CCol>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <CIcon name="cil-user" />
                  <strong> Nome: </strong>
                  {PerfilData.name}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <Event style={styles.icon} />
                  <strong> Data de Nascimento:</strong> {PerfilData.birthDate}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <GroupOutlined style={styles.icon} />
                  <strong> Estado Civil: </strong>
                  {PerfilData.maritalStatus}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <WcOutlined style={styles.icon} />
                  <strong> Sexo: </strong>
                  {PerfilData.sex}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <CreditCardOutlined style={styles.icon} />
                  <strong> CPF: </strong> {PerfilData.cpf}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <CreditCardOutlined style={styles.icon} />
                  <strong> RG: </strong> {PerfilData.rg}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <AccountBalanceOutlined style={styles.icon} />
                  <strong> Órgão Emissor: </strong>
                  {PerfilData.emittingOrgan}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <Event style={styles.icon} />
                  <strong> Data de Emissão: </strong>
                  {PerfilData.emissionDate}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <CreditCardOutlined style={styles.icon} />
                  <strong> Título de Eleitor: </strong>
                  {PerfilData.voterTitle}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <Event style={styles.icon} />
                  <strong> Zona Eleitoral: </strong>
                  {PerfilData.electoralZone}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <Event style={styles.icon} />
                  <strong> Seção: </strong>
                  {PerfilData.section}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <PeopleOutline style={styles.icon} />
                  <strong> Qtd Grupo ou Família: </strong>
                  {PerfilData.familyGroup}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  @ <strong>Email:</strong> {PerfilData.email}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <GroupOutlined style={styles.icon} />
                  <strong> Grupo da Entidade: </strong> {PerfilData.entityGroup}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <NaturePeopleOutlined style={styles.icon} />{" "}
                  <strong>Profissão: </strong>
                  {PerfilData.profession}
                </div>
              </CRow>
              <CRow className="mb-3">
                <CCol className="col-12">
                  <h5>Dados de Endereço</h5>
                  <hr />
                </CCol>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <CIcon name="cil-location-pin" />
                  <strong> Endereço: </strong>
                  {PerfilData.address}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <CIcon name="cil-location-pin" />
                  <strong> CEP: </strong> {PerfilData.cep}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <CIcon name="cil-location-pin" />
                  <strong> Cidade: </strong>
                  {PerfilData.city}
                </div>
                <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                  <CIcon name="cil-location-pin" />
                  <strong> Estado: </strong>
                  {PerfilData.state}
                </div>
              </CRow>
              <CRow className="d-flex justify-content-center"></CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CModal show={openEditProfile} onClose={toggle} size="xl">
        <CModalHeader closeButton>
          <CModalTitle>Editar Perfil</CModalTitle>
        </CModalHeader>
        <CForm onSubmit={handleSubmitForm}>
          <CModalBody className="row">
            {fileName && (
              <div className="mb-3 col-xl-12 col-sm-12 col-lg-12">
                <img
                  src={fileName ? URL.createObjectURL(input.photo) : ""}
                  alt=""
                  style={{ height: "250px" }}
                />
              </div>
            )}
            <CInputGroup className="mb-3 col-xl-9 col-sm-12 col-lg-9">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <AccountCircleOutlined style={styles.icon} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CLabel className="btn bg-light ml-1 mb-0">
                {fileName ? fileName : "Escolha uma foto de perfil"}
                <CInput
                  style={{ display: "none" }}
                  type="file"
                  name="photo"
                  onChange={handleChangeInputFile}
                />
              </CLabel>
            </CInputGroup>
            <FormularioCadastroAfiliadoPf
              input={input}
              handleChangeInput={handleChangeInput}
            />
          </CModalBody>
          <CModalFooter>
            <CButton type="submit" color="primary">
              Salvar
            </CButton>
            <CButton color="secondary" onClick={toggle}>
              Cancelar
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  );
};

export default Perfil;
