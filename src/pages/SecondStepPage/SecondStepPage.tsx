import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Stepper } from '../../components/Stepper';
import { setStep } from '../../redux/slices/stepsSlice';
import { RootState } from '../../redux/store';
import { AdvantagesGroup } from './AdvantagesGroup';
import { CheckboxGroup } from './CheckboxGroup';
import { RadioGroup } from './RadioGroup';
import styles from './secondsteppage.module.scss';

export function SecondStepPage() {
  const { handleSubmit, register, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const formState = useSelector((state: RootState) => state.formState)
  const dispatch = useDispatch()

  const saveData = () => {
    navigate('/step3')
    dispatch(setStep(3))
  }

  return (
    <>
      <Stepper />

      <section>
        <form onSubmit={handleSubmit(saveData)}>
          <AdvantagesGroup list={formState.advantages} />
          <CheckboxGroup list={formState.checkboxes} />
          <RadioGroup list={formState.radios}/>

          <div className='buttonsGroup'>
            <Link className='btn secondaryButton' to='/step1' onClick={() => dispatch(setStep(2))}>
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
