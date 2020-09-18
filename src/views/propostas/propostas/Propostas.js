import React, { useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CInputGroupPrepend,
  CDataTable,
  CRow,
  CAlert,
  CButton,
  CFormGroup,
  CInputGroup,
  CInput,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CProgress,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import {
  SendOutlined,
  WarningOutlined,
  CancelOutlined,
  CheckCircleOutlineOutlined,
  AddCircleOutlineOutlined
} from "@material-ui/icons";

import ModalFileSubmit from "../../../components/ModalFileSubmit";

import PropostasData from "./PropostasData";

const getBadge = (status) => {
  switch (status) {
    case "Enviado":
      return "primary";
    case "Expirado":
      return "warning";
    case "Declinado":
      return "danger";
    case "Aceito":
      return "success";
    default:
      return "primary";
  }
};

const fields = [
  "proposta",
  "data",
  "dataDeExpiracao",
  "valor",
  "referencias",
  "status",
];


const Propostas = () => {
  const [large, setLarge] = useState(false);
  const [orcamento, setOrcamento] = useState([]);
  const [search, setSearch] = useState("");
  const [modalFileOpen, setModalFileOpen] = useState(false);
  const [file, setFile] = useState();

  const handleChangeInputSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleChangeInputFile = (event) => {
    setFile(event.target.value);
  };

  const sent = PropostasData.filter((item) => item.status === "Enviado").length;
  const expired = PropostasData.filter((item) => item.status === "Expirado")
    .length;
  const declined = PropostasData.filter((item) => item.status === "Declinado")
    .length;
  const accept = PropostasData.filter((item) => item.status === "Aceito")
    .length;

  return (
    <>
      <CCard>
        <CCardBody>
          <CRow className="justify-content-center">
            <div className="col-sm-8 col-md-4  col-lg-4 col-xl-2">
              <div className="d-flex justify-content-between">
                <p className="d-inline">
                  Enviado <SendOutlined style={{ fontSize: "0.8rem" }} />{" "}
                </p>
                <p className="d-inline">
                  {sent}/{PropostasData.length}
                </p>
              </div>
              <CProgress
                animated={true}
                value={sent}
                max={PropostasData.length}
                showValue
                className="mb-1 bg-light"
                color="primary"
              />
            </div>
            <div className="col-sm-8 col-md-4  col-lg-4 col-xl-2">
              <div className="d-flex justify-content-between">
                <p className="d-inline">
                  Expirado <WarningOutlined style={{ fontSize: "0.8rem" }} />
                </p>
                <p className="d-inline">
                  {expired}/{PropostasData.length}
                </p>
              </div>
              <CProgress
                animated={true}
                value={expired}
                max={PropostasData.length}
                showValue
                className="mb-1 bg-light"
                color="warning"
              />
            </div>
            <div className="col-sm-8 col-md-4  col-lg-4 col-xl-2">
              <div className="d-flex justify-content-between">
                <p className="d-inline">
                  Declinado <CancelOutlined style={{ fontSize: "0.8rem" }} />
                </p>
                <p className="d-inline">
                  {declined}/{PropostasData.length}
                </p>
              </div>
              <CProgress
                animated={true}
                value={declined}
                max={PropostasData.length}
                showValue
                className="mb-1 bg-light"
                color="danger"
              />
            </div>
            <div className="col-sm-8 col-md-4  col-lg-4 col-xl-2">
              <div className="d-flex justify-content-between">
                <p className="d-inline">
                  Aceito{" "}
                  <CheckCircleOutlineOutlined style={{ fontSize: "0.8rem" }} />
                </p>
                <p className="d-inline">
                  {accept}/{PropostasData.length}
                </p>
              </div>
              <CProgress
                animated={true}
                value={accept}
                max={PropostasData.length}
                showValue
                className="mb-1 bg-light"
                color="success"
              />
            </div>
          </CRow>
        </CCardBody>
      </CCard>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader
              style={{
                flexDirection: "row",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3>Minhas Propostas</h3>
                <span>Confira aqui seus Propostas com a CONAFER BRASIL</span>
              </div>
              <div className="mr-3 ml-3">
                <CFormGroup row>
                  <CInputGroup className="align-items-center">
                    <CInput
                      id="input1-group2"
                      value={search}
                      onChange={handleChangeInputSearch}
                      name="input1-group2"
                      placeholder="Nome do Orçamento"
                    />
                    <CInputGroupPrepend>
                      <CButton
                        className="align-items-center"
                        type="button"
                        color="primary"
                      >
                        Procurar {""}
                        <CIcon name="cil-magnifying-glass" />
                      </CButton>
                    </CInputGroupPrepend>
                  </CInputGroup>
                </CFormGroup>
              </div>
              <div className="mr-3 ml-3">
                <CFormGroup row>
                  <CInputGroup className="align-items-center">
                    <CInputGroupPrepend>
                      <CButton
                        className="align-items-center"
                        type="button"
                        color="primary"
                        onClick={() => setModalFileOpen(!modalFileOpen)}
                      >
                        <AddCircleOutlineOutlined
                          style={{ fontSize: "1.1rem" }}
                        />{" "}
                        Adicionar Proposta
                      </CButton>
                    </CInputGroupPrepend>
                  </CInputGroup>
                </CFormGroup>
              </div>
              <div>
                <CInputGroup>
                  <CDropdown className="input-group-prepend">
                    <CDropdownToggle caret color="primary">
                      Filtrar
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem>Assinados</CDropdownItem>
                      <CDropdownItem>Rejeitados</CDropdownItem>
                      <CDropdownItem>Pendentes</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CInputGroup>
              </div>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={PropostasData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                clickableRows
                onRowClick={(item) => {
                  setLarge(!large);
                  setOrcamento(item);
                }}
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CModal show={large} onClose={() => setLarge(!large)} size="lg">
          <CModalHeader closeButton>
            <CModalTitle>
              {orcamento && orcamento.orcamento} [
              {orcamento && orcamento.status}]
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <div>
              {orcamento && orcamento.descricao}
              <br></br>
              <p style={{ fontSize: 9 }}>
                Criando em {orcamento && orcamento.data}
              </p>
            </div>
            {orcamento &&
              orcamento.comentatio &&
              orcamento.comentatio.map((comentario) => (
                <CAlert
                  color={
                    comentario.comentarioPai === null ? "secondary" : "success"
                  }
                >
                  {comentario.comentarioPai != null && (
                    <p>
                      EM RESPOSTA<br></br>
                    </p>
                  )}
                  <p>{comentario.comentario}</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>{comentario.feitopor}</p>
                    <p>{comentario.feitoem}</p>
                  </div>
                </CAlert>
              ))}
          </CModalBody>
          <CModalFooter>
            {orcamento && orcamento.status === "Pendente" && (
              <CButton color="primary" onClick={() => setLarge(!large)}>
                Assinar
              </CButton>
            )}
            <CButton
              color="secondary"
              onClick={() =>
                alert(
                  "Baixar arquivo de orcamento ''" +
                    orcamento.orcamento +
                    ".pdf'?"
                )
              }
            >
              Download PDF
            </CButton>
          </CModalFooter>
        </CModal>
        <ModalFileSubmit
          title="Adicionar Proposta"
          modalFileOpen={modalFileOpen}
          file={file}
          setModalFileOpen={setModalFileOpen}
          handleChangeInputFile={handleChangeInputFile}
        />
      </CRow>
    </>
  );
};

export default Propostas;
