import { ErrorMessage, Field } from "formik";
import { FloatingLabel, Form } from "react-bootstrap";
import styles from "./text-input.module.css";

interface TextInputProps {
    label: string;
    name: string;
    type: "text" | "email" | "password";
    placeholder: string;
  }
  
  export function TextInput({
    label,
    name,
    type,
    placeholder,
  }: TextInputProps) {
    let groupClassname = `${styles.inputGroup}`;
  
    return (
      <Form.Group className={groupClassname} controlId={name}>
          <>
            <Form.Label>{label}</Form.Label>
            <Field
              as={Form.Control}
              name={name}
              type={type}
              placeholder={placeholder}
            />
          </>
        <ErrorMessage component="div" className={styles.error} name={name} />
      </Form.Group>
    );
  }