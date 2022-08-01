/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];

  function getDomain(array1, array2, array3, array4) {
    let output = [];
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        for (let k = 0; k < array3.length; k++) {
          for (let l = 0; l < array4.length; l++) {
            output.push("<br>" + array1[i] + array2[j] + array3[k] + array4[l]);
          }
        }
      }
    }

    return output;
  }
  document.getElementById("domainlist").innerHTML = getDomain(
    pronoun,
    adj,
    noun,
    extensions
  );
};
