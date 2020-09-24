import React, { useState } from "react";
import {
  CButton,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CLabel,
} from "@coreui/react";
import { CloudUploadOutlined } from "@material-ui/icons";

const FotosGeometria = ({
  inputPhotosAndGeometry,
  setInputPhotosAndGeometry,
}) => {
  const [inputFile, setInputFile] = useState([
    {
      title: "Certidão de Nascimento",
    },
  ]);

  const handleChangeInputFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputPhotosAndGeometry({ ...inputPhotosAndGeometry, [name]: value });
  };

  const handleChangeInputFiles = (event) => {
    setInputPhotosAndGeometry({
      ...inputPhotosAndGeometry,
      birthCertificate: [...inputPhotosAndGeometry.birthCertificate, event.target.files[0]],
    });
  };

  const addInputFile = () => {
    setInputFile([
      ...inputFile,
      {
        title: "Certidão de Nascimento",
      },
    ]);
  };

  return (
    <div className="row">
      <CInputGroup className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CloudUploadOutlined style={{ fontSize: "1.1rem" }} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CLabel className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.domainTitleFront
            ? inputPhotosAndGeometry.domainTitleFront.name
            : "Título de Domínio (Frente)"}
          <CInput
            type="file"
            style={{ display: "none" }}
            name="domainTitleFront"
            onChange={handleChangeInputFile}
          />
        </CLabel>
        <CLabel className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.domainTitleBack
            ? inputPhotosAndGeometry.domainTitleBack.name
            : "Título de Domínio (Verso)"}
          <CInput
            type="file"
            name="domainTitleBack"
            style={{ display: "none" }}
            onChange={handleChangeInputFile}
          />
        </CLabel>
      </CInputGroup>

      <CInputGroup className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CloudUploadOutlined style={{ fontSize: "1.1rem" }} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CLabel className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.domainTitleFront
            ? inputPhotosAndGeometry.domainTitleFront.name
            : "Cartão de Assentamento (Frente)"}
          <CInput
            type="file"
            style={{ display: "none" }}
            name="frontSettlement"
            onChange={handleChangeInputFile}
          />
        </CLabel>
        <CLabel className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.domainTitleBack
            ? inputPhotosAndGeometry.domainTitleBack.name
            : "Cartão de Assentamento (Verso)"}
          <CInput
            type="file"
            name="backSettlement"
            style={{ display: "none" }}
            onChange={handleChangeInputFile}
          />
        </CLabel>
      </CInputGroup>

      <CInputGroup className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CloudUploadOutlined style={{ fontSize: "1.1rem" }} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CLabel className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.georeferencing
            ? inputPhotosAndGeometry.georeferencing.name
            : "Georreferenciamento"}
          <CInput
            type="file"
            style={{ display: "none" }}
            name="georeferencing"
            onChange={handleChangeInputFile}
          />
        </CLabel>
      </CInputGroup>

      <CInputGroup className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CloudUploadOutlined style={{ fontSize: "1.1rem" }} />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CLabel className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.rg
            ? inputPhotosAndGeometry.rg.name
            : "RG do Beneficiário(a) (Frente)"}
          <CInput
            type="file"
            style={{ display: "none" }}
            name="rg"
            onChange={handleChangeInputFile}
          />
        </CLabel>
        <CLabel className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.rg
            ? inputPhotosAndGeometry.rg.name
            : "RG do Beneficiário(a) (Verso)"}
          <CInput
            type="file"
            name="rg"
            style={{ display: "none" }}
            onChange={handleChangeInputFile}
          />
        </CLabel>
      </CInputGroup>

      <CInputGroup className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CloudUploadOutlined style={{ fontSize: "1.1rem" }} />
          </CInputGroupText>
        </CInputGroupPrepend>
        {inputFile.map((input, index) => (
          <CLabel key={index} className="btn bg-light ml-1 mb-0">
            {inputPhotosAndGeometry.birthCertificate[index]
              ? inputPhotosAndGeometry.birthCertificate[index].name
              : input.title}
            <CInput
              type="file"
              style={{ display: "none" }}
              name="birthCertificate"
              onChange={handleChangeInputFiles}
            />
          </CLabel>
        ))}
        <CButton color="primary" onClick={addInputFile}>
          Adicionar
        </CButton>
      </CInputGroup>
    </div>
  );
};

export default FotosGeometria;
