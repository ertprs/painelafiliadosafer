import React, { useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CButton,
  CModalFooter,
  CCollapse,
  CFormGroup,
} from "@coreui/react";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import RegistroSubAfiliados from "../../../components/RegistroSubAfiliados";
import { Container } from "@material-ui/core";

const getBadge = (status) => {
  switch (status) {
    case "Ativo/a":
      return "success";
    case "Inactive":
      return "secondary";
    case "Inativo/a":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const containerStyle = {
  width: "100%",
  height: "400px",
};

const fields = ["nome", "nascimento", "fonterenda", "endereco", "status"];

const membroscompleto = [
  {
    id: 0,
    producao: {
      nucleooperacional: "CODEAGRO",
      limite: "Sim",
      marco: "Sim",
      legalizado: "Sim",
    },
    lote: {
      cep: "00000-00",
      estado: "SP",
      municipio: "Agudos",
      assentamento: "MN1191111 - CA NOME ASSENTAMENTO",
      loteincra: "13",
      viaacesso: "Rua de terra",
      coordenadas: { lat: -22.500326, lng: -48.9864157 },
      moradias: [
        {
          moradia: 1,
          residentes: 5,
          comodos: 3,
          construcao: "Alvenaria",
          riscoambiental: "Não",
        },
      ],
      endereco: "H287+Q7 Agudos, São Paulo",
    },
    responsavel: {
      nome: "Safira",
      nascimento: "21/11/1984",
      escolaridade: "Ens. Fund. Completo",
      fonterenda: "Agricultor/a",
      cpf: "000.000.000-00",
      naturalidade: "Bauru - São Paulo",
      incra: "Sim",
      coleta: "2911",
      status: "Ativo/a",
    },
  },
  {
    id: 1,
    producao: {
      nucleooperacional: "CODEAGRO",
      limite: "Sim",
      marco: "Sim",
      legalizado: "Sim",
    },
    lote: {
      cep: "00000-00",
      estado: "SP",
      municipio: "Agudos",
      assentamento: "MN1191111 - CA NOME ASSENTAMENTO",
      loteincra: "13",
      viaacesso: "Rua de terra",
      coordenadas: { lat: -22.486249, lng: -49.0093427 },
      moradias: [
        {
          moradia: 1,
          residentes: 5,
          comodos: 3,
          construcao: "Alvenaria",
          riscoambiental: "Não",
        },
      ],
      endereco: "H287+Q7 Agudos, São Paulo",
    },
    responsavel: {
      nome: "José",
      nascimento: "01/01/1990",
      escolaridade: "Ens. Fund. Completo",
      fonterenda: "Pescador/a",
      cpf: "000.000.000-00",
      naturalidade: "Bauru - São Paulo",
      incra: "Sim",
      coleta: "2911",
      status: "Ativo/a",
    },
  },
  {
    id: 2,
    producao: {
      nucleooperacional: "CODEAGRO",
      limite: "Sim",
      marco: "Sim",
      legalizado: "Sim",
    },
    lote: {
      cep: "00000-00",
      estado: "SP",
      municipio: "Agudos",
      assentamento: "MN1191111 - CA NOME ASSENTAMENTO",
      loteincra: "13",
      viaacesso: "Rua de terra",
      coordenadas: { lat: -22.4885637, lng: -48.9833706 },
      moradias: [
        {
          moradia: 1,
          residentes: 5,
          comodos: 3,
          construcao: "Alvenaria",
          riscoambiental: "Não",
        },
      ],
      endereco: "H287+Q7 Agudos, São Paulo",
    },
    responsavel: {
      nome: "Augusto",
      nascimento: "10/04/1963",
      escolaridade: "Ens. Fund. Completo",
      fonterenda: "Do Lar",
      cpf: "000.000.000-00",
      naturalidade: "Bauru - São Paulo",
      incra: "Sim",
      coleta: "2911",
      status: "Ativo/a",
    },
  },
  {
    id: 3,
    producao: {
      nucleooperacional: "CODEAGRO",
      limite: "Sim",
      marco: "Sim",
      legalizado: "Sim",
    },
    lote: {
      cep: "00000-00",
      estado: "SP",
      municipio: "Agudos",
      assentamento: "MN1191111 - CA NOME ASSENTAMENTO",
      loteincra: "13",
      viaacesso: "Rua de terra",
      coordenadas: { lat: -22.4435024, lng: -49.0013815 },
      moradias: [
        {
          moradia: 1,
          residentes: 5,
          comodos: 3,
          construcao: "Alvenaria",
          riscoambiental: "Não",
        },
      ],
      endereco: "H287+Q7 Agudos, São Paulo",
    },
    responsavel: {
      nome: "Carmem",
      nascimento: "13/08/1971",
      escolaridade: "Ens. Fund. Completo",
      fonterenda: "Agricultor/a",
      cpf: "000.000.000-00",
      naturalidade: "Bauru - São Paulo",
      incra: "Sim",
      coleta: "2911",
      status: "Inativo/a",
    },
  },
];

const membros = [
  {
    id: 0,
    nome: "Safira",
    nascimento: "21/11/1984",
    escolaridade: "Ens. Fund. Completo",
    fonterenda: "Agricultor/a",
    cpf: "000.000.000-00",
    naturalidade: "Bauru - São Paulo",
    incra: "Sim",
    coleta: "2911",
    endereco: "H287+Q7 Agudos, São Paulo",
    status: "Ativo/a",
  },
  {
    id: 1,
    nome: "José",
    nascimento: "01/01/1990",
    escolaridade: "Ens. Fund. Completo",
    fonterenda: "Pescador/a",
    cpf: "000.000.000-00",
    naturalidade: "Bauru - São Paulo",
    incra: "Sim",
    coleta: "2911",
    endereco: "H287+Q7 Agudos, São Paulo",
    status: "Ativo/a",
  },
  {
    id: 2,
    nome: "Agusto",
    nascimento: "10/04/1963",
    escolaridade: "Ens. Fund. Completo",
    fonterenda: "Do Lar",
    cpf: "000.000.000-00",
    naturalidade: "Bauru - São Paulo",
    incra: "Sim",
    coleta: "2911",
    endereco: "H287+Q7 Agudos, São Paulo",
    status: "Ativo/a",
  },
  {
    id: 3,
    nome: "Carmem",
    nascimento: "13/08/1971",
    escolaridade: "Ens. Fund. Completo",
    fonterenda: "Agricultor/a",
    cpf: "000.000.000-00",
    naturalidade: "Bauru - São Paulo",
    incra: "Sim",
    coleta: "2911",
    endereco: "H287+Q7 Agudos, São Paulo",
    status: "Inativo/a",
  },
];

const Membros = () => {
  const [large, setLarge] = useState(false);
  const [form, setForm] = useState(false);
  const [selectedmembro, setselectedmembro] = useState(null);
  const [accordion, setAccordion] = useState(0);
  const [, setMap] = React.useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDwNWt6P3SzQwf4qlUenPgLpD0JPI6XCZc",
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const showForm = () => {
    setForm(true);
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  if (!isLoaded) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <p style={{ color: "white" }}>Carregando...</p>
      </div>
    );
  }
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              Membros da SAFER
              <CButton color="primary" onClick={showForm}>
                Adicionar
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={membros}
                fields={fields}
                itemsPerPage={5}
                pagination
                clickableRows
                onRowClick={(item) => {
                  setLarge(!large);
                  setselectedmembro(item.id);
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
              {selectedmembro != null &&
                membroscompleto[selectedmembro].responsavel.nome}{" "}
              [
              {selectedmembro != null &&
                membroscompleto[selectedmembro].responsavel.status}{" "}
              ]
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CCardBody>
              <div id="accordion">
                <CCard className="mb-0">
                  <CCardHeader id="headingOne">
                    <CButton
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => setAccordion(accordion === 0 ? null : 0)}
                    >
                      <h5 className="m-0 p-0">Dados do Membro</h5>
                    </CButton>
                  </CCardHeader>
                  {selectedmembro != null && (
                    <CCollapse show={accordion === 0}>
                      <CCardBody>
                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              Nome Responsável
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {membroscompleto[selectedmembro].responsavel.nome}{" "}
                              NOME COMPLETO
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              Escolaridade
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {
                                membroscompleto[selectedmembro].responsavel
                                  .escolaridade
                              }
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>CPF</small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {membroscompleto[selectedmembro].responsavel.cpf}
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              Fonte Renda
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {
                                membroscompleto[selectedmembro].responsavel
                                  .fonterenda
                              }
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              Ocupa área Destinada pelo INCRA
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {
                                membroscompleto[selectedmembro].responsavel
                                  .incra
                              }
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              Naturalidade
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {
                                membroscompleto[selectedmembro].responsavel
                                  .naturalidade
                              }
                            </p>
                          </CCol>
                        </CFormGroup>

                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              Nascimento
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {
                                membroscompleto[selectedmembro].responsavel
                                  .nascimento
                              }
                            </p>
                          </CCol>
                        </CFormGroup>
                      </CCardBody>
                    </CCollapse>
                  )}
                </CCard>
                <CCard className="mb-0">
                  <CCardHeader id="headingTwo">
                    <CButton
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => setAccordion(accordion === 1 ? null : 1)}
                    >
                      <h5 className="m-0 p-0">Dados do Lote</h5>
                    </CButton>
                  </CCardHeader>
                  <CCollapse show={accordion === 1}>
                    {selectedmembro != null && (
                      <CCardBody>
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={{
                            lat: -15.721387,
                            lng: -48.0774459,
                          }}
                          zoom={14}
                          onLoad={onLoad}
                          onUnmount={onUnmount}
                        >
                          <>
                            <Marker
                              key={"kk"}
                              position={
                                membroscompleto[selectedmembro].lote.coordenadas
                              }
                              onClick={() => {}}
                              draggable
                              icon={{
                                url: `/bluepin.png`,
                                origin: new window.google.maps.Point(0, 0),
                                anchor: new window.google.maps.Point(15, 15),
                                scaledSize: new window.google.maps.Size(26, 35),
                              }}
                            />
                          </>
                        </GoogleMap>

                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>Estado</small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {membroscompleto[selectedmembro].lote.estado}
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              Endereço/Acesso
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {membroscompleto[selectedmembro].lote.endereco}/
                              {membroscompleto[selectedmembro].lote.viaacesso}
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              Munício/CEP
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {membroscompleto[selectedmembro].lote.municipio}/
                              {membroscompleto[selectedmembro].lote.cep}
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              Assentamento
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {
                                membroscompleto[selectedmembro].lote
                                  .assentamento
                              }
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              N° Lote
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {membroscompleto[selectedmembro].lote.loteincra}
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              N° Moradias/Residentes
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {
                                membroscompleto[selectedmembro].lote.moradias
                                  .length
                              }
                              /5 Moradores
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              Naturalidade
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {
                                membroscompleto[selectedmembro].responsavel
                                  .naturalidade
                              }
                            </p>
                          </CCol>
                        </CFormGroup>

                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              Nascimento
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {
                                membroscompleto[selectedmembro].responsavel
                                  .nascimento
                              }
                            </p>
                          </CCol>
                        </CFormGroup>
                      </CCardBody>
                    )}
                  </CCollapse>
                </CCard>
                <CCard className="mb-0">
                  <CCardHeader id="headingThree">
                    <CButton
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => setAccordion(accordion === 2 ? null : 2)}
                    >
                      <h5 className="m-0 p-0">Dados de Produção</h5>
                    </CButton>
                  </CCardHeader>
                  <CCollapse show={accordion === 2}>
                    {selectedmembro != null && (
                      <CCardBody>
                        <CFormGroup row>
                          <CCol md="2">
                            <small style={{ textAlign: "right" }}>
                              Núcleo Operacional
                            </small>
                          </CCol>
                          <CCol xs="12" md="10">
                            <p className="form-control-static">
                              {
                                membroscompleto[selectedmembro].producao
                                  .nucleooperacional
                              }
                            </p>
                          </CCol>
                        </CFormGroup>
                      </CCardBody>
                    )}
                  </CCollapse>
                </CCard>
              </div>
            </CCardBody>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary">Download PDF</CButton>
          </CModalFooter>
        </CModal>
      </CRow>

      <CModal show={form} onClose={() => setForm(!form)} size="xl">
        <Container>
          <RegistroSubAfiliados title="Registro de Novos Membros" />
        </Container>
      </CModal>
    </>
  );
};

export default Membros;
