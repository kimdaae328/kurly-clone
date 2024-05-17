import React, { ReactNode } from 'react';
import styles from '../../styles/login.module.css';

interface ButtonProps {
  children: ReactNode;
  line?: boolean;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ children, line, color }) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: color || 'initial',
    border: line ? '1px solid #5f0080' : 'none',
  };

  return (
    <button style={buttonStyle} className={styles.button}>
      {children}
    </button>
  );
};

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <Button color="blue" line={true}>
        Login
      </Button>
    </div>
  );
}
