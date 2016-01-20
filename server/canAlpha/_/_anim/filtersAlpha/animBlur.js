ABF = $ANIMATED_BLUR$ = function () {
	$l('welcome to BLUFILTER3')
	$l('here we will attempt an animated blur filter')
	st = stage = $St()
	var blurAmount = 0, blurMultiple = 40, speed = 0.06
	st.bm('me',
			function (bm) {
				bm.XY(100, 300).dg()
				bF = $bF(5, 10)
				bm.filters = [bF]
				bd = bounds = bF.getBounds()
				bm.cache(-50 + bd.x, -50 + bd.y, 400 + bd.width, 400 + bd.height)
				/*
				 T.on('tick', function () {
				 blur = M.sin(blurAmount += speed) * blurMultiple;
				 bm.filters = [$bF(blur, blur, 2)]
				 bm.ca()
				 })*/
			})
}
function withMug() {
	BL1 = BLUR = function () {
		s = $St(500).dg()
		s.mug(function (b) {
			var ag = 0, rg = 100, sp = 0.04
			z()
			s.C('x')
			b.XY(100)
			b.cc()
			T.on('tick', function (e) {
				v = M.sin(ag += sp) * rg
				b.cc('+').fl([$BlurFl(v, v, 2)])
				s.u(e)
			})
		})
	}
}