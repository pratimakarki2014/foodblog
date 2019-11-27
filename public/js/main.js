$(document).ready(() => {
    $('.menu-delete').on('click', (e) => {
        $target = $(e.target);
        $.ajax({
            type: 'DELETE',
            url: '/menus/delete/' + $target.attr('data-cat-id'),
            success: (response) => {
                alert('Menu Removed');
                window.location.href = '/'
            },
            error: (error) => {
                console.log(error);
            }
        });

    });
});
