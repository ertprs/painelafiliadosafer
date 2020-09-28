import CIcon from "@coreui/icons-react";
import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";
import React from "react";

const IdentificacaoDoBeneficiario = ({
  inputBeneficiaryIdentity,
  setInputBeneficiaryIdentity,
}) => {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputBeneficiaryIdentity({ ...inputBeneficiaryIdentity, [name]: value });
  };

  return (
    <div className="row">
      <CInputGroup className="mb-3 col-xl-7 col-sm-12 col-lg-7">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-user" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="name"
          title="Nome completo"
          placeholder="Nome completo"
          value={inputBeneficiaryIdentity.name}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
        <CInputGroupPrepend>
          <CInputGroupText>@</CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="email"
          name="email"
          title="Email"
          placeholder="Email"
          value={inputBeneficiaryIdentity.email}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-credit-card" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="cpf"
          pattern="[0-9]{11}"
          value={inputBeneficiaryIdentity.cpf}
          placeholder="CPF"
          onChange={handleChangeInput}
          title="CPF deve conter mais de 11 números."
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>¹²³</CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="collectionCode"
          title="Código de Coleta"
          placeholder="Código de Coleta"
          value={inputBeneficiaryIdentity.collectionCode}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>¹²³</CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="settlement"
          title="Código de Assentamento"
          placeholder="Código de Assentamento"
          value={inputBeneficiaryIdentity.settlement}
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
          title="Naturalidade"
          placeholder="Naturalidade"
          value={inputBeneficiaryIdentity.placeOfBirth}
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
          title="Status na RB"
          placeholder="Status na RB"
          value={inputBeneficiaryIdentity.rb}
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
          name="incraArea"
          title="Ocupa área destinada pelo Incra"
          placeholder="Ocupa área destinada pelo Incra"
          value={inputBeneficiaryIdentity.incraArea}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
    </div>
  );
};

export default IdentificacaoDoBeneficiario;
