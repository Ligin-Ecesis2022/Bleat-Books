
    
  

function setImage(id)
{
    allImages = document.querySelectorAll(".image-only");

    for (var i = 0; i < allImages.length; i++) {
        allImages[i].removeAttribute("data-active");
      }

    activeImage = document.getElementById(id);

    activeImage.setAttribute("data-active", "active");
}

$(function() {
    if ($(window).width() > 680) {  
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables privadas
            var links = this.el.find('.accordian-title');
            // Evento
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
        }

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
                $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.accordian-text').not($next).slideUp().parent().removeClass('open');
            };
        }	

        var accordion = new Accordion($('.accordian'), false);
    }
    $('.price-box').click(function(event){
        
        $('.show-feature').removeClass('show-feature');        
        $(this).addClass('show-feature');
        event.preventDefault();
    });
});


//  controlsContainer = document.getElementById('controls-container'),
