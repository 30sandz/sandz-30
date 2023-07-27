$(document).ready(function() {
    const slider = $('.slider');
    const sliderNumberButtons = $('.slider-number-buttons');

    slider.slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    slider.on('init reInit afterChange', function(event, slick, currentSlide) {
        // Update the numbered buttons on slide changes
        updateSliderNumberButtons(slick, currentSlide);
    });

    function updateSliderNumberButtons(slick, currentSlide) {
        // Clear existing buttons
        sliderNumberButtons.empty();

        // Get the total number of slides (images)
        const totalSlides = slick.slideCount;

        // Create numbered buttons for each slide
        for (let i = 0; i < totalSlides; i++) {
            const button = $('<button></button>')
                .text(i + 1)
                .attr('data-slide-index', i)
                .addClass('btn btn-sm btn-outline');

            // Highlight the button corresponding to the current slide
            if (i === currentSlide) {
                button.addClass('active');
            }

            // Add click event to navigate to the slide
            button.on('click', function() {
                const slideIndex = $(this).data('slide-index');
                slider.slick('slickGoTo', slideIndex);
            });

            // Append the button to the slider number buttons container
            sliderNumberButtons.append(button);
        }
    }

    // Initialize the numbered buttons
    updateSliderNumberButtons(slider.slick('getSlick'), 0);
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".about-pg");
    const revealPosition = textElement.getBoundingClientRect().top + window.pageYOffset; // Get the top position of the text relative to the viewport
  
    function revealTextOnScroll() {
      if (window.pageYOffset >= revealPosition - window.innerHeight + 100) { // Adjust the 100 value as needed to control the delay
        textElement.style.opacity = "1";
        textElement.style.transform = "translateY(0)";
      }
    }
  
    window.addEventListener("scroll", revealTextOnScroll);
  });