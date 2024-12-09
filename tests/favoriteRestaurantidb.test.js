import { itActisAsFavoriteRestaurantModel } from "./contracts/FavoriteRestaurantContract";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe("Favorite Restaurant Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(
      async (restaurant) => {
        FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
      }
    );
  });

  itActisAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
