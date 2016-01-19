
CIR1 = HCR = function () {$St()


	
	h  = st.Sh(300, 0, '+')
	

	h.gx.C('b', 'z', 10)
	
	h.bf('me', function(h){
		h.dc(100, 0, 100)
				.dc(100, 300, 50) 
				
				.es().s('black')
				.dc(-100, 300, 60)
				.cp()
	})
 
 
 
  
	st.Sh( 0,0,'+').gx
			.C('r','y',10)
			._dc(30).cp()
			._dc(60).cp()
			.dc(100, 0, 100)
			.cp()
			.dc(400, 400, 100)
			//.C('z')
			.dc(100, 400, 100)
			.dc(-300, 400, 100)
	
	    
	      //gx._f('p')._s('w').ss(10)._dc(100).dc(100, 0, 100)



//	.C('g','b').cp().dc(0, 300, 100)
	
	
	

//	st.Sh('b', 'o', 10, '+').cp().cir(100, 100, 100).cp().es().cir(400, 400, 40, 'r').cp()

	
}







CIR7 = function () {
	
	ct = $Ct().a2( $St(600) )
	
	ct.Sh(100, 100).f('y').dc(0, 0, 40)
	
	$cir(80, 100, 100, 'g', 'r', 13).a2(ct)
	
	$cir(80, 'g', 'y', 30).a2(ct).dg()

}



CIR3 = function () {

	$St()

	s.Sh().f('b').s('g').cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
			[{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])



	s.Sh().f('b').s('g').cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
			[{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
}



CIR5 = HDC = function () {
	$Sh().a2($St()).f('b').dc(100, 100, 100).f('y').dc(200, 100, 100)
}
CIR6 = function () {
	ct = $Ct().XY(0, 0).a2($St($.c(1000, 500)))
	h = $H().a2(ct).XY(0, 0).a2(ct).f('b').dc(400, 100, 10)
	ct.A($cir({r: 100, c: 'r', C: 'g', l: 50, oX: 100}).XY(100, 200))
}
CIR8 = CJSCIR = function () {
	ct = $Ct().a2($St(600))
	ct.A(
			$cir(400, 300).f('r').dc(28, 40, 40)
	)
	_.in(2, function () {
		ct.A(
				$cir(80, 300, 300, 'g', 'y', 30)
		)
	})
	$.bt('more', function () {
		h = $H().a2(ct)
		h.f('o').dc(100, 300, 105) ///x, r , r = 50
		h.f('z').dc(100, 300)
		h.f('r').dc(100, 300, 50)
		h.f('b').dc(100, 300) //r, x=0, y=0
		h.f('r').dc(100)
	})
}
CIR9 = DRG = GOB = function () {
	st = $St() //good gx = $Sh().a2(st).graphics
	//good gx = st.Sh().graphics
	h = st.Sh().drag()
	gx = h.graphics.SS()
	$.i('me', function (img) {
		gx.F()
		gx._bf(img)
		gx._dc({x: 100, y: 200, r: 200})
		gx.C('R')._dc({x: 200, y: 200, r: 200})
		gx.C('b', 'g', 30)._dc(100, 300)
	})
}
CIRS = function () {
	$H().f('b').a2($St()).cirs(
			[200, 200, 50],
			[400, 200, 50],
			[600, 200, 50]
	)
}
CIRZS = function () {
	$St()
	h.c('b', 'r', 10).XY(-100, -100)
	/*  h.dc(300,300,50)
	 gx.dc(400,400,50)
	 h.dc(500,500,50)
	 gx.dc(600,600,50)
	 */
	// h.dc(100,100,50) -> no color
	h.c().dc(100, 100, 50) // black fill, l4 white stroke
	h.c({C: 'r'}).dc(300, 300, 50)
	h.cir({
		r: 50, x: 200, y: 200,
		C: ['y', 10]//,
		//lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
		//ls: {c1: 'u', c2: 'o'}
	})
	h.cir({
		r: 50, x: 500, y: 200,
		C: ['y', 2]//,
		//	rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
		//rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
	})
	h = s.h()//.lf({})
			.dc()
			.c('r', 'b', 10)//.lf({y2: 400})
			.dc(300, 300, 50)
	return
}
SIR = function () {
	$.C('b')
	$s({body: {fZ: 40, c: 'o', display: 'flex', 'flex-wrap': 'wrap'}, canvas: {M: 20}})
	st = $St($.c(600, 300)[0])
	st.A($Tx('h.dc', '50px Arial', 'white').X(400))
	h = $H().a2(st)
	
	h.dc()
	h.graphics.cp()
	h.dc(36)
	h.graphics.cp()
	h.dc(18)
	h.graphics.cp()
	h.graphics.cp()
	h.dc(200, 100)
	h.graphics.cp()
	h.dc(300, 100, 20)
	h.graphics.cp()
	h.dc(300, 200, 20)
	//
	st2 = $St($.c(600, 300)[0]).t()
	st2.A($Tx('h.cirs', '50px Arial', 'white').X(400))
	st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
	//
	st1 = $St($.c(600, 300)[0]).t()
	////////
	st1.A($Tx('$cir', '50px Arial', 'white').X(400))
	st1.A($cir(300, 'g'))
	st1.A($cir(140, 220, 20, 'o').dc())
	st1.A($cir('r').XY(220, 200))
	st3 = $St($.c(600, 300)[0]).t()
	st3.A(_$Tx('$cirs', '50px Arial', 'white').X(400))
	st3.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
	st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
	h = $Sh().a2(st)
	gx = h.graphics.FS()
	h.dc()
	h.dc(36)
	h.cir(18, 'o')
	h.dc(200, 100)
	h.cir(300, 100, 20, 'r')
	h.dc(300, 200, 20)
	
	st2 = $St($.c(600, 300)[0]).t()
	st2.A(_$Tx('h.cirs', '50px Arial', 'white').X(400))
	st2.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
	
	st1 = $St($.c(600, 300)[0]).t()
	
	st1.A(_$Tx('$cir', '50px Arial', 'white').X(400))
	st1.A($cir(300, 'g'))
	st1.A($cir(140, 220, 20, 'o').dc())
	st1.A($cir('r').XY(220, 200))
	
	
	st3 = $St($.c(600, 300)[0]).t()
	st3.A(_$Tx('$cirs', '50px Arial', 'white').X(400))
	
	st3.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
}


BOWL = function () {
	$St()
	ct = container = c = $Ct().a2(st)
	plX = st.W() / 2
	plY = 150
	plR = 100
	plr = 75 // this seems to determine the radius of the 'cluster' of balls
	oRng = 8 //outer ring
	nRng = 3// number of rings
	//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
	circ = $cir(plX, plY, plR, 'yellow')
	container.A(circ) // cr = Hx().c(plR,'y').xy(plX,plY)
	rngSp = plr / (nRng - 1)
	aA = []
	var ast = function (x, y, r, m, f) {
		return {
			x: x, y: y, radius: r, m: m,
			f: f, vX: 0, vY: 0, player: false
		}
	}
	_.t(nRng, function (r) {
		var crR = 0, ang = 0, rngR = 0
		if (r == nRng - 1) {
			crR = 1
		}
		else {
			crR = oRng - (r * 3)
			ang = 360 / crR
			rngR = plr - (rngSp * r)
		}
		_.t(crR, function (a) {
			var x = 0, y = 0
			if (r == nRng - 1) {
				x = plX;
				y = plY
			}
			else {
				x = plX + (rngR * M.cos((ang * a) * M.PI / 180))
				y = plX + (rngR * M.sin((ang * a) * M.PI / 180)) - 350
			}
			aA.push(ast(x, y, 10, 5, 0.95))
			ct.A($cir(10, 'z').XY(x, y))
		})
	})
}
CIR2 = ROTCIRS = function () {
	ct = $Ct().a2($St(1000, '+')).A(
			$H(100, 100).f('r').dc(30).dc(30, 20).dc(250, 250)
	)
	$t(function (e) {
		ct.rt(ct.rt() + 3)
	})
}
CIR4 = function () {
	$Sh().a2($St(600)).f('r', 'y').lW(30)
			.dc(400, 400, 200)
			.dr(100, 0, 200, 200)
}


JCIR = function () {
	$St()
	
	gx = h.graphics
	gx._f('r')._s('b').ss(130).dc(400, 300, 50)
//	gx._f('g')._s('y').ss(130).dc(500, 300, 50)

	
	h = st.h()
	st.A(h)
	//h.cir(400,500,220,'r','b',77)
	
	
	st.A( $Cir(400, 400, 20, 'i','j') )
	
	st.A($H('b', 300,200).dc(400))
	
}
