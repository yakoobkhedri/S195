// open sidebar

let openSidebar= document.getElementById('openSidebar');
let sidebar= document.getElementById('sidebar');
let closeSidebar= document.getElementById('closeSidebar');
let overlay= document.getElementById('overlay');

openSidebar.addEventListener('click', function () {
    sidebar.classList.add('active');
    overlay.classList.add('active');
})
closeSidebar.addEventListener('click', function () {
    sidebar.classList.remove('active');
        overlay.classList.remove('active');
})
overlay.addEventListener('click', function () {
    sidebar.classList.remove('active');
        overlay.classList.remove('active');
})

// accordion
let accordionBtn= Array.from(document.getElementsByClassName('accordion-btn'));

accordionBtn.forEach((item)=>{
    item.addEventListener('click', function () {
        item.classList.toggle('active');
        item.nextElementSibling.classList.toggle('active');
    })
})


// swiper

var banner = new Swiper(".banner", {
  slidesPerView: 1,
  spaceBetween: 0,
  allowTouchMove: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// datapicker

jalaliDatepicker.startWatch();