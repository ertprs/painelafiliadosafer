import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { setBeneficiaryIdentity } from '../../redux/actions/register';

const IdentificacaoDoBeneficiario = () => {

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    email: "",
    cpf: "",
    collectionCode: "",
    settlement: "",
    placeOfBirth: "",
    rb: "",
    incraArea: "",
  })

  const handleChangeInput = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value })

    if (input.name.length > 0 &&
      input.email.length > 0 &&
      input.cpf.length > 0 &&
      input.collectionCode.length > 0 &&
      input.settlement.length > 0 &&
      input.placeOfBirth.length > 0 &&
      input.rb.length > 0 &&
      input.incraArea.length > 0
    ) {
      dispatch(setBeneficiaryIdentity(input));
    }
  }

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
          placeholder="Nome completo"
          value={input.name}
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
          placeholder="Email"
          value={input.email}
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
          value={input.cpf}
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
          placeholder="Código de Coleta"
          value={input.collectionCode}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-5">
        <CInputGroupPrepend>
          <CInputGroupText>¹²³</CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="settlement"
          placeholder="Código de Assentamento"
          value={input.settlement}
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
          value={input.placeOfBirth}
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
          value={input.rb}
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
          value={input.incraArea}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
    </div>
  )
}

export default IdentificacaoDoBeneficiario;