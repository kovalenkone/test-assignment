import React from 'react';
import { useDispatch } from 'react-redux';
import { InputType } from 'zlib';
import { setEmail, setName, setNickname, setSurname } from '../../redux/slices/formStateSlice';
import styles from './input.module.scss';

interface IInputProps {
  validation: any
  id: string
  value: string
  type?: InputType
  placeholder?: string
}

export function Input({ placeholder = 'placeholder', type, validation , id, value }: IInputProps) {
  const dispatch = useDispatch()

  const handleChange = (id: string) => (event: any) => {
    switch(id) {
      case 'name':
        dispatch(setName(event.target.value));
        break
      case 'nickname':
        dispatch(setNickname(event.target.value));
        break
      case 'surname':
        dispatch(setSurname(event.target.value))
        break
      case 'email':
        dispatch(setEmail(event.target.value))
        break
    }
  }


  return (
    <input 
      {...validation}
      className='input' 
      type={type}
      value={value}
      onChange={handleChange(id)}
      placeholder={placeholder}
    />
  );
}
