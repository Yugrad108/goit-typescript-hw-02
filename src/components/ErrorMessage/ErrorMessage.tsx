import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }: { error: string }) => {
  return error ? <p className={styles.error}>{error}</p> : null;
};

export default ErrorMessage;
