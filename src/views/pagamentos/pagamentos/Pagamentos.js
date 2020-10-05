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

import pagamentoData from "./PagamentosData";

const getBadge = (status) => {
  switch (status) {
    case "Pago":
      return "success";
    case "Em Aberto":
      return "secondary";
    case "Pendente":
      return "warning";
    case "Atrasado":
      return "danger";
    default:
      return "primary";
  }
};

const fields = [
  "numero",
  "mesreferente",
  "recebido",
  "vencimento",
  "via",
  "status",
];

const Pagamentos = () => {
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
                <CCol sm="12" md="12" lg="4" xl="4">
                  <h3>Mensalidades</h3>
                  <span>
                    Confira aqui os status de suas mensalidades de afiliação a
                    CONAFER
                  </span>
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
                        placeholder="Mês da mensalidade"
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
                        Filtrar
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
                items={pagamentoData}
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
              Mensalidade mês de {contrato && contrato.mesreferente} [
              {contrato && contrato.status}]
            </CModalTitle>
          </CModalHeader>
          <CModalBody></CModalBody>
          <CModalFooter>
            {contrato && contrato.status === "Pago" && (
              <CButton
                color="primary"
                onClick={() => {
                  alert(
                    "Download recibo pagamento mês " +
                      contrato.mesreferente +
                      ".pdf?"
                  );
                  setLarge(!large);
                }}
              >
                Download RECIBO
              </CButton>
            )}
            <CButton
              color="secondary"
              onClick={() =>
                alert(
                  "Baixar arquivo de boleto mensalidade do mês''" +
                    contrato.mesreferente +
                    ".pdf'?"
                )
              }
            >
              Download BOLETO
            </CButton>
          </CModalFooter>
        </CModal>
      </CRow>
    </>
  );
};

export default Pagamentos;
