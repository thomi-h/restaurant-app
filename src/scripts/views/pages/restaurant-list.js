import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `<main id="main_content"> 
                <h2>Restaurant List</h2>
                <div id="restaurants" class="restaurants"></div>
            </main>`;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.restaurants.forEach((resturant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(resturant);
    });
    console.log(restaurants);
  },
};

export default RestaurantList;
