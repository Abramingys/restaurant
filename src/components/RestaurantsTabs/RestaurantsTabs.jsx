import styles from './RestaurantsTabs.module.scss';

export function RestaurantsTabs({ restaurants, activeId, setActiveId }) {
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
        <button className={`${styles.tabButton} ${activeId === null ? styles.active : ''}`} onClick={() => setActiveId(null)}>
          All
        </button>
      </div>
    </section>
  );
}
