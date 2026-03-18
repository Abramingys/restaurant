import styles from './ReviewCard.module.scss';

export function ReviewCard({ user, text, rating }) {
  return (
    <article className={styles.review}>
      <div className={styles.header}>
        <h4 className={styles.user}>{user}</h4>
        <div className={styles.rating}>
          {'⭐'.repeat(rating)}
          <span className={styles.ratingText}>{rating}/5</span>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </article>
  );
}
