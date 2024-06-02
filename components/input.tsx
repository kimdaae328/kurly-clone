import React, { InputHTMLAttributes } from 'react';
import styles from '../styles/input.module.css';

interface FormInputProps {
    name: string;
    errors?: string[];
  }
  
  export default function Input({
    name,
    errors = [],
    ...rest
  }: FormInputProps & InputHTMLAttributes<HTMLInputElement>) {
    return (
      <div className={styles.inputWrap}>
        <input
          name={name}
          {...rest}
        />
        {errors.map((error, index) => (
          <span key={index} className={styles.error}>
            {error}
          </span>
        ))}
      </div>
    );
  }