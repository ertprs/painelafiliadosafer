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
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import contratosData from "./ContratosData";

const getBadge = (status) => {
  switch (status) {
    case "Assinado":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pendente":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = ["nome", "criado", "assinado", "status"];

const Contratos = () => {
  const [large, setLarge] = useState(false);
  const [contrato, setContrato] = useState(null);
  const [search, setSearch] = useState("");

  const handleChangeInputSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol sm="12" md="12" lg="6" xl="6">
                  <h3>Contratos</h3>
                  <span>Confira aqui seus contratos com a CONAFER BRASIL</span>
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
                        placeholder="Nome do Contrato"
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
                      <CDropdownToggle caret split={true} color="primary">
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
                items={contratosData}
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
                  setContrato(item);
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
              {contrato && contrato.nome} [{contrato && contrato.status}]
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p>
              {contrato && contrato.descricao}
              <br></br>
              <p style={{ fontSize: 9 }}>
                Criando em {contrato && contrato.criado}
              </p>
            </p>
            {contrato &&
              contrato.comentatio &&
              contrato.comentatio.map((comentario) => (
                <CAlert
                  color={
                    comentario.comentarioPai == null ? "secondary" : "success"
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
            {contrato && contrato.status === "Pendente" && (
              <CButton color="primary" onClick={() => setLarge(!large)}>
                Assinar
              </CButton>
            )}
            <CButton
              color="secondary"
              onClick={() =>
                alert(
                  "Baixar arquivo de contrato ''" + contrato.nome + ".pdf'?"
                )
              }
            >
              Download PDF
            </CButton>
          </CModalFooter>
        </CModal>
      </CRow>
    </>
  );
};

export default Contratos;
