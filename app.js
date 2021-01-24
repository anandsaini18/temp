const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const galleryBtn = document.querySelector('.galleryBtn');

    galleryBtn.addEventListener('click', function () {
        $('html,body').animate({
            scrollTop: $(".about-container").offset().top
        },
            'slow');
        console.log('CLICKED');
    });
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 2s ease forwards ${index / 6 + 0.2}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');

    });
}


// $(".galleryBtn").click(function () {
//     $('html,body').animate({
//         scrollTop: $(".about-container").offset().top
//     },
//         'slow');
// });


const app = () => {
    navSlide();
}
app();