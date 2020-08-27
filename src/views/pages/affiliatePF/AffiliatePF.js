import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CRow,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect,
  CTextarea,
  CInputCheckbox,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import {
  Event,
  ContactPhoneOutlined,
  WebOutlined,
  GroupAddOutlined,
  CreditCardOutlined,
  ContactsOutlined,
  GroupOutlined,
  HomeWorkOutlined,
  LocalFlorist,
  AllInboxOutlined,
  ReceiptOutlined,
  DeleteForeverOutlined,
  TrackChangesOutlined,
  BusinessCenterOutlined,
  LiveHelpOutlined,
  CloudUploadOutlined,
  WcOutlined,
  AccountBalanceOutlined,
  PeopleOutline,
  NaturePeopleOutlined
} from "@material-ui/icons";

import Button from "@material-ui/core/Button";

import styles from "./styles";

const AffiliatePF = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    birthData: "",
    maritalStatus: "",
    genre: "",
    nacionality: "",
    cpf: "",
    rg: "",
    emittingOrgan: "",
    emissionDate: "",
    voterRegistration: "",
    electoralZone: "",
    section: "",
    familyGroup: "",
    address: "",
    CEP: undefined,
    city: undefined,
    state: undefined,
    phone: "",
    email: "",
    entityGroup: "",
    profession: "",
    agree: false,
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleChecked = () => {
    setInput({ ...input, agree: !input.agree });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol>
            <CCard>
              <CCardBody className="p-sm-3 p-lg-5 xl-5">
                <h1 className="text-center mb-5">
                  Formulário de Afiliação de Pessoa Jurídica
                </h1>
                <CForm onSubmit={handleSubmitForm} className="row">
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
                      name="birthData"
                      placeholder="Data de Nascimento"
                      value={input.birthData}
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
                      value={input.maritalStatus}
                      name="maritalStatus"
                      id="select"
                      required
                    >
                      <option value={undefined} hidden>
                        Estado Civil
                      </option>
                      <option value="Solteiro">Solteiro</option>
                      <option value="Casado">Casado</option>
                      <option value="Divorciado/Separado">
                        Divorciado/Separado
                      </option>
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
                      value={input.genre}
                      name="genre"
                      id="select"
                      required
                    >
                      <option value={undefined} hidden>
                        Gênero
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
                      placeholder="CPF"
                      value={input.cpf}
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
                      placeholder="Data de Emissão"
                      value={input.emissionDate}
                      onChange={handleChangeInput}
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
                      name="voterRegistration"
                      placeholder="Título de Eleitor"
                      value={input.voterRegistration}
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
                      placeholder="Seção"
                      value={input.section}
                      onChange={handleChangeInput}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <PeopleOutline style={styles.inputIcon}/>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="familyGroup"
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
                      name="address"
                      placeholder="CEP"
                      value={input.CEP}
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
                        <ContactPhoneOutlined style={styles.inputIcon}/>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="phone"
                      placeholder="Telefone"
                      value={input.phone}
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
                      placeholder="Endereço de E-mail"
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
                      id="select"
                      required
                    >
                      <option value={undefined} hidden>
                        Grupo da sua Entidade: (se houver)
                      </option>
                      <option value="Associação Indígena">
                        Associação Indígena
                      </option>
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
                  <div className="ml-3 mr-3 w-100">
                    <p>
                      Eu, DECLARO, para fins de direito, sob as penas da lei,
                      que as informações acima prestadas e documentos que
                      apresento para, relacionados acima, são verdadeiros e
                      autênticos (fieis á verdade e condizentes com a realidade
                      dos fatos á época).
                    </p>
                    <p>
                      Fico ciente através desse documento que a falsidade dessa
                      declaração configura crime previsto no Código Penal
                      Brasileiro*, passível de apuração na forma da Lei bem como
                      pode ser enquadrada como Litigância de Má Fé. Por meio
                      deste termo, declaro ainda que me comprometo em atualizar
                      as informações prestadas, tão logo eu tome conhecimento.
                    </p>
                    <p>
                      *CÓDIGO PENAL Art. 171. Obter, para si ou para outrem,
                      vantagem ilícita, em prejuízo alheio, induzindo ou manter
                      alguém em erro, mediante artifício, ardil ou qualquer
                      outro, meio fraudulento.
                    </p>
                    <p>
                      Art. 299. Omitir, em documento público ou particular,
                      declaração que dele devia constar, ou nele inserir ou
                      fazer inserir declaração falsa ou diversa da que devia ser
                      escrita, com o fim de prejudicar direito, criar obrigação
                      ou alterar a verdade sobre fato juridicamente relevante.
                    </p>
                  </div>
                  <CInputGroup className="ml-3 mb-3 col-xl-12 col-sm-12 col-lg-12">
                    <CInputCheckbox
                      type="checkbox"
                      name="agree"
                      checked={input.agree}
                      onChange={handleChecked}
                      required
                    />
                    <label htmlFor="agree">
                      <strong>Concordo com os Termos e Condições</strong>
                    </label>
                  </CInputGroup>
                  <div style={styles.boxButton}>
                    <Button variant="contained" color="primary" type="submit">
                      Enviar informações
                    </Button>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default AffiliatePF;
