import React from 'react';
import styles from '../styles/input.module.css';

interface FormInputProps {
    type: string;
    placeholder: string;
    required: boolean;
    errors: string[];
    name: string;
  }
  
  export default function Input({
    type,
    placeholder,
    required,
    errors = [],
    name,
  }: FormInputProps) {
    return (
      <div className={styles.inputWrap}>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
        />
        {errors.map((error, index) => (
          <span key={index} className={styles.error}>
            {error}
          </span>
        ))}
      </div>
    );
  }