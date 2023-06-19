import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Field } from '../../components/Field';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Stepper } from '../../components/Stepper';
import { setStep } from '../../redux/slices/stepsSlice';
import { RootState } from '../../redux/store';
import { TErrors } from '../../types/errors';
import styles from './firststeppage.module.scss';

export function FirstStepPage() {
  const formData = useSelector((state: RootState) => state.formState)
  const { handleSubmit, register, formState: { errors } } = useForm<TErrors>()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const saveData = () => {
    navigate('/step2')
    dispatch(setStep(2))
  }

  return (
    <>
      <Stepper />
      <section className='stepPage'>
      <form onSubmit={handleSubmit(saveData)}>
        <fieldset className={styles.fieldset + ' ' + 'commonFieldset'}>
          <Field label='Nickname' error={errors?.nickname}>
           <Input 
              validation={
                {...register("nickname", { 
                required: 'Введите название задачи', 
                maxLength: { value: 30, message: 'Количество символов превышает допустимое' },
                pattern: {value: /^[A-Za-zА-Яа-яЁё0-9]+$/, message: 'Недопустимые символы'}
              })}}
              id='nickname' 
              value={formData.nickname}
            />
          </Field>    

          <Field label='Name' error={errors?.name}>
            <Input 
              validation={
                {...register("name", { 
                required: 'Введите название задачи', 
                maxLength: { value: 50, message: 'Количество символов превышает допустимое' },
                pattern: {value: /^[A-Za-zА-Яа-яЁё]+$/, message: 'Недопустимые символы'}
              })}}
              id='name' 
              value={formData.name}
            />
          </Field>    

          <Field label='Surname' error={errors?.surname}>
            <Input 
              validation={
                {...register("surname", { 
                required: 'Введите название задачи', 
                maxLength: { value: 50, message: 'Количество символов превышает допустимое' },
                pattern: {value: /^[A-Za-zА-Яа-яЁё]+$/, message: 'Недопустимые символы'}
              })}}
              id='surname' 
              value={formData.surname}
            />
          </Field>    

          <Field label='Sex' error={errors?.sex}>
            <Select
              validation={{...register("sex", { minLength: { value: 2, message: 'Укажите пол' } })}}
              sexValue={formData.sex}
            />
          </Field>    
        </fieldset>

        <div className='buttonsGroup'>
          <Link className='btn secondaryButton' to='/'>
            Назад
          </Link>

          <Button 
            option='primary'
            text='Далее'
          />
        </div>
      </form>
    </section>
    </>
  );
}

