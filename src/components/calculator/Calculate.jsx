import styles from './Calculate.module.css';
import Calculator from './Calculator';

function Calculate() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contain}>
        <p>Lets do some math!</p>
        <Calculator />
      </div>
    </div>
  );
}

export default Calculate;
