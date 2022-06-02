const ratingForm = document.forms['support-feedback'];
const ratings = ratingForm.elements.rating;
const userRating = ratings.value;
const noRating = "0";
const userRatingText = document.querySelector('.user-rating');
const submitBtn = document.querySelector('.form-group-btn button');
const surveySection = document.getElementById('survey');
const thankyouSection = document.getElementById('thankyou');

ratings.forEach(rating => {
  rating.addEventListener('change', () => {
    userRatingText.innerText = rating.value;
    console.log(userRatingText.innerText);
  });
});
