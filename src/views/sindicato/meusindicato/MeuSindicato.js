import React from 'react'
import {
  CCard,
  CCardBody,
  CButtonGroup,
  CButton,
  CCardHeader,
  CCol,
  CRow,
} from  '@coreui/react'
import { GoogleMap, useLoadScript, Marker,  } from '@react-google-maps/api';
import CIcon from '@coreui/icons-react'

const membros = [
  {producao:{nucleooperacional:"CODEAGRO",limite:"Sim",marco:"Sim",legalizado:"Sim"},lote: {cep:"00000-00",estado:"SP",municipio:"Agudos",assentamento:"MN1191111 - CA NOME ASSENTAMENTO",loteincra:"13",viaacesso:"Rua de terra",coordenadas: {lat: -22.500326,lng:-48.9864157},moradias:[{moradia:1,residentes:5,comodos:3,construcao:"Alvenaria",riscoambiental:"Não"}],endereco:"H287+Q7 Agudos, São Paulo"},responsavel: {nome:"Safira",nascimento:"21/11/1984",escolaridade:"Ens. Fund. Completo",fonterenda:"Agricultor/a",cpf:"000.000.000-00",naturalidade:"Bauru - São Paulo",incra:"Sim",coleta:"2911"}},
  {producao:{nucleooperacional:"CODEAGRO",limite:"Sim",marco:"Sim",legalizado:"Sim"},lote: {cep:"00000-00",estado:"SP",municipio:"Agudos",assentamento:"MN1191111 - CA NOME ASSENTAMENTO",loteincra:"13",viaacesso:"Rua de terra",coordenadas: {lat: -22.486249,lng:-49.0093427},moradias:[{moradia:1,residentes:5,comodos:3,construcao:"Alvenaria",riscoambiental:"Não"}],endereco:"H287+Q7 Agudos, São Paulo"},responsavel: {nome:"Safira",nascimento:"21/11/1984",escolaridade:"Ens. Fund. Completo",fonterenda:"Agricultor/a",cpf:"000.000.000-00",naturalidade:"Bauru - São Paulo",incra:"Sim",coleta:"2911"}},
  {producao:{nucleooperacional:"CODEAGRO",limite:"Sim",marco:"Sim",legalizado:"Sim"},lote: {cep:"00000-00",estado:"SP",municipio:"Agudos",assentamento:"MN1191111 - CA NOME ASSENTAMENTO",loteincra:"13",viaacesso:"Rua de terra",coordenadas: {lat: -22.4885637,lng:-48.9833706},moradias:[{moradia:1,residentes:5,comodos:3,construcao:"Alvenaria",riscoambiental:"Não"}],endereco:"H287+Q7 Agudos, São Paulo"},responsavel: {nome:"Safira",nascimento:"21/11/1984",escolaridade:"Ens. Fund. Completo",fonterenda:"Agricultor/a",cpf:"000.000.000-00",naturalidade:"Bauru - São Paulo",incra:"Sim",coleta:"2911"}},
  {producao:{nucleooperacional:"CODEAGRO",limite:"Sim",marco:"Sim",legalizado:"Sim"},lote: {cep:"00000-00",estado:"SP",municipio:"Agudos",assentamento:"MN1191111 - CA NOME ASSENTAMENTO",loteincra:"13",viaacesso:"Rua de terra",coordenadas: {lat: -22.4435024,lng:-49.0013815},moradias:[{moradia:1,residentes:5,comodos:3,construcao:"Alvenaria",riscoambiental:"Não"}],endereco:"H287+Q7 Agudos, São Paulo"},responsavel: {nome:"Safira",nascimento:"21/11/1984",escolaridade:"Ens. Fund. Completo",fonterenda:"Agricultor/a",cpf:"000.000.000-00",naturalidade:"Bauru - São Paulo",incra:"Sim",coleta:"2911"}},
]
const containerStyle = {
  width: '100%',
  height: '400px'
};

const MeuSindicato = () => {

  const [, setMap] = React.useState(null)
  const { isLoaded, } = useLoadScript({
    googleMapsApiKey: "AIzaSyDwNWt6P3SzQwf4qlUenPgLpD0JPI6XCZc"
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  if (!isLoaded) {
    return <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
      }}
    >
      <p style={{ color: "white" }}>Carregando...</p></div>
  };

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12" md="12">
          <CCard>
            <CCardHeader style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <h3>SAFER ASSIS</h3>
              <CButtonGroup>
                <CButton color="secondary">EDITAR</CButton>
                <CButton color="secondary">COMPARTILHAR</CButton>
                <CButton color="secondary">MEMBROS</CButton>
              </CButtonGroup>
            </CCardHeader>
            <CCardBody style={{display:"flex",flexDirection:"row"}}>
              <div>
                <img src={`/assis.png`} width="200px" style={{borderRadius:180,objectFit:"cover"}} alt=""/>
              </div>
              <div>
                <div style={{display:"flex",flexDirection:"row"}}>
                  <CIcon
                    className="c-sidebar-brand-minimized"
                    name="cil-pencil"
                    height={20}
                  />
                  <p style={{fontWeight:"bold",marginLeft:12}}>Sindicato da Agricultura Familiar e Empreendedores Rurais de Assis- Sp Safer</p>
                </div>
                <div style={{display:"flex",flexDirection:"row"}}>
                  <CIcon
                    className="c-sidebar-brand-minimized"
                    name="cil-mail"
                    height={20}
                  />
                  <p style={{marginLeft:12}}>escritoriofernandes@ig.com.br</p>
                </div>
                <div style={{display:"flex",flexDirection:"row"}}>
                  <CIcon
                    className="c-sidebar-brand-minimized"
                    name="cil-phone"
                    height={20}
                  />
                  <p style={{marginLeft:12}}>(18) 3322-2211</p>
                </div>
                <div style={{display:"flex",flexDirection:"row"}}>
                  <CIcon
                    className="c-sidebar-brand-minimized"
                    name="cil-locale"
                    height={20}
                  />
                  <p style={{marginLeft:12}}>Domélia, Agudos, SP, Brasil (319,85 km) 17123-000 Domélia, SP</p>
                </div>
                <small>CNPJ 19.992.572/0001-22</small>
                <br></br>
                <small>Aberto em 26/12/2013</small>
              </div>
            </CCardBody>
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={{
                lat: -15.721387,
                lng: -48.0774459,
              }}
            zoom={8}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <>
            <Marker
            key={"kk"}
            position={{lat:-22.4678011,lng:-48.9824264}}
            onClick={() => {
             
            }}
            draggable
            icon={{
              url: `/58889219bc2fc2ef3a1860aa.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(26, 35),
            }}
          />
            {membros.map((marker) => (
              <Marker
                key={"kk"}
                position={marker.lote.coordenadas}
                onClick={() => {
                
                }}
                draggable
                icon={{
                  url: `/bluepin.png`,
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(26, 35),
                }}
              />
            ))}
            </>
          </GoogleMap>
      
          </CCard>
        </CCol>
        
          </CRow>
    </>
  )
}

export default MeuSindicato
