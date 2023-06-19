import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetForm } from '../../redux/slices/formStateSlice';
import styles from './modal.module.scss';

interface IModalProps {
  closeModal: () => void
}

export function Modal({ closeModal }: IModalProps) {
  const dispatch = useDispatch()
  const node = document.getElementById('modal-root')
  if (!node) return null

  const reset = () => {
    dispatch(resetForm())
    closeModal()
  }

  return ReactDOM.createPortal((
    <div className={styles.modal}>
      <div className={styles.content}>
        <h2>Форма успешно оправлена</h2>
        <img src="img/success.png" alt="" />
        <Link className=' btn primaryButton' to='/' onClick={reset} >На главную</Link>
      </div>
    </div>
  ), node)
}
