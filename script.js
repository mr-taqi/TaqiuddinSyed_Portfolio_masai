
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
  let resume1 = document
    .getElementById("resume-button-1")
    .addEventListener("click", NewTab);
  let resume2 = document
    .getElementById("resume-button-2")
    .addEventListener("click", NewTab);

  function NewTab() {
    window.open(
    "https://drive.google.com/file/d/1tnZehSumSQI2KAsHbDBnRrza4gm0g3Hn/view?usp=sharing",
    "_blank"
    );
  }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const username = document.getElementById('gh').getAttribute('data-login');
//     const apiUrl = `https://api.github.com/users/${mr-taqi}/events/public`; 

//     fetch(apiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             const contributions = {};
//             data.forEach(event => {
//                 if (event.type === 'PushEvent') {
//                     const date = new Date(event.created_at).toISOString().split('T')[0];
//                     contributions[date] = (contributions[date] || 0) + 1;
//                 }
//             });

//             renderContributions(contributions);
//         })
//         .catch(error => console.error('Error fetching contribution data:', error));

//     function renderContributions(contributions) {
//         const container = document.getElementById('gh');
//         container.innerHTML = '';

//         for (const [date, count] of Object.entries(contributions)) {
//             const contributionElement = document.createElement('div');
//             contributionElement.style.width = '100%';
//             contributionElement.style.height = `${count * 10}px`;
//             contributionElement.style.backgroundColor = '#28a745';
//             contributionElement.style.margin = '1px 0';
//             contributionElement.title = `${date}: ${count} contributions`;
//             container.appendChild(contributionElement);
//         }
//     }
// });


