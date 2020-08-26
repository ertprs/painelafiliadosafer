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
} from "@material-ui/icons";

import Button from "@material-ui/core/Button";

import HorizontalLabelPositionBelowStepper from "../../../components/HorizontalLabelPositionBelowStepper";

import styles from "./styles";

const AffiliatePJ = () => {
  const dispatch = useDispatch();

  const [inputEntity, setInputEntity] = useState({
    name: "",
    address: "",
    state: "",
    city: "",
    CEP: "",
    CNPJ: "",
    contactName: "",
    contactPhone: "",
    email: "",
    site: "",
    socialNetworks: "",
    fundationDate: "",
    numberOfActiveMembers: "",
    numberOfInactiveMembers: "",
    traditionalCommunities: undefined,
    entityGroup: undefined,
    entityObjective: "",
    memberServices: "",
    whatEntityExpects: "",
    file: "",
    agree: "",
  });

  const [
    inputAgriculturalProduction,
    setInputAgriculturalProduction,
  ] = useState({
    agriculturalProduction: undefined,
    howMuchProduce: "",
    issueInvoice: undefined,
  });

  const [agriculturalProduction, setAgriculturalProduction] = useState([]);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputEntity({ ...inputEntity, [name]: value });
  };

  const handleChangeInputAgriculturalProduction = (event) => {
    const { name, value } = event.target;
    setInputAgriculturalProduction({
      ...inputAgriculturalProduction,
      [name]: value,
    });
  };

  const addAgriculturalProduction = () => {
    setAgriculturalProduction([
      ...agriculturalProduction,
      <>
        <td className="col-4">
          {inputAgriculturalProduction.agriculturalProduction}
        </td>
        <td className="col-4">{inputAgriculturalProduction.howMuchProduce}</td>
        <td className="col-3">{inputAgriculturalProduction.issueInvoice}</td>
      </>,
    ]);
  };

  const deleteAgriculturalProduction = (id) => {
    setAgriculturalProduction(
      agriculturalProduction.filter((item, i) => i !== id)
    );
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
                <CForm className="row">
                  <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <HomeWorkOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="name"
                      placeholder="Nome Completo da Entidade e Sigla"
                      value={inputEntity.name}
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
                      type="address"
                      name="address"
                      placeholder="Endereço"
                      value={inputEntity.address}
                      onChange={handleChangeInput}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-location-pin" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CSelect
                      custom
                      onChange={handleChangeInput}
                      value={inputEntity.state}
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
                  <CInputGroup className="mb-3 col-xl-9 col-sm-12 col-lg-9">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-location-pin" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="city"
                      placeholder="Cidade"
                      value={inputEntity.city}
                      onChange={handleChangeInput}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
                    <CInputGroupPrepend>
                      <CInputGroupText>¹²³</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="CEP"
                      placeholder="CEP"
                      value={inputEntity.CEP}
                      onChange={handleChangeInput}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CreditCardOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="CNPJ"
                      placeholder="CNPJ"
                      value={inputEntity.CNPJ}
                      onChange={handleChangeInput}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <ContactsOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="contactName"
                      placeholder="Nome do Contato"
                      value={inputEntity.contactName}
                      onChange={handleChangeInput}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <ContactPhoneOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="contactPhone"
                      placeholder="Telefone de Contato"
                      value={inputEntity.contactPhone}
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
                      value={inputEntity.email}
                      onChange={handleChangeInput}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <WebOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="site"
                      placeholder="Website"
                      value={inputEntity.site}
                      onChange={handleChangeInput}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <GroupAddOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="socialNetworks"
                      placeholder="Redes Sociais (se houver)"
                      value={inputEntity.socialNetworks}
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
                      name="fundationDate"
                      placeholder="Data de Fundação"
                      value={inputEntity.fundationDate}
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
                      name="numberOfActiveMembers"
                      placeholder="Número de Sócios Ativos"
                      value={inputEntity.numberOfActiveMembers}
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
                      name="numberOfInactiveMembers"
                      placeholder="Número de Sócios Inativos"
                      value={inputEntity.numberOfInactiveMembers}
                      onChange={handleChangeInput}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <GroupOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CSelect
                      custom
                      onChange={handleChangeInput}
                      value={inputEntity.traditionalCommunities}
                      name="traditionalCommunities"
                      id="select"
                      required
                    >
                      <option value={undefined} hidden>
                        Pertence há ass. de comuni. tradicionais?
                      </option>
                      <option value={true}>Sim</option>
                      <option value="">Não</option>
                    </CSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <GroupOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CSelect
                      custom
                      onChange={handleChangeInput}
                      value={inputEntity.entityGroup}
                      name="entityGroup"
                      id="select"
                      required
                    >
                      <option value={undefined} hidden>
                        Grupo da sua Entidade: (se houver)
                      </option>
                      <option value="Cooperativa">Cooperativa</option>
                      <option value="Federação">Federação</option>
                      <option value="Instituto">Instituto</option>
                      <option value="Fundação">Fundação</option>
                    </CSelect>
                  </CInputGroup>
                  <div className="text-center w-100 mt-3">
                    <h2>Produção Agrícola</h2>
                    <p>
                      Caso possua, informe abaixo qual produto e a quantidade
                      mensal aproximadamente.
                    </p>
                  </div>
                  <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <LocalFlorist style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CSelect
                      custom
                      onChange={handleChangeInputAgriculturalProduction}
                      value={inputAgriculturalProduction.agriculturalProduction}
                      name="agriculturalProduction"
                      id="select"
                      required
                    >
                      <option value={undefined} hidden>
                        Produção Agrícola
                      </option>
                      <option value="Abacate">Abacate</option>
                      <option value="Abacaxi">Abacaxi</option>
                      <option value="Abóbora Moranga">Abóbora Moranga</option>
                      <option value="Acelga">Acelga</option>
                      <option value="Acerola">Acerola</option>
                      <option value="Agrião">Agrião</option>
                      <option value="Alface">Alface</option>
                      <option value="Alfavaca">Alfavaca</option>
                      <option value="Algodão">Algodão</option>
                      <option value="Alho">Alho</option>
                      <option value="Almeirão">Almeirão</option>
                      <option value="Amendoim">Amendoim</option>
                      <option value="Anador">Anador</option>
                      <option value="Araçá">Araçá</option>
                      <option value="Arroz">Arroz</option>
                      <option value="Babosa">Babosa</option>
                      <option value="Banana">Banana</option>
                      <option value="Batata">Batata</option>
                      <option value="Batata Doce">Batata Doce</option>
                      <option value="Batata-inglesa">Batata-inglesa</option>
                      <option value="Berinjela">Berinjela</option>
                      <option value="Beterraba">Beterraba</option>
                      <option value="Boldo">Boldo</option>
                      <option value="Brócolis">Brócolis</option>
                      <option value="Cacau">Cacau</option>
                      <option value="Café">Café</option>
                      <option value="Cajá">Cajá</option>
                      <option value="Cajarana">Cajarana</option>
                      <option value="Camomila">Camomila</option>
                      <option value="Cana-de-açúcar">Cana-de-açúcar</option>
                      <option value="Capim Santos">Capim Santos</option>
                      <option value="Caqui">Caqui</option>
                      <option value="Carambola">Carambola</option>
                      <option value="Cebola">Cebola</option>
                      <option value="Cebolinha">Cebolinha</option>
                      <option value="Coco">Coco</option>
                      <option value="Coco-da-baía">Coco-da-baía</option>
                      <option value="Coentro">Coentro</option>
                      <option value="Couve">Couve</option>
                      <option value="Couve-Flor">Couve-Flor</option>
                      <option value="Cravo-da-índia">Cravo-da-índia</option>
                      <option value="Cupuaçu">Cupuaçu</option>
                      <option value="Erva Cidreira">Erva Cidreira</option>
                      <option value="Feijão">Feijão</option>
                      <option value="Figo">Figo</option>
                      <option value="Fruta pão">Fruta pão</option>
                      <option value="Girassol">Girassol</option>
                      <option value="Goiaba">Goiaba</option>
                      <option value="Graviola">Graviola</option>
                      <option value="Hortelã">Hortelã</option>
                      <option value="Ingá">Ingá</option>
                      <option value="Inhame">Inhame</option>
                      <option value="Jabuticaba">Jabuticaba</option>
                      <option value="Jeca">Jeca</option>
                      <option value="Jambo">Jambo</option>
                      <option value="Jenipapo">Jenipapo</option>
                      <option value="Jiló">Jiló</option>
                      <option value="Laranja">Laranja</option>
                      <option value="Lima">Lima</option>
                      <option value="Limão">Limão</option>
                      <option value="Malva Branca">Laranja</option>
                      <option value="Mamão">Mamão</option>
                      <option value="Mandioca">Mandioca</option>
                      <option value="Manga">Manga</option>
                      <option value="Mangaba">Mangaba</option>
                      <option value="Manjericão">Manjericão</option>
                      <option value="Maracujá">Maracujá</option>
                      <option value="Mastruz">Mastruz</option>
                      <option value="Melancia">Melancia</option>
                      <option value="Melão">Melão</option>
                      <option value="Mentrasto">Mentrasto</option>
                      <option value="Mexerica">Mexerica</option>
                      <option value="Milho">Milho</option>
                      <option value="Noni">Noni</option>
                      <option value="Pepino">Pepino</option>
                      <option value="Pequi">Pequi</option>
                      <option value="Pimenta">Pimenta</option>
                      <option value="Pimentão">Pimentão</option>
                      <option value="Pimentão Verde">Pimentão Verde</option>
                      <option value="Pinha">Pinha</option>
                      <option value="Pitanga">Pitanga</option>
                      <option value="Quiabo">Quiabo</option>
                      <option value="Rabanete">Rabanete</option>
                      <option value="Repolho">Repolho</option>
                      <option value="Romã">Romã</option>
                      <option value="Rúcula">Rúcula</option>
                      <option value="Saião">Saião</option>
                      <option value="Salsa">Salsa</option>
                      <option value="Salsinha">Salsinha</option>
                      <option value="Sambacaitá">Sambacaitá</option>
                      <option value="Sapoti">Sapoti</option>
                      <option value="Seriguela">Seriguela</option>
                      <option value="Soja">Soja</option>
                      <option value="Sorgo">Sorgo</option>
                      <option value="Tamarindo">Tamarindo</option>
                      <option value="Tangerina">Tangerina</option>
                      <option value="Tomate">Tomate</option>
                      <option value="Urucum">Urucum</option>
                      <option value="Uva">Uva</option>
                      <option value="Vagem">Vagem</option>
                      <option value="Outros">Outros</option>
                    </CSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <AllInboxOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="howMuchProduce"
                      placeholder="Quanto Produz (em KG, sacas,caixas)"
                      value={inputAgriculturalProduction.howMuchProduce}
                      onChange={handleChangeInputAgriculturalProduction}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <ReceiptOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CSelect
                      custom
                      onChange={handleChangeInputAgriculturalProduction}
                      value={inputAgriculturalProduction.issueInvoice}
                      name="issueInvoice"
                      id="select"
                    >
                      <option value={undefined} hidden>
                        Emite Nota
                      </option>
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                    </CSelect>
                  </CInputGroup>
                  <div style={styles.boxButton}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={addAgriculturalProduction}
                    >
                      Adicionar Plantio
                    </Button>
                  </div>
                  <div className="w-75 mt-4 mx-auto">
                    <table className="table">
                      <tr className="row">
                        <th className="col-4">Produto</th>
                        <th className="col-4">Quantidade</th>
                        <th className="col-3">Nota</th>
                        <th className="col-1"></th>
                      </tr>
                      {agriculturalProduction.map((item, i) => (
                        <tr className="row" key={i}>
                          {item}
                          <td className="col-1">
                            <Button
                              color="secondary"
                              onClick={() => deleteAgriculturalProduction(i)}
                            >
                              <DeleteForeverOutlined />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </table>
                  </div>
                  <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <TrackChangesOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CTextarea
                      rows="4"
                      name="entityObjective"
                      onChange={inputEntity.entityObjective}
                      placeholder="Qual objetivo da Entidade, seus fins?"
                    ></CTextarea>
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <BusinessCenterOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CTextarea
                      rows="4"
                      name="memberServices"
                      onChange={inputEntity.memberServices}
                      placeholder="Que serviços e treinamentos a Entidade realiza para seus associados?"
                    ></CTextarea>
                  </CInputGroup>
                  <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <LiveHelpOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CTextarea
                      rows="4"
                      name="whatEntityExpects"
                      onChange={inputEntity.whatEntityExpects}
                      placeholder="O que a Entidade espera da CONAFER?"
                    ></CTextarea>
                  </CInputGroup>
                  <div className="m-3 w-100">
                    <p className="mb-1">
                      <strong>Observações</strong>
                    </p>
                    <p className="mb-1">
                      <strong>
                        1 - Anexar a listagem de Sócios Ativos e Inativos com
                        nome completo, data de nascimento, RG e CPF.
                      </strong>
                    </p>
                    <p className="mb-1">
                      <strong>
                        2 - Anexar a listagem da Diretoria com nome completo,
                        cargo, telefones, endereço completo e e-mail.
                      </strong>
                    </p>
                    <p>
                      Atenção: Esse documento só tem validade se tiver anexado a
                      ele as Listagens de Associados e Diretoria.
                    </p>
                  </div>
                  <div className="ml-3 w-100">
                    <p>
                      <strong>
                        Upload de arquivo (envie compactado zip/rar)
                      </strong>
                    </p>
                  </div>
                  <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CloudUploadOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="file"
                      name="file"
                      value={inputEntity.file}
                      onChange={handleChangeInputAgriculturalProduction}
                      required
                    />
                  </CInputGroup>
                  <div className="ml-3 w-100">
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
                  <CInputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CloudUploadOutlined style={styles.inputIcon} />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInputCheckbox
                      type="checkbox"
                      name="agree"
                      value={inputEntity.agree}
                      onChange={handleChangeInputAgriculturalProduction}
                      required
                    >
                      Concordo com os Termos e Condições
                    </CInputCheckbox>
                  </CInputGroup>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default AffiliatePJ;
