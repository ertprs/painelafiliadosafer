import React from "react";

import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect,
} from "@coreui/react";

import styles from "./styles";
import CIcon from "@coreui/icons-react";
import { ExploreOutlined, InsertDriveFileOutlined, QueryBuilderOutlined, TextFieldsOutlined } from "@material-ui/icons";

function Documentacao({ inputDocumentation, setInputDocumentation }) {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputDocumentation({ ...inputDocumentation, [name]: value });
  };

  return (
    <div className="row">
      <div className="col-12">
        <h3>Informações Gerais</h3>
        <hr />
      </div>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-map" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="documentsArea"
          title="Área na Documentação (ha)"
          placeholder="Área na Documentação (ha)"
          value={inputDocumentation.documentsArea}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-map" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="propertyName"
          title="Nome da Propriedade"
          placeholder="Nome da Propriedade"
          value={inputDocumentation.propertyName}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <ExploreOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDocumentation.georeferencing}
          title="Georreferenciada"
          name="georeferencing"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Georreferenciada
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <InsertDriveFileOutlined style={styles.icon}/>
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="ownership"
          title="Propriedade / Posse / Concessão"
          placeholder="Propriedade / Posse / Concessão"
          value={inputDocumentation.ownership}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <div className="col-12">
        <h3>Documentação - Propriedade - Somente para Propriedade</h3>
        <hr />
      </div>
      <div className="col-12">
        <h3>Documentação - Concessão - Tipo de Documento</h3>
        <hr />
      </div>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <TextFieldsOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDocumentation.domainTitle}
          title="Título de Domínio"
          name="domainTitle"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Título de Domínio
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <InsertDriveFileOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDocumentation.ccu}
          title="Contrato de Concessão de Uso - CCU"
          name="ccu"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Contrato de Concessão de Uso - CCU
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <InsertDriveFileOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDocumentation.ccdru}
          title="Contrato de Concessão de Direito Real de Uso - CCDRU"
          name="ccdru"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Contrato de Concessão de Direito Real de Uso - CCDRU
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <QueryBuilderOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDocumentation.regularization}
          title="Em Regularização"
          name="regularization"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Em Regularização
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <div className="col-12">
        <h3>Documentação - Propriedades e Concessões</h3>
        <hr />
      </div>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <InsertDriveFileOutlined style={styles.icon}/>
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="sncr"
          title="Código de Sistema Nacional de Cadastro Rural (SNCR)"
          placeholder="Código de Sistema Nacional de Cadastro Rural (SNCR)"
          value={inputDocumentation.sncr}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <InsertDriveFileOutlined style={styles.icon}/>
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="certification"
          title="Certificação do Imóvel no INCRA"
          placeholder="Certificação do Imóvel no INCRA"
          value={inputDocumentation.certification}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
    </div>
  );
}

export default Documentacao;
