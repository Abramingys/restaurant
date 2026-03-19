import { RestaurantCard } from './components/RestaurantCard/RestaurantCard';
import { restaurants } from './materials.js';
import './styles/index.scss';

function App() {
  return (
    <main className='app'>
      <section className='restaurants'>
        {restaurants.map(({ id, name, menu, reviews }) => (
          <RestaurantCard key={id} name={name} menu={menu} reviews={reviews} />
        ))}
      </section>
    </main>
  );
}

export default App;
