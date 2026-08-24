let accordionBtn= Array.from(document.getElementsByClassName('accordion-btn'));

accordionBtn.forEach((item)=>{
    item.addEventListener('click', function () {
        item.classList.toggle('active');
        item.nextElementSibling.classList.toggle('active');
    })
})