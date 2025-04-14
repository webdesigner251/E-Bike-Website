//  ================= header fixed to top =================

window.onscroll = function () { myHeaderTop() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myHeaderTop() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
}

// Get all elements with the class "nav-link"
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Function to remove 'active' class from all links
const clearActive = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
};

// Add event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Clear active class from all links
        clearActive();

        // Add active class to the clicked link
        this.classList.add('active');
    });
});

var brand_slider = new Glide('#brand-logos', {
    type: 'carousel',
    perView: 7,
    focusAt: 'center',
    breakpoints: {
        992: {
            perView: 3
        },
        576: {
            perView: 2
        },
        480: {
            perView: 1
        }
    }
});
brand_slider.mount();

var product_slider = new Glide('#product-slider', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    breakpoints: {
        992: {
            perView: 3
        },
        767: {
            perView: 1
        }
    }
});
product_slider.mount();

var testimonial_slider = new Glide('#testimonial-slider', {
    type: 'carousel',
    perView: 3,
    gap: 20,
    breakpoints: {
        992: {
            perView: 2
        },
        576: {
            perView: 1
        }
    }
});
testimonial_slider.mount();

