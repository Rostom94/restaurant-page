import "./style.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { About } from "./about.js";

document.querySelector(".home").addEventListener("click", () => {
  document.querySelector("#content").innerHTML = "";
  Home();
});

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector("#content").innerHTML = "";
  Menu();
});

document.querySelector(".about").addEventListener("click", () => {
  document.querySelector("#content").innerHTML = "";
  About();
});
