import { useState } from 'react';
import styles from './Counter.module.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <button onClick={() => setCount(count - 1)} className={styles.button} disabled={count === 0}>
        -
      </button>
      <span className={styles.value}>{count}</span>
      <button onClick={() => setCount(count + 1)} className={styles.button} disabled={count === 5}>
        +
      </button>
    </div>
  );
}
