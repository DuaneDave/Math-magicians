import styles from './Quote.module.css';

function Quote() {
  return (
    <div className={styles.quote}>
      <div className={styles.text}>
        <p>
          Mathematics is not about numbers, equations, computations or
          algorithms: it is about understanding
          <span>  -- William Paul Thurston</span>
        </p>
      </div>
    </div>
  );
}

export default Quote;
