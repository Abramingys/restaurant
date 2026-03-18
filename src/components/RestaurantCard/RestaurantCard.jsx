import { MenuItem } from '../MenuItem/MenuItem';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import styles from './RestaurantCard.module.scss';

export function RestaurantCard({ name, menu, reviews }) {
  return (
    <article className={styles.restaurant}>
      <h2 className={styles.name}>{name}</h2>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Меню</h3>
        <ul className={styles.menu}>
          {menu.map((item) => (
            <MenuItem key={item.id} name={item.name} price={item.price} ingredients={item.ingredients} />
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Отзывы</h3>
        <div className={styles.reviews}>
          {reviews.map((review) => (
            <ReviewCard key={review.id} user={review.user} text={review.text} rating={review.rating} />
          ))}
        </div>
      </section>
    </article>
  );
}
