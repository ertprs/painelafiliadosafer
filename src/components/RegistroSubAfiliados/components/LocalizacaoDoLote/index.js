import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect,
  CLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import { CloudUploadOutlined } from "@material-ui/icons";
import GoogleMaps from "../../../GoogleMaps";

import {
  setCurrentLatpointAction,
  setCurrentLonpointAction,
} from "../../../../redux/actions/googlemaps";

const LocalizacaoDoLote = ({ inputPlotLocation, setInputPlotLocation }) => {
  const dispatch = useDispatch();

  const lat = useSelector((state) => state.GoogleMapsReducer.lat);
  const lng = useSelector((state) => state.GoogleMapsReducer.lng);

  const [file, setFile] = useState();

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputPlotLocation({ ...inputPlotLocation, [name]: value });
  };

  const setCoordinatesth = () => {
    setInputPlotLocation({
      ...inputPlotLocation,
      coordinatesth: `${lat}, ${lng}`,
    });
  };

  useEffect(() => {
    if (lat !== 0 && lng !== 0) {
      setCoordinatesth();
    }
  }, [lat, lng]);

  const handleChangeInputFile = (event) => {
    setFile(event.target.value);
  };

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
        <CSelect
          custom
          onChange={handleChangeInput}
          value={inputPlotLocation.state}
          name="state"
          id="select"
        >
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
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
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
      <CInputGroup className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CloudUploadOutlined style={{ fontSize: "1.1rem" }} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CLabel className="btn bg-light ml-1 mb-0">
          {file ? `Arquivo Selecionado: ${file}` : "Selecione o documento de geometria do lote"}
          <CInput
            type="file"
            style={{ display: "none" }}
            name="batchGeometry"
            value={file}
            onChange={handleChangeInputFile}
            required
          />
        </CLabel>
      </CInputGroup>
      <div className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <GoogleMaps
          coordinatesth={inputPlotLocation.coordinatesth.split(",")}
        />
      </div>
    </div>
  );
};

export default LocalizacaoDoLote;
