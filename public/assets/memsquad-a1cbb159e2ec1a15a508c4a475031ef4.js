// Closes the Responsive Menu on Menu Item Click
$(document).ready(function() {
    $('#t').click(function() {
        $('.navbar-toggle:visible').click();
    });
    
    $('#p').click(function() {
        $('.navbar-toggle:visible').click();
    });
    $(".fancybox").fancybox({
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(12, 41, 41, 0.4)'
                }
            }
        }
    });
});
