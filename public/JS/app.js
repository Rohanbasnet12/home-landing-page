let openNavBtn = $('.open');
let closeNavBtn = $('.close');

openNavBtn.on('click', () => {
    closeNavBtn.toggle();
    openNavBtn.toggle();

    $('#menu').addClass('ham_active');
});
closeNavBtn.on('click', () => {
    closeNavBtn.toggle();
    openNavBtn.toggle();

    $('#menu').removeClass('ham_active');
});