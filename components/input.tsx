import React, { InputHTMLAttributes } from 'react';
import styles from '../styles/input.module.css';

interface FormInputProps {
  name: string;
  error?: string; // 단일 오류 메시지로 변경
}

const Input: React.FC<FormInputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  name,
  error,
  ...rest
}) => {
  return (
    <div className={styles.inputWrap}>
      <input
        name={name}
        {...rest}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;
