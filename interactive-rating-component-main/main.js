const ratingState = document.querySelector('.rating-state');
const thankyouState = document.querySelector('.thankyou-state');
const btnRatings = document.querySelectorAll('.ratings-buttons .btn-rating');
const btnSubmit = document.querySelector('.btn-submit');
const rating = document.querySelector('.rating');
let ratingSelected;

btnRatings.forEach((btnRating) => {
  btnRating.addEventListener('click', () => {
    btnRatings.forEach((btnRating2) => {
      if (btnRating2.classList.contains('active')) {
        btnRating2.classList.remove('active');
      }
    });
    btnRating.classList.add('active');
  });
});

btnSubmit.addEventListener('click', () => {
  const btnRating = document.querySelector('.active');
  if (btnRating === null) return;
  ratingSelected = btnRating.textContent;
  ratingState.classList.add('none');
  thankyouState.classList.remove('none');
  rating.textContent = ratingSelected;
});
