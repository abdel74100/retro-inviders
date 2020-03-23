var sidebar = document.querySelector('.menu_sidebar');
var menu = document.querySelector('.menu_burger');
var activatedClass = 'burger_activated';

menu.addEventListener('click', function (effect) {
    effect.preventDefault();

    this.parentNode.nextElementSibling.classList.add(activatedClass);


})


//display button if the window scoll down
var btn = $('#button2020');
console.log(btn);
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

//clik to go to the top
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
