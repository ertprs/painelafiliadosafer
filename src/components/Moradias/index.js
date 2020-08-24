import React, { useEffect, useState, Fragment } from 'react';
import {useDispatch} from 'react-redux'; 

import Moradia from './components/Moradia';

import Button from '@material-ui/core/Button';
import {HomeOutlined} from '@material-ui/icons';

import styles from './styles';
import { setHouses, deleteHouse } from '../../redux/actions/register';

const Moradias = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHouses([]));
  }, [])

  const [formHouse, setFormHouse] = useState([<Moradia houseNumber={1} />]);

  const addHouse = () => {
    setFormHouse([...formHouse, <><hr /> <Moradia houseNumber={formHouse.length + 1} /></>]);
    dispatch(setHouses([]));
  }

  const deleteFormHouse = () => {
    setFormHouse(formHouse.filter((house, i, arr) => {
      if (i < arr.length - 1) {
        return house;
      }
    }))

    dispatch(deleteHouse())
  }

  return (
    <>
      {formHouse.map((form, i) => (
        <Fragment key={i}>
          {form}
        </Fragment>
      ))}
      <div style={styles.boxButtons}>
        <Button variant="contained" style={styles.button} onClick={addHouse} color="primary">
          <HomeOutlined style={styles.iconButton}/>
          Adicionar
        </Button>
        <Button variant="contained" style={styles.button} onClick={deleteFormHouse} color="secondary">
          <HomeOutlined style={styles.iconButton}/>
          Remover
        </Button>
      </div>
    </>
  )
}

export default Moradias;