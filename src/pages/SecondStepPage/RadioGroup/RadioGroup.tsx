import React from 'react';
import { useDispatch } from 'react-redux';
import { IRadio, setCheckedRadio } from '../../../redux/slices/formStateSlice';
import styles from './radiogroup.module.scss';

interface IRadioGroupProps {
  list: IRadio[]
}

export function RadioGroup({ list }: IRadioGroupProps) {
  const dispatch = useDispatch()

  const handleCheck = (value: string) => {
    dispatch(setCheckedRadio(value))
  }

  return (
    <fieldset className='commonFieldset'>
      <legend>Radio Group</legend>

      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.value}>
            <input 
              type="radio" 
              name="radio" 
              id={item.value}
              value={item.value}
              checked={item.checked}
              onChange={() => handleCheck(item.value)} 
            />
            <label htmlFor={item.value}>
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
