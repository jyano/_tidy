FIDL = function () {
//http://jsfiddle.net/jimrhoskins/dDUC3/1/
	
	 
	 
	x = $.c().C('b').gC()
	
	// Create an image element
	img = Im()
	
	
	img.onload = function () {
		
		x.S()	// Save the state, so we can undo the clipping
		

		x.b()
		x.mt([[10, 10], [100, 30],[180, 10], [200, 60]])
		.ac2(160, 70, 120, 0, 10)
		.lt([200, 180],[100, 150],[70, 180], [[20, 130], [50, 70]])
		.cP()
		
		x.clp().d(img)
		
		x.R()	// Undo the clipping
	}

	img.src = "http://i.imgur.com/gwlPu.jpg"

} 
