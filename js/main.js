
const sliderLineReviews = document.querySelector('.reviews-slider-line');
const buttonNext = document.querySelector('.next');
const buttonPrev = document.querySelector('.prev');

let offsetRev = 0;
// Slider 
function next() {
    offsetRev += 540;
        if(offsetRev > 4320) {
            offsetRev = 0;
        }
        sliderLineReviews.style.left = -offsetRev + 'px';
};
function prev() {
    offsetRev -= 540;
    if(offsetRev < 0) {
        offsetRev = 4320;
    }
    sliderLineReviews.style.left = -offsetRev + 'px';
};

buttonNext.addEventListener('click', next);
buttonPrev.addEventListener('click', prev);


let autoplayReviews = () => setInterval(function() {
    offsetRev += 540;
    if(offsetRev > 4320) {
        offsetRev = 0;
    }
    sliderLineReviews.style.left = -offsetRev + 'px';
}, 5000);
autoplayReviews();
