var player = {
	name: "",
	age : 0,
	fact : ""
}

var random = function(array){
  var randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}


$('#enter').click(function(){
	player.name = $('#name').val()
	player.age = $('#age').val()

	var msg = $('<div class="msg"></div>')

	if($('#age').val() === '' || $('#name').val() === ""){
		alert ('please enter your info')
	}
	
	else if( $('#age').val() < 18 ){
	$('#info').remove()
				
	msg.text("OH! you're a baby !!!!")
	$('body').append(msg)
	msg.css('font-size' , '68px')
	msg.css('text-alignt' , 'center')
	msg.css('margin-top' , '0px')
	msg.css('color' , 'white')
	msg.css('cursor', 'pointer')
	msg.css('width', '100%')
	msg.css('height', '100%')
	msg.css('top', '0')
	msg.css('left', '0')
	msg.css('bottom', '0')
	msg.css('right', '0')
	msg.css('width', '100%')
	msg.css('height', '100%')
	msg.css('position', 'fixed')
	msg.css('padding-top', '349px')
	msg.css('padding-top' , '304px')
	msg.css('padding-left', '375px')
	msg.click(off)
	
	} else if( $('#age').val() > 18  ){
	$('#info').remove()
	// var msg = $('<div></div>')			
	msg.text("Hello Boomer")
	$('body').append(msg)
	msg.css('font-size' , '68px')
	msg.css('text-alignt' , 'center')
	msg.css('margin-top' , '0px')
	msg.css('color' , 'white')
	msg.css('cursor', 'pointer')
	msg.css('width', '100%')
	msg.css('height', '100%')
	msg.css('top', '0')
	msg.css('left', '0')
	msg.css('bottom', '0')
	msg.css('right', '0')
	msg.css('width', '100%')
	msg.css('height', '100%')
	msg.css('position', 'fixed')
	msg.css('padding-top' , '304px')
	msg.css('padding-left', '473px')
	msg.click(off)
}

})

 
function off(){
  $(".msg").remove();
  $('#bts').css('display' , 'block');
}


$('#b2').click(function(){
	$('#b2').css('display' , 'none')
	$('#b3').css('display' , 'block')

})

$('#b3').click(function(){
	$('#b3').css('display' , 'none')
	$('#b1').css('display' , 'block')

})

$('#b1').click(function(){
	$('#b1').css('display' , 'none')
	$('#b4').css('display' , 'block')

})

var sec = 9;

$('#b4').click(function(){
	$('#bts').remove();
	$('#count').css("display" , "block")

	    setInterval( function () {
        $("#countDown").html(sec);
        sec --;

       if(sec === -1){
	  	$('#count').remove()
	  	$('#fun').css('display' , 'block')
	  }

    }, 1000);

})


$('#add').click( function (){
	player.fact = $('textarea').val()
	$('#fun').remove()
})















// var i = 1;
// $("#startButton").click(function (e) {
    // setInterval(function () {
    //     $("#stopWatch").html(i);
    //     i++;
    // }, 1000);
// });


// function click(){
// 	console.log('hi')
// }

// setTimeout(finction(){
// 	console.log('hi')
// } , 5000)
