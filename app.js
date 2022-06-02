const ratingForm = document.forms['support-feedback'];
const ratings = ratingForm.elements.rating;
let userRating = '';
const userRatingText = document.querySelector('.user-rating');
const submitBtn = document.querySelector('.form-group-btn button');
const errorMessage = document.querySelector('.error');
const surveySection = document.getElementById('survey');
const thankyouSection = document.getElementById('thankyou');

getRating();

submitBtn.addEventListener('click', (e) => {
  if (userRating === '') {
    e.preventDefault();
    errorMessage.classList.remove('hidden');
    errorMessage.setAttribute('aria-live', 'polite');
    getRating();
  } else {
    e.preventDefault();
    userRatingText.innerText = userRating;
    thankyouSection.classList.remove('hidden');
    surveySection.classList.add('hidden');
  }
});

function getRating() {
  ratings.forEach(rating => {
    rating.addEventListener('change', () => {
      userRating = rating.value;
      return userRating;
    });
  });
}
