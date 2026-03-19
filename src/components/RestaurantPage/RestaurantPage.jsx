import { useState } from 'react';
import { restaurants } from '../../materials.js';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import { RestaurantsTabs } from '../RestaurantsTabs/RestaurantsTabs';

export function RestaurantPage() {
  const [activeId, setActiveId] = useState(restaurants[0]?.id ?? null);
  const activeRestaurant = restaurants.find((item) => item.id === activeId);

  return (
    <>
      <RestaurantsTabs restaurants={restaurants} activeId={activeId} setActiveId={setActiveId} />
      <section className={`restaurants ${activeId === null ? 'all' : ''}`}>
        {activeId === null ? (
          restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} data={restaurant} />)
        ) : (
          <RestaurantCard data={activeRestaurant} />
        )}
      </section>
    </>
  );
}
