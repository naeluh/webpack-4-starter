// import SASS
import "../css/application.scss";

// import packages
import "es6-promise";
import "core-js";
import "regenerator-runtime/runtime";
import fetch from "isomorphic-fetch";

/**
 * @function addEvents
 * @description Add Events to application
 * @returns {boolean}
 *
 */
const addEvents = async () => {
  // Get all buttons
  const infoButtons = [...document.querySelectorAll(".tag-page__card__button")];
  if (infoButtons) {
    infoButtons.forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();

        // Remove class and reset attributes for all elements
        infoButtons.forEach(button => {
          if (button !== event.target) {
            if (button.classList.contains("active")) {
              button.classList.remove("active");
              button.setAttribute("aria-expanded", "false");
              button.parentNode.parentNode.children[1].classList.remove(
                "active"
              );
              button.parentNode.parentNode.children[1].setAttribute(
                "aria-hidden",
                "true"
              );
            }
          }
        });

        // Set class active
        event.target.classList.toggle("active");
        event.target.parentNode.parentNode.children[1].classList.toggle(
          "active"
        );

        // Set aria info
        if (event.target.getAttribute("aria-expanded") === "false") {
          event.target.setAttribute("aria-expanded", "true");
        } else {
          event.target.setAttribute("aria-expanded", "false");
        }
        if (
          event.target.parentNode.parentNode.children[1].getAttribute(
            "aria-hidden"
          ) === "true"
        ) {
          event.target.parentNode.parentNode.children[1].setAttribute(
            "aria-hidden",
            "false"
          );
        } else {
          event.target.parentNode.parentNode.children[1].setAttribute(
            "aria-hidden",
            "true"
          );
        }
      });
    });
  }
};

/**
 * @function init
 * @description Initialize the application
 * @returns {boolean}
 *
 */
const init = async () => {
  try {
    // Make call to https://randomuser.me
    const url = `https://randomuser.me/api/?results=50`;
    const repsonse = await fetch(url);
    const json = await repsonse.json();
    const results = json.results;

    // Get container from html
    const userContainer = document.getElementById("tag-user-list");

    // Remove loading container before render
    // document.getElementById("loading").remove();
    document.getElementById("loading").style.display = "none";

    // Render results
    results.forEach(({ cell, email, picture, location, name }) => {
      // Create HTML fragment to render list element
      const template = document.createRange().createContextualFragment(`
        <li class="tag-page__grid__item">
            <article class="tag-page__card" role="article">
            <div class="tag-page__card__container">
              <figure class="tag-page__card__figure" role="figure">
                  <img src="${picture.large}" alt="user image" title="user image">
              </figure>
              <header class="tag-page__card__header">
                  <h3 aria-label="Name">${name.first} ${name.last}</h3>
                  <p aria-label="Location">${location.city}, ${location.country} </p>
              </header>
              <button 
                  aria-controls="toggle user info" 
                  aria-expanded="false" 
                  class="tag-page__card__button"
                  aria-label="toggle user info"
                  >
                  <?xml version="1.0" encoding="utf-8"?><svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><desc>Created with Lunacy</desc><path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" transform="matrix(-1 -8.742278E-08 8.742278E-08 -1 12 7.410004)" id="Shape" fill="#E0E0E0" stroke="none" /></svg>
              </button>
            </div>
            <div aria-hidden="true" class="tag-page__card__info">
                <div class="tag-page__card__info__left">
                <h5>Phone</h5>
                <p aria-label="Phone">${cell}</p>
                </div>
                <div class="tag-page__card__info__center">
                  <?xml version="1.0" encoding="utf-8"?>
                  <svg class="line" viewBox="0 0 1 80" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                    <desc>Created with Lunacy</desc>
                    <path d="M0 0L1 0L1 80L0 80L0 0Z" id="Separator" fill="#000000" fill-opacity="0.1" stroke="none" />
                  </svg>
                </div>
                <div class="tag-page__card__info__right">
                <h5>Email</h5>
                <p aria-label="Email">${email}</p>
                </div>
            </div>
            </article>
        </li>
    `);

      // Append content to container
      userContainer.appendChild(template);
    });

    // add events after DOM has been rendered
    addEvents();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// Run init function
init();
