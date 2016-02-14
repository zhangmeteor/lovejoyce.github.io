function clock() {
	var clk = new Date();
	var h = clk.getHours();
	var m = clk.getMinutes();
	$('#clock').text((h<10?'0'+h:h) + ':' + (m<10?'0'+m:m));
}
function greetings() {
	var clk = new Date();
	var hour = clk.getHours();
	if(hour >= 5 && hour < 11) {
		$('#greetings').html('Good Morning <i class="fa fa-coffee"></i>, Joyce.');
	}
	else if(hour >= 11 && hour < 17) {
		$('#greetings').html('Good Afternoon <i class="fa fa-book"></i>, Joyce.');
	}
	else {
		$('#greetings').html('Good Evening <i class="fa fa-moon-o"></i>, Joyce.');
	}
}

setInterval(clock, 800);
setInterval(greetings, 800);
