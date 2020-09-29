import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CButtonGroup,
  CButton,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";

import {
  AccountBalanceOutlined,
  AlternateEmailOutlined,
  PhoneOutlined,
  EventOutlined,
  MarkunreadMailboxOutlined,
  RoomOutlined,
} from "@material-ui/icons";

import styles from "../../../constants/styles";

import ModalFormSindicato from "../../../components/ModalFormSindicato";

const MeuSindicato = () => {
  const history = useHistory();

  const meuSindicatoData = useSelector(
    (state) => state.SyndicateReducer.syndicate
  );

  const [input, setInput] = useState(meuSindicatoData);

  const [show, setShow] = useState(false);

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12" md="12">
          <CCard>
            <CCardHeader
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h3>SAFER ASSIS</h3>
              <CButtonGroup>
                <CButton
                  color="primary"
                  onClick={() => setShow(!show)}
                  className="mr-2"
                >
                  EDITAR
                </CButton>

                <CButton
                  color="secondary"
                  onClick={() => history.push("/dashboard/sindicato/membros")}
                >
                  MEMBROS
                </CButton>
              </CButtonGroup>
            </CCardHeader>
            <CCardBody style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <img
                  src={`/assis.png`}
                  width="200px"
                  style={{ borderRadius: 180, objectFit: "cover" }}
                  alt=""
                />
              </div>
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <AccountBalanceOutlined style={styles.icon} />
                  <p style={{ fontWeight: "bold", marginLeft: 12 }}>
                    {meuSindicatoData.sindicato}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <AlternateEmailOutlined style={styles.icon} />
                  <p style={{ marginLeft: 12 }}>{meuSindicatoData.email}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <PhoneOutlined style={styles.icon} />
                  <p className="ml-2">{meuSindicatoData.tel}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                  }}
                >
                  <RoomOutlined style={styles.icon} />
                  <p className="ml-2">{meuSindicatoData.address}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                  }}
                >
                  <MarkunreadMailboxOutlined style={styles.icon} />
                  <p className="ml-2">CNPJ: {meuSindicatoData.cnpj}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                  }}
                >
                  <EventOutlined style={styles.icon} />
                  <p className="ml-2">Aberto: {meuSindicatoData.open}</p>
                </div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <ModalFormSindicato
        show={show}
        setShow={setShow}
        input={input}
        setInput={setInput}
      />
    </>
  );
};

export default MeuSindicato;
