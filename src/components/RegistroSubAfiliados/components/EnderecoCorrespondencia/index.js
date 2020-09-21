import React from "react";

import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { HomeOutlined, LocationCityOutlined, PhoneOutlined, RoomOutlined } from "@material-ui/icons";

import styles from "./styles";

const EnderecoCorrespondencia = ({ inputAddress, setInputAddress }) => {

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputAddress({ ...inputAddress, [name]: value });
  };

  return (
    <div className="row">
      <CInputGroup className="mb-3 col-xl-7 col-sm-12 col-lg-7">
        <CInputGroupPrepend>
          <CInputGroupText>
            <HomeOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="address"
          title="Endereço/Logradouro"
          placeholder="Endereço/Logradouro"
          value={inputAddress.address}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-5">
        <CInputGroupPrepend>
          <CInputGroupText>
            ¹²³
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="numero"
          title="Número"
          placeholder="Número"
          value={inputAddress.number}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <LocationCityOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="neighborhood"
          value={inputAddress.neighborhood}
          title="Bairro"
          placeholder="Bairro"
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
          name="cep"
          title="CEP"
          placeholder="CEP"
          value={inputAddress.cep}
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
          value={inputAddress.state}
          title="Estado"
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
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-5">
        <CInputGroupPrepend>
          <CInputGroupText>¹²³</CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="zone"
          title="Zona de Localização"
          placeholder="Zona de Localização"
          value={inputAddress.zone}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            @
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="email"
          name="email"
          title="Email"
          placeholder="Email"
          value={inputAddress.email}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <PhoneOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="rb"
          title="Telefone 1"
          placeholder="Telefone 1"
          value={inputAddress.tel1}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <PhoneOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="tel2"
          title="Telefone 2"
          placeholder="Telefone 2"
          value={inputAddress.tel2}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <CInputGroupPrepend>
          <CInputGroupText>
            <RoomOutlined style={styles.icon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="county"
          name="county"
          title="Município"
          placeholder="Município"
          value={inputAddress.tel2}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
    </div>
  );
};

export default EnderecoCorrespondencia;
