 
TINYREDBALLS = function () {
	w = b2d.G(1000, 500, 2000, 1000)
	y = w.ship(1000, 400//w.H()-100
	)
	//w.pXY(500,0)
	w.fw(y, 500, 300)
	// w.S(500,400,'b',20,200) //why sensor not working any more??
	w.B(700, 300, 'r', [[4]])
	w.B(800, 300, 'r', [[4]])
	w.B(900, 300, 'r', [[4]])
	w.B(1000, 300, 'r', [[4]])
	w.B(1100, 300, 'r', [[4]])
	w.B(1200, 300, 'r', [[4]])
	w.B(1300, 300, 'r', [[4]])
	w.s.HUD.dot('w', 500, 300)
	w.s.HUD.dot('w', 700, 300)
	w.s.HUD.dot('w', 1100, 300)
}
CONTLIST = function () {//gives u a controller-edge, which is a body-controller pair
	//it is linked both to other bodies for that controller..
	//and to other controllers of that body!!!
	//lets focus on other bodies first....
	w = b2d.W({}).debug().C('p')
			.bindCo('co1', 'co2')
			.end(function (cx) {
				var fixt
				if (fixt = cx.with('co2')) {
					fixt.cancel()
				}
			})
	co1 = w.acc(0, -50)
	s1 = w.sensorBucket(320, 300, 'co1')
	co2 = w.acc(0, -50)
	s2 = w.sensorBucket(700, 300, 'co2')
	w.circ(150, 100, 30, 'w').den(1)
	w.circ(200, 100, 30, 'd').den(1)
	w.circ(250, 100, 30, 'r').den(1)
	w.circ(350, 100, 30, 'g').den(1)
	w.circ(400, 100, 30, 'o').den(1)
	w.circ(450, 100, 30, 'w').den(1)
	setTimeout(function () {
		y = w.ship(300, 50)
		setInterval(function () {
			w.circ(300, 100, 10, 'y')
			w.circ(760, 100, 10, 'b')
			y.bc('kill')
		}, 1000)
	}, 500)
}
 
GRAVTRAP = function () {
	W({g: 0, w: 0}).C('e').Y(300, 300).pen('welcome to grav controller')
	gCo = w.grav().body(y,
			w.D(320, 300, 'b', 20).den(1),
			w.D(300, 320, 'r', 30).den(1),
			w.D(340, 300, 'x', 40).den(1),
			w.D(300, 340, 'c', 50).den(1),
			w.D(320, 320, 'l', 60).den(1)
	)
}
 