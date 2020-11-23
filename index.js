
'use strict';

function getDogImages(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}

function displayResults(responseJson) {
  console.log(responseJson);
  let images = responseJson.message.map(pic => {
    return `<img src="${pic}" class="">`
  })
  $('.results-imgs').replaceWith(
    `<div class="results-imgs">${images.join(" ")}</div>`
  )
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let num = $('input').val();
    getDogImages(num);
  });
};

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});