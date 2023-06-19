import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AddIcon } from '../../../icons/AddIcon';
import { DeleteIcon } from '../../../icons/DeleteIcon';
import { addAdvantage, deleteAdvantage, IAdvantage } from '../../../redux/slices/formStateSlice';
import styles from './advantagesgroup.module.scss';

interface IAdvantagesGroupProps {
  list: IAdvantage[]
}

export function AdvantagesGroup({ list }: IAdvantagesGroupProps) {
  const { register } = useForm()
  const dispatch = useDispatch()

  const handleCreate = () => {
    dispatch(addAdvantage({ id: Date.now(), value: '' }))
  }

  const handleDelete = (id: number) => {
    dispatch(deleteAdvantage(id))
  }

  return (
    <fieldset className='commonFieldset'>
      <legend className={styles.legend}>Advantages</legend>

      <ul className={styles.list}>
        {list.map((item) => (
          <li className={styles.item} key={item.id}>
            <input className='input' />
            <button onClick={() => handleDelete(item.id)}>
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>

      <button className={styles.buttonAdd} type='button' onClick={handleCreate}>
        <AddIcon />
      </button>
    </fieldset>
  );
}
