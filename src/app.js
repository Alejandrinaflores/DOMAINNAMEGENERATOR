/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var name = document.getElementById("name");

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var extensions = [".com", ".net", ".us", ".io"];

  function getRandomPronoun(max) {
    return Math.floor(Math.random() * max);
  }
  function getRandomAdj(max) {
    return Math.floor(Math.random() * max);
  }
  function getRandomNoun(max) {
    return Math.floor(Math.random() * max);
  }
  function getRandomExtensions(max) {
    return Math.floor(Math.random() * max);
  }
  var randomPronoun = getRandomPronoun(pronoun.length);
  var randomAdj = getRandomAdj(adj.length);
  var randomNoun = getRandomNoun(noun.length);
  var randomExtensions = getRandomExtensions(extensions.length);

  name.innerHTML =
    pronoun[randomPronoun] +
    adj[randomAdj] +
    noun[randomNoun] +
    extensions[randomExtensions];

  console.log("pronoun");
};
