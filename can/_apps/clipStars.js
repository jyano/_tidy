 

x.Star = function (r) {
	var ctx = this
	r = N(r, R(4, 2))
	ctx.b(r, 0, 'w') // first point drawn is the right most point
	_.t(9, function (i) {
		x.rt(36).lt(i % 2 == 0 ? (r / 0.5) * 0.2 : r, 0)
	})
	
	return x.f()

}



CST = CLIPSTARS = function () {__C()
	
	Q(function (ld) {
		
		
		x.tl(75, 75).a(60).cl()
		x.lg({cS: {g: 0, z: 1}, y1: -75, y2: 75}).fr(-75, -75, 250)
		_.t(10, function() {
			x._(function () {
				x.tl(R(150, -75), R(150, -75)).Star()
			})

		})


	})
	 

	

}