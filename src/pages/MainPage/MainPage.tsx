import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Field } from '../../components/Field';
import { Input } from '../../components/Input';
import { RootState } from '../../redux/store';
import styles from './mainpage.module.scss';
import InputMask from 'react-input-mask'; 
import { TErrors } from '../../types/errors';
import { setPhoneNumber } from '../../redux/slices/formStateSlice';
import { Header } from '../../components/Header';
import { setStep } from '../../redux/slices/stepsSlice';

export function MainPage() {
  const formData = useSelector((state: RootState) => state.formState)
  const { handleSubmit, register, formState: { errors } } = useForm<TErrors>()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const saveData = () => {
    navigate('/step1')
  }

  const handleChange = (event: any) => {
    dispatch(setPhoneNumber(event.target.value))
  }

  return (
    <>
      <Header />

      <section className={styles.mainPage}>
        <form className={styles.form} onSubmit={handleSubmit(saveData)}>
          <Field label='Номер телефона' error={errors?.phone}>
            <InputMask
              {...register('phone', { minLength: { value: 15, message: 'Введите номер телефона' } })}
              className='input'
              value={formData.phoneNumber}
              alwaysShowMask={true}
              mask='+7\ 999 999 9999'
              maskChar=''
              onChange={handleChange}
            />
          </Field>

          <Field label='Email' error={errors?.email}>
            <Input 
              validation={
                {...register('email', {
                  required: 'Введите почту',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Неверный формат Email",
                  },
                })}}
              id='email' 
              value={formData.email}
              type='email'
            />
          </Field>

          <Button option='primary' text={'Далее'} />
        </form>
      </section>
  </>
)}
