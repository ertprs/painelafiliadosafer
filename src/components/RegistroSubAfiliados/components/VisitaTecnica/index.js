import React from "react";
import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";
import { PeopleAltOutlined, PersonOutlineOutlined } from "@material-ui/icons";

import styles from "./styles";

function VisitaTecnica({ inputTechnicalVisit, setInputTechnicalVisit }) {

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputTechnicalVisit({ ...inputTechnicalVisit, [name]: value });
  };

  return (
    <div className="row">
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <PersonOutlineOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="informant"
          title="Nome do Informante"
          placeholder="Nome do Informante"
          value={inputTechnicalVisit.informant}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <PeopleAltOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="participants"
          title="Quem participou das conversas durante a visita?"
          placeholder="Quem participou das conversas durante a visita?"
          value={inputTechnicalVisit.participants}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
    </div>
  );
}

export default VisitaTecnica;
