document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.hamburger-menu');
  const icon = document.querySelector('.hamburger-menu i');
  const mobileMenu = document.querySelector('.mobile-menu');

  btn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    icon.classList.toggle('fa-bars')
    icon.classList.toggle('fa-xmark')
  });
});

$('#hero').owlCarousel({
  items:1,
  margin: 0,
  loop:true,
  dots: false,
  nav:false,
  autoplayHoverPause: false,
  smartSpeed:1500,         
  autoplay:true,      
      responsive: {
      0: {
          
      },
      480: {
          
      },
      768: {
          
      },
      992: {
          
      }
  }
});


$('#reviews').owlCarousel({
  items:3,
  margin: 20,
  loop:true,
  dots: true,
  nav:false,
  autoplayHoverPause: false,
  smartSpeed:1500,         
  autoplay:true,      
      responsive: {
      0: {
        items:1
      },
      480: {
        items:1
      },
      768: {
        items:2
      },
      992: {
          items:3
      }
  }
});