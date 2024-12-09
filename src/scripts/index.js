import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './sw-register';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.drawer'),
  content: document.querySelector('#main_content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// document.addEventListener("DOMContentLoaded", function () {
//   const hamburger = document.querySelector(".hamburger");
//   const drawer = document.querySelector(".drawer");
//   const overlay = document.querySelector(".overlay");

//   hamburger.addEventListener("click", function () {
//     drawer.classList.toggle("active");
//     overlay.classList.toggle("active");
//     hamburger.classList.toggle("active");
//   });

//   overlay.addEventListener("click", function () {
//     overlay.classList.remove("active");
//     drawer.classList.remove("active");
//   });

//   let restaurantList;

//   async function getRestaurant() {
//     const response = await fetch("./data/DATA.json");
//     const responseJson = await response.json();
//     const restaurants = responseJson.restaurants;

//     return restaurants;
//   }

//   (async function () {
//     restaurantList = await getRestaurant();

//     const restaurants = restaurantList.map(
//       (restaurant) =>
//         `
// <div class="card" tabindex="0">
//     <img src="${restaurant.pictureId}" width="400px" alt="${restaurant}">
//     <div class="resto_detail">
//         <div class="rating">${restaurant.rating}</div>
//         <div class="name">${restaurant.name}</div>
//         <div class="description">${restaurant.description}</div>
//     </div>
//     <div class="kota">${restaurant.city}</div>
// </div>
//             `
//     );
//     const mainContent = document.querySelector("main");

//     mainContent.innerHTML = restaurants.join("");
//   })();
// });
