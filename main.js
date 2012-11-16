var keycodes = {37: 'left', 38: 'forward', 39: 'right', 40: 'reverse'};
var keys = [];

var ws = new WebSocket("ws://localhost:8888/");
ws.onopen = function() {
	function updateKeys()
	{
		var json = JSON.stringify({direction: keys, speed: 3});
		$('#keys').text(json);
		ws.send(json);
	}

	$(document).keydown(function(e){
		if (keycodes[e.which] != undefined && $.inArray(keycodes[e.which], keys) == -1)
		{
			keys.push(keycodes[e.which]);
			updateKeys();
		}
	}).keyup(function(e){
		if (keycodes[e.which] != undefined && $.inArray(keycodes[e.which], keys) != -1)
		{
			keys.splice($.inArray(keycodes[e.which], keys), 1);
			updateKeys();
		}
	});
};


