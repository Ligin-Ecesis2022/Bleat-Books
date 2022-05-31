// $(document).ready(function() {
//     $(".accordian-title").click(function(){
//         $(this).parent('.accordian').toggleClass('open');
//         // $(".accordian").siblings().hasClass("open").remove;
//     }); 

// });



$(function() {
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
});


  