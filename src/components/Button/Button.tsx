import React from 'react';
import styles from './button.module.scss';

interface IButtonProps {
  option: 'primary' | 'secondary'
  text: 'Начать' | 'Далее' | 'Назад'
}

export function Button({ option, text }: IButtonProps) {
  return (
    <button className={`btn ${option}Button`}>
      {text}
    </button>
  );
}
