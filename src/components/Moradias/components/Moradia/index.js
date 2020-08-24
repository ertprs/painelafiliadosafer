import React, { useState, Fragment } from 'react'

import Moradores from './components/Moradores';

import { PersonAddOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const Moradia = ({ houseNumber }) => {

  const [formResident, setFormResident] = useState([
    <Moradores residentNumber={1} houseNumber={0} />
  ]);

  const addResident = () => {
    setFormResident([...formResident,
    <>
      <hr />
      <Moradores residentNumber={formResident.length + 1} houseNumber={houseNumber - 1} />
    </>])
  }

  return (
    <>
      <h3>Moradia {houseNumber}</h3>
      {formResident.map((form, i) => (
        <Fragment key={i}>
          {form}
        </Fragment>
      ))}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" style={{ right: 0 }} onClick={addResident} color="primary">
          <PersonAddOutlined style={{ marginRight: 10 }} />
          Adicionar morador
      </Button>
      </div>
    </>
  )
}

export default Moradia;