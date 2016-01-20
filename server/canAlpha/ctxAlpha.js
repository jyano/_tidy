BAL = BALOONDRAG = FIDL3 = function () {//http://jsfiddle.net/v92gn/
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
//MOUSE http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/}
TRANS = function () {
	x = $.c('y', 1000, 800)
	y = $.c('u', 400)
	x.$$(function () {
		x.fit('me')
	})
	x.fit('me')
	identity = function (x) {
		x.stf(1, 0, 0, 1, 0, 0)
	}
	rotate = function (x, a) {
		identity(x);
		x.rt(tRad(a))
	}
	rotateByAngle = function (px, py, a) {
		var x, y
		x = (px * cos(a)) - (py * sin(a))
		y = (py * cos(a)) + (px * sin(a))
	}
	rotateAroundZero = function (px, py, r) {
		var x, y, a = 'angle'
		x = (px * cos(PI / 4)) - (py * (sin(PI / 4)))
		y = (py * cos(PI / 4)) + (px * (sin(PI / 4)))
	}
	transformEquations = ['x=ax+cy+e', 'y=bx+dy+f']
	//if a=1,b=0,c=0,d=1 then args e,f rep pure translation
	//x=x+e,y=y+f
	//to scale, use a,d and set others to 0
}