"use strict";
// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import '@fortawesome/fontawesome-free/js/all.js';

const pageNavLinks = document.querySelectorAll(".scrollto");

pageNavLinks.forEach((pageNavLink) => {
  pageNavLink.addEventListener("click", (e) => {
    e.preventDefault();

    const target = pageNavLink.getAttribute("href").replace("#", "");

    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  });
});
