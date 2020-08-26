import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CCardFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react';

import logo from '../../../assets/logo/logo-registration.png';

const AffiliateRegistration = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCard className="py-5 d-md-down-none">
              <CCardHeader className="text-center">
                <img src={logo} width="50%" style={{ objectFit: "contain", marginBottom: '20px' }} />
                <h2>É TEMPO DE CRESCER!</h2>
              </CCardHeader>
              <CCardBody className="text-center">
                <div className="d-flex flex-column justify-content-center">
                  <h3>Área de Afiliação</h3>
                  <Link to="/affiliate-pj">
                    <CButton
                      color="primary"
                      className="mt-3 w-75"
                      active
                      tabIndex={-1}>PESSOA JURÍDICA
                    </CButton>
                  </Link>
                  <Link to="/affiliate-pf">
                    <CButton
                      color="primary"
                      className="mt-3 w-75"
                      active
                      tabIndex={-1}>PESSOA FÍSICA
                    </CButton>
                  </Link>
                </div>
              </CCardBody>
              <CCardFooter className="text-center">
                <p>Caso tenha alguma dúvida ou problema, consulte nosso FAQ ou entre em contato</p>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default AffiliateRegistration;
