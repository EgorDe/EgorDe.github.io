$(document).ready(function () {
    $('.navbar_two-body__burger').click(function (event) {
        $('.navbar_two-body__burger, .navbar_two-body__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});