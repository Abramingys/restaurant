import styles from './MenuItem.module.scss';

export function MenuItem({ name, price, ingredients }) {
  return (
    <li className={styles.menuItem}>
      <div className={styles.header}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.price}>${price}</span>
      </div>
      <div className={styles.ingredients}>
        <p className={styles.label}>Ингредиенты:</p>
        <ul className={styles.list}>
          {ingredients.map((ingredient, index) => (
            <li key={index} className={styles.ingredient}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}