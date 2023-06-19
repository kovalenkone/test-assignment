import React from 'react';
import { useDispatch } from 'react-redux';
import { ICheckbox, setCheckedCheckbox } from '../../../redux/slices/formStateSlice';
import styles from './checkboxgroup.module.scss';

interface ICheckboxGroupProps {
  list: ICheckbox[]
}

export function CheckboxGroup({ list }: ICheckboxGroupProps) {
  const dispatch = useDispatch()

  const handleCheck = (value: string, checked: boolean) => {
    dispatch(setCheckedCheckbox({value, checked}))
  }

  return (
    <fieldset className='commonFieldset'>
      <legend>Checkbox Group</legend>

      <ul>
        {list.map((item) => (
          <li key={item.value}>
            <input 
              type="checkbox" 
              id={item.value} 
              checked={item.checked}
              onChange={() => handleCheck(item.value, item.checked)} 
            />
            <label htmlFor={item.value}>
              {item.value}
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
