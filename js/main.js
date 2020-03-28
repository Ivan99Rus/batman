$(document).ready(function() {
    let tabsItem = $('.tabs-item');

    tabsItem.on('click', function(event) {
        event.preventDefault();

        let actveContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(actveContent).toggleClass('visible');
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');
    })
});