import React from "react";

import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect,
} from "@coreui/react";

import { DateRangeOutlined, AccessibleOutlined } from "@material-ui/icons";
import CIcon from "@coreui/icons-react";

import styles from "./styles";

const InfoGeraisUnidadeProducaoFamiliar = ({
  inputGeneralFamilyUnitInfo,
  setInputGeneralFamilyUnitInfo,
}) => {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputGeneralFamilyUnitInfo({
      ...inputGeneralFamilyUnitInfo,
      [name]: value,
    });
  };

  return (
    <div className="row">
      <CInputGroup className="mb-3 col-xl-7 col-sm-12 col-lg-7">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-location-pin" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="operationalCore"
          placeholder="Núcleo Operacional da ATER (Município)"
          value={inputGeneralFamilyUnitInfo.operationalCore}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-location-pin" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputGeneralFamilyUnitInfo.state}
          name="state"
          id="select"
        >
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-location-pin" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="county"
          value={inputGeneralFamilyUnitInfo.county}
          placeholder="Muncípio de origem do responsável pelo lote"
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <DateRangeOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="yearsResidingInTheRegion"
          placeholder="Anos que reside na região"
          value={inputGeneralFamilyUnitInfo.yearsResidingInTheRegion}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AccessibleOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputGeneralFamilyUnitInfo.alwaysResidedInTheCountryside}
          name="alwaysResidedInTheCountryside"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Sempre residiu no meio rural?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AccessibleOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputGeneralFamilyUnitInfo.knowHheLimitsOfTheLandPlot}
          name="knowHheLimitsOfTheLandPlot"
          id="select"
          required
        >
          <option value={undefined} hidden>
            O beneficiário conhece o limite do lote?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AccessibleOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputGeneralFamilyUnitInfo.landPlotBoundaries}
          name="landPlotBoundaries"
          id="select"
          required
        >
          <option value={undefined} hidden>
            O lote tem marco que identifica os limites do lote?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AccessibleOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputGeneralFamilyUnitInfo.contract}
          name="contract"
          id="select"
          required
        >
          <option value={undefined} hidden>
            O beneficiário tem o contrato/termo de concessão de uso?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-5">
        <CInputGroupPrepend>
          <CInputGroupText>¹²³</CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="contractValidity"
          placeholder="Validade da Concessão"
          value={inputGeneralFamilyUnitInfo.contractValidity}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-location-pin" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="placeOfBirth"
          placeholder="Naturalidade"
          value={inputGeneralFamilyUnitInfo.placeOfBirth}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-check" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="rb"
          placeholder="Status na RB"
          value={inputGeneralFamilyUnitInfo.rb}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-map" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="incraArea"
          placeholder="Ocupa área destinada pelo Incra"
          value={inputGeneralFamilyUnitInfo.incraArea}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
    </div>
  );
};

export default InfoGeraisUnidadeProducaoFamiliar;
