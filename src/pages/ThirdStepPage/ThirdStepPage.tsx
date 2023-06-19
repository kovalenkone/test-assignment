import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal } from '../../components/Modal';
import { Stepper } from '../../components/Stepper';
import { setAbout } from '../../redux/slices/formStateSlice';
import { setStep } from '../../redux/slices/stepsSlice';
import { RootState } from '../../redux/store';
import { TErrors } from '../../types/errors';
import styles from './thirdsteppage.module.scss';

export function ThirdStepPage() {
  const formData = useSelector((state: RootState) => state.formState)
  const { handleSubmit, register, formState: { errors } } = useForm<TErrors>()
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const submitData = async (data: any) => {
    setIsModalOpen(true)
    await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
      method: 'POST',
      body: data
    })
  }
      

  const handleChange = (event: any) => {
    dispatch(setAbout(event.target.value))
  }

  return (
    <>
      <Stepper />

      <section>
        <form onSubmit={handleSubmit(submitData)} className={styles.form}>
          <fieldset className='commonFieldset'>
            <legend>About</legend>

            <div className={styles.wrapper}>
              <textarea
                {...register('about', { required: 'Заполните поле', maxLength: { value: 20, message: 'Максимальное количество символов - 200' } })}
                value={formData.about}
                className={styles.textarea} 
                name="about" 
                id="about"
                onChange={handleChange}
              />  

              <span className={styles.counter}>
                {formData.about.replace(/\s/g,'').length}
              </span>

              {errors.about && <span className='error'>{errors.about.message}</span>}
            </div>
          </fieldset>

          <div className='buttonsGroup'>
            <Link className='btn secondaryButton' to='/step2' onClick={() => dispatch(setStep(2))}>
              Назад
            </Link>

            <button className='btn primaryButton'>
              Отправить
            </button>
          </div>
        </form>

        {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
      </section>
    </>
  );
}
