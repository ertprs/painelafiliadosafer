import React, { useState } from "react";

import { mask, unMask } from "remask";

import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CRow,
  CInputGroup,
  CInputCheckbox,
} from "@coreui/react";


import Button from "@material-ui/core/Button";

import styles from "./styles";
import FormularioCadastroAfiliadoPf from "../../../components/FormularioCadastroAfiliadoPF";

const AffiliatePF = () => {

  const [input, setInput] = useState({
    name: "",
    birthDate: "",
    maritalStatus: "",
    genre: "",
    nacionality: "",
    cpf: "",
    rg: "",
    emittingOrgan: "",
    emissionDate: "",
    voterTitle: "",
    electoralZone: "",
    section: "",
    familyGroup: "",
    address: "",
    cep: "",
    city: "",
    state: undefined,
    phone: "",
    email: "",
    entityGroup: "",
    profession: "",
    agree: false,
  });

  const handleChangeInput = (event) => {
    const { name, value, type } = event.target;

    if (type === "tel") {
      setInput({
        ...input,
        [name]: mask(unMask(value), ["(99) 99999-9999"]),
      });
    } else {
    setInput({ ...input, [name]: value });
    }
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
                  Formulário de Afiliação de Pessoa Física
                </h1>
                <CForm onSubmit={handleSubmitForm} className="row">
                  <FormularioCadastroAfiliadoPf
                    input={input}
                    handleChangeInput={handleChangeInput}
                  />
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
