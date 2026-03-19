import { useState } from 'react';
import { restaurants } from '../../materials';
import styles from './RestaurantsTabs.module.scss';

export function RestaurantsTabs() {
  const [activeId, setActiveId] = useState(restaurants[0]?.id ?? null);
  const activeRestaurant = restaurants.find((item) => item.id === activeId);

  return (
    <section className={styles.tabs}>
      <div className={styles.tabList} role='tablist' aria-label='Restaurants tabs'>
        {restaurants.map(({ id, name }) => (
          <button
            key={id}
            className={`${styles.tabButton} ${id === activeId ? styles.active : ''}`}
            onClick={() => setActiveId(id)}
            role='tab'
            aria-selected={id === activeId}
            aria-controls={`panel-${id}`}
            id={`tab-${id}`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* {activeRestaurant && (
        <article
          id={`panel-${activeRestaurant.id}`}
          role='tabpanel'
          aria-labelledby={`tab-${activeRestaurant.id}`}
          className={styles.tabPanel}
        >
          <h2 className={styles.title}>{activeRestaurant.name}</h2>
          <div className={styles.section}>
            <h3>Menu</h3>
            <ul>
              {activeRestaurant.menu.map((item) => (
                <li key={item.id}>
                  {item.name} — ${item.price}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Reviews</h3>
            <ul>
              {activeRestaurant.reviews.map((review) => (
                <li key={review.id}>
                  <strong>{review.user}:</strong> {review.text} ({review.rating}/5)
                </li>
              ))}
            </ul>
          </div>
        </article>
      )} */}
    </section>
  );
}
