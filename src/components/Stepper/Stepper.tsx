import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { ActiveDotIcon } from '../../icons/ActiveDotIcon';
import { DoneDotIcon } from '../../icons/DoneDotIcon';
import { InactiveDotIcon } from '../../icons/InactiveDotIcon';
import { RootState } from '../../redux/store';
import styles from './stepper.module.scss';

export function Stepper() {
  const {stepNumber, steps} = useSelector((state: RootState) => state.steps)

  return (
    <div className={styles.stepper}>
      {steps.map((step) => {
        const connectorClass = classNames(
          styles.connector,
          {[styles.activeConnector]: step.id < stepNumber}
        )

        const labelClass = classNames(
          styles.label,
          {[styles.activeLabel]: step.id <= stepNumber}
        )

        return (
          <div className={styles.step} key={step.id}>
            {stepNumber === step.id && <ActiveDotIcon />}
            {stepNumber < step.id && <InactiveDotIcon />}
            {stepNumber > step.id && <DoneDotIcon />}
            <span className={labelClass}>
              {step.label}
            </span>
            {step.id !== steps.length && (
              <div className={connectorClass}></div>
            )}
          </div>
        )
      })}
    </div>
  );
}
