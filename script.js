var player = {
	name: "",
	age : 0,
	fact : "",
	hobby : ""
}

var result = 0;

var random = function(array){
  var randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}


$('#enter').click(function(){
	player.name = $('#name').val()
	player.age = $('#age').val()
	player.hobby = $('#hobby').val()

	var msg = $('<div class="msg"></div>')

	if($('#age').val() === '' || $('#name').val() === "" || $('#hobby').val() === ""){
		alert ('please enter your info')
	}
	
	else if( $('#age').val() < 18 ){
	$('#info').remove()
				
	msg.text("OH! you're a baby !!!!")
	$('body').append(msg)
	msg.css('font-size' , '68px')
	msg.css('text-alignt' , 'center')
	msg.css('margin-top' , '0px')
	msg.css('color' , 'rgb(51, 51, 0)')
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
	msg.css('color' , 'rgb(51, 51, 0)')
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
	  	$('#quiz').css('display' , 'block')
	  	$('#choice1').text(player.name)
	  }

    }, 1000);

})

//////

var msg = $('<div id="msg"></div>')

$('#ne').click( function (){	
	$('#quiz').remove()
	// $('#predict').css('display' , 'block')

	// var msg = $('<div id="msg"></div>')
		msg.text("Your Score will be ZERO anyway")
	$('body').append(msg)
	msg.css('font-size' , '68px')
	msg.css('text-alignt' , 'center')
	msg.css('margin-top' , '0px')
	msg.css('color' , 'rgb(51, 51, 0)')
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
	msg.css('padding-left', '194px')
	msg.css('font-weight' , '550')
	// msg.click(off)
	msg.click(display)

})

var display = function(){
	$('#predict').css('display' , 'block')
	$('#msg').remove()
}


var words =['food' , 'Sara' , 'Danger' , 'lovely', 'interesting' , 'friday' , 'sleep' , 'job']

$('#ad').click(function(){
	$('#one').empty()
	$('#two').empty()

	$('#one').text( $('#preW').val() );
	$('#two').text( random(words) );
	$('#preW').val('')

	if($('#one').text() === $('#preW').val()){
		result ++
		setTimeout(function(){
			alert('WOOOOOOOW !!')} , 1000)

	} else if($('#one').text() !== $('#preW').val()){
		setTimeout(function(){
			alert('Are you an idiot ?')} , 1000)
		
	}
	
})
 ////////

$('#next2').click(function(){
	$('#predict').remove()
	$('#fun').css('display' , 'block')
})


$('#add').click(function(){
	player.fact = $('textarea').val()
	if($('textarea').val() === ""){
		alert('we need to know something about you')
	} else {
	$('#fun').remove()
	$('#fortune').css('display', 'block')
	}
})

var sub = ['you' , 'your life' , 'the neighbor' , 'lots of money' , 'a car' , 'cats' , 'RBK' , 'naruto']
var verb = ['will step on' , 'will eat' , 'is going to destroy' , 'will eat' , 'will jump on' , 'will punch' , 'is going to kill' , 'will fight']
var obj = ['you' , 'your reputation' , 'tiolet paper' , 'shoes' , 'a mountain' , 'banks' , 'us' , 'villians']


$('#click').click(function(){
	$('#spn').empty()
	$('#spn').text(random(sub) + " " + random(verb) + " " + random(obj))
})


$('#next').click(function(){

	$('#fortune').remove()
	$('#final').css('display', 'block')
	$('#name1').text(player.name);
	$('#age1').text(player.age);
	$('#hobby1').text(player.hobby);
	$('#result').text(0);
	$('#fact').text(player.fact);
	
})

// $('#ne').click(function(){
// 	$('#quiz').remove();
// 	$('#predict').css('display' , 'block');
// })










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
