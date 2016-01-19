CV21 = FLOATCVQ = function () {

	Q(function () {
		__C()
		
		x.b(400, 100, 'r', 'o', 30)
				.l(600, 400)
		
		x.b(10, 500).at(150, 20, 150, 170, 50)
				.l(150, 120)
		
		x.b().a(400, 75, 50, 0, 340, '-')
		
		x.tl(-100, 0, R(30), 2)
				.b(400, 100, 'x', 'b', 30)
				.l(600, 400)
							
		x.d('me')
		x.d(x, 300, 300)
		x.d(x, 300, 300)
		
		//x.scICen('guy', .7)
		//Uncaught TypeError: Cannot read property 'd' of undefined
	})
}


XOR = GC1 = XORMORE = function () {
	c = __C()
	Q(function () {
				x.d('me', 100, 100)
				x.d('me', 200, 100)
				x.d('me', 300, 100)
				x.d('me', 400, 100)
				x.d('me', 500, 100)
				x.d('me', 150, 150) //  x.sO(); x.dO()
				x.xo()
			
				c.$(function () {
						var g = G(arguments),
								o = {x: g.f, y: g.s}
					x.d('guy', o.x, o.y)
						
				})}
	)
}
FIDL2 = function () {
	// http://jsfiddle.net/shiyam/w63z4hs6/
	canvas = $.c()[0]
	var x = canvas.getContext('2d');
	var xx = canvas.width / 2;
	var y = canvas.height / 2;
	var clipx = canvas.width / 2;
	var clipy = canvas.height / 2;
	var radius = 75;
	var offset = 50;
	clipFunction();
	function clipFunction() {
		
		/*
		 * save() allows us to save the canvas context before
		 * defining the clipping region so that we can return
		 * to the default state later on
		 */
		x.save();
		x.beginPath();
		x.arc(clipx, clipy, radius, 0, 2 * Math.PI, false);
		x.clip();
		// draw blue circle inside clipping region
		x.beginPath();
		x.arc(xx - offset, y - offset, radius, 0, 2 * Math.PI, false);
		x.fillStyle = 'blue';
		x.fill();
		// draw yellow circle inside clipping region
		x.beginPath();
		x.arc(xx + offset, y, radius, 0, 2 * Math.PI, false);
		x.fillStyle = 'yellow';
		x.fill();
		// draw red circle inside clipping region
		x.beginPath();
		x.arc(xx, y + offset, radius, 0, 2 * Math.PI, false);
		x.fillStyle = 'red';
		x.fill();
		/*
		 * restore() restores the canvas context to its original state
		 * before we defined the clipping region
		 */
		x.restore();
		/*x.beginPath();
		 x.arc(x, y, radius, 0, 2 * Math.PI, false);
		 x.lineWidth = 10;
		 x.strokeStyle = 'blue';
		 x.stroke();*/
	}
	
	$(function () {
		$("#myCanvas").on("mousedown", function () {
			$("#myCanvas").on("mousemove", function (e) {
				var mousePos = getMousePos(canvas, e);
				clipx = mousePos.x;
				clipy = mousePos.y;
				clipFunction();
			});
		});
		$("#myCanvas").on("mouseup", function () {
			$("#myCanvas").off("mousemove");
		});
	});
	function getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
	}
}
FIDL3 = function () {//http://jsfiddle.net/v92gn/
	/*
	 #canvas {
	
	 }
	 #background {
	 display: none;
	 }
	 #ballon {
	 position: absolute;
	 top: 50px;
	 left: 50px;
	 cursor: move;
	 opacity: 0.5;
	 }
	 */
	$.h1('Drag the ballon')
	background = Im("http://i.imgur.com/PWSOy.jpg")
	$(background).A()
	balloon = Im("http://i.imgur.com/6l6v2.png")
	$balloon = $(balloon).A()
	$.bt('Draw').id('draw')
	$canvas = $.c()
	d_canvas = $canvas[0]
	context = d_canvas.getContext('2d');
	context.drawImage(background, 0, 0);
	$(balloon).dg()//.draggable();
	$('#draw').click(function () {
		var ballon_x = $balloon.offset().left - $canvas.offset().left,
				ballon_y = $balloon.offset().top - $canvas.offset().top;
		context.drawImage(balloon, ballon_x, ballon_y);
		$balloon.hide();
		$(this).attr('disabled', 'disabled');
	});
}
FIDLPLAX = function () {

//http://jsfiddle.net/jaredwilli/8fQNy/
}
FIDLFLIP = function () {
//http://jsfiddle.net/yong/ZJQX5/
}
//MOUSE http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/