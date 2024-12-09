import RestaurantDbSource from "../../data/restaurantdb-source";
import UrlParser from "../../routes/url-parser";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import { createRestaurantDetailTemplate } from "../templates/template-creator";
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const Detail = {
  async render() {
    return `<div id="restaurant" class="restaurant"></div>
    <div id="likeButtonContainer"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantDbSource.detailRestaurant(url.id);
    console.log(restaurant);

    const restaurantContainer = document.querySelector("#restaurant");
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
