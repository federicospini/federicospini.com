$.domReady(function () {

    var gmail = $('#gmail'),
        twitter = $('#twitter'),
        facebook = $('#facebook'),
        linkedin = $('#linkedin'),
        contacts = [
            gmail, twitter, facebook, linkedin
        ];

    //gmail
    $('#contacts .contact').each(function (el) {
        $(el)
            .click(function (e) {
                var el = $(e.currentTarget);

                window.location = el.data('link');
            })
            .mouseenter(function (e) {
                $(e.currentTarget)
                    .removeClass('out')
                    .addClass('over');
            })
            .mouseleave(function (e) {
                $(e.currentTarget)
                    .removeClass('over')
                    .addClass('out');
            });
    });

   //twitter
});