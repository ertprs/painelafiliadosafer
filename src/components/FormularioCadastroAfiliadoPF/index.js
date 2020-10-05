import React from "react";
import { mask, unMask } from "remask";

import styles from "./styles";

import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect,
} from "@coreui/react";

import {
  Event,
  ContactPhoneOutlined,
  CreditCardOutlined,
  GroupOutlined,
  WcOutlined,
  AccountBalanceOutlined,
  PeopleOutline,
  NaturePeopleOutlined,
} from "@material-ui/icons";

import CIcon from "@coreui/icons-react";

const FormularioCadastroAfiliadoPf = ({ input, handleChangeInput }) => {

  return (
    <>
      <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-user" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="name"
          placeholder="Nome"
          title="Nome"
          value={input.name}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <Event style={styles.inputIcon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="birthDate"
          title="Data de Nascimento"
          placeholder="Data de Nascimento"
          value={input.birthDate}
          onChange={handleChangeInput}
          onFocus={(event) => (event.currentTarget.type = "date")}
          onBlur={(event) => (event.currentTarget.type = "text")}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GroupOutlined style={styles.inputIcon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={input.maritalStatus}
          title="Estado Civil"
          name="maritalStatus"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Estado Civil
          </option>
          <option value="Solteiro">Solteiro</option>
          <option value="Casado">Casado</option>
          <option value="Divorciado/Separado">Divorciado/Separado</option>
          <option value="Viúvo">Viúvo</option>
          <option value="Outro">Outro</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <WcOutlined style={styles.inputIcon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={input.sex}
          name="sex"
          title="Sexo"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Sexo
          </option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outros">Outros</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CreditCardOutlined style={styles.inputIcon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="cpf"
          title="CPF"
          placeholder="CPF"
          value={mask(unMask(input.cpf), ["999.999.999-99"])}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CreditCardOutlined style={styles.inputIcon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="RG"
          title="RG"
          placeholder="RG"
          value={input.rg}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CInputGroupPrepend>
          <CInputGroupText>
            <AccountBalanceOutlined style={styles.inputIcon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="emittingOrgan"
          title="Órgão Emissor"
          placeholder="Órgão Emissor"
          value={input.emittingOrgan}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
        <CInputGroupPrepend>
          <CInputGroupText>
            <Event style={styles.inputIcon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="emissionDate"
          title="Data de Emissão"
          placeholder="Data de Emissão"
          value={input.emissionDate}
          onChange={handleChangeInput}
          onFocus={(event) => (event.currentTarget.type = "date")}
          onBlur={(event) => (event.currentTarget.type = "text")}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CreditCardOutlined style={styles.inputIcon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="voterTitle"
          title="Título de Eleitor"
          placeholder="Título de Eleitor"
          value={input.voterTitle}
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
          name="electoralZone"
          title="Zona Eleitoral"
          placeholder="Zona Eleitoral"
          value={input.electoralZone}
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
          name="section"
          title="Seção"
          placeholder="Seção"
          value={input.section}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <PeopleOutline style={styles.inputIcon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="familyGroup"
          title="Está com grupo ou família? Se sim, quantos são?"
          placeholder="Está com grupo ou família? Se sim, quantos são?"
          value={input.familyGroup}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-location-pin" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="address"
          title="Endereço"
          placeholder="Endereço"
          value={input.address}
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
          name="cep"
          title="CEP"
          placeholder="CEP"
          value={input.cep}
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
          name="city"
          title="city"
          placeholder="Cidade"
          value={input.city}
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
          value={input.state}
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
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <ContactPhoneOutlined style={styles.inputIcon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="tel"
          name="phone"
          title="Telefone"
          placeholder="Telefone"
          value={mask(unMask(input.phone), ["(99) 99999-9999"])}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>@</CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="text"
          name="email"
          title="Email"
          placeholder="E-mail"
          value={input.email}
          onChange={handleChangeInput}
          required
        />
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <GroupOutlined style={styles.inputIcon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={input.entityGroup}
          name="entityGroup"
          title="Grupo da sua Entidade: (se houver)"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Grupo da sua Entidade: (se houver)
          </option>
          <option value="Associação Indígena">Associação Indígena</option>
          <option value="Associação de Moradores">
            Associação de Moradores
          </option>
          <option value="Coletivo">Coletivo</option>
          <option value="Outros">Outros</option>
        </CSelect>
      </CInputGroup>
      <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <CInputGroupPrepend>
          <CInputGroupText>
            <NaturePeopleOutlined style={styles.inputIcon} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CSelect
          custom
          onChange={handleChangeInput}
          value={input.profession}
          name="profession"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Profissão
          </option>
          <option value="Agricultor">Agricultor</option>
          <option value="Outros">Outros</option>
        </CSelect>
      </CInputGroup>
    </>
  );
};

export default FormularioCadastroAfiliadoPf;
