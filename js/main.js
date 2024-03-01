(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });

    // function toggleAnimation(element) {
    //     element.classList.toggle('animate');
    // }


    // Define an array of paragraphs
const paragraphs = [
    `A small river named Duden flows by their place and supplies it
    with the necessary regelialia.<br> It is a paradisematic country, in which roasted parts of
    sentences fly into your mouth.`,
    `Far far away, behind the word mountains, far from the
    countries Vokalia and <br>
    Consonantia, there live the blind texts. there live the blind texts.
    there live the blind texts. there live the blind texts.`,
    `A small river named Duden flows by their place and supplies it
    with the necessary regelialia. <br> It is a paradisematic country, in which roasted parts of
    sentences fly into your mouth.`,
    `Far far away, behind the word mountains, far from the
    countries Vokalia and <br>
    Consonantia, there live the blind texts. there live the blind texts.
    there live the blind texts. there live the blind texts.`
];

// Function to change the paragraph content
function changeParagraph(index) {
    const paragraph = document.getElementById("paragraph");
    if (index >= 0 && index < paragraphs.length) {
        paragraph.innerHTML = paragraphs[index];
    }
}

// Example: Change paragraph content on click
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".workingbtn li a");
    links.forEach(function(link, index) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            changeParagraph(index);
        });
    });
});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    //counterUp
    // Selector
const counters = document.querySelectorAll('.counter');
// Main function
for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 5000; // change animation speed here
    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}

    
})(jQuery);

