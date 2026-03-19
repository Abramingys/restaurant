import { useCounter } from '../../hooks/use-count';
import styles from './Counter.module.scss';

export default function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className={styles.counter}>
      <button onClick={decrement} className={styles.button} disabled={count === 0}>
        -
      </button>
      <span className={styles.value}>{count}</span>
      <button onClick={increment} className={styles.button} disabled={count === 5}>
        +
      </button>
    </div>
  );
}
