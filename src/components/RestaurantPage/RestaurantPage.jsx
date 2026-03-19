import { restaurants } from '../../materials';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import { RestaurantsTabs } from '../RestaurantsTabs/RestaurantsTabs';

export function RestaurantPage() {
  return (
    <>
      <RestaurantsTabs />
      <main className='app'>
        <section className='restaurants'>
          {restaurants.map(({ id, name, menu, reviews }) => (
            <RestaurantCard key={id} name={name} menu={menu} reviews={reviews} />
          ))}
        </section>
      </main>
      ;
    </>
  );
}
