import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

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

import { setResidents } from '../../../../../../redux/actions/register';

const Moradores = ({ houseNumber, residentNumber }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState(
    {
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
    }
  )

  useEffect(() => {
    return
  }, [])

  const handleChangeInput = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value })

    if (
      input.resident.length > 0 &&
      input.kinship.length > 0 &&
      input.sex.length > 0 &&
      input.bornDate.length > 0 &&
      input.education.length > 0 &&
      input.mainSourceOfIncome.length > 0 &&
      input.generatesIncomeForFamily != undefined &&
      input.workingTimeonTheLandPlot.length > 0 &&
      input.issueTheInvoice != undefined &&
      input.exBeneficiary != undefined &&
      input.activity.length > 0 &&
      input.demotivatingActivity.length > 0 &&
      input.retired != undefined &&
      input.paidWorkOffTheLandPlot != undefined &&
      input.initialAgeOffTheLandPlot.length > 0 &&
      input.handicapped != undefined &&
      input.previousDiseases.length > 0 &&
      input.typeOfTreatment.length > 0 &&
      input.formOfAccessToTreatment.length > 0
    ) {
      dispatch(setResidents(input, houseNumber))
    }
  }

  return (
    <>
      <h4>Morador {residentNumber}</h4>
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
            placeholder="Residente"
            value={input.resident}
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
            placeholder="Parentesco"
            value={input.kinship}
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
            placeholder="Sexo"
            value={input.sex}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <Event style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="bornDate"
            placeholder="Data de nascimento"
            value={input.bornDate}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <SchoolOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="education"
            placeholder="Escolaridade"
            value={input.education}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-5">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AttachMoneyOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="mainSourceOfIncome"
            placeholder="Principal fonte de renda"
            value={input.mainSourceOfIncome}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-5">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AttachMoneyOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={input.generatesIncomeForFamily}
            name="generatesIncomeForFamily"
            id="select"
          >
            <option value={undefined} hidden>Gera renda para a família</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-5">
          <CInputGroupPrepend>
            <CInputGroupText>
              <QueryBuilderOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="workingTimeonTheLandPlot"
            placeholder="Tempo de trabalho no lote"
            value={input.workingTimeonTheLandPlot}
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
            value={input.issueTheInvoice}
            name="issueTheInvoice"
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
            value={input.exBeneficiary}
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
            placeholder="Atividade"
            value={input.activity}
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
            placeholder="Atividade Desmotivador"
            value={input.demotivatingActivity}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-4">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AccountBalanceWalletOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={input.retired}
            name="retired"
            id="select"
          >
            <option value={undefined} hidden>Aposentado</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
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
            value={input.paidWorkOffTheLandPlot}
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
            placeholder="Trab. fora do lote idade incial"
            value={input.initialAgeOffTheLandPlot}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
          <CInputGroupPrepend>
            <CInputGroupText>
              <AccessibleOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CSelect
            custom
            onChange={handleChangeInput}
            value={input.handicapped}
            name="handicapped"
            id="select"
            required
          >
            <option value={undefined} hidden>Deficiência</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </CSelect>
        </CInputGroup>
        {input.handicapped === "true" ? (
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
                placeholder="Deficiências"
                value={input.typesOfDisabilities}
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
                value={input.mentalDisorder}
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
                value={input.needsCare}
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
                  <EmojiPeopleOutlined style={{ fontSize: "1.1rem" }}/>
                </CInputGroupText>
              </CInputGroupPrepend>
              <CSelect
                custom
                onChange={handleChangeInput}
                value={input.haveCaregiver}
                name="haveCaregiver"
                id="select"
              >
                <option value={undefined} hidden>Tem cuidador</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </CSelect>
            </CInputGroup>
            <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
              <CInputGroupPrepend>
                <CInputGroupText>
                  <CategoryOutlined style={{ fontSize: "1.1rem" }}/>
                </CInputGroupText>
              </CInputGroupPrepend>
              <CSelect
                custom
                onChange={handleChangeInput}
                value={input.organizationCare}
                name="organizationCare"
                id="select"
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
                value={input.whoCares}
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
                placeholder="Atividade"
                value={input.deficientActivity}
                onChange={handleChangeInput}
                required
              />
            </CInputGroup>
          </>
        ) : false
        }
        <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
          <CInputGroupPrepend>
            <CInputGroupText>
              <LocalHospitalOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="previousDiseases"
            placeholder="Doenças que tem ou teve nos últimos 2 anos"
            value={input.previousDiseases}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
          <CInputGroupPrepend>
            <CInputGroupText>
              <Healing style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="typeOfTreatment"
            placeholder="Tipo de tratamento"
            value={input.typeOfTreatment}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
        <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
          <CInputGroupPrepend>
            <CInputGroupText>
              <PaymentOutlined style={{ fontSize: "1.1rem" }} />
            </CInputGroupText>
          </CInputGroupPrepend>
          <CInput
            type="text"
            name="formOfAccessToTreatment"
            placeholder="Forma de acesso para tratamento"
            value={input.formOfAccessToTreatment}
            onChange={handleChangeInput}
            required
          />
        </CInputGroup>
      </div>
    </>
  )
}

export default Moradores;