CST = CLIPSTARS = function () {
	__C()
	Q(function (ld) {
		x.tl(75, 75).ac(60).clp()
		x.Star = function (r) {
			var ctx = this
			r = N(r, R(4, 2))
			ctx.b(r, 0, 'w') // first point drawn is the right most point
			_.t(9, function (i) {
				x.rt(36).lt(i % 2 == 0 ? (r / 0.5) * 0.2 : r, 0)
			})
			return x.f()
		}
		x.lg({cS: {g: 0, z: 1}, y1: -75, y2: 75})
				.fr(-75, -75, 250)
		_.t(10, function () {
			x._(function () {
				x.tl(R(150, -75),
						R(150, -75)).Star()
			})
		})
	})
	// http://jsfiddle.net/shiyam/w63z4hs6/
	canvas = $.c().id('myCanvas')[0]
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
	function getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
	}
}
FIDL = function () {
//http://jsfiddle.net/jimrhoskins/dDUC3/1/
	__C()
	// Create an image element
	img = Im()
	img.onload = function () {
		x.S()
		x.fR(0, 0, 250, 100)
		x.sTf(3, 2, -2, 1, 400, 10)
				.f('r').fR(0, 0, 250, 100)
		x.sTf(1, .5, -.5, 1, 30, 10)
				.f('b').fR(0, 0, 250, 100)
		x.R()
		x.S()	// Save the state, so we can undo the clipping
		x.b()
		x.mt([[10, 10], [100, 30], [180, 10], [200, 60]])
				.ac2(160, 70, 120, 0, 10)
				.lt([200, 180], [100, 150], [70, 180], [[20, 130], [50, 70]])
				.cP()
		x.clp().d(img)
		x.R()	// Undo the clipping
	}
	img.src = "http://i.imgur.com/gwlPu.jpg"
}
