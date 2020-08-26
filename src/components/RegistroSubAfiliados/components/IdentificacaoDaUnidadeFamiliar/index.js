import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';

import { AccessTime, Public } from '@material-ui/icons';
import { setBeneficiaryIdentity } from '../../../../redux/actions/register';

const IdentificacaoDaUnidadeFamiliar = () => {

  const dispatch = useDispatch();

  const [input, setInput] = useState({
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
  })

  const handleChangeInput = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value })

    if (input.name.length > 0 &&
      input.status.length > 0 &&
      input.cpf.length > 0 &&
      input.rg.length > 0 &&
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
            ¹²³
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="settlementCode"
          placeholder="Código do Assentamento"
          value={input.settlementCode}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AccessTime style={{ fontSize: "1.1rem" }} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="status"
          name="status"
          placeholder="Status"
          value={input.status}
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
          <CInputGroupText>
            <CIcon name="cil-credit-card" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="rg"
          placeholder="RG"
          value={input.rg}
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
          name="nis"
          placeholder="NIS"
          value={input.nis}
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
          name="civilStatus"
          placeholder="Estado Civil"
          value={input.civilStatus}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-user" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="placeOfBirth"
          placeholder="Nome da Mãe"
          value={input.motherName}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-user" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="spouseName"
          placeholder="Nome do cônjuge"
          value={input.spouseName}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-credit-card" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="spouseCPF"
          placeholder="CPF do cônjuge"
          value={input.spouseCPF}
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
          name="naturalness"
          placeholder="Naturalidade"
          value={input.naturalness}
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
          name="nationality"
          placeholder="Nacionalidade"
          value={input.nationality}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
    </div>
  )
}

export default IdentificacaoDaUnidadeFamiliar;