import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react';

import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';

const LocalizacaoDoLote = ({ inputPlotLocation, setInputPlotLocation }) => {


  const handleChangeInput = event => {
    const { name, value } = event.target;
    setInputPlotLocation({ ...inputPlotLocation, [name]: value });
  }

  return (
    <div className="row">
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-settings" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="operationalCore"
          placeholder="Núcleo Operacional"
          value={inputPlotLocation.operationalCore}
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
        <CSelect custom onChange={handleChangeInput} value={inputPlotLocation.state} name="state" id="select">
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-location-pin" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="county"
          placeholder="Município"
          value={inputPlotLocation.county}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-home" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="settlement"
          placeholder="Assentamento"
          value={inputPlotLocation.settlement}
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
          name="lotNumber"
          placeholder="Número do Lote Incra"
          value={inputPlotLocation.lotNumber}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-5">
        <CInputGroupPrepend>
          <CInputGroupText>
            <DriveEtaOutlinedIcon style={{ fontSize: "1.1rem" }} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="accessRoad"
          placeholder="Via de acesso ao imóvel"
          value={inputPlotLocation.accessRoad}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-5">
        <CInputGroupPrepend>
          <CInputGroupText>
            <ExploreOutlinedIcon style={{ fontSize: "1.1rem" }} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="coordinatesth"
          placeholder="Coordenadas (Lat, Lng)"
          value={inputPlotLocation.coordinatesth}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
    </div>
  )
}

export default LocalizacaoDoLote;