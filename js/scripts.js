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

        var $grid = $('.image-grid');
        var loaded = 0;
        var total = items.length;

        items.forEach(function(item, index) {
            if (!item.images) return;

            var filename = item.images;
            var imagePath = 'images/portfolio/' + filename;
            
            // Test if image exists by trying to load it
            var testImg = new Image();
            testImg.onload = function() {
                // Image exists, create the grid item
                var $item = $('<div class="image-grid__item" data-file="' + filename + '"></div>');
                var $img = $('<img src="' + imagePath + '" alt="">');
                
                // Add skills overlay
                if (item.skills) {
                    var $overlay = $('<div class="image-grid__overlay"><span class="image-grid__skills">' + item.skills + '</span></div>');
                    $item.append($overlay);
                }
                
                // Wrap image with link if URL exists
                if (item.url) {
                    var href = item.url;
                    if (!/^https?:\/\//i.test(href)) {
                        href = 'https://' + href;
                    }
                    var $link = $('<a href="' + href + '" target="_blank" rel="noopener noreferrer"></a>');
                    $link.append($img);
                    $item.append($link);
                } else {
                    $item.append($img);
                }
                
                $grid.append($item);
            };
            testImg.onerror = function() {
                // Image doesn't exist, skip it
                console.log('Image not found: ' + imagePath);
            };
            testImg.src = imagePath;
        });
    });

});
