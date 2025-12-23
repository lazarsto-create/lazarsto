$(function () {

    FastClick.attach(document.body);


    function isMobile() {
        var userAgent = navigator.userAgent;

        return (userAgent.match(/i(Phone|Pod|Pad)|Android/i) || window.matchMedia("only screen and (max-width: 740px)").matches);
    }


    // helpers

    $('html').removeClass('no-js');

    if (isMobile()) {
        $('html').removeClass('no-touch').addClass('touch');
    }


    if(isMobile()){
		$('body').removeClass('screen--standard').addClass('screen--mobile');
	}
		
    $('.current-year').html(new Date().getFullYear());
    $('.start-year').html(new Date().getFullYear() - 1994);


    // menu
    $('.menu__icon').on('click', function () {
        $('.menu').toggleClass('menu--active');
    })

    // make grid images clickable based on portfolio.json
    $.getJSON('js/portfolio.json', function (items) {
        if (!items || !items.length) {
            return;
        }

        var map = {};
        for (var i = 0; i < items.length; i++) {
            if (items[i].images) {
                map[items[i].images] = items[i];
            }
        }

        $('.image-grid__item').each(function () {
            var $item = $(this);
            var file = $item.data('file');
            var info = map[file];

            // Add skills overlay
            if (info && info.skills) {
                if ($item.find('.image-grid__overlay').length === 0) {
                    $item.append('<div class="image-grid__overlay"><span class="image-grid__skills">' + info.skills + '</span></div>');
                } else {
                    $item.find('.image-grid__skills').text(info.skills);
                }
            }

            if (info && info.url) {
                var href = info.url;
                // add protocol if omitted
                if (!/^https?:\/\//i.test(href)) {
                    href = 'https://' + href;
                }

                var $img = $item.find('img');

                // wrap image with anchor if not already wrapped
                if ($img.parent('a').length === 0) {
                    $img.wrap('<a href="' + href + '" target="_blank" rel="noopener noreferrer"></a>');
                } else {
                    $img.parent('a').attr('href', href);
                }
            }
        });
    });

});
