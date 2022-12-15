let rating = 5;
var ratingList = document.querySelector('.rating__list');
var submit = document.querySelector('.submit__button');
var ratingText = document.querySelector('.card__rating');


ratingList.addEventListener('click', function (event) {
    rating = event.target.textContent
});

submit.addEventListener('click', function () {
    ratingText.textContent = `You selected ${rating} out of 5`
});