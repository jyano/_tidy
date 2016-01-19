FIDL = function () {
//http://jsfiddle.net/jimrhoskins/dDUC3/1/
	cv = $.c()
	canvas = cv[0]
	x = canvas.getContext('2d')
	// Create an image element
	img = Im()
	// Save the state, so we can undo the clipping
	img.onload = function () {
		x.S().b().mt(10, 10).lt(100, 30).lt(180, 10).lt(200, 60)
		.ac2(160, 70, 120, 0, 10)
		.lt(200, 180)
		.lt(100, 150)
		.lt(70, 180)
		.lt(20, 130)
		.lt(50, 70)
		.cP().cl().dI(img, 0, 0).R()
	}// Undo the clipping
	// Specify the src to load the image
	img.src = "http://i.imgur.com/gwlPu.jpg"
} 