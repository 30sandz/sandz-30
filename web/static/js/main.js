$(document).ready(function() {
    const slider = $('.slide');
    const numberButtons = $('.btn-number');
    

    slider.slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    numberButtons.on('click', function() {
        const number = parseInt($(this).text()) - 1;
        slider.slick('slickGoTo', number);
    });

    slider.on('afterChange', function(event, slick, currentSlide) {
        // Update active number button
        numberButtons.removeClass('active');
        numberButtons.eq(currentSlide).addClass('active');
    });

    // Add the active class to the first number button initially
    numberButtons.eq(0).addClass('active');
});

const gmailIcon = document.querySelector('.gmail-icon');
const instagramIcon = document.querySelector('.instagram-icon');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupId = document.getElementById('popup-id');

gmailIcon.addEventListener('click', () => {
    showPopup('Gmail ID', 'your.email@gmail.com');
    // Uncomment the line below to send an email
    window.location.href = 'mailto:your.email@gmail.com';
});

instagramIcon.addEventListener('click', () => {
    showPopup('Instagram ID', 'your_instagram_id');
    // Uncomment the line below to open the Instagram messaging page
    window.location.href = 'https://www.instagram.com/your_instagram_id/';
});

function showPopup(title, id) {
    popupTitle.textContent = title;
    popupId.textContent = id;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}
