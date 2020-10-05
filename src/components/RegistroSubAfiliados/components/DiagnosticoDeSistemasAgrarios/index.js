import React from "react";

import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect,
} from "@coreui/react";

import styles from "./styles";
import {
  AccountBalanceOutlined,
  AssignmentTurnedInOutlined,
  AttachMoneyOutlined,
  DeleteOutlineOutlined,
  DevicesOtherOutlined,
  DirectionsBusOutlined,
  EventOutlined,
  FlagOutlined,
  GrainOutlined,
  GroupOutlined,
  LinearScaleOutlined,
  LocalDrinkOutlined,
  NatureOutlined,
  OpacityOutlined,
  PowerOutlined,
  SmartphoneOutlined,
  WavesOutlined,
  WhatshotOutlined,
} from "@material-ui/icons";

const DiagnosticoDeSistemasAgrarios = ({
  inputDiagnosisOfAgriculturalSystems,
  setInputDiagnosisOfAgriculturalSystems,
}) => {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputDiagnosisOfAgriculturalSystems({
      ...inputDiagnosisOfAgriculturalSystems,
      [name]: value,
    });
  };

  return (
    <div className="row">
      <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AttachMoneyOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
          <CInput
            type="text"
            name="name"
            title="Qual é a renda extra lote (fora do lote) anual?"
            placeholder="Qual é a renda extra lote fora do lote) anual?"
            value={inputDiagnosisOfAgriculturalSystems.extraIncome}
            onChange={handleChangeInput}
            required
          />
      </CInputGroup>
      
      <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AttachMoneyOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.assistance}
          title="A família recebe algum tipo de aux. de programa social
          governamental?"
          name="assistance"
          id="select"
          required
        >
          <option value={undefined} hidden>
            A família recebe algum aux. de programa social governamental?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AccountBalanceOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.publicHousingpolicy}
          title="A família acessou alguma política pública para moradia?"
          name="publicHousingpolicy"
          id="select"
          required
        >
          <option value={undefined} hidden>
            A família acessou alguma política pública para moradia?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-7 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AttachMoneyOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.financing}
          title="A família acessou alguma linha de financiamento para projetos desenvolvidos no lote?"
          name="financing"
          id="select"
          required
        >
          <option value={undefined} hidden>
            A família acessou alguma linha de financiamento para projetos
            desenvolvidos no lote?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <SmartphoneOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.ruralCommunicationMedium}
          title="Tem meio de comunicação rural?"
          name="ruralCommunicationMedium"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Tem meio de comunicação rural?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <DevicesOtherOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="ruralCommunicationType"
          value={inputDiagnosisOfAgriculturalSystems.ruralCommunicationType}
          placeholder="Comunicação rural - Tipo"
          onChange={handleChangeInput}
          title="Comunicação rural - Tipo"
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <DeleteOutlineOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="garbageDestination"
          title="Destino final do lixo seco"
          placeholder="Destino final do lixo seco"
          value={inputDiagnosisOfAgriculturalSystems.garbageDestination}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <OpacityOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="sanitation"
          title="Saneamento básico da moradia (esgoto sanitário)"
          placeholder="Saneamento básico da moradia (esgoto sanitário)"
          value={inputDiagnosisOfAgriculturalSystems.sanitation}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <DirectionsBusOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="schoolTransport"
          title="Principal meio de transporte escolar"
          placeholder="Principal meio de transporte escolar"
          value={inputDiagnosisOfAgriculturalSystems.schoolTransport}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GroupOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.hireEmployees}
          title="Contrata empregados para ajudar na produção do lote?"
          name="hireEmployees"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Contrata empregados para ajudar na produção do lote?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GroupOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="number"
          name="howManyPermanentEmployees"
          title="Quantos empregados permanentes"
          placeholder="Quantos empregados permanentes"
          value={inputDiagnosisOfAgriculturalSystems.howManyPermanentEmployees}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AssignmentTurnedInOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={
            inputDiagnosisOfAgriculturalSystems.receivedTechnicalAssistance
          }
          title="Recebeu assistência técnica na última safra/ano?"
          name="receivedTechnicalAssistance"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Recebeu assistência técnica na última safra/ano?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <WhatshotOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.rememberTheLastFire}
          title="Lembra da última queimada descontrolada que atingiu o lote?"
          name="rememberTheLastFire"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Lembra da última queimada descontrolada que atingiu o lote?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <EventOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="yearOfTheBurn"
          title="Ano dessa queimada"
          placeholder="Ano dessa queimada"
          value={inputDiagnosisOfAgriculturalSystems.yearOfTheBurn}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <OpacityOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.accessToWater}
          title="O lote tem acesso a água?"
          name="accessToWater"
          id="select"
          required
        >
          <option value={undefined} hidden>
            O lote tem acesso a água?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <PowerOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.electricity}
          title="Tem eletrificação?"
          name="electricity"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Tem eletrificação?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <LinearScaleOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="NetworkType"
          title="Tipo de rede"
          placeholder="Tipo de rede"
          value={inputDiagnosisOfAgriculturalSystems.NetworkType}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <PowerOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={
            inputDiagnosisOfAgriculturalSystems.availableEnergyMeetsProduction
          }
          title="Energia disponível atender à produção?"
          name="availableEnergyMeetsProduction"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Energia disponível atender à produção?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <PowerOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.complementsEnergySupply}
          title="Complementa o fornecimento de energia?"
          name="complementsEnergySupply"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Complementa o fornecimento de energia?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-7 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <PowerOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="itAlsoUses"
          title="Utiliza, também, algum dessses?"
          placeholder="Utiliza, também, algum dessses?"
          value={inputDiagnosisOfAgriculturalSystems.itAlsoUses}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <PowerOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.wantToGetComplementary}
          title="Deseja obter/complementar?"
          name="wantToGetComplementary"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Deseja obter/complementar?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        <CInputGroupPrepend>
          <CInputGroupText>
            <LocalDrinkOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="waterTreatment"
          title="Tratamento da água de consumo"
          placeholder="Tratamento da água de consumo"
          value={inputDiagnosisOfAgriculturalSystems.waterTreatment}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <OpacityOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.accessToWaterAllYear}
          title="Lote tem acesso a água o ano todo?"
          name="accessToWaterAllYear"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Lote tem acesso a água o ano todo?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-7 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <NatureOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.protectedByRiparianForest}
          title="Fontes de água natural no lote são protegidas por mata ciliar?"
          name="protectedByRiparianForest"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Fontes de água natural no lote são protegidas por mata ciliar?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <FlagOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="number"
          name="distanceFromTheCatchment"
          title="Distância entre local da captação da fonte de água natural para moradia e elementos contaminantes? (m)"
          placeholder="Distância entre local da captação da fonte de água natural para moradia e elementos contaminantes? (m)"
          value={inputDiagnosisOfAgriculturalSystems.distanceFromTheCatchment}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <WavesOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.alterationWatercourse}
          title="A captação levou à alteração no curso natural do córrego da fonte?"
          name="alterationWatercourse"
          id="select"
          required
        >
          <option value={undefined} hidden>
            A captação levou à alteração no curso natural do córrego da fonte?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-7 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GrainOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputDiagnosisOfAgriculturalSystems.rainwaterHarvesting}
          title="Há captação de água da chuva para reaproveitamento no lote?"
          name="rainwaterHarvesting"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Há captação de água da chuva para reaproveitamento no lote?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GrainOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="howRainwaterIsUsed"
          title="Como é utilizada a água captada da chuva?"
          placeholder="Como é utilizada a água captada da chuva?"
          value={inputDiagnosisOfAgriculturalSystems.howRainwaterIsUsed}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
    </div>
  );
};

export default DiagnosticoDeSistemasAgrarios;
