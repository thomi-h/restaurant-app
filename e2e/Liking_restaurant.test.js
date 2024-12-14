const assert = require("assert");

Feature("Liking restaurant");

Before(({ I }) => {
  I.amOnPage("/#/like");
});

Scenario("showing empty liked movies", ({ I }) => {
  I.seeElement(".content");
  I.see("", ".restaurants");
});

Scenario("Liking one movie", async ({ I }) => {
  I.amOnPage("/");

  I.seeElement(".name a");
  const firstRestaurant = locate(".name a").first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/like");
  I.seeElement(".card");
  const likedRestaurantName = await I.grabTextFrom(".name");

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
