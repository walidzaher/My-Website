/* global $, window,document*/

$(document).ready(function () {
    
    'use strict';
    
    // make list items look awesome
    
    $('.button').on({
                    
        click: function () {

            abers();
            $('.below').removeClass('zoomIn').
                addClass('zoomOut').delay(100).fadeOut(200, function () {

                    $('.below').removeClass('zoomOut').
                        addClass('zoomIn').css('display', 'block');
                });
        }

    });
    
     
    function abers() {
        
        $('html,body').animate({
           
            scrollTop : $('.header').outerHeight() + 170
        }, 1000);
    }
    
    $('.hire').on('click', function () {
        
        $('html,body').animate({
           
            scrollTop : $('.contact').offset().top

        }, 1000);
    })
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});

