import React, { useState } from 'react';
import styles from './select.module.scss';
import { setSex, Sex } from '../../redux/slices/formStateSlice';
import { useDispatch } from 'react-redux';

interface ISelectProps {
  validation: any
  sexValue: string
}

export function Select({ validation, sexValue }: ISelectProps ) {
  const dispatch = useDispatch()

  const [isSelectOpen, setIsSelectOpen] = useState(false)

  return (
    <div className={styles.wrapper} onClick={() => setIsSelectOpen(!isSelectOpen)}>
      <input 
        {...validation}
        className='input' 
        placeholder={sexValue}
        value={sexValue === Sex.Empty ? '' : sexValue} 
        disabled
      />
      {isSelectOpen && (
        <ul className={styles.menu}>
          <li className={styles.item}>
            <button onClick={() => dispatch(setSex(Sex.Man))} type='button' >
              {Sex.Man}
            </button>
          </li>
          <li className={styles.item}>
            <button onClick={() => dispatch(setSex(Sex.Woman))} type='button' >
              {Sex.Woman}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
