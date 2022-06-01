    var controlsContainer = document.getElementById('accordianTabs')
    var allImages = document.querySelectorAll('.image-only')
    var imagesContainer = document.getElementById('imagecontainer');
    

    accordianTabs.onclick = function(e){
        
  var target = e.target,
    dataTarget = target.getAttribute('data-image'),      
    activeImage = document.getElementById(dataTarget);
    // console.log(dataTarget);        
  if(dataTarget){
    for( var i = 0; i < allImages.length; i++){
    allImages[i].removeAttribute('data-active');    
  } 
  activeImage.setAttribute('data-active', 'active');
  }  
}


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


//  controlsContainer = document.getElementById('controls-container'),
