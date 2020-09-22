import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormContext from "./context";

import { CCard, CCardBody, CCol, CContainer, CForm, CRow } from "@coreui/react";

import HorizontalLabelPositionBelowStepper from "../HorizontalLabelPositionBelowStepper";
import IdentificacaoDoBeneficiario from "./components/IdentificacaoDoBeneficiario";
import LocalizacaoDoLote from "./components/LocalizacaoDoLote";
import Moradias from "./components/Moradias";
import IdentificacaoDaUnidadeFamiliar from "./components/IdentificacaoDaUnidadeFamiliar";
import InfoGeraisUnidadeProducaoFamiliar from "./components/InfoGeraisUnidadeProducaoFamiliar";
import EnderecoCorrespondencia from "./components/EnderecoCorrespondencia";

import {
  setBeneficiaryIdentity,
  setDiagnosisOfAgriculturalSystems,
  setFamilyUnitIdentification,
  setGeneralFamilyUnitInfo,
  setPlotLocation,
  setProduction,
  setResidents,
} from "../../redux/actions/register";
import DiagnosticoDeSistemasAgrarios from "./components/DiagnosticoDeSistemasAgrarios";
import Producao from "./components/Producao";

const RegistroSubAfiliados = ({ title }) => {
  const dispatch = useDispatch();

  const [inputBeneficiaryIdentity, setInputBeneficiaryIdentity] = useState({
    name: "",
    email: "",
    cpf: "",
    collectionCode: "",
    settlement: "",
    placeOfBirth: "",
    rb: "",
    incraArea: "",
  });

  const [inputPlotLocation, setInputPlotLocation] = useState({
    operationalCore: "",
    state: "",
    county: "",
    settlement: "",
    lotNumber: "",
    accessRoad: "",
    coordinatesth: "",
  });

  const [inputResidents, setInputResidents] = useState({
    resident: "",
    kinship: "",
    sex: "",
    bornDate: "",
    education: "",
    mainSourceOfIncome: "",
    generatesIncomeForFamily: undefined,
    workingTimeonTheLandPlot: "",
    issueTheInvoice: undefined,
    exBeneficiary: undefined,
    activity: "",
    demotivatingActivity: "",
    retired: undefined,
    paidWorkOffTheLandPlot: undefined,
    initialAgeOffTheLandPlot: "",
    handicapped: undefined,
    typesOfDisabilities: "",
    mentalDisorder: undefined,
    needsCare: undefined,
    haveCaregiver: undefined,
    organizationCare: undefined,
    whoCares: "",
    deficientActivity: "",
    previousDiseases: "",
    typeOfTreatment: "",
    formOfAccessToTreatment: "",
  });

  const [inputFamilyUnitId, setInputFamilyUnitId] = useState({
    settlementCode: "",
    status: "",
    cpf: "",
    rg: "",
    nis: "",
    civilStatus: "",
    motherName: "",
    spouseName: "",
    spouseCPF: "",
    naturalness: "",
    nationality: "",
  });

  const [inputGeneralFamilyUnitInfo, setInputGeneralFamilyUnitInfo] = useState({
    operationalCore: "",
    state: "",
    county: "",
    yearsResidingInTheRegion: "",
    alwaysResidedInTheCountryside: "",
    landPlotBoundaries: "",
    knowHheLimitsOfTheLandPlot: "",
    contract: "",
    contractValidity: "",
  });

  const [resident, setResident] = useState();

  const [inputAddress, setInputAddress] = useState({
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    cep: "",
    state: "",
    zone: "",
    email: "",
    tel1: "",
    tel2: "",
    county: "",
  });

  const [
    inputDiagnosisOfAgriculturalSystems,
    setInputDiagnosisOfAgriculturalSystems,
  ] = useState({
    extraIncome: "",
    assistance: undefined,
    publicHousingpolicy: undefined,
    financing: undefined,
    ruralCommunicationMedium: undefined,
    ruralCommunicationType: "",
    garbageDestination: "",
    sanitation: "",
    schoolTransport: "",
    hireEmployees: undefined,
    howManyPermanentEmployees: "",
    receivedTechnicalAssistance: undefined,
    rememberTheLastFire: undefined,
    yearOfTheBurn: "",
    accessToWater: undefined,
    electricity: undefined,
    NetworkType: undefined,
    availableEnergyMeetsProduction: undefined,
    complementsEnergySupply: undefined,
    itAlsoUses: "",
    wantToGetComplementary: "",
    waterTreatment: "",
    accessToWaterAllYear: undefined,
    naturalWater: undefined,
    protectedByRiparianForest: undefined,
    distanceFromTheCatchment: "",
    alterationWatercourse: undefined,
    rainwaterHarvesting: undefined,
    howRainwaterIsUsed: "",
  });

  const [inputProduction, setInputProduction] = useState({
    headquarters: "",
    nativeForest: "",
    forest: "",
    fallow: "",
    nativePasture: "",
    plantedPasture: "",
    partnershipInThirdPartyArea: "",
    total: "",
    homeGarden: "",
    productionSystems: "",
    typeOfPlanting: "",
    handling: "",
    amountOfCulture: "",
    annualProduction: "",
    selfConsumption: "",
    quantityMarketed: "",
    kgPrice: "",
    seedOriginSeedling: "",
    creoleSeed: undefined,
    irrigations: "",
    wasteGeneration: undefined,
    mainModeTransport: "",
    ownWaterwayTransport: "",
    roadCharteredTransport: "",
    waterwayCharteredTransport: "",
    piscicultureType: "",
    piscicultureHandling: "",
    pisciculturePeeling: "",
    piscicultureFoodComplementation: "",
    piscicultureFoodComplementationCost: "",
    piscicultureFinality: "",
    piscicultureFishPay: "",
    piscicultureReservoir: "",
    piscicultureProduction: "",
    pisciculturePriceKg: "",
    piscicultureCommercializedProduction: "",
    piscicultureMarketedPrice: "",
    pisciculturemarketingChannels: "",
    wildAnimals: "",
    problemsWithWildAnimals: "",
    improvement: "",
    otherImprovement: "",
    typeImprovement: "",
    dimensionImprovement: "",
  })

  const steps = [
    "Id. do Beneficiário",
    "Local do Lote",
    "Moradias",
    "Id. da Unid. Familiar",
    "Info. Gerais da Unid. Familiar",
    "Endereço",
    "Diagnóstico de Sis. Agrários",
    "Produção"
  ];

  let house;

  const setHouseNumber = (houseNumber) => {
    house = houseNumber;
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <IdentificacaoDoBeneficiario
            inputBeneficiaryIdentity={inputBeneficiaryIdentity}
            setInputBeneficiaryIdentity={setInputBeneficiaryIdentity}
          />
        );
      case 1:
        return (
          <LocalizacaoDoLote
            inputPlotLocation={inputPlotLocation}
            setInputPlotLocation={setInputPlotLocation}
          />
        );
      case 2:
        return (
          <Moradias
            inputResidents={inputResidents}
            setInputResidents={setInputResidents}
          />
        );
      case 3:
        return (
          <IdentificacaoDaUnidadeFamiliar
            inputFamilyUnitId={inputFamilyUnitId}
            setInputFamilyUnitId={setInputFamilyUnitId}
          />
        );
      case 4:
        return (
          <InfoGeraisUnidadeProducaoFamiliar
            inputGeneralFamilyUnitInfo={inputGeneralFamilyUnitInfo}
            setInputGeneralFamilyUnitInfo={setInputGeneralFamilyUnitInfo}
          />
        );
      case 5:
        return (
          <EnderecoCorrespondencia
            inputAddress={inputAddress}
            setInputAddress={setInputAddress}
          />
        );
      case 6:
        return (
          <DiagnosticoDeSistemasAgrarios
            inputDiagnosisOfAgriculturalSystems={
              inputDiagnosisOfAgriculturalSystems
            }
            setInputDiagnosisOfAgriculturalSystems={setInputDiagnosisOfAgriculturalSystems}
          />
        );
      case 7:
      return <Producao inputProduction={inputProduction} setInputProduction={setInputProduction} />
      default:
        return "Unknown stepIndex";
    }
  }

  const handleSubmitForm = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        dispatch(setBeneficiaryIdentity(inputBeneficiaryIdentity));
        break;
      case 1:
        dispatch(setPlotLocation(inputPlotLocation));
        break;
      case 2:
        dispatch(setResidents(resident, house));
        break;
      case 3:
        dispatch(setFamilyUnitIdentification(inputFamilyUnitId));
        break;
      case 4:
        dispatch(setGeneralFamilyUnitInfo(inputGeneralFamilyUnitInfo));
        break;
      case 5:
        dispatch(setDiagnosisOfAgriculturalSystems(inputDiagnosisOfAgriculturalSystems));
        break;
      case 6:
        dispatch(setProduction(inputProduction));
        break;
      default:
        return;
    }
  };

  return (
    <FormContext.Provider value={{ setResident, setHouseNumber }}>
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol>
              <CCard>
                <CCardBody className="p-sm-2 p-lg-5 p-lx-5">
                  <h1 className="text-center">{title}</h1>
                  <CForm>
                    <HorizontalLabelPositionBelowStepper
                      handleSubmitForm={handleSubmitForm}
                      steps={steps}
                      getStepContent={getStepContent}
                    />
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </FormContext.Provider>
  );
};

export default RegistroSubAfiliados;
