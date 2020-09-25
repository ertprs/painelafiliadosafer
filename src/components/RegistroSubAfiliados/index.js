import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormContext from "./context";

import { CCard, CCardBody, CForm, CRow } from "@coreui/react";

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
import Documentacao from "./components/Documentacao";
import InfoDoImovel from "./components/InfoDoImovel";
import QualidadeAmbiental from "./components/QualidadeAmbiental";
import VisitaTecnica from "./components/VisitaTecnica";
import FotosGeometria from "./components/FotosGeometria";

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
    improvements: [],
    bulls: "",
    equine: "",
    muares: "",
  });

  const [inputDocumentation, setInputDocumentation] = useState({
    documentsArea: "",
    propertyName: "",
    georeferencing: undefined,
    ownership: "",
    domainTitle: undefined,
    ccu: undefined,
    ccdru: undefined,
    regularization: undefined,
    sncr: "",
    certification: "",
  });

  const [inputPropertyInformation, setInputPropertyInformation] = useState({
    pra: undefined,
    deficitNativeVegetation: undefined,
    compensationDeficitArea: "",
    tac: undefined,
    infractions: undefined,
    regularizeDeficit: "",
    remainingAreaNativeVegetation: undefined,
    surplusArea: "",
    rppn: undefined,
    crf: undefined,
    legislationDate: "",
  });

  const [inputEnvironmentalQuality, setInputEnvironmentQuality] = useState({
    environmentalQuality: "",
    water: undefined,
    climate: undefined,
    soil: undefined,
    vegetation: undefined,
    activityToImproveEnvironmentalQuality: undefined,
    specifyActivity: undefined,
    interferesWithTheEnvironment: undefined,
    inWhatWay: undefined,
    experienceTraining: "",
    typeOrganization: "",
    activitiesInterest: "",
    positiveSide: "",
    negativeSide: "",
    restriction: "",
    expectationFuture: "",
    ruralTourism: undefined,
  });

  const [inputTechnicalVisit, setInputTechnicalVisit] = useState({
    informant: "",
    participants: "",
  });

  const [inputPhotosAndGeometry, setInputPhotosAndGeometry] = useState({
    domainTitleFront: undefined,
    domainTitleBack: undefined,
    frontSettlement: undefined,
    backSettlement: undefined,
    georeferencing: undefined,
    rgFront: "",
    rgBack: "",
    rg2Front: "",
    rg2Back: "",
    birthCertificate: [""],
    cpf: [""],
    economicActivities: [""],
    improvement: [""]
  });

  const steps = [
    "Id. do Beneficiário",
    "Local do Lote",
    "Moradias",
    "Id. da Unid. Familiar",
    "Info. Gerais da Unid. Familiar",
    "Endereço",
    "Diagnóstico de Sis. Agrários",
    "Produção",
    "Documentação",
    "Info. do Imóvel",
    "Qual. Ambiental",
    "Visita Técnica",
    "Fotos e Geometria",
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
            setInputDiagnosisOfAgriculturalSystems={
              setInputDiagnosisOfAgriculturalSystems
            }
          />
        );
      case 7:
        return (
          <Producao
            inputProduction={inputProduction}
            setInputProduction={setInputProduction}
          />
        );
      case 8:
        return (
          <Documentacao
            inputDocumentation={inputDocumentation}
            setInputDocumentation={setInputDocumentation}
          />
        );
      case 9:
        return (
          <InfoDoImovel
            inputPropertyInformation={inputPropertyInformation}
            setInputPropertyInformation={setInputPropertyInformation}
          />
        );
      case 10:
        return (
          <QualidadeAmbiental
            inputEnvironmentalQuality={inputEnvironmentalQuality}
            setInputEnvironmentQuality={setInputEnvironmentQuality}
          />
        );
      case 11:
        return (
          <VisitaTecnica
            inputTechnicalVisit={inputTechnicalVisit}
            setInputTechnicalVisit={setInputTechnicalVisit}
          />
        );
      case 12:
        return (
          <FotosGeometria
            inputPhotosAndGeometry={inputPhotosAndGeometry}
            setInputPhotosAndGeometry={setInputPhotosAndGeometry}
          />
        );
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
        dispatch(
          setDiagnosisOfAgriculturalSystems(inputDiagnosisOfAgriculturalSystems)
        );
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
      <CRow>
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
      </CRow>
    </FormContext.Provider>
  );
};

export default RegistroSubAfiliados;
