// Get Slider Items As Array
var sliderImages = Array.from(document.querySelectorAll('.slider-container .slider-images img')); // Array List
// var sliderImages1 = document.querySelectorAll('.slider-container .slider-images img'); // Node List

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Current Slide
var currentSlide = 1;

// Sled Number Element --> Slide #6
var slideNumberElement = document.querySelector('.slider-container .slide-number');

// Previous & Next Buttons
var nextButton = document.querySelector('.slider-control .next');
var prevButton = document.querySelector('.slider-control .prev');

// Handle Click On Prev & Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create Mein UL Element
var indicatorElement = document.createElement('ul');

// Set ID On Created Element
indicatorElement.setAttribute('id','indicator-ul');

// Create List Items Based On Slides Count
for (var i = 1 ; i<= slidesCount; i++) {
    // Create the LI
    indicatorItem = document.createElement('li');
    // Set ID On Created Items
    indicatorItem.setAttribute('data-index', i );
    // Set Item content
    indicatorItem.appendChild(document.createTextNode(i));
    // Append Items To The Main Parent
    indicatorElement.appendChild(indicatorItem);
}

// Append the Created Element To the Page
document.querySelector('.slider-control .indicators').appendChild(indicatorElement);

// Get The New Created UL
var indicatorUL = document.getElementById('indicator-ul');
// Get Slider Items As Array
var indicatorULArray = Array.from(document.querySelectorAll('#indicator-ul li'));

// Loop Through All Indicator Items
indicatorULArray.forEach(list => {
    list.onclick = function () {
        currentSlide = parseInt(list.getAttribute('data-index'));
        theChecker();
    }
});
// Trigger The Checker Function
theChecker();


// Next Slide Function
function nextSlide() {
    // console.log('Next');
    if (currentSlide == slidesCount) {
        currentSlide = 1;
        theChecker();
    } else {
        currentSlide++;
        theChecker(); 
    }
}

// Previous Slide Function
function prevSlide() {
    // console.log('Previous');
    if (currentSlide == 1) {
        currentSlide = slidesCount;
        theChecker();
    } else {
        currentSlide--;
        theChecker(); 
    }
}

// Create The Checker Function
function theChecker() {
    // Set The Slider Number
    slideNumberElement.textContent = 'Slide #' + currentSlide + ' of ' + slidesCount ;

    // Remove All Active Classes
    removeAllActive();

    // Set Active Class On The Current Slide
    sliderImages[currentSlide-1].classList.add('active');

    // Set Active Class On Current indicator Item
    indicatorUL.children[currentSlide-1].classList.add('active');
}

// Remove All Active Classes From Images & Indicator Bulletes
function removeAllActive() {
    // Loop Through Images
    sliderImages.forEach(img => {
        img.classList.remove('active');
    });
    // Loop Through Indicators
    indicatorULArray.forEach(list => {
        list.classList.remove('active');
    });
}

// AutoSliding

let autoSliding = setInterval(() => {
    nextSlide();
}, 8000);
