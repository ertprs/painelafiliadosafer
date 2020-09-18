import React, { useState, Fragment, useContext } from 'react'
import { useDispatch } from 'react-redux';
import FormContext from "../../../../context";

import Moradores from './components/Moradores';

import { PersonOutlineOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { setResidents } from '../../../../../../redux/actions/register';

const Moradia = ({ houseNumber, setHouse, setResident }) => {

  const dispatch = useDispatch();

  const { setHouseNumber
  } = useContext(FormContext);
  
  const [inputResident, setInputResident] = useState();

  const [formResident, setFormResident] = useState([
    <Moradores
      setInputResident={setInputResident}
      residentNumber={1}
    />
  ]);

  const addResident = () => {
    if (inputResident) {
      dispatch(setResidents(inputResident, houseNumber));
    }

    setFormResident([...formResident,
    <>
      <hr />
      <Moradores
        setInputResident={setInputResident}
        residentNumber={formResident.length + 1}
      />
    </>])
  }

  const deleteResident = () => {
    setFormResident(formResident.filter((resident, i, arr) => i < arr.length - 1));
  }

  setResident(inputResident);
  setHouse(houseNumber);
  setHouseNumber(houseNumber);

  return (
    <>
      <h3>Moradia {houseNumber}</h3>
      <hr/>
      {formResident.map((form, i) => (
        <Fragment key={i}>
          {form}
        </Fragment>
      ))}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" style={{ width: '150px', marginRight: '10px' }} onClick={addResident} color="primary">
          <PersonOutlineOutlined style={{ marginRight: 10 }} />
          Adicionar
      </Button>
      <Button variant="contained" style={{ width: '150px', }} disabled={formResident.length === 1} onClick={deleteResident} color="secondary">
        <PersonOutlineOutlined style={{ marginRight: 10 }} />
          Remover
      </Button>
      </div>
    </>
  )
}

export default Moradia;