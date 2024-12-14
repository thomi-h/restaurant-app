import FavoriteRestaurantSearchPresenter from "../src/scripts/views/pages/liked-movies/favorite-restaurant-search-presenter";
import { spyOn } from "jest-mock";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe("Searching restaurants", () => {
  let presenter;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById("query");
    queryElement.value = query;

    queryElement.dispatchEvent(new Event("change"));
  };

  const setRestaurantSearchContainer = () => {
    document.body.innerHTML = `
        <div id="restaurant-search-container">
            <input id="query" type="text">
            <div class="restaurant-result-container">
                <ul class="restaurants"></ul>
            </div>
        </div>
        `;
  };

  const constructPresenter = () => {
    spyOn(FavoriteRestaurantIdb, "searchRestaurants");
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  it("should be able to capture the query typed by the user", () => {
    searchRestaurants("film a");

    expect(presenter.latestQuery).toEqual("film a");
  });

  it("should ask the model to search for liked restaurants", () => {
    searchRestaurants("film a");

    expect(FavoriteRestaurantIdb.searchRestaurants).toHaveBeenCalledWith(
      "film a"
    );
  });

  it("should show the found restaurants", () => {
    presenter._showFoundRestaurants([{ id: 1 }]);

    const foundRestaurants = document.querySelectorAll(".restaurant");

    expect(foundRestaurants.length).toEqual(1);

    presenter._showFoundRestaurants([
      {
        id: 1,
        name: "Satu",
      },
      {
        id: 2,
        name: "Dua",
      },
    ]);

    expect(document.querySelectorAll(".restaurant").length).toEqual(2);
  });

  fit("should show the title of the found restaurants", () => {
    presenter._showFoundRestaurants([{ id: 1, name: "Satu" }]);

    expect(
      document.querySelectorAll(".restaurant__name").item(0).textContent
    ).toEqual("Satu");

    presenter._showFoundRestaurants([
      {
        id: 1,
        name: "Satu",
      },
      {
        id: 2,
        name: "Dua",
      },
    ]);

    const restaurantName = document.querySelectorAll(".restaurant__name");

    expect(restaurantName.item(0).textContent).toEqual("Satu");
    expect(restaurantName.item(1).textContent).toEqual("Dua");
  });

  it("should show - for found movie without title,", () => {
    presenter._showFoundRestaurants([{ id: 1 }]);

    expect(
      document.querySelectorAll(".restaurant__name").item(0).textContent
    ).toEqual("-");
  });
});
