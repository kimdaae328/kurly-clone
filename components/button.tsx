"use client";

import { useFormStatus } from "react-dom";
import styles from "@/styles/button.module.css";

interface FormButtonProps {
  text: string;
}

export default function FormButton({ text }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={styles.btnColor}
    >
      {pending ? "로딩 중" : text}
    </button>
  );
}