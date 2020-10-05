import React, { useState } from "react";

import {
  CButton,
  CDataTable,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import { FaFish, FaStickerMule } from "react-icons/fa";
import {
  GiBoatFishing,
  GiBull,
  GiFishingNet,
  GiFishSmoking,
  GiHorseHead,
  GiRattlesnake,
  GiSpearfishing,
} from "react-icons/gi";

import styles from "./styles";

import {
  AccountTreeOutlined,
  AttachMoneyOutlined,
  BlurLinearOutlined,
  BlurOffOutlined,
  BlurOnOutlined,
  BugReportOutlined,
  CommuteOutlined,
  DeleteForeverOutlined,
  DeleteOutlineOutlined,
  DirectionsBoatOutlined,
  EventOutlined,
  GrainOutlined,
  HomeWorkOutlined,
  InsertChartOutlinedTwoTone,
  LocalDrinkOutlined,
  LocalShippingOutlined,
  NatureOutlined,
  PanToolOutlined,
  ReportProblemOutlined,
  SpaOutlined,
  StorefrontOutlined,
  SupervisedUserCircleOutlined,
  ThumbUpAltOutlined,
  WavesOutlined,
} from "@material-ui/icons";

const Producao = ({ inputProduction, setInputProduction }) => {
  const [inputImprovements, setInputImprovements] = useState({
    improvement: "",
    otherImprovement: "",
    typeImprovement: "",
    dimensionImprovement: "",
    improvementAge: "",
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputProduction({ ...inputProduction, [name]: value });
  };

  const handleChangeInputImprovements = (event) => {
    const { name, value } = event.target;
    setInputImprovements({ ...inputImprovements, [name]: value });
  };

  const addImprovement = () => {
    setInputProduction({
      ...inputProduction,
      improvements: [...inputProduction.improvements, inputImprovements],
    });
  };

  const deleteImprovement = (index) => {
    setInputProduction({
      ...inputProduction,
      improvements: inputProduction.improvements.filter(
        (item, i) => i !== index
      ),
    });
  };

  return (
    <div className="row">
      <div className="col-12">
        <h3>Áreas (ha)</h3>
        <hr />
      </div>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-4">
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
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-4">
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
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-4">
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
          name="forest"
          value={inputProduction.forest}
          placeholder="Floresta"
          onChange={handleChangeInput}
          title="Floresta"
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
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <InsertChartOutlinedTwoTone style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="annualProduction"
          title="Produção Anual"
          placeholder="Produção Anual"
          value={inputProduction.annualProduction}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AttachMoneyOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="selfConsumption"
          title="Preço Por Kg do Autoconsumo (Se Fosse Comprar no Mercado Local)"
          placeholder="Preço Por Kg do Autoconsumo (Se Fosse Comprar no Mercado Local)"
          value={inputProduction.selfConsumption}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <InsertChartOutlinedTwoTone style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="annualProduction"
          title="Quantidade Comercializada Anual"
          placeholder="Quantidade Comercializada Anual"
          value={inputProduction.annualProduction}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AttachMoneyOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="kgPrice"
          title="Por Quanto Vende o Kg"
          placeholder="Por Quanto Vende o Kg"
          value={inputProduction.kgPrice}
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
          name="seedOriginSeedling"
          title="Semente/Muda Origem"
          placeholder="Semente/Muda Origem"
          value={inputProduction.seedOriginSeedling}
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
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputProduction.creoleSeed}
          title="Semente Crioula"
          name="creoleSeed"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Semente Crioula
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <BugReportOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputProduction.creoleSeed}
          title="Tem problemas com ataques de pragas e doenças?"
          name="creoleSeed"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Tem problemas com ataques de pragas e doenças?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-map" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="irrigations"
          title="Área Irrigada"
          placeholder="Área Irrigada"
          value={inputProduction.irrigations}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <DeleteOutlineOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputProduction.wasteGeneration}
          title="A Produção Gera Resíduo?"
          name="wasteGeneration"
          id="select"
          required
        >
          <option value={undefined} hidden>
            A Produção Gera Resíduo?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <div className="col-12">
        <h3>Produção Animal</h3>
        <hr />
      </div>
      <div className="col-12">
        <h4>Piscicultura</h4>
        <hr />
      </div>
      <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
        <CInputGroupPrepend>
          <CInputGroupText>
            <WavesOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="piscicultureType"
          title="Tipo"
          placeholder="Tipo"
          value={inputProduction.piscicultureType}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <FaFish style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="piscicultureHandling"
          title="Manejo"
          placeholder="Manejo"
          value={inputProduction.piscicultureHandling}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GiFishingNet style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="pisciculturePeeling"
          title="Sistema de Despesca"
          placeholder="Sistema de Despesca"
          value={inputProduction.pisciculturePeeling}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GrainOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="piscicultureFoodComplementation"
          title="Complementação Alimentar"
          placeholder="Complementação Alimentar"
          value={inputProduction.piscicultureFoodComplementation}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AttachMoneyOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="piscicultureFoodComplementationCost"
          title="Comp. Alim. - Custo Total Anual"
          placeholder="Comp. Alim. - Custo Total Anual"
          value={inputProduction.piscicultureFoodComplementationCost}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GiFishSmoking style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="piscicultureFinality"
          title="Finalidade"
          placeholder="Finalidade"
          value={inputProduction.piscicultureFinality}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GiBoatFishing style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputProduction.piscicultureFishPay}
          title="Existe Pesque-Pague"
          name="piscicultureFishPay"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Existe Pesque-Pague
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <LocalDrinkOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="piscicultureReservoir"
          title="Tamanho do Reservatório (m²)"
          placeholder="Tamanho do Reservatório (m²)"
          value={inputProduction.piscicultureReservoir}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <div className="col-12">
        <h4>Piscicultura - Destino Anual da Produção</h4>
        <hr />
      </div>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GiSpearfishing style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="piscicultureProduction"
          title="Produção de Carne (Kg/ano)"
          placeholder="Produção de Carne (Kg/ano)"
          value={inputProduction.piscicultureProduction}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AttachMoneyOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="pisciculturePriceKg"
          title="Preço de Compra do Kg no Mercado Local - Total Autoconsumo"
          placeholder="Preço de Compra do Kg no Mercado Local - Total Autoconsumo"
          value={inputProduction.pisciculturePriceKg}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <InsertChartOutlinedTwoTone style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="piscicultureCommercializedProduction"
          title="Produção Comercializada (Kg/ano)"
          placeholder="Produção Comercializada (Kg/ano)"
          value={inputProduction.piscicultureCommercializedProduction}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AttachMoneyOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="piscicultureMarketedPrice"
          title="Preço Médio Por Kg Obitido na Comercialização"
          placeholder="Preço Médio Por Kg Obitido na Comercialização"
          value={inputProduction.piscicultureMarketedPrice}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <StorefrontOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="pisciculturemarketingChannels"
          title="Principais Canais de Comercialização"
          placeholder="Principais Canais de Comercialização"
          value={inputProduction.pisciculturemarketingChannels}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <div className="col-12">
        <h3>Custo de Transporte da Produção</h3>
        <hr />
      </div>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CommuteOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="mainModeTransport"
          title="Principal Meio de Transporte da Produção do Lote"
          placeholder="Principal Meio de Transporte da Produção do Lote"
          value={inputProduction.mainModeTransport}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <DirectionsBoatOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="ownWaterwayTransport"
          title="Custo do Transporte Próprio Hidroviário"
          placeholder="Custo do Transporte Próprio Hidroviário"
          value={inputProduction.ownWaterwayTransport}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <LocalShippingOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="roadCharteredTransport"
          title="Custo do Transporte Fretado Rodoviário"
          placeholder="Custo do Transporte Fretado Rodoviário"
          value={inputProduction.roadCharteredTransport}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <DirectionsBoatOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="waterwayCharteredTransport"
          title="Custo do Transporte Fretado Hidroviário"
          placeholder="Custo do Transporte Fretado Hidroviário"
          value={inputProduction.waterwayCharteredTransport}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <div className="col-12">
        <h3>Animais Silvestres</h3>
        <hr />
      </div>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GiRattlesnake style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="waterwayCharteredTransport"
          title="Animais Silvestres Já Foram Avistados no Lote ou Assentamento"
          placeholder="Animais Silvestres Já Foram Avistados no Lote ou Assentamento"
          value={inputProduction.waterwayCharteredTransport}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <ReportProblemOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputProduction.problemsWithWildAnimals}
          title="Animais Silvestres Causam Problemas?"
          name="problemsWithWildAnimals"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Animais Silvestres Causam Problemas?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <div className="col-12">
        <h3>Principais Benfeitorias (galpão, estufa, secador, silos, etc)</h3>
        <hr />
      </div>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <ThumbUpAltOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="improvement"
          title="Benfeitoria"
          placeholder="Benfeitoria"
          value={inputImprovements.improvement}
          onChange={handleChangeInputImprovements}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <ThumbUpAltOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="otherImprovement"
          title="Outra Benfeitoria"
          placeholder="Outra Benfeitoria"
          value={inputImprovements.otherImprovement}
          onChange={handleChangeInputImprovements}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <ThumbUpAltOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="typeImprovement"
          title="Tipo"
          placeholder="Tipo"
          value={inputImprovements.typeImprovement}
          onChange={handleChangeInputImprovements}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>m²</CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="dimensionImprovement"
          title="Dimensão (m² ou m)"
          placeholder="Dimensão (m² ou m)"
          value={inputImprovements.dimensionImprovement}
          onChange={handleChangeInputImprovements}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <EventOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="improvementAge"
          title="Faixa de Idade da Benfeitoria"
          placeholder="Faixa de Idade da Benfeitoria"
          value={inputImprovements.improvementAge}
          onChange={handleChangeInputImprovements}
          required
        />
      </CInputGroup>
      <div className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CButton onClick={addImprovement} color="primary">
          Adicionar
        </CButton>
      </div>
      <div className="mt-3 col-xl-12 col-sm-12 col-lg-12">
        <CDataTable
          items={inputProduction.improvements}
          noItemsViewSlot="Sem items"
          fields={[
            { key: "improvement", label: "Benfeitoria" },
            { key: "typeImprovement", label: "Tipo" },
            { key: "dimensionImprovement", label: "Dimensão (m² ou m)" },
            { key: "improvementAge", label: "Faixa de Idade da Benfeitoria" },
            { key: "delete", label: "" },
          ]}
          hover
          striped
          bordered
          size="sm"
          itemsPerPage={10}
          pagination
          scopedSlots={{
            delete: (item, index) => (
              <CButton onClick={() => deleteImprovement(index)}>
                <DeleteForeverOutlined>Delete</DeleteForeverOutlined>
              </CButton>
            ),
          }}
        />
      </div>
      <div className="col-12">
        <h3>Animais de Serviço (Apenas os Utilizados para Serviço/Trabalho)</h3>
        <hr />
      </div>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GiBull style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="number"
          name="bulls"
          title="Bois"
          placeholder="Bois"
          value={inputImprovements.bulls}
          onChange={handleChangeInputImprovements}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GiHorseHead style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="number"
          name="equine"
          title="Equinos"
          placeholder="Equinos"
          value={inputImprovements.equine}
          onChange={handleChangeInputImprovements}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <FaStickerMule style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="number"
          name="muares"
          title="Muares"
          placeholder="Muares"
          value={inputImprovements.muares}
          onChange={handleChangeInputImprovements}
          required
        />
      </CInputGroup>
    </div>
  );
};

export default Producao;
