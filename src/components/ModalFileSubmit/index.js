import React from "react";
import PropTypes from 'prop-types'

import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormGroup,
  CInputGroup,
  CInput,
  CButton,
  CModalFooter,
} from "@coreui/react";

const ModalFileSubmit = ({
  title,
  modalFileOpen,
  file,
  setModalFileOpen,
  handleChangeInputFile,
}) => {
  return (
    <CModal
      show={modalFileOpen}
      onClose={() => setModalFileOpen(modalFileOpen)}
      size="lg"
    >
      <CFormGroup>
        <CModalHeader closeButton>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader>
        <CModalBody className="p-5">
          <CInputGroup>
            <CInput
              className="d-flex align-items-center"
              type="file"
              id="input1-group2"
              value={file}
              onChange={handleChangeInputFile}
              name="input1-group2"
              placeholder="Nome do Orçamento"
              multiple
            />
          </CInputGroup>
        </CModalBody>
        <CModalFooter>
          <CButton type="button" color="primary">
            Enviar Arquivo
          </CButton>
        </CModalFooter>
      </CFormGroup>
    </CModal>
  );
};

ModalFileSubmit.propTypes = {
  title: PropTypes.string.isRequired,
  modalFileOpen: PropTypes.bool.isRequired,
  file: PropTypes.any.isRequired,
  setModalFileOpen: PropTypes.func.isRequired,
  handleChangeInputFile: PropTypes.func.isRequired
};

export default ModalFileSubmit;
