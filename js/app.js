$(document).ready(function() {
	$('#theme-song')[0].volume = 0.3;
	$('#theme-song')[0].play();
	$('.sf-logo').fadeIn(3500, function() {
		$(this).fadeOut(1000, function() {
			$('.how-to').fadeIn(1000);
		});
	})

	$('.ryu').mouseenter(function() {
		$('.ryu-standing-still').hide();
		$('.ryu-ready-position').show();
	}).mouseleave(function() {
		$('.ryu-ready-position').hide();
		$('.ryu-standing-still').show();
	}).mousedown(function() {
		
		playHadouken();
		
		$('.ryu-ready-position').hide();
		$('.ryu-throwing-hadouken').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			});
		
	}).mouseup(function() {
		$('.ryu-throwing-hadouken').hide();
		$('.ryu-ready-position').show();
	});

	$(document).keydown(function(event) {
		if (event.which === 88) {
			playCool();
			$('.ryu-cool').show();
			$('.ryu-standing-still').hide();
			$('.ryu-ready-position').hide();
		}
	});
	$(document).keyup(function(event) {
		if (event.which === 88) {
			$('#cool')[0].pause();
			$('#cool')[0].load();
			$('.ryu-cool').hide();
			$('.ryu-ready-position').show();
		}
	})
});

function playHadouken() {
	$('#sound')[0].volume = 0.5;
	$('#sound')[0].load();
	$('#sound')[0].play();
}

var coolSound = false;
function playCool() {
	coolSound = !coolSound;
	if (coolSound) {
		$('#theme-song')[0].pause();
		//$('#cool')[0].load();
		$('#cool')[0].play();
	}
}