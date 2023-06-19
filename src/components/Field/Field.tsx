import React from 'react';
import { FieldError } from 'react-hook-form/dist/types';
import styles from './field.module.scss';

interface IFieldProps {
  label: string
  children: React.ReactNode
  error?: FieldError
}

export function Field({ children, label, error }: IFieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      {children}
      {error && <span className='error'>{error.message}</span>}
    </div>
  );
}
