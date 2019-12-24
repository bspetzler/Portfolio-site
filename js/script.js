link();

function link(){
    $('.body').on('click', '.link', function(event) {
        event.preventDefault();
        const href = $(this).attr('href');
        window.open(href);
    })
}