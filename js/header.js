$('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
    setTimeout(() => {
        $('body').toggleClass('menu-open');
    }, 300);
});