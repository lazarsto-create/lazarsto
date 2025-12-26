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

    // YouTube Modal Functions
    function getYouTubeEmbedUrl(url) {
        var videoId = null;
        
        // Handle different YouTube URL formats
        if (url.includes('youtube.com/watch?v=')) {
            videoId = url.split('v=')[1];
            var ampersandPosition = videoId.indexOf('&');
            if (ampersandPosition !== -1) {
                videoId = videoId.substring(0, ampersandPosition);
            }
        } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1];
            var questionPosition = videoId.indexOf('?');
            if (questionPosition !== -1) {
                videoId = videoId.substring(0, questionPosition);
            }
        } else if (url.includes('youtube.com/shorts/')) {
            videoId = url.split('shorts/')[1];
            var questionPosition = videoId.indexOf('?');
            if (questionPosition !== -1) {
                videoId = videoId.substring(0, questionPosition);
            }
        }
        
        if (videoId) {
            return 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
        }
        return null;
    }

    function openVideoModal(videoUrl) {
        var embedUrl = getYouTubeEmbedUrl(videoUrl);
        if (embedUrl) {
            $('#videoFrame').attr('src', embedUrl);
            $('#videoModal').addClass('active');
            $('body').css('overflow', 'hidden');
        }
    }

    function closeVideoModal() {
        $('#videoModal').removeClass('active');
        $('#videoFrame').attr('src', '');
        $('body').css('overflow', '');
    }

    // Modal close handlers
    $('.video-modal__close, .video-modal__overlay').on('click', function() {
        closeVideoModal();
    });

    // Close modal on ESC key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $('#videoModal').hasClass('active')) {
            closeVideoModal();
        }
    });

    // make grid images clickable based on portfolio.json
    $.getJSON('js/portfolio.json', function (items) {
        if (!items || !items.length) {
            return;
        }

        var $grid = $('.image-grid');
        var $filterContainer = $('.portfolio-filter');
        var loaded = 0;
        var total = items.length;
        
        // Collect unique categories from skills
        var categories = {};
        
        items.forEach(function(item) {
            if (!item.skills) return;
            
            var skills = item.skills.toLowerCase();
            var category = '';
            
            // Categorize based on skills
            if (skills.includes('video motion')) {
                category = 'Video Motion';
            } else if (skills.includes('dco')) {
                category = 'DCO';
            } else if (skills.includes('html5') || skills.includes('animation')) {
                category = 'Display';
            } else if (skills.includes('weborama')) {
                category = 'Weborama';
            }
            
            if (category && !categories[category]) {
                categories[category] = true;
            }
        });
        
        // Add filter buttons for each category
        Object.keys(categories).sort().forEach(function(category) {
            var $btn = $('<button class="filter-btn" data-filter="' + category.toLowerCase().replace(' ', '-') + '">' + category + '</button>');
            $filterContainer.append($btn);
        });
        
        // Filter button click handler
        $('.filter-btn').on('click', function() {
            var filter = $(this).data('filter');
            
            // Update active state
            $('.filter-btn').removeClass('active');
            $(this).addClass('active');
            
            // Filter items
            if (filter === 'all') {
                $('.image-grid__item').removeClass('hidden');
            } else {
                $('.image-grid__item').each(function() {
                    var itemCategory = $(this).data('category');
                    if (itemCategory === filter) {
                        $(this).removeClass('hidden');
                    } else {
                        $(this).addClass('hidden');
                    }
                });
            }
        });

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
                
                // Determine category for filtering
                var skills = item.skills ? item.skills.toLowerCase() : '';
                var category = '';
                
                if (skills.includes('video motion')) {
                    category = 'video-motion';
                } else if (skills.includes('dco')) {
                    category = 'dco';
                } else if (skills.includes('html5') || skills.includes('animation')) {
                    category = 'display';
                } else if (skills.includes('weborama')) {
                    category = 'weborama';
                }
                
                $item.attr('data-category', category);
                
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
                    
                    // Check if it's a YouTube link or has "Video Motion" skills
                    var isYouTube = href.includes('youtube.com') || href.includes('youtu.be');
                    var isVideoMotion = item.skills && item.skills.toLowerCase().includes('video motion');
                    
                    if (isYouTube || isVideoMotion) {
                        // Create a clickable div for YouTube videos
                        var $clickable = $('<div class="youtube-link" style="cursor: pointer;"></div>');
                        $clickable.append($img);
                        $clickable.on('click', function(e) {
                            e.preventDefault();
                            openVideoModal(href);
                        });
                        $item.append($clickable);
                    } else {
                        // Regular external link
                        var $link = $('<a href="' + href + '" target="_blank" rel="noopener noreferrer"></a>');
                        $link.append($img);
                        $item.append($link);
                    }
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
