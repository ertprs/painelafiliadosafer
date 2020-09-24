import React from "react";

import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect,
  CTextarea,
} from "@coreui/react";
import { GavelOutlined } from "@material-ui/icons";
import styles from "./styles";

function InfoDoImovel({
  inputPropertyInformation,
  setInputPropertyInformation,
}) {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputPropertyInformation({ ...inputPropertyInformation, [name]: value });
  };

  return (
    <div className="row">
      <p className="mb-3 col-xl-9 col-sm-12 col-lg-9">
        Deseja aderir ao Programa de Regularização Ambiental - PRA, caso o
        imóvel rural possua (uma das situações a seguir, ocorrida até 22 de
        julho de 2008): necessidade de recomposição de áreas de APP e de uso
        restrito; déficit referente a Reserva Legal; autuação?
      </p>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputPropertyInformation.pra}
          title="Deseja aderir ao Programa de Regularização Ambiental - PRA, caso o
          imóvel rural possua (uma das situações a seguir, ocorrida até 22 de
          julho de 2008): necessidade de recomposição de áreas de APP e de uso
          restrito; déficit referente a Reserva Legal; autuação?"
          name="inputPropertyInformation"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Escolha uma opção
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <p className="mb-3 col-xl-9 col-sm-12 col-lg-9">
        O imóvel rural possuí área com déficit de vegetação nativa para fim de
        cumprimento da Reserva Legal?
      </p>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputPropertyInformation.deficitNativeVegetation}
          title="O imóvel rural possuí área com déficit de vegetação nativa para fim de 
          cumprimento da Reserva Legal?"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Escolha uma opção
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <p className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        Qual alternativa você pretende adotar, isolada ou conjuntamente, para
        regularizar o déficit?
      </p>
      <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <CTextarea
          name="regularizeDeficit"
          rows="6"
          title="Qual alternativa você pretende adotar, isolada ou conjuntamente, para
          regularizar o déficit?"
          onChange={handleChangeInput}
        />
      </CInputGroup>
      <p className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        Caso realize a compensação, como deseja compensar a área com deficit?
      </p>
      <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <CTextarea
          name="compensationDeficitArea"
          rows="6"
          title="Caso realize a compensação, como deseja compensar a área com deficit?"
          onChange={handleChangeInput}
        />
      </CInputGroup>
      <p className="mb-3 col-xl-9 col-sm-12 col-lg-9">
        Existe Termo de Ajuste de Conduta (TAC) aprovado referente à
        regularização de Áreas de Preservação Permanente (APP), Reserva Legal ou
        Área de Uso Restrito do Imóvel, objeto de Autuação?
      </p>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputPropertyInformation.tac}
          name="tac"
          title="Existe Termo de Ajuste de Conduta (TAC) aprovado referente à
          regularização de Áreas de Preservação Permanente (APP), Reserva Legal ou
          Área de Uso Restrito do Imóvel, objeto de Autuação?"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Escolha uma opção
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <p className="mb-3 col-xl-9 col-sm-12 col-lg-9">
        Existem infrações cometidas anteriores a 22 de Julho de 2008, relativas
        a supressão irregular de vegetação em Áreas de Preservação Permanente
        (APP), Reserva Legal ou Área de Uso Restrito do Imóvel, objeto de
        Autuação?
      </p>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputPropertyInformation.infractions}
          name="infractions"
          title="Existem infrações cometidas anteriores a 22 de Julho de 2008, relativas
          a supressão irregular de vegetação em Áreas de Preservação Permanente
          (APP), Reserva Legal ou Área de Uso Restrito do Imóvel, objeto de
          Autuação?"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Escolha uma opção
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <p className="mb-3 col-xl-9 col-sm-12 col-lg-9">
        O imóvel rural possuí Área Remanescente de Vegetação Nativa excedente ao
        mínimo exigido para Reserva Legal?
      </p>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputPropertyInformation.remainingAreaNativeVegetation}
          name="infractions"
          title="O imóvel rural possuí Área Remanescente de Vegetação Nativa excedente ao
          mínimo exigido para Reserva Legal?"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Escolha uma opção
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <p className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        O que você deseja fazer com a área excedente?
      </p>
      <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <CTextarea
          name="surplusArea"
          rows="6"
          title="O que você deseja fazer com a área excedente?"
          onChange={handleChangeInput}
        />
      </CInputGroup>
      <p className="mb-3 col-xl-9 col-sm-12 col-lg-9">
        Existe Reserva Particular do Patrimônio Natural (RPPN) no interior do
        imóvel rural?
      </p>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputPropertyInformation.rppn}
          name="rppn"
          title="Existe Reserva Particular do Patrimônio Natural (RPPN) no interior do imóvel rural?"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Escolha uma opção
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <p className="mb-3 col-xl-9 col-sm-12 col-lg-9">
        Possuí Cota de Reverva Florestal (CRF)?
      </p>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputPropertyInformation.crf}
          name="rppn"
          title="Possuí Cota de Reverva Florestal (CRF)?"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Escolha uma opção
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GavelOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="legislationDate"
          title="A Reserva Legal do Imóvel rural está submetida à legislação de que período?"
          placeholder="A Reserva Legal do Imóvel rural está submetida à legislação de que período?"
          value={inputPropertyInformation.legislationDate}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <p className="mb-3 col-xl-9 col-sm-12 col-lg-9">
        Ocorreu alteração no tamanho da área do imóvel após 22/07/2008?
      </p>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputPropertyInformation.pra}
          title="Ocorreu alteração no tamanho da área do imóvel após 22/07/2008?"
          name="inputPropertyInformation"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Escolha uma opção
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </CSelect>
      </CInputGroup>
    </div>
  );
}

export default InfoDoImovel;
