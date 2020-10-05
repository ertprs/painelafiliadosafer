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
  CForm,
  CLabel,
  CTextarea,
  CSelect,
  CInputFile,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import suporteData from "./SuporteData";

const getBadge = (status) => {
  switch (status) {
    case "Concluído":
      return "success";
    case "Em Andamento":
      return "secondary";
    case "Aberto":
      return "warning";
    default:
      return "primary";
  }
};
const fields = ["descricao", "criado", "ultimaresposta", "status"];

const Suporte = () => {
  const [openSuport, setopenSuport] = useState(false);
  const [large, setLarge] = useState(false);
  const [suporte, setsuporte] = useState(null);
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
                  <h3>Suporte</h3>
                  <span>
                    Tem uma dúvida? Conta pra gente e acompanha aqui o
                    resultado.
                  </span>
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
                          className="d-flex align-items-center"
                          type="button"
                          color="primary"
                          onClick={() => setopenSuport(!openSuport)}
                        >
                          ABRIR CHAMADO
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
                        placeholder="Nome do Chamado"
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
                        <CDropdownItem>Concluído</CDropdownItem>
                        <CDropdownItem>Aberto</CDropdownItem>
                        <CDropdownItem>Em andamento</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CInputGroup>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={suporteData}
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
                  setsuporte(item);
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
              Chamado nº {suporte && suporte.id} [{suporte && suporte.status}]
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p>
              {suporte && suporte.descricao}
              <br></br>
              <p style={{ fontSize: 9 }}>
                Criando em {suporte && suporte.criado}
              </p>
            </p>
            {suporte &&
              suporte.respostas &&
              suporte.respostas.map((resposta) => (
                <CAlert
                  key={resposta.id}
                  color={resposta.type === 0 ? "secondary" : "success"}
                >
                  {resposta.respostaPai != null && (
                    <p>
                      EM RESPOSTA<br></br>
                    </p>
                  )}
                  <div>{resposta.text}</div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>{resposta.feitopor}</p>
                    <p>{resposta.feitoem}</p>
                  </div>
                </CAlert>
              ))}
            {suporte && suporte.status === "Aberto" && (
              <div>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Novo Comentário</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="9"
                      placeholder="Mensagem de comentário..."
                    />
                    <CButton color="primary" onClick={() => setLarge(!large)}>
                      Adicionar Comentário
                    </CButton>
                  </CCol>
                </CFormGroup>
              </div>
            )}
          </CModalBody>

          <CModalFooter>
            <CButton color="secondary" onClick={() => setLarge(!large)}>
              Fechar
            </CButton>
          </CModalFooter>
        </CModal>
        <CModal
          show={openSuport}
          onClose={() => setopenSuport(!openSuport)}
          size="lg"
        >
          <CModalHeader closeButton>
            <CModalTitle>Abrir Novo Chamado</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm
              action=""
              method="post"
              encType="multipart/form-data"
              className="form-horizontal"
            >
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Chamado em nome de</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Meu Nome</p>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="textarea-input">Dúvida</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                    title="Mensagem da dúvida"
                    name="doubt"
                    rows="9"
                    placeholder="Mensagem da dúvida..."
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="select">Secretaria</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect custom name="select" id="select">
                    <option value="0">
                      Selecione secretaria para responder
                    </option>
                    <option value="1">Jurídica</option>
                    <option value="2">SECOM</option>
                    <option value="3">SETI</option>
                  </CSelect>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CLabel col md="3" htmlFor="file-input">
                  Arquivo (se houver)
                </CLabel>
                <CCol xs="12" md="9">
                  <CInputFile id="file-input" name="file-input" />
                </CCol>
              </CFormGroup>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="primary"
              onClick={() => {
                alert("Chamado enviado! Aguarde resposta.");
                setopenSuport(!openSuport);
              }}
            >
              Enviar
            </CButton>
            <CButton
              color="secondary"
              onClick={() => setopenSuport(!openSuport)}
            >
              Fechar
            </CButton>
          </CModalFooter>
        </CModal>
      </CRow>
    </>
  );
};

export default Suporte;
