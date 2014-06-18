$(document).ready(function(){
	$('#left-panel-link').panelslider();
    $('#right-panel-link').panelslider({side: 'right', clickClose: false, duration: 200 });

    $('#close-panel-bt').click(function() {
      $.panelslider.close();
    });
})