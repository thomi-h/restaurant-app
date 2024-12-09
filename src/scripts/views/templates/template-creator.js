import CONFIG from "../../globals/config";

const createRestaurantItemTemplate = (restaurant) => `
            <div class="card" tabindex="0">
                <img src="${
                  restaurant.pictureId
                    ? CONFIG.BASE_IMG_URL + restaurant.pictureId
                    : ""
                }" width="400px" alt="${restaurant.name}">
                <div class="resto_detail">
                    <div class="rating">${restaurant.rating}</div>
                    <h3 class="name"><a href="/#/detail/${restaurant.id}">${
  restaurant.name
}</a></h3>
                    <div class="description">${restaurant.description}</div>
                </div>
                <div class="kota">${restaurant.city}</div>
            </div>
`;

const createRestaurantDetailTemplate = (restaurant) => {
  const foods = restaurant.menus.foods
    .map((food) => `<li>${food.name}</li>`)
    .join("");
  const drinks = restaurant.menus.drinks
    .map((drink) => `<li>${drink.name}</li>`)
    .join("");
  const categories = restaurant.categories.map(
    (category) => ` ${category.name}`
  );
  const customerReview = restaurant.customerReviews
    .map(
      (review) => `
    <div>
      <h4>${review.name}</h4>
      <p>${review.date}</p>
      <p>${review.review}</p>
    </div>`
    )
    .join("");
  return `
              <div class="card" tabindex="0">
                  <img src="${
                    restaurant.pictureId
                      ? CONFIG.BASE_IMG_URL + restaurant.pictureId
                      : ""
                  }" width="400px" alt="${restaurant.name}">
                  <div class="resto_detail">
                      <div class="rating">${restaurant.rating}</div>
                      <div class="name">${restaurant.name}</div>
                      <p class="address">${restaurant.address}</p>
                      <div class="description">${restaurant.description}</div>
                      <h3 class="categories">${categories}</h3>
                      <div class="menus">
                        <div class="foods"><h4>Foods</h4><ul>${foods}<ul></div>
                        <div class="drinks"><h4>Drinks</h4><ul>${drinks}<ul></div>
                      </div>
                      <div class="review">
                        <h3>Customer Review</h3>
                        <div class="customer_review">
                          ${customerReview}
                        </div>
                      </div>
                  </div>
                  <div class="kota">${restaurant.city}</div>
              </div>
          `;
};

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
