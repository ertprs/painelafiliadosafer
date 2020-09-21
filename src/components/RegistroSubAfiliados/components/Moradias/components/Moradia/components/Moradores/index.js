import React, { useContext, useState } from 'react';
import FormContext from "../../../../../../context";

import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect
} from '@coreui/react'

import CIcon from '@coreui/icons-react';

import {
  AccountBalanceWalletOutlined,
  LocalHospitalOutlined,
  Healing,
  WcOutlined,
  SchoolOutlined,
  PeopleOutline,
  ExploreOutlined,
  Event,
  AttachMoneyOutlined,
  ReceiptOutlined,
  QueryBuilderOutlined,
  DateRangeOutlined,
  ExtensionOutlined,
  AccessibleOutlined,
  PaymentOutlined,
  EmojiPeopleOutlined,
  CategoryOutlined
} from '@material-ui/icons';

const Moradores = ({setInputResident, residentNumber }) => {

  const { setResident } = useContext(FormContext);

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
  })


  const handleChangeInput = event => {
    const { name, value } = event.target;
    setInputResidents({ ...inputResidents, [name]: value })

    setInputResident(inputResidents);

    setResident(inputResidents);
   
  }

  return (
    <>
      <h4>Morador {residentNumber}</h4>
      <hr/>
      <div className="row">
        <CInputGroup className="mb-3 col-xl-8 col-sm-12 col-lg-7">
          <CInputGroupPrepend>
            <CInputGroupText>
              <CIcon name="cil-user" />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="resident"
            title="Residente"
            placeholder="Residente"
            value={inputResidents.resident}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-5">
          <CInputGroupPrepend>
            <CInputGroupText>
              <PeopleOutline style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="kinship"
            title="Parentesco"
            placeholder="Parentesco"
            value={inputResidents.kinship}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <WcOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="sex"
            title="Sexo"
            placeholder="Sexo"
            value={inputResidents.sex}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
          <CInputGroupPrepend>
            <CInputGroupText>
              <Event style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="bornDate"
            title="Data de Nascimento"
            placeholder="Data de nascimento"
            value={inputResidents.bornDate}
            onChange={handleChangeInput}
            onFocus={(e) => (e.currentTarget.type = "date")}
            onBlur={(e) => {
              !inputResidents.bornDate && (e.currentTarget.type = "text")
            }}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
          <CInputGroupPrepend>
            <CInputGroupText>
              <SchoolOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="education"
            title="Escolaridade"
            placeholder="Escolaridade"
            value={inputResidents.education}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AttachMoneyOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="mainSourceOfIncome"
            title="Principal fonte de renda"
            placeholder="Principal fonte de renda"
            value={inputResidents.mainSourceOfIncome}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AttachMoneyOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={inputResidents.generatesIncomeForFamily}
            title="Gera renda para a família"
            name="generatesIncomeForFamily"
            id="select"
          >
            <option value={undefined} hidden>Gera renda para a família</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
          <CInputGroupPrepend>
            <CInputGroupText>
              <QueryBuilderOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            title="Tempo de trabalho no lote"
            name="workingTimeonTheLandPlot"
            placeholder="Tempo de trabalho no lote"
            value={inputResidents.workingTimeonTheLandPlot}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
          <CInputGroupPrepend>
            <CInputGroupText>
              <ReceiptOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={inputResidents.issueTheInvoice}
            name="issueTheInvoice"
            title="Emitir NF"
            id="select"
          >
            <option value={undefined} hidden>Emitir NF</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <DateRangeOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={inputResidents.exBeneficiary}
            title="Ex-Beneficiário"
            name="exBeneficiary"
            id="select"
          >
            <option value={undefined} hidden>Ex-Beneficiário</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <ExtensionOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="activity"
            title="Atividade"
            placeholder="Atividade"
            value={inputResidents.activity}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <ExtensionOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="demotivatingActivity"
            title="Atividade Desmotivador"
            placeholder="Atividade Desmotivador"
            value={inputResidents.demotivatingActivity}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AccountBalanceWalletOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={inputResidents.retired}
            name="retired"
            id="select"
          >
            <option value={undefined} hidden>Aposentado</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AttachMoneyOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={inputResidents.paidWorkOffTheLandPlot}
            title="Trabalho remunerado fora do lote"
            name="paidWorkOffTheLandPlot"
            id="select"
          >
            <option value={undefined} hidden>Trabalho remunerado fora do lote</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <DateRangeOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="initialAgeOffTheLandPlot"
            title="Trab. fora do lote idade incial"
            placeholder="Trab. fora do lote idade incial"
            value={inputResidents.initialAgeOffTheLandPlot}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AccessibleOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={inputResidents.handicapped}
            title="Deficiência"
            name="handicapped"
            id="select"
            required
          >
            <option value={undefined} hidden>Deficiência</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        {inputResidents.handicapped === "true" ? (
          <>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <AccessibleOutlined style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                type="text"
                name="typesOfDisabilities"
                title="Deficiências"
                placeholder="Deficiências"
                value={inputResidents.typesOfDisabilities}
                onChange={handleChangeInput}
                required
              />
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <AccessibleOutlined style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CSelect
                custom
                onChange={handleChangeInput}
                title="Transtorno Mental"
                value={inputResidents.mentalDisorder}
                name="mentalDisorder"
                id="select"
              >
                <option value={undefined} hidden>Transtorno Mental</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </CSelect>
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <Healing style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CSelect
                custom
                onChange={handleChangeInput}
                title="Precisa de Cuidados"
                value={inputResidents.needsCare}
                name="needsCare"
                id="select"
              >
                <option value={undefined} hidden>Precisa de Cuidados</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </CSelect>
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <EmojiPeopleOutlined style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CSelect
                custom
                onChange={handleChangeInput}
                value={inputResidents.haveCaregiver}
                name="haveCaregiver"
                id="select"
                title="Tem cuidador"
              >
                <option value={undefined} hidden>Tem cuidador</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </CSelect>
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CategoryOutlined style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CSelect
                custom
                onChange={handleChangeInput}
                value={inputResidents.organizationCare}
                name="organizationCare"
                id="select"
                title="Organização Cuidados"
              >
                <option value={undefined} hidden>Organização Cuidados</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </CSelect>
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <ExploreOutlined style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                type="text"
                name="whoCares"
                placeholder="Quem cuida"
                title="Quem cuida"
                value={inputResidents.whoCares}
                onChange={handleChangeInput}
                required
              />
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <ExploreOutlined style={{ fontSize: "1.1rem" }} />
                </CInputGroupText>
              </CInputGroupPrepend>
              <CInput
                type="text"
                name="deficientActivity"
                title="Atividade"
                placeholder="Atividade"
                value={inputResidents.deficientActivity}
                onChange={handleChangeInput}
                required
              />
            </CInputGroup>
          </>
        ) : false
        }
        <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
          <CInputGroupPrepend>
            <CInputGroupText>
              <LocalHospitalOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="previousDiseases"
            title="Doenças que tem ou teve nos últimos 2 anos"
            placeholder="Doenças que tem ou teve nos últimos 2 anos"
            value={inputResidents.previousDiseases}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <Healing style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="typeOfTreatment"
            title="Tipo de tratamento"
            placeholder="Tipo de tratamento"
            value={inputResidents.typeOfTreatment}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
          <CInputGroupPrepend>
            <CInputGroupText>
              <PaymentOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            title="Forma de acesso para tratamento"
            name="formOfAccessToTreatment"
            placeholder="Forma de acesso para tratamento"
            value={inputResidents.formOfAccessToTreatment}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
      </div>
    </>
  )
}

export default Moradores;