import React from "react";

import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import styles from "./styles";
import {
  AccountTreeOutlined,
  BlurLinearOutlined,
  BlurOffOutlined,
  BlurOnOutlined,
  HomeWorkOutlined,
  NatureOutlined,
  PanToolOutlined,
  SpaOutlined,
  SupervisedUserCircleOutlined,
} from "@material-ui/icons";

const Producao = ({ inputProduction, setInputProduction }) => {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputProduction({ ...inputProduction, [name]: value });
  };

  return (
    <div className="row">
      <div className="col-12">
        <h3>Áreas (ha)</h3>
        <hr />
      </div>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CInputGroupPrepend>
          <CInputGroupText>
            <HomeWorkOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="headquarters"
          title="Sede"
          placeholder="Sede"
          value={inputProduction.headquarters}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CInputGroupPrepend>
          <CInputGroupText>
            <SpaOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="headquarters"
          title="Plantio Próprio"
          placeholder="Plantio Próprio"
          value={inputProduction.headquarters}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CInputGroupPrepend>
          <CInputGroupText>
            <NatureOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="nativeForest"
          title="Mata Nativa"
          placeholder="Mata Nativa"
          value={inputProduction.nativeForest}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CInputGroupPrepend>
          <CInputGroupText>
            <NatureOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="cpf"
          value={inputProduction.forest}
          placeholder="Floresta"
          onChange={handleChangeInput}
          title="Floresta."
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <BlurOnOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="fallow"
          title="Pousio/Capoeira"
          placeholder="Pousio/Capoeira"
          value={inputProduction.fallow}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-5">
        <CInputGroupPrepend>
          <CInputGroupText>
            <NatureOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="nativePasture"
          title="Pastagem Nativa"
          placeholder="Pastagem Nativa"
          value={inputProduction.nativePasture}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <BlurLinearOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="plantedPasture"
          title="Pastagem Plantada"
          placeholder="Pastagem Plantada"
          value={inputProduction.plantedPasture}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <BlurOffOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="degraded"
          title="Degradada"
          placeholder="Degradada"
          value={inputProduction.degraded}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <SupervisedUserCircleOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="batchPartnership"
          title="Parceria no Lote"
          placeholder="Parceria no Lote"
          value={inputProduction.batchPartnership}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <SupervisedUserCircleOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="partnershipInThirdPartyArea"
          title="Parceria em área de terceiro"
          placeholder="Parceria em área de terceiro"
          value={inputProduction.partnershipInThirdPartyArea}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-map" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="total"
          title="Total"
          placeholder="Total"
          value={inputProduction.total}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <div className="col-12">
        <h3>Área da Sede</h3>
        <hr />
      </div>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <SpaOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputProduction.homeGarden}
          title="Tem horta caseira?"
          name="homeGarden"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Tem horta caseira?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <SpaOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputProduction.medicinalPlants}
          title="Cultiva Plantas Medicinais?"
          name="medicinalPlants"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Cultiva Plantas Medicinais?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <div className="col-12">
        <h3>Plantio Próprio</h3>
        <hr />
      </div>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AccountTreeOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="productionSystems"
          title="Sistemas da Produção"
          placeholder="Sistemas da Produção"
          value={inputProduction.productionSystems}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <SpaOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="typeOfPlanting"
          title="Tipo de Plantio"
          placeholder="Tipo de Plantio"
          value={inputProduction.typeOfPlanting}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <PanToolOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="handling"
          title="Manejo"
          placeholder="Manejo"
          value={inputProduction.handling}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-map" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="area"
          title="Área (ha)"
          placeholder="Área (ha)"
          value={inputProduction.area}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-map" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="number"
          name="amountOfCulture"
          title="Quantidade de Culturas Nesta Área"
          placeholder="Quantidade de Culturas Nesta Área"
          value={inputProduction.amountOfCulture}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <div className="col-12">
        <h3>Cultura de Cana-de-açúcar</h3>
        <hr />
      </div>
    </div>
  );
};

export default Producao;
