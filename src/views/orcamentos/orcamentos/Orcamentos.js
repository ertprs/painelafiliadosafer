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
  AddCircleOutlineOutlined,
} from "@material-ui/icons";

import OrcamentosData from "./OrcamentosData";
import ModalFileSubmit from "../../../components/ModalFileSubmit";

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
  "orcamento",
  "data",
  "dataDeExpiracao",
  "valor",
  "referencias",
  "status",
];

const Orcamentos = () => {
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

  const sent = OrcamentosData.filter((item) => item.status === "Enviado")
    .length;
  const expired = OrcamentosData.filter((item) => item.status === "Expirado")
    .length;
  const declined = OrcamentosData.filter((item) => item.status === "Declinado")
    .length;
  const accept = OrcamentosData.filter((item) => item.status === "Aceito")
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
                  {sent}/{OrcamentosData.length}
                </p>
              </div>
              <CProgress
                animated={true}
                value={sent}
                max={OrcamentosData.length}
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
                  {expired}/{OrcamentosData.length}
                </p>
              </div>
              <CProgress
                animated={true}
                value={expired}
                max={OrcamentosData.length}
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
                  {declined}/{OrcamentosData.length}
                </p>
              </div>
              <CProgress
                animated={true}
                value={declined}
                max={OrcamentosData.length}
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
                  {accept}/{OrcamentosData.length}
                </p>
              </div>
              <CProgress
                animated={true}
                value={accept}
                max={OrcamentosData.length}
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
            <CCardHeader>
              <CRow>
                <CCol sm="12" md="12" lg="4" xl="4">
                  <h3>Orçamentos</h3>
                  <span>Confira aqui seus orçamentos com a CONAFER BRASIL</span>
                </CCol>
                <CCol
                  sm="12"
                  md="12"
                  lg="2"
                  xl="2"
                  className="d-flex mt-3 justify-content-center"
                >
                  <CFormGroup>
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
                          Adicionar Orçamento
                        </CButton>
                      </CInputGroupPrepend>
                    </CInputGroup>
                  </CFormGroup>
                </CCol>
                <CCol
                  sm="12"
                  md="12"
                  lg="6"
                  xl="6"
                  className="d-flex flex-wrap align-items-center justify-content-end"
                >
                  <CFormGroup className="m-3">
                    <CInputGroup className="align-items-center">
                      <CInput
                        value={search}
                        onChange={handleChangeInputSearch}
                        name="search"
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
                  <CInputGroup className="m-3 w-25">
                    <CDropdown>
                      <CDropdownToggle caret color="primary">
                        Filtrar{" "}
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem>Assinados</CDropdownItem>
                        <CDropdownItem>Rejeitados</CDropdownItem>
                        <CDropdownItem>Pendentes</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CInputGroup>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={OrcamentosData}
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
          title="Adicionar Orçamento"
          modalFileOpen={modalFileOpen}
          file={file}
          setModalFileOpen={setModalFileOpen}
          handleChangeInputFile={handleChangeInputFile}
        />
      </CRow>
    </>
  );
};

export default Orcamentos;
