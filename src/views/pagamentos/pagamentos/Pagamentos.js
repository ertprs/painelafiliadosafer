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

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3>Mensalidades</h3>
                <span>
                  Confira aqui os status de suas mensalidades de afiliação a
                  CONAFER
                </span>
              </div>
              <div>
                <CFormGroup row>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CButton type="button" color="primary">
                        <CIcon name="cil-magnifying-glass" /> Procurar
                      </CButton>
                    </CInputGroupPrepend>
                    <CInput
                      id="input1-group2"
                      name="input1-group2"
                      placeholder="Mês referente"
                    />
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
                      <CDropdownItem>Em Aberto</CDropdownItem>
                      <CDropdownItem>Atrasado</CDropdownItem>
                      <CDropdownItem>Pago</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CInputGroup>
              </div>
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
