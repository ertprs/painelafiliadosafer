import React, { useState, useEffect } from "react";
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

import { Link } from "react-router-dom";

import OrcamentosData from "./OrcamentosData";

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

const fieldsComentarios = ["comentario", "feitopor", "feitoem"];

const Orcamentos = () => {
  const [large, setLarge] = useState(false);
  const [orcamento, setOrcamento] = useState([]);

  const [progress, setProgress] = useState({
    sent: 0,
    expired: 0,
    declined: 0,
    accepted: 0,
  });

  useEffect(() => {
    OrcamentosData.forEach((item) => {
      if (item.status === "Enviado") {
        setProgress({ ...progress, sent: progress.sent + 1 });
      } else if (item.status === "Expirado") {
        setProgress({ ...progress, sent: progress.expired + 1 });
      } else if (item.status === "Declinado") {
        setProgress({ ...progress, sent: progress.declined + 1 });
      } else if (item.status === "Aceito") {
        setProgress({ ...progress, sent: progress.accepted + 1 });
      }
    });
  }, []);

  return (
    <>
      <CCard>
        <CCardBody>
          <CRow className="justify-content-center">
            <div className="col-sm-8 col-md-4  col-lg-4 col-xl-2">
              <p>
                Enviado
              </p>
              <CProgress
                animated={true}
                value={progress.sent}
                showValue
                className="mb-1 bg-light"
                color="primary"
              />
            </div>
            <div className="col-sm-8 col-md-4  col-lg-4 col-xl-2">
              <p>Expirado</p>
              <CProgress
                animated={true}
                value={progress.expired}
                showValue
                className="mb-1 bg-light"
                color="warning"
              />
            </div>
            <div className="col-sm-8 col-md-4  col-lg-4 col-xl-2">
              <p>Declinado</p>
              <CProgress
                animated={true}
                value={progress.declined}
                showValue
                className="mb-1 bg-light"
                color="danger"
              />
            </div>
            <div className="col-sm-8 col-md-4  col-lg-4 col-xl-2">
              <p>Aceito</p>
              <CProgress
                animated={true}
                value={progress.accepted}
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
                <h3>Meus Orçamentos</h3>
                <span>Confira aqui seus Orçamentos com a CONAFER BRASIL</span>
              </div>
              <div className="mr-3 ml-3">
                <CFormGroup row>
                  <CInputGroup>
                    <CInput
                      id="input1-group2"
                      name="input1-group2"
                      placeholder="Nome do Orçamento"
                    />
                    <CInputGroupPrepend>
                      <CButton
                        className="align-items-center"
                        type="button"
                        color="primary"
                      >
                        Procurar <CIcon name="cil-magnifying-glass" />
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
            {orcamento && orcamento.status == "Pendente" && (
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
      </CRow>
    </>
  );
};

export default Orcamentos;
