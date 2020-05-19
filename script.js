

$('#enter').click(function(){

	if($('#age').val() === '' || $('#name').val() === ""){
		alert ('please enter your info')
	}
	
	else if( $('#age').val() < 18 ){
	$('#info').remove()
	var msg = $('<div></div>')			
	msg.text("OH! you're a baby !!!!")
	$('body').append(msg)
	msg.css('font-size' , '129px')
	msg.css('color' , 'white')
	
	} else if( $('#age').val() > 18  ){
	$('#info').remove()
	var msg = $('<div></div>')			
	msg.text("Hello Boomer")
	$('body').append(msg)
	msg.css('font-size' , '129px')
	msg.css('color' , 'white')
}

})