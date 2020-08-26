import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CRow,
} from '@coreui/react';
import HorizontalLabelPositionBelowStepper from '../../../components/HorizontalLabelPositionBelowStepper';
import RegistroSubAfiliados from '../../../components/RegistroSubAfiliados';

const Register = () => {
  const dispatch = useDispatch();

  const register = useSelector(state => state.RegisterReducer);

  const steps = [
    'Id. do Beneficiário',
    'Local do Lote',
    'Moradias',
    'Id. da Unid. Familiar',
    'Info. Gerais da Unid. Familiar',
    'Endereço'
  ];

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <div></div>;
      case 1:
        return <div></div>;
      case 2:
        return <div></div>;
      case 3:
        return <div></div>;
      case 4:
        return <div></div>;
      case 5:
        return <div></div>;
      default:
        return 'Unknown stepIndex';
    }
  }

  const handleSubmitForm = () => {
    console.log(register)
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="10" lg="10" xl="10">
            <CCard className="mx-10">
              <CCardBody className="p-5">
                <h1 className="text-center">Registro de Afiliado</h1>
                <CForm className="row">
                  <RegistroSubAfiliados/>
                  {/* <HorizontalLabelPositionBelowStepper
                    handleSubmitForm={handleSubmitForm}
                    steps={steps}
                    getStepContent={getStepContent}
                  /> */}
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div >
  )
}

export default Register
