$Pt = function (x, y) {
	//=P=  cj.P = cj.Pt
	if (U(x)) {
		return new C$.Point
	}
	if (O(x) && O(y)) {
		return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
	}
	if (O(x)) {
		return new cj.Point(
				x.mx(),
				x.my()
		)
	}
	return new cj.Pt(x, y)
}
$Mf = function (mf, fn) {
	cjs.manifest = function (fn) {
		_manifest_ = [{
			id: "chicks", src: "/chicks.png"
		},
			{id: "me", src: "/me.png"},
			{id: "guy", src: "/guy.png"},
			{id: "sun", src: "/sun.png"}]
		var q = cjs.loadQueue()
		q.complete(function () {
			fn(function (getResult) {
				return q.getResult(getResult)
			})
		})
				.manifest(_manifest_)
	}
	return $Ld(fn).mf(mf)
}
$Mx = cjs.m2d = function () {
	var _MxOb = function (mx) {
		return new cjs.Matrix2D(mx.a, mx.b, mx.c, mx.d, mx.tx, mx.ty)
	}
	var g = G(arguments), o;
	if (A(g.f)) {
		return $Mx.apply(null, g.f)
	}
	o = g.O ? g.f :
			U(g.t) ? {tx: N(g.f), ty: N(g.s)} :
			{a: g.f, b: g.s, c: g.t, d: g.fo, tx: g.fi, ty: g.si}
	var $mxDf = function (o) {//( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
		o.a = N1(o.a)
		o.b = N0(o.b)
		o.c = N0(o.c)
		o.d = N1(o.d)
		o.tx = N0(o.tx)
		o.ty = N0(o.ty)
		return o
	}
	return _MxOb($mxDf(o))
}
$Tf = $TfMx = $tMx = function (x, y, sx, sy, rt, kx, ky, rx, ry) {
	return $Mx().aTf(x, y, sx, y, rt, kx, ky, rx, ry)
}
dO.mx = dO.gM = function () {
	return this.getMatrix()
}
dO.mxMx = dO.cMx = dO.ccMx = dO.gCM = function () {/*
 getConcatenatedDisplayProps ( [props] ) DisplayProps
 Inherited from DisplayObject: getConcatenatedDisplayProps:999
 Generates a DisplayProps object representing the combined 
 display properties of the object
 and all of its parent Containers up to the highest level ancestor 
 (usually the Stage).
 Parameters:

 [props] DisplayProps optional
 A DisplayProps object to populate with the calculated values. 
 If null, a new DisplayProps object is returned.
 Returns:

 DisplayProps: The combined display properties.
 */
	var dO = this
	return dO.getConcatenatedMatrix()
}
dO.catProps = dO.gCDP = function () {
	var dO = this
	return dO.getConcatenatedDisplayProps()
}
MX00 = M2D = CJSM2D = function () {
	
	/*
	 Matrix2D Class
	 Defined in: Matrix2D:41
	 Module: EaselJS
	 Represents an affine transformation matrix, and provides tools for constructing and concatenating matrices.
	
	 This matrix can be visualized as:
	
	 [ a  c  tx
	 b  d  ty
	 0  0  1  ]
	 Note the locations of b and c.
	
	 Constructor
	 Matrix2D ( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
	 Defined in Matrix2D:41
	 Parameters:
	
	 [a=1] Number optional
	 Specifies the a property for the new matrix.
	
	 [b=0] Number optional
	 Specifies the b property for the new matrix.
	
	 [c=0] Number optional
	 Specifies the c property for the new matrix.
	
	 [d=1] Number optional
	 Specifies the d property for the new matrix.
	
	 [tx=0] Number optional
	 Specifies the tx property for the new matrix.
	
	 [ty=0] Number optional
	 Specifies the ty property for the new matrix.
	
	 IndexMethodsProperties
	 Item Index
	 Methods
	
	 append
	 appendMatrix
	 appendTransform
	 clone
	 copy
	 decompose
	 equals
	 identity
	 invert
	 isIdentity
	 prepend
	 prependMatrix
	 prependTransform
	 rotate
	 scale
	 setValues
	 skew
	 toString
	 transformPoint
	 translate
	 Properties
	
	 a
	 b
	 c
	 d
	 DEG_TO_RAD static
	 identity static
	 tx
	 ty
	 */
	m = $Mx()
	$l(m)
	$St().bm('me', function (bm) {
		b = bm.XY(400, 200)
		p = b.getConcatenatedDisplayProps();
		$l(p)
		cm = b.getConcatenatedMatrix()
		$l(cm)
	})
}
MATRIXMUG = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
	$.div('b', 50, 50).A()
	$.div('blue', 50, 50)
	stage = s = $St(1600, 1000)
	// on stage enter, change background color, though you
	// cant see it here because stage fills screen
	// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
	stage.on('mouseenter', function () {
		$('body').C($r())
	})
	stage.A(container = c = new createjs.Container())
	container.bm('me', function (bm) {
		//b.sxy(.2).xy(100,80)
		//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
	})
	//make a container
	stage.ct(function (c, s) {
		
		//the little me clicks do not hit the 'big' me underneath it.  that's normal.
		//but it does hit the container.  but this example shows off 'remove', so it only hits once
		//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
		c.bm('me', function (b) {
			b.sXY(.4).XY(100, 180)
			//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
		})
		c.bm('me', function (b) {
			b.sXY(1.5)
			// b.o('$',fL('big'))  //on click, log('big')
		})
		//on click, log('con')
		//c.o('$',  fL('con'))
	})
	stage.ct(function (c) {
		var vn = 0,
				rvn = 0,
				on = 0,
				ron = 0
		c.X(200)
		c.mug(
				function (b) {
					b.sXY(.8).XY(200, 80)
				})
		c.mug(
				function (b) {
					b.sXY(.8).XY(100, 280)
				})
		c.mug(
				function (b) {
					b.sXY(.8).XY(340, 180)
				})
		//this shows over/out vs rollover/rollout
		//over/out get retriggered when switching between connected sprites
		//rollover/rollout does not because it is still touching 'something'
		// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
		//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
		// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
		//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
	})//.MV(40)
	stage.ct(function (c, s) {
		c.x(700)
		c.mug(function (b) {
			b.sxy(.8).xy(200, 80)
		})
		c.mug(function (b) {
			b.sxy(.8).xy(100, 280)
		})
		c.mug(function (b) {
			b.sxy(.8).xy(340, 180)
		})
		//this example shows which sprites are acted upon with over/rollover
		//over only affects one
		//rollover affects ALL
		//if you enter a sprite from outside, they all grow (via rollover),
		//and the one sprite grows double (via over)
		c.o('v', function (g, e) {
			$l('v')
			g.sxy(.01, '+')
		})
		c.o('rv', function (g, e) {
			$l('rv')
			g.sxy(.01, '+')
		})
		c.o('o', function (q, e, g) {
		})
		c.o('ro', function (q, e, g) {
		})
		// in summary,
		// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
		// BUT, they will all recieve events separately
	}).MV(40)
	stage.ct(function (container, stage) {
		container.X(1400)
		container.bm('me', function (bm) {
			
			//make the little me slide the entire container
			//it acts as a handle! (for its container)
			lit = bm.sXY(.2).XY(100, 80)
			SL(bm, container)
			container.bm('me', function (bm) {
//big me will scale the little me
				big = bm.sXY(2).XY(100, 180)
				SC(bm, lit)
				container.bm('me', function (bm) {
					bm.sXY(.6).XY(150, 180)
					SL(bm)
					RT(bm, big)
				})
			})
		})
//guy slides stage
		container.bm('guy', function (bm) {
			bm.sXY(.4).XY(100, 180)
			createjs.bindSlide(bm, stage)
		})
	})
	stage = s = cjs.stage(1600, 1000).tick().A()
	// on stage enter, change background color, though you
	// cant see it here because stage fills screen
	// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
	stage.on('e', co)
	//make a container
	stage.ct(function (c, s) {
		
		//the little me clicks do not hit the 'big' me underneath it.  that's normal.
		//but it does hit the container.  but this example shows off 'remove', so it only hits once
		//however, it continues to propogate on to the container. hmmm..
		c.bm('me',
				function (b) {
					b.sXY(.2).XY(100, 80)
					b.on(click, function () {
						$l('lit')
					}, '/')  //on click, log('lit'), just once (remove listener)!
				})
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
		c.bm('me', function (bm) {
			bm.sXY(.4).XY(100, 180)
			bm.on('click', function () {
				$l('mid')
			}, '-')  //on click, log('mid'), and stop prop
		})
		c.bm('me', function (bm) {
			bm.sXY(1.5)
			bm.on('click', function () {
				$l('big')
			})  //on click, log('big')
		})
		//on click, log('con')
		c.on('click', function () {
			$l('con')
		})
	})
	stage.ct(function (c) {
		var vn = 0,
				rvn = 0,
				on = 0,
				ron = 0
		c.X(200)
		c.mug(
				function (b) {
					b.sXY(.8).XY(200, 80)
				})
		c.mug(
				function (b) {
					b.sXY(.8).XY(100, 280)
				})
		c.mug(
				function (b) {
					b.sXY(.8).XY(340, 180)
				})
		//this shows over/out vs rollover/rollout
		//over/out get retriggered when switching between connected sprites
		//rollover/rollout does not because it is still touching 'something'
		c.on('mouseover', function () {
			c.X(10, '+');
			$l('v: ' + vn++)
		})
		c.on('rollover', function () {
			c.X(20, '-');
			$l('rv: ' + rvn++)
		})
		c.on('mouseout', function () {
			c.Y(10, '+');
			$l('o: ' + on++)
		})
		c.on('rollout', function () {
			c.Y(20, '-');
			$l('ro: ' + ron++)
		})
	}).MV(40)
	stage.container(function (container, stage) {
		container.X(700)
		container.mug(function (bm) {
			bm.sXY(.8).XY(200, 80)
		})
		container.mug(function (bm) {
			bm.sXY(.8).XY(100, 280)
		})
		container.mug(function (bm) {
			bm.sXY(.8).XY(340, 180)
		})
		//this example shows which sprites are acted upon with over/rollover
		//over only affects one
		//rollover affects ALL
		//if you enter a sprite from outside, they all grow (via rollover),
		//and the one sprite grows double (via over)
		container.on('mouseover', function () {
			$l('mouseover')
			this.sXY(.01, '+')
		})
		container.on('rollover', function () {
			$l('rv')
			this.sXY(.01, '+')
		})
		container.on('mouseout', function () {
		})
		container.on('rollout', function () {
		})
		// in summary,
		// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
		// BUT, they will all recieve events separately
	}).MV(40) //??? mouse events? speed for some mouse checking thing
	stage.container(function (container, stage) {
		container.x = 1400
		container.bm('me', function (bm) {
			
			
			//make the little me slide the entire container
			//it acts as a handle! (for its container)
			lit = bm.sXY(.2).XY(100, 80)
			SL(bm, container)
			container.bm('me', function (bm) {
//big me will scale the little me
				big = bm.sXY(2).XY(100, 180)
				SC(bm, lit)
				container.bm('me', function (bm) {
					bm.sXY(.6).XY(150, 180)
					SL(bm)
					RT(bm, big)
				})
			})
		})
//guy slides stage
		container.bm('guy', function (bm) {
			bm.sXY(.4).XY(100, 180)
			SL(bm, stage)
		})
	})
}
DRG = function () {
	h = $St().h(300, 300)
	
	h.bf('me', function (h) {
		h.dc(300).drag()
	})
}

 
$L('bmApps')
mx.aTf = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
	x = N(x, 0)
	y = N(y, 0)
	scaleX = N(scaleX, 1)
	scaleY = N(scaleY, 1)
	rotation = N(rotation, 0)
	return this.appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY)
} 
h.bs = function (i) {
	var h = this;
	h.graphics.bs(i);
	return h
}
gx._bf = function (i, tf) {
	return this.bf(i, null, tf)
}
gx._bs = function (i, tf) {
	return this.bs(i, null, tf)
}
h.bf = function () {

//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle (and the bitmap is automatically used as the fill)
	var h = this, gx = h.graphics, g = G(arguments), o
	o = O(g.f) && A(g.f.hs) ? g.f :
			F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
			{i: g.f, mx: g.s, hs: g.t}
	o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
	o.fn = _.tFn(o.fn)
	o.i = o.i || 'me'
	if (S(o.i) && !Q.ran) {
		$.i(o.i, function (i) {
			_bf(i, o)
		})
	}
	else {
		_bf(S(o.i) ? Q.i(o.i) : o.i, o)
	}
	return h
	function _bf(i, o) {
		gx._bf(i, o.mx);
		o.hs ? _.e(o.hs, function (shp) {
			o.fn(shp, h)
		}) : o.fn(h)
	}
	
	function alt() {
		h._bf = function () {
			var h = this, gx = h.graphics, g = G(arguments)
			var tf = A(g.s) ? cjs.m2d.apply(cjs, g.s) : g.s
			tf = tf || cjs.m2d(R(500), R(300))
			S(g.f) ? gx.bf(Q.i(g.f), null, tf) :
					O(g.f) ? gx.bf(g.f, null, tf) : 0
			return h
			function alt() {
				h._bf = function (i, tf) {
					var h = this, gx = h.graphics, g = G(arguments)
					gx._bf(i, tf)
					return h
				}
			}
		}
		h.bf1 = function () {
			var h = this, gx = h.graphics, g = G(arguments), o
			o = O(g.f) && A(g.f.hs) ? g.f :
					F(g.s) ? {i: g.f, fn: g.s} :
					{i: g.f, mx: g.s, fn: g.t}
			o.i = o.i || 'me'
			if (S(o.i) && !Q.ran) {
				$.i(o.i, function (i) {
					_bf(i, o.mx, o.fn)
					if (o.hs) {
						_.e(o.hs, o.fn)
					}
				})
			}
			if (S(o.i)) {
				o.i = Q.i(o.i)
			}
			_bf(o.i, o.mx, o.fn)
			return h
			function _bf(i, mx, fn, hs) {
				var g = G(arguments),
						o = F(g.t) ? {i: g.f, mx: g.s, fn: g.t, hs: g[3]} :
								F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
								{i: g.f, mx: g.s, hs: g.t}
				o.i = S(o.i) ? Q.i(o.i) : o.i
				o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
				o.fn = _.tFn(o.fn)
				h._bf(i, o.mx)
				o.hs ? _.e(o.hs, function (shp) {
					o.fn(shp, h)
				}) :
						o.fn(h)
			}
		}
		h.bf = function () {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (O(g.f) && A(g.f.hs)) {
				o = {i: g.f.i, hs: g.f.hs, mx: g.f.mx, fn: g.f.fn}
			}
			else {
				o = F(g.s) ? {i: g.f, fn: g.s} : {i: g.f, mx: g.s, fn: g.t}
			}
			o.i = o.i || 'me'
			if (!Q.ran) {
				if (o.hs) {
					$.i(o.i, function (i) {
						_bf(i, o.mx);
						if (o.fn) {
							_.e(o.hs, o.fn)
						}
					})
				}
				else if (S(o.i)) {
					$.i(o.i, function (i) {
						_bf(i, o.mx, o.fn)
					})
				}
			}
			else if (S(o.i)) {
				_bf(Q.i(o.i), o.mx, o.fn)
			}
			else {
				_bf(o.i, o.mx)
			}
			return h
			function _bf(i, mx, fn, hs) {
				var g = G(arguments),
						o = {
							i: g.f,
							mx: A(g.s) ? $Mx(g.s) : g.s,
							fn: _.tFn(g.t),
							hs: g[3]
						}
				h._bf(i, o.mx)
				o.hs ? _.e(o.hs, function (shp) {
					o.fn(shp, h)
				}) : o.fn(h)
			}
		}
		h.bf = function () {
			var h = this, gx = h.graphics, g = G(arguments);
			if (!F(Q)) {
				return h._bf.apply(h, g)
			}
			function fn(fn) {
				return function (i) {
					gx.bf(i[0])
					if (F(g.s)) {
						fn(g)
					}
				}
			}
			
			var fn1 = fn(function () {
				g.s(h)
			})
			var fn2 = fn(function () {
				_.e(g.f.hs, g.s)
			})
			g.S_ ? $.i(g.f, fn1) :
					g.O_ && A(g.f.hs) ?
						//if object with an 'hs' property
							$.i(g.f.i || 'me', fn2) :
							gx.bf(g.f, null, g.s)
			return h
		}
	}
}
h.bs = function (i) {
	var h = this;
	h.graphics.bs(i);
	return h
}
h._bC = function (o) {
	var h = this;
	h.bf(o, function (h1) {
		h.dc(h1)
	})
	return h
}
h.bC = h.bmCir = function (o) {
	var h = this
	o = o || {}
	o.i = o.i || 'me'
	o.circs = o.circs || []
	o.cs = o.cs || []
	o.hs = o.hs || []
	$.i(o.i, function (i) {
		_.e(o.circs, function (c) {
			h.bf(i).dc(c)//.ef()
		})
	})
	return h
}
h.bmR = h.bmRec = h.bR = function (o) {
	var h = this;
	h.bf(o, function (h1) {
		if (o.hs) {
			_.e(o.hs, function (r) {
				w.rec(r.w, r.h)
			})
		}
		else {
			h.rec(o.hs)
		}
	})
	return h
	function alt() {
		h.bR = function (o) {
			var h = this;
			if (F(Q)) {
				h.bf(o, function (h1) {
					h.rec(h1)
				})
			}
			else {
				alert('h.bR not preloaded?')
				h.bf(o.bf)
				h.rec(o.hs)
				_.e(o.hs, function (r) {
					w.rec(r.w, r.h)
				})
			}
			return h
			//= h.bfR = h.bmR
		}
	}
}
h.bP = h.bV = function (o) {
	var h = this, g = G(arguments), o
	h._bV = function (i, vs) {
		i = i || 'me'
		return this.bf(i).lt(vs).cp()
	}
	h._bVAsy = function (i, v) {
		var h = this
		i = i || 'me'
		$.i(i, function (i) {
			h._bV(i, v)
		})
		return h
	}
	o = g.A ? {hs: g.f} : g.f || {} // o.hs = o.hs || []
	if (Q.ran) {
		h._bV(o.i, o.v)
	}
	else {
		h._bVAsy(o.i, o.v)
	}
	return h
	function alt() {
		h.bV = function (o) {
			var h = this, g = G(arguments), o
			o = g.A ? {hs: g.f} : g.f || {}
			o.hs = o.hs || []
			o.i = o.i || 'me'
			if (F(Q)) {
				$.i(o.i, function (i) {
					h.bf(i[0])
					_.e(o.v, function (v) {
						h.lt(v)
					})//
					h.cp()
					h.ef()
				})
				return h
			}
			h.bf(o.i)
			_.e(o.v, function (v) {
				h.lt(v)
			})
			return h
		}
		function old() {
			h.bmV = function (o) {
				var h = this
				o = o || {}
				o.i = o.i || 'me'
				$.img(o.i, function (i) {
					i = i[0]
					_.e(o.v, function (v) {
						h.bf(i)
						h.lt(v)
						h.ef().cp()
					})
				})
				return h
			}
		}
	}
}
h._bfT = function (i) {
	var g = G(arguments)
	return this._bf(i, $tMx(A(g.s) ? g.s : g.r))
}
h._bfTAs = function (str, tfPropsArr, fn) {
	var h = this, g = G(arguments), o
	o = A(g.s) ?
	{i: g.f, tf: g.s, fn: g.t} :
	{i: g.f, fn: g.s}
	$.i(o.i, function (i) {
		_.tFn(o.fn)(
				h._bf(g.f, $tMx(_.tA(o.tf))))
	})
	return h
}
h._bfTf = h._bfT = function (img) {
	var g = G(arguments)
	var props = A(g.s) ? g.s : g.r
	return this._bf(img, $Tf(props)) //gant!
}
h._bfTfArrs = h._bfTAs = function (str, tfPropsArr, fn) {
	var h = this, g = G(arguments), o
	o = A(g.s) ?
	{i: g.f, tf: g.s, fn: g.t} :
	{i: g.f, fn: g.s}
	$.i(o.i, function (i) {
		var fn = _.tFn(o.fn)
		fn(h._bf(g.f, $Tf(_.tA(o.tf))))
	})
	return h
}


$Ldr('LBF0', function (ld) {
	$St()
	h.C('z').dr(0, 0, 40, 40)
			.bf(ld.get('me'),
			-100).dr(0, 0, 500, 200)
			.dr(100, 100, 500, 200)
})
$Ldr('HBS0', function (ld) {
	$St(1000, 500)
	h.l(8).bf(ld.get('chicks'),
			$Mx(1, 0, 0, 1, -800, -400))
			.dr(0, 0, 1600, 800)
	ch = ld.get('chicks')
	me = ld.get('me')
	var Ch = function (x, y) {
		var h = $H().a2(st).l(8)
		h.graphics.bf(ch)
		h.bs(me)
		//cjs.SL(h)
		return h
	}
	return
	Ch(200, 200).rec(200, 300)
	Ch(400, 250).rec(200, 300)
	Ch(600, 250).rec(200, 300)
	Ch(750, 350).rec(200, 300)
	Ch(900, 250).rec(200, 300)
})
 
BF101 = BCS = function () {
	$St()
	h.bmCir({circs: cirs})
	//	h2 = $H(700, 300).a2(st).dg()
	//h2.bmCir({circs: vs})
}
$Ldr('BFS', function (ld) {
	$St()
	h.l(20).bf(ld.get('me')).bs(ld.get('chicks'))
			.rec(200, 200, 200, 300).rec(400, 250, 200, 300)
			.rec(600, 250, 200, 300).rec(750, 350, 200, 300)
			.rec(900, 250, 200, 300)
	var Ch = function () {
		var h = st.h('+').l(20)
				.bf(ld.get('chicks')).bs(ld.get('me'))
		// h.rec.apply(ch, arguments)
		return h
	}
	Ch().rec(200, 200, 200, 300)
	Ch().rec(400, 250, 200, 300)
	Ch().rec(600, 250, 200, 300)
	Ch().rec(750, 350, 200, 300)
	Ch().rec(900, 250, 200, 300)
})
$Ldr('PFC', function (ld) {
	$St()
	h.bf($(ld.get('me')).A()[0])
			.cir({x: 40, y: 289, r: 100}).mt(vs1).mt([[550, 20],
				[800, 100], [700, 300], [500, 120]]).mt([[750, 20],
				[900, 100], [900, 300], [700, 120]], 50, 200).mt([[550, 20],
				[800, 100], [700, 300], [500, 120]], 0, 50)
			.cir({x: 550, y: 20, r: 20, c: 'b'})
			.cir({x: 800, y: 100, r: 30, c: 'b'})
			.cir({x: 700, y: 300, r: 20, c: 'g'})
			.cir({x: 500, y: 120, r: 30, c: 'g'})
})
BF0 = HBF = function () {
	$St()
	h.bf('me', function (h) {
		h.dc(300).dg()
	})
}
BF4 = TFM = function () {
	$St()
	$.i('chicks', function (img) {
		h.sC('b', 50)
		h.bf(img, null, $tMx(210, 230, .5, .5))
		h.dc(100, 100, 100)
	})
}
BF2 = LDB = function () {
	$Ld('me', function (ld) {
		$St()
		h.bf(ld.i('me')).dc(100)
		$H().a2(st).X(500, 100).bf('me').dc(100)
	})
}
BF8 = BFH = function () {
	$St()
	h.bf({
		i: 'me',
		hs: [100, 300, 500, 700, 900],
		fn: function (x) {
			h.dc(x, 30, 120).es()
		}
	})
}
$Ldr('HBC', function (ld) {
	h = $St()
	h = $H().a2(st)
	h.bC({
		circs: [{x: 200, y: 100, r: 150}, {r: 100}, {x: 300}]
	})
}) 
BF100 = BMC = function () {
	$St()
	h.bmCir({
		circs: [{r: 100}, {x: 200, y: 200}, {}]
	})
}
meFunction()
function meFunction() {
	
	$.me = function (name, fn) {
		if (F(name)) {
			return $.i('me', name)
		}
		window[name] = function () {
			$.i('me', fn)
		}
	}
	$.me('ME', function (me) {
		gx = $St().Gx()
				.SS().F().dc(200, 200, 200).S().dc(400, 400, 200)
				.S()._bf(me).dc(400, 400, 200)
	})
}
function bitmap() {
	BINDSPR = function () {
		W()
		b = w.D(100, 300).cir(120)
		$.i('me', function (i) {
			w.g.A(sp = $Bm(i))
			b.bS(sp.rC())
			w.g.A(sp1 = $Bm(i))
			b.bS(sp1)
		})
	}
	ld.bm = ld.b = function (i, ct, x, y) {
		var ld = this
		var bm = _$Bm(ld.get(i))
		if (N(ct)) {
			bm.XY(ct, x)
		}
		else if (O(ct)) {
			bm.a2(ct, x, y)
		}
		return bm
	}
	BINDSPP = function () {
		W()
		b = w.D(100, 300).cir(120)
		Q('guy', function () {
			var i = Q.i('guy')
			w.g.A(sp = $Bm(i))
			b.bS(sp.rC())
			w.g.A(sp1 = $Bm(i))
			b.bS(sp1)
		})
	}
	BINDSPP = function () {
		W()
		b = w.D(100, 300).cir(120)
		Q('guy', function () {
			var i = Q.i('guy')
			w.g.A(sp = $Bm(i))
			b.bS(sp.rC())
			w.g.A(sp1 = $Bm(i))
			b.bS(sp1)
		})
	}
	BINDSPR = function () {
		W()
		b = w.D(100, 300).cir(120)
		$.i('me', function (i) {
			w.g.A(sp = $Bm(i))
			b.bS(sp.rC())
			w.g.A(sp1 = $Bm(i))
			b.bS(sp1)
		})
	}
	_$Bm = function (i) {
		return new cjs.Bitmap(i)
	}
	$Bm = cjs.bitmap = cjs.bm = function () {
		var g = G(arguments)
		var i = g[0]
		//return new cjs.Bitmap(i)
		//if (O(i)) {
		if ($.iI(i)) {
			i = $(i)[0];
			bm = new cjs.Bitmap(i)
			if (g.p) {
				bm.drag()
			}
			return bm
		}
		bm = $Bm(i.i)
		if (i.al) {
			bm.al(i.al)
		}
		if (i.fl) {
			bm.fl(i.fl)
		}
		if (i.aF2) {
			bm.aF2(i.aF2)
		}
		if (g.N) {
			bm.rCenter()
		} // should be !g.n ?
		return bm
		//}
	}
	ct.bm = function () {
		var ct = this, g = G(arguments), o, bmp
		o = N(g.s) ?
		{i: g.f, sc: g.s, fn: g.t} :
		{i: g.f, fn: g.s}
		o.sc = N(o.sc) ? o.sc : 1
		if (_.iDU(o.i)) {
			o.i = $.i(o.i)
		}
		if (O(o.i)) {
			bmp = $Bm(o.i).a2(ct)
			if (o.fn) {
				o.fn(bmp)
			}
			return ct
		}
		$.i(o.i, function (e, i) {
			bmp = $Bm(i)
			bmp.a2(ct)
			bmp.rC()
			bmp.sXY(o.sc).a2(ct)
			//bm.XY( that.W()/2, that.H()/2 )
			// works with stage i guess.. but fucks with 'container' - cant check bounds
			if (g.n) {
				bmp.XY(-1000)
			}
			if (o.fn) {
				o.fn(bmp)
			}
		})
		return ct
	}
	cjs.BmSync = function (i, st) {
		alert('BmSync')
		var bm = $Bm(src(i[0]))
		if (O(st)) {
			st.A(bm)
		}
		return bm
	}
	ct.Bm = function (i) {
		return $Bm(i).a2(this)
	}
	_$Bm = function (i) {
		return new cjs.Bitmap(i)
	}
	$Bm = cjs.bitmap = cjs.bm = function () {
		var g = G(arguments)
		var i = g[0]
		if (!O(i)) {
			return
		}
		if ($.iI(i)) {
			i = $(i)[0];
			bm = new cjs.Bitmap(i)
			if (g.p) {
				bm.drag()
			}
			return bm
		}
		//return new cjs.Bitmap(i)
		bm = $Bm(i.i)
		if (i.al) {
			bm.al(i.al)
		}
		if (i.fl) {
			bm.fl(i.fl)
		}
		if (i.aF2) {
			bm.aF2(i.aF2)
		}
		if (!g.n) {
			
			//	bm.rCenter()
		}
		return bm
	}
	ct.bm = function () {
		var ct = this, g = G(arguments), o, bmp
		o = N(g.s) ?
		{i: g.f, sc: g.s, fn: g.t} :
		{i: g.f, fn: g.s}
		o.sc = N(o.sc) ? o.sc : 1
		if (_.iDU(o.i)) {
			//return s$(a).contains('data:')
			o.i = $.i(o.i)
		}
		if (O(o.i)) {
			bmp = $Bm(o.i).a2(ct)
			if (o.fn) {
				o.fn(bmp)
			}
			return ct
		}
		$.i(o.i, function (i) {
			bmp = $Bm(i)
			bmp.a2(ct)
			bmp.rC()
			bmp.sXY(o.sc).a2(ct)
			//bm.XY( that.W()/2, that.H()/2 )
			// works with stage i guess.. but fucks with 'container' - cant check bounds
			if (g.n) {
				bmp.XY(-1000)
			}
			if (o.fn) {
				o.fn(bmp)
			}
		})
		return ct
	}
	ct._bm = function (i, fn) {
		var ct = this
		$.i(i, function (i) {
			ct.A(bm = $Bm(i))
			if (F(fn)) {
				fn(bm)
			}
		})
		return ct
	}
	ct.bm = function (i, fn) {
		var ct = this
		$.i(i, function (i) {
			ct.A(bm = $Bm(i))
			if (F(fn)) {
				fn(bm)
			}
		})
		return ct
	}
	ct.bm = function () {
		var ct = this, g = G(arguments), o, bmp
		o = N(g.s) ?
		{i: g.f, sc: g.s, fn: g.t} :
		{i: g.f, fn: g.s}
		o.sc = N(o.sc) ? o.sc : 1
		if (_.iDU(o.i)) {
			o.i = $.i(o.i)
		}
		if (O(o.i)) {
			bmp = $Bm(o.i).a2(ct)
			if (o.fn) {
				o.fn(bmp)
			}
			return ct
		}
		$.i(o.i, function (i) {
			bmp = $Bm(i)
			bmp.a2(ct)
			bmp.rC()
			bmp.sXY(o.sc).a2(ct)
			//bm.XY( that.W()/2, that.H()/2 )
			// works with stage i guess.. but fucks with 'container' - cant check bounds
			if (g.n) {
				bmp.XY(-1000)
			}
			if (o.fn) {
				o.fn(bmp)
			}
		})
		return ct
	}
	bmp()
	function bmp() {
		SuperBitmap = SuperBitmapSync = bm = function (img, stage) {
			alert('SuperBitmap')
			var superBitmap = Do(new cjs.Bitmap(src(img)))
			if (O(stage)) {
				stage.a(superBitmap)
			}
			return superBitmap
		}
		SuperBitmapAsync = function (i, fn) {
			alert('SuperBitmapAsync')
//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
			i = i[0]
			if (O(i) && S(i.d)) {
				i = i.d
			}
			$.i(i, function (img) {
				bm = $Bm(img)
				if (F(fn)) {
					fn(bm)
				}
				if (S(fn)) {
					$w[fn] = bm
				}
			})
			return i
		}
		cjs.Bm = $bitmapAsync = Bm = function (img, fn) {
			alert('cjs.Bm $bitmanpAsync Bm')
//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
			if (O(img) && S(img.d)) {
				img = img.d
			}
			$.i(img, function (i) {
				bm = $Bm(i)
				if (F(fn)) {
					fn(bm)
				}
				if (S(fn)) {
					$w[fn] = bm
				}
			})
			return img
		}
	}
	
	$Bm = function (bm) {
		var g = G(arguments)
		bm = new cjs.Bitmap(bm)
		if (g.p) {
			bm.drag()
		}
		return bm
	}
	FL2 = ERASEFL1 = function () {
		$.i('chicks', function (e, i) {
			$St()//cjs.Touch.enable(st)  //st.mO(1) !!!
			var isDrawing
			st.A(
					$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
			)
			st.trDr()
			st.MD(function () {
				oldPt = st.m();
				oldMidPt = oldPt;
			});
			st.MU(function () {
				b.fl2($AF(h.ca(i))).ca()
			})
			st.MM(function () {
				var midPoint
				if (!st._dr) {
					return st.u()
				}
				midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
				h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
				oldPt.x = st.mouseX;
				oldPt.y = st.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				b.fl2($AF(h.ca(i))).ca()
			})
			//cursor
			st.h().f("#FFFFFF").dc(25)//.cu('pointer').bM()
		})
	}
	BLF3 = function () {
		$.i('me', function (img) {
			iDr = 0  //examples.hideDistractor();//cjs.Touch.enable(st)
			s = $St();
			s.enableMouseOver()
			h = $H().a2(s)
			i = img[0]
			bm = $Bm(i)
			bl = $Bm(i)
			bl.Fl($bF(24, 24, 2), i)
			bl.Fl($cMF($cM(60)), i)
			bl.ca(0, 0, 960, 400)
			s.A(bl, bm)
			h.ca(i)
			bm.fl($aF(s.cc()), i);
			s.u()
			// s.A(cu = $H('r').dc(25));  cu.cursor = "pointer"
			s.MU(function (e) {
				iDr = 0
				h.ca(i)
				bm.fl($aF(s), i)
				s.u()
			})
			s.MD(function (e) {
				iDr = oM = o = s.m()
			})
			s.MM(function (e) {
				var mP             //   cu.x = s.mX(); cu.y = s.mY()
				if (!iDr) {
					s.u();
					return
				}
				mP = $Pt(o.x + s.mX() >> 1, o.y + s.mY() >> 1)
				h.ss(40, "round", "round")
						.C("rgba(0,0,0,0.2)")
						.mt(mP.x, mP.y).qt(o.x, o.y, oM.x, oM.y)
				o = s.m()
				oM = V(mP)
				h.ca(i)
				bm.fl($aF(s.cc()), i);
				s.u()
			})
		})
	}
	ct.bmR = function (i, fn) {
		var ct = this, bm
		alert('ct.bmR')
		$.i(i, function (i) {
			bm = $Bm(i[0]).a2(ct)
			bm.rXY(
					bm.W() / 2,
					bm.H() / 2
			)
			if (fn) {
				fn(bm)
			}
		})
		return ct
	}
	q.b = q.bm = function (i, ct, x, y) {
		var bm = $Bm(this.r(i));
		if (ct) {
			bm.a2(ct, x, y)
		}
		;
		return bm
	}
	_$Bm = function (i) {
		return new cjs.Bitmap(i)
	}
	$Bm = cjs.bitmap = cjs.bm = function () {
		var g = G(arguments)
		var i = g[0]
		//return new cjs.Bitmap(i)
		//if (O(i)) {
		if ($.iI(i)) {
			i = $(i)[0];
			bm = new cjs.Bitmap(i)
			if (g.p) {
				bm.drag()
			}
			return bm
		}
		bm = $Bm(i.i)
		if (i.al) {
			bm.al(i.al)
		}
		if (i.fl) {
			bm.fl(i.fl)
		}
		if (i.aF2) {
			bm.aF2(i.aF2)
		}
		if (g.N) {
			bm.rCenter()
		} // should be !g.n ?
		return bm
		//}
	}
	st.Bm = function (i) {
		return $Bm(i).a2(this)
	}
	BLF = function () {
		$.i('me', function (img) {
			iDr = 0  //examples.hideDistractor();//cjs.Touch.enable(st)
			s = $St();
			s.enableMouseOver()
			h = $H().a2(s)
			i = img[0]
			bm = $Bm(i)
			bl = $Bm(i)
			bl.Fl($bF(24, 24, 2), i)
			bl.Fl($cMF($cM(60)), i)
			bl.ca(0, 0, 960, 400)
			s.A(bl, bm)
			h.ca(i)
			bm.fl($aF(s.cc()), i);
			s.u()
			// s.A(cu = $H('r').dc(25));  cu.cursor = "pointer"
			s.MU(function (e) {
				iDr = 0
				h.ca(i)
				bm.fl($aF(s), i)
				s.u()
			})
			s.MD(function (e) {
				iDr = oM = o = s.m()
			})
			s.MM(function (e) {
				var mP             //   cu.x = s.mX(); cu.y = s.mY()
				if (!iDr) {
					s.u();
					return
				}
				mP = $Pt(o.x + s.mX() >> 1, o.y + s.mY() >> 1)
				h.ss(40, "round", "round")
						.C("rgba(0,0,0,0.2)")
						.mt(mP.x, mP.y).qt(o.x, o.y, oM.x, oM.y)
				o = s.m()
				oM = V(mP)
				h.ca(i)
				bm.fl($aF(s.cc()), i);
				s.u()
			})
		})
	}
	FL9 = Q21 = function () {
		var pt
		st = $St(1000).mO(1)
		h = st.h().ss('g', 40, 's', 'b', 1)
		st.MD(function () {
			pt = st.m()
		})
		st.MU(function () {
			pt = 0
		})
		st.MM(function () {
			if (pt) {
				_pt = st.m();
				mx = _pt.x;
				my = _pt.y
				mPt = $Pt(M.av(_pt.x, _pt.x), M.av(_pt.y, _pt.y))
				h.mt(mPt.x, mPt.y).qt(_pt, pt)
				pt = V(mPt)
			}
		})
		$.i('chicks', function (i) {
			$Bm(i).a2(st).al(.2)
		})
	}
}
bitmap()
cjs.Filter.prototype.b = function () {
	var bd = this.getBounds()
	bd.w = bd.width
	bd.h = bd.height
	return bd
}
dO.aFl = function (fl) {
	var dO = this
	dO.filters = dO.filters || []
	dO.filters.push(fl)
	return dO
}
dO.gFl = function () {
	this.filters = this.filters || []
	return _.l(this.filters)
}
dO.fl = dO.Fl = function (fl, i) {
	var dO = this, g = G(arguments)
	if (g.A) {
		return dO.fl.apply(dO, g.f)
	}
	dO.filters = dO.filters || []
	if (U(fl)) {
		return _.l(dO.filters)
	}
	if (N(fl)) {
		return dO.filters[fl]
	} // filters are only displayed when the display object is cached
	// later, you can call updateCache() to update changes to your filters
	//	_.e(g, function (fl) {dO._fl(fl)}) 
	if (O(fl)) {
		dO.filters.push(fl)
	} //if (O(i)) {dO.ca(i)}
	//if (!g.n) {i = dO.image;dO.ca(0, 0, i.width, i.height)}
	return dO
}
SPRITESWITHFILTERS = function () {
	stage = $St()
	$t("tick", function tick(event) {
		color += 5;
		grant3.filters = [
			new cjs.BlurFilter(10, 10, 1),
			new cjs.ColorFilter(1, 1, 1, 1, color % 255, color / 2 % 255, color / 3 % 255)
		];
		grant3.updateCache(); // Sprite has to be updated. EXPENSIVE!
		st.update();
	})
	// Preload the image. Image is coming from CORS-enabled server.
	var img = document.createElement("img");
	img.crossOrigin = "Anonymous";
	img.src = "http://php5.gskinner.com/CORS/runningGrant-easel.png";
	img.onload = createSprites;
	var grant3; // Stored to allow access in the tick
	var color = 0;
	
	function createSprites() {
		
		// 1. Default Sprite. No blur.
		var data = new createjs.SpriteSheet({
			"images": [img],
			"frames": {"height": 292, "width": 165},
			"animations": {"run": [0, 25, "run", 2]}
		});
		var grant = new createjs.Sprite(data, "run");
		stage.addChild(grant);
		// 2. Cache the image. 
		// Note that this is faster (one time cache), but obviously requires
		// some padding on each frame to prevent the edge bleed
		var bmp = new createjs.Bitmap(img);
		bmp.filters = [new createjs.BlurFilter(10, 10, 1)];
		bmp.cache(0, 0, img.width, img.height);
		var data2 = new createjs.SpriteSheet({
			"images": [bmp.cacheCanvas], // Note we are using the bitmap's cache
			"frames": {"height": 292, "width": 165},
			"animations": {"run": [0, 25, "run", 2]}
		});
		var grant2 = new createjs.Sprite(data2, "run");
		grant2.x = 185;
		stage.addChild(grant2);
		// 3. Cache the Sprite instead
		// More expensive because it needs to be updated each frame (see tick below)
		grant3 = new createjs.Sprite(data, "run");
		grant3.x = 185 * 2;
		grant3.cache(0, 0, 165, 292);
		stage.addChild(grant3);
	}
}
forMaskFilter = function trx(n) {
	var g = G(arguments)
	var a = []
	//for making mask filter
	if (g.n) {
		return 'rgba(0,0,0,' + g[0] || 0 + ')'
	}
	_.e(g, function (n) {
		a.push(trx(n, '-'))
	})
	return a
}
dO.aF = function (h) {
	var ob = this
	ob.fl($AF(h))
	return ob
}
dO.aF2 = function (h) {
	var ob = this
	this.fl2($AF(h))
	return ob
}
AlphaMaskFilter = $aFl = $Afl = $AF = $Af = function (a, b, c, d, e) {
	//Map an image's alpha channel to the alpha channel of a display object
	var fl//return new cjs.AlphaMaskFilter(a, b, c, d, e)
	if (O(a) && a.cacheCanvas) {
		a = a.cacheCanvas
	}
	fl = new cjs.AlphaMaskFilter(a, b, c, d, e)
	return fl
}
dO.aF = function (a, b, c, d, e, f, g, h) {
	var bf
	bf = new cjs.AlphaMaskFilter(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(bf)
	return bf
}
AMR = ALPHAMASKREVEAL = function () {
	cjs.testCanvas()//  cjs.sharedCode()
	var stage, isDrawing, drawingCanvas, oldPt, oldMidPt, displayCanvas,
			image, bitmap, maskFilter, cursor, text, blur
	examples.showDistractor()
	image = new Image();
	image.onload = handleComplete
	image.src = "/chicks.png"
	stage = new createjs.Stage("testCanvas");
	text = new createjs.Text("Loading...", "20px Arial", "#FFF");
	text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40});
	text.textAlign = "center"
	function handleComplete() {
		examples.hideDistractor();
		createjs.Touch.enable(stage);
		stage.enableMouseOver();
		stage.addEventListener("stagemousedown", handleMouseDown);
		stage.addEventListener("stagemouseup", handleMouseUp);
		stage.addEventListener("stagemousemove", handleMouseMove);
		drawingCanvas = new createjs.Shape();
		bitmap = new createjs.Bitmap(image);
		blur = new createjs.Bitmap(image);
		blur.filters = [new createjs.BlurFilter(24, 24, 2), new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))];
		blur.cache(0, 0, 960, 400);
		text.text = "Click and Drag to Reveal the Image.";
		stage.addChild(blur, text, bitmap);
		updateCacheImage(false);
		cursor = new createjs.Shape(new createjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
		cursor.cursor = "pointer";
		stage.addChild(cursor);
	}
	
	function handleMouseDown(event) {
		oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
		oldMidPt = oldPt;
		isDrawing = true;
	}
	
	function handleMouseMove(event) {
		cursor.x = stage.mouseX;
		cursor.y = stage.mouseY;
		if (!isDrawing) {
			stage.update();
			return;
		}
		var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
		drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
				.beginStroke("rgba(0,0,0,0.2)")
				.moveTo(midPoint.x, midPoint.y)
				.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
		oldPt.x = stage.mouseX;
		oldPt.y = stage.mouseY;
		oldMidPt.x = midPoint.x;
		oldMidPt.y = midPoint.y;
		updateCacheImage(true);
	}
	
	function handleMouseUp(event) {
		updateCacheImage(true);
		isDrawing = false;
	}
	
	function updateCacheImage(update) {
		if (update) {
			drawingCanvas.updateCache();
		} else {
			drawingCanvas.cache(0, 0, image.width, image.height);
		}
		maskFilter = new createjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
		bitmap.filters = [maskFilter];
		if (update) {
			bitmap.updateCache(0, 0, image.width, image.height);
		} else {
			bitmap.cache(0, 0, image.width, image.height);
		}
		stage.update();
	}
}
/*This example demonstrates revealing an image using another image as the
 mask. The mask is created by drawing a
 shape, and then caching the shape to make an image with an alpha
 channel. It is then applied to the image as
 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
 */
_$Bfl = function (x, y, q) {
	return new cjs.BlurFilter(x, y, q)
}
$Bfl = BlurFilter = $bFl = $BF = $Bf = $FB = $FlB = $bF = function () {
	var g = G(arguments), fl, o
	o = {x: g.f, y: g.s, q: g.t}
	o.y = N(o.y) ? o.y :
			o.x
	o.q = o.q || 1
	return _$Bfl(o.x, o.y, o.q)
}
dO.flBds = function () {
	return this.gFl().getBounds()
}
dO.bF = function (a, b, c, d, e, f, g, h) {
	var bf
	bf = new cjs.BlurFilter(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(bf)
	return bf
}
BLR = function () {
	$St().bm('me', function (bm) {
		bm.dg()
		bm.aFl(_$Bfl(20, 10))
		var b = bm.flBds()
		bm.cache(
				b.x - 50,
				b.y - 50,
				b.width + 400,
				b.height + 400)
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
				b.cc('+').fl([blF(v, v, 2)])
				s.u(e)
			})
		})
	}
}
BL2 = BLURFILT = function () {
	st = $St('z', 800)
	h = $H().XY(100).a2(st).f('r').dc(50)
	fl = h.fl($bF(50, 50, 10))
	bd = fl.getBounds()
	h.ca(-50 + bd.x, -50 + bd.y, 100 + bd.width, 100 + bd.height)
	/*
	 h.startMoving()
	 h.vx = 1
	 h.vy = 1
	 */
}
BL4 = ANIMBLUR = function () {
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
BLR4 = function () {
	Q(function () {
		st = $St().t()
		h = st.h(100, 100, 'r').cir(50)
		$.in(1, function () {
			h.cF(0, 0, 0, 1, 0, 0, 255, 0)
			h.ca(-50, -50, 100, 150)
		})
		$.in(2, function () {
			f = h.bF(59, 59, 1)
			bd = f.b()
			h.ca(-50 + bd.x, -50 + bd.y, 100 + bd.w, 100 + bd.h)
		})
	})
}
CHARCOAL = BLF2 = function () {
	var isDrawing
	st = $St()
	t = $T("Loading...")
	t.set({x: st.W() / 2, y: st.H() - 40})
	t.textAlign = "center"
	$.i('me', function (img) {//examples.hideDistractor();//cjs.Touch.enable(st)
		i = img[0]
		h = $H().a2(st)
		bm = new cjs.Bitmap(i)
		bl = new cjs.Bitmap(i)
		bl.filters = [
			new cjs.BlurFilter(24, 24, 2),
			new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))
		]
		bl.cache(0, 0, 960, 400)
		t.text = "Click and Drag to Reveal the Image.";
		st.A(bl, t, bm)
		st.A(cu = $H('r').dc(25))
		cu.cursor = "pointer"
		st.enableMouseOver()
		st.on("stagemousedown", function (e) {
			o = new cjs.Point(st.mouseX, st.mouseY)
			oM = o;
			isDrawing = true
		})
		st.on("stagemouseup", function (e) {
			isDrawing = false
		})
		st.on("stagemousemove", function (e) {
			var m
			cu.x = st.mouseX;
			cu.y = st.mouseY;
			if (!isDrawing) {
				st.u();
				return
			}
			m = new cjs.Point(o.x + st.mouseX >> 1, o.y + st.mouseY >> 1)
			$l('draw')
			h.graphics.ss(40, "round", "round");
			h.graphics.s("rgba(0,0,0,0.2)")
			// h.graphics.mt(100, 100);h.graphics.curveTo(300, 300,700, 200)
			h.graphics.mt(m.x, m.y)
			h.graphics.curveTo(o.x, o.y, oM.x, oM.y)
			o.x = st.mouseX;
			o.y = st.mouseY;
			oM.x = m.x;
			oM.y = m.y
		})
	})
}
/*This example demonstrates revealing an image using another image as the
 mask. The mask is created by drawing a
 shape, and then caching the shape to make an image with an alpha
 channel. It is then applied to the image as
 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
 */
BLF1 = function () {
	st = $St()
	var isDrawing
	$.i('me', function (img) {//examples.hideDistractor();//cjs.Touch.enable(st)
		i = img[0]
		h = $H().a2(st)
		bm = new cjs.Bitmap(i)
		bl = new cjs.Bitmap(i)
		bl.filters = [
			new cjs.BlurFilter(24, 24, 2),
			new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))
		]
		bl.cache(0, 0, 960, 400)
		//t.text = "Click and Drag to Reveal the Image.";
		st.A(bl, t, bm)
		updateCacheImage(false)
		st.A(cu = $H('r').dc(25))
		cu.cursor = "pointer"
		st.enableMouseOver()
		st.on("stagemousedown", function (e) {
			oldPt = new cjs.Point(st.mouseX, st.mouseY);
			oldMidPt = oldPt;
			isDrawing = true;
		})
		st.on("stagemouseup", function (e) {
			updateCacheImage(true);
			isDrawing = false
		})
		st.on("stagemousemove", function (e) {
			var midPoint
			cu.x = st.mouseX;
			cu.y = st.mouseY;
			if (!isDrawing) {
				st.u();
				return;
			}
			midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
			h.graphics.ss(40, "round", "round")  //$l(midPoint.x+', '+midPoint.y+', '+oldPt.x + ',' + oldPt.y+', '+ oldMidPt.x + ', ' + oldMidPt.y)
			h.graphics.s("rgba(0,0,0,0.2)").mt(midPoint.x, midPoint.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
			oldPt.x = st.mouseX;
			oldPt.y = st.mouseY;
			oldMidPt.x = midPoint.x;
			oldMidPt.y = midPoint.y;
			updateCacheImage(true)
		})
	})
}
function updateCacheImage(upd) {
	if (upd) {
		h.updateCache()
	}
	else {
		h.ca(0, 0, i.width, i.height)
	}
	mskF = new cjs.AlphaMaskFilter(st.cacheCanvas)
	bm.filters = [mskF]
	if (upd) {
		bm.ca(i)
	}
	else {
		bm.ca(i)
	}
	st.u()
}
$cFl = ColorFilter = function (a, b, c, d, e, f, g, h) {
	return new cjs.ColorFilter(a, b, c, d, e, f, g, h)
}
dO.cF = function (a, b, c, d, e, f, g, h) {
	var cf = $cF(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(cf)
	return cf
}
COLF1 = function () {
	shape = new createjs.Shape().set({x: 100, y: 100});
	shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);
	shape.filters = [
		new createjs.ColorFilter(0, 0,
				0, 1, 0,
				0, 255, 0)
	];
	shape.cache(-50, -50, 100, 100);
	$St().A(shape)
}
COLF = function () {
	$St()
	$.i('me', function (i) {
		
		// shape.cache(-50, -50, 100, 100)
		var bmp = new createjs.Bitmap(i).X(100).Y(100)
		bmp.filters = [
			new createjs.ColorFilter(0, 0,
					0, 1, 0,
					0, 255, 0)
		];
		bmp.dg()
		bmp.cache(-200, -250, 600, 600)
		st.addChild(bmp);
	})
}
FL1 = SCRATCHOFF = function () {
	var _mPt
	st = $St(1000).mO(1)
	st.bm('chicks', function (bm) {
		h = $H().s(.3)
		h.ss(45, 'r', 'round').ca(bm.image)
		bF = $bF(24, 24, 2)
		cMF = $cMF($cM(60))
		bm.fl(h.aF(), '-').ca(i)
		st.MD(function () {
			_mPt = _pt = st.m()
		})
		st.MU(function () {
			h.ca(i);
			bm.fl($aF(h), '-').ca(i);
			_mPt = null
		})
		st.MM(function () {
			if (!_mPt) {
				return
			}
			_pt = st.m()
			mx = _pt.x
			my = _pt.y
			mPt = $Pt(
					M.av(_pt.x, mx),
					M.av(_pt.y, my)
			)
			h.mt(mPt.x, mPt.y).qt(_pt, _mPt).ca(i)
			bm.fl(h.aF(), '-').ca(i)
			_mPt = V(mPt)
		})
	})
}
FL3 = ERASEFL11 = function () {
	$.i('chicks', function (e, i) {
		St().trDr().A(
				$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
				b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
		).m({
					d: function () {
						oldPt = st.m();
						oldMidPt = oldPt;
					},
					u: function () {
						b.fl2($AF(h.ca(i))).ca()
					},
					m: function () {
						var midPoint
						if (!st._dr) {
							return st.u()
						}
						midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
						h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
						oldPt.x = st.mouseX;
						oldPt.y = st.mouseY;
						oldMidPt.x = midPoint.x;
						oldMidPt.y = midPoint.y;
						b.fl2($AF(h.ca(i))).ca()
					}
				}).h().f("#FFFFFF").dc(25).cu('pointer').bM()
	})
}
FL4 = ERASEDOT = function () {
	$.i('chicks', function (e, i) {
		St()
		st.enableMouseOver = true
		st.trDr().A(
				$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
				b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
		)
		st.m({
			d: function () {
				oldPt = st.m();
				oldMidPt = oldPt;
			},
			u: function () {
				b.fl2($AF(h.ca(i))).ca()
			},
			m: function () {
				var midPoint
				if (!st._dr) {
					return st.u()
				}
				midPoint = M.av(oldPt, st.m()), h.cur(midPoint, oldPt, oldMidPt)
				oldPt = st.m()
				oldMidPt.x = V(midPoint)
				b.aF2(h.ca(i)).ca()
			}
		})
		cu = st.h('w').dc(25).cu('N')//.bM()
	})
}
FL5 = ERASEFL111 = function () {
	$.i('chicks', function (e, i) {
		St()
		st.enableMouseOver = true
		st.trDr().A(
				$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
				b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
		)
		cu = st.h('w').dc(25).cu('N').bM()
		st.m({
			u: function () {
				b.fl2($AF(h.ca(i))).ca()
			},
			d: function () {
				mt = st.m()
			},
			m: function () {
				if (st._dr) {
					b.aF2(h.dl(mt, mt = st.m()).ca(i)).ca()
				}
			}
		})
	})
}
FL6 = ERASEFLWORKS = function () {
	$.i('chicks', function (e, i) {
		St().trDr()
		//invisible ink!!!
		//so u constantly re-update the top layer's filter
		//it is an alpha filter so it only shows where u painted
		//so it starts of invisible
		//you can 'draw the layer' on
		h = $H().ss(40, 'r', 'r').C(.9).ca(i)
		b = $Bm(i).aF2(h)
		st.A(
				$Bm(i).al(.2).fl($FB(40), $CMF(20, -20, 80, 10), $FB(40)),
				$T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
				b)
		st.m({
			u: function () {
				b.fl2($AF(h.ca(i))).ca()
			},
			d: function () {
				m = st.m()
			},
			m: function () {
				if (st._dr) {
					h.dl(m, st.m()).ca(i)
					b.aF2(h).ca()
					m = st.m()
				}
			}
		})
	})
}
FL7 = ERASEFL = function () {
	$.i('chicks', function (e, i) {
		St().trDr()
		var m
		//invisible ink!!!
		//so u constantly re-update the top layer's filter
		//it is an alpha filter so it only shows where u painted
		//so it starts of invisible
		//you can 'draw the layer' on
		st.A(
				$Bm({
					i: i,
					fl: [$CMF(20, -20, 80, 10), $FB(40)],
					al: .2
				}),
				$Tc('Smudge!', 100, 'r', st),
				b = $Bm({
					i: i,
					aF2: h = $H().ss(40, 'r', 'r').C(.9).ca(i)
				})
		)
		st.m({
			u: function () {
				b.fl2(
						$AF(h.ca())
				).ca()
			},
			d: function () {
				m = st.m()
			},
			m: function () {
				if (st._md) {
					h.dl(m || st.m(), st.m()).ca()
					b.aF2(h).ca()
					m = st.m()
				}
			}
		})
	})
}
AlphaMapFilter = $aMFl = $aMF = function (a, b, c, d, e) {

//Map a greyscale image to the alpha channel of a display object
	return new cjs.AlphaMapFilter(a, b, c, d, e)
}
dO.aMF = function (a, b, c, d, e, f, g, h) {
	var bf = new cjs.AlphaMapFilter(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(bf)
	return bf
}
MAPF = function () {
	$St()
	$.i('me', function (i) {
		var box = new createjs.Shape();
		box.graphics.beginLinearGradientFill(["#ff0000", "#0000ff"], [0, 1], 0, 0, 0, 100)
		box.graphics.drawRect(0, 0, 100, 100);
		box.cache(0, 0, 100, 100);
		var bmp = new createjs.Bitmap(i);
		bmp.filters = [
			new createjs.AlphaMapFilter(box.cacheCanvas)
		];
		bmp.cache(0, 0, 100, 100);
		st.addChild(bmp);
	})
}
ColorMatrix = $CM = $Cm = $cM = function (a, b, c, d, e) {
	var m = new cjs.ColorMatrix(a, b, c, d, e)
	m.b = m.adjustBrightness
	m.c = m.adjustColor
	m.C = m.adjustContrast
	m.h = m.adjustHue
	m.s = m.adjustSaturation
	m.cl = m.clone
	m.cc = m.concat
	m.m = m.copyMatrix
	m.r = m.reset
	m.A = m.toArray
	m.S = m.toString
	return m
}
cM = cjs.ColorMatrix.prototype
cM.s = function (s) {
	this.adjustSaturation(s)
	return this
}
cM.c = function (c) {
	this.adjustContrast(c)
	return this
}
cM.ch = function (c) {
	this.adjustHue(c)
	return this
}
cM.b = function (c) {
	this.adjustBrightness(c)
	return this
}
ColorMatrixFilter = $CMF = $cMFl = $CmF = $cMF = function (a, b, c, d) {
	return new cjs.ColorMatrixFilter(O(a) ? a : $CM(a, b, c, d))
}
GREY = function () {
	Q(function () {
		Q.b('me').a2($St())
				.fl($cMF($cM().s(-100)))
				.ca(0, 0, 1000, 1000)
	})
}
FT10 = FILTRS = function () {
	Q(function () {
		s = $St().t()
		i = Q.i('me')
		b = s.qB('me', .8, '+')
		/////////////////////////
		//b._(150,200,'+').fl($cF(.5, 0, 0, 1 ), i)
		cM = $cM()
		cM.adjustBrightness(-400)
		//cM.adjustHue(-180)
		cM.c(80)
		//cM.c(-100)
		b._(400, 200, '+').fl($cMF(cM), i)  //zW
		///////////////////////
		// b._(20,200,'+').fl($bF(64,0,1),i)
//<- s._(b, 189, 20).fl(zWF).ca(0, 0, i.width, i.height)// b._(189, 20).a2(s).fl(zWF).ca(0, 0, i.width, i.height)
		// s.h(10).mt(200, 0).lt(200, 400).mt(0, 200).lt(400, 200).Ds()
	})
}
dO.cMF = function (cM) {
	var cf = new cjs.ColorMatrixFilter(cM)
	this.filters = this.filters || []
	this.filters.push(cf)
	return cf
}
CMXF1 = function () {
	$St()
	var shape = new createjs.Shape().set({x: 100, y: 100});
	shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);
	var matrix = new createjs.ColorMatrix()
			.adjustHue(180)
			.adjustSaturation(-100);
	shape.filters = [
		new createjs.ColorMatrixFilter(matrix)
	];
	shape.cache(-50, -50, 100, 100);
	$St().A(shape)
}
CMXF = function () {
	$St().bm('me', function (bm) {
		bm.dg()
		var matrix = new createjs.ColorMatrix()
				.adjustHue(180)
				.adjustSaturation(-100);
		bm.filters = [
			new createjs.ColorMatrixFilter(matrix)
		]
		bm.cache(-200, -200, 800, 800);
	})
}
CM1 = COLOR = clr = function (r) {
	var ag = 0, rg = 100, sp = 0.04
	wMb(function (b) {
		z();
		s = St(500).dg().a().c('X').a(b.XY(100))
		b.cc()
		b.fl(
				[r == 'g' ? $cMF(.3, 1, .3, 1, 0, 0, 0, 0)
						: r == 'b' ? $cMF(.3, .3, 1, 1, 0, 0, 0, 0)
						: r == 'r' ? $cMF(1, .1, 1, 1, 0, 0, 0, 0)
						: r == 'rg' ? $cMF(1, 1, .1, 1, 1, 1, 20, 0)
						: $cMF(1, .1, 1, 1, 0, 0, 0, 0)]
		)
		b.cc('+')
	})
}
CM2 = COLORMATRIX = function () {
	var g = G(arguments);
	g[0] = g[0] || 'a'
	wMb(function (b) {
				b.XY(100).cc();
				_.e(g, function (mf) {
					b.clMF(mf, '+')
				})
			},
			St(500).dg().A().C('X'))
}
FT8 = FILTERS = function () {
	cM = $CM()
	cM.adjustHue(80)
	cM.adjustSaturation(40)
	cM.adjustBrightness(40)
	cM.adjustContrast(-60)
	s = $.c(1000).A().stage.t()
	s.mug(function (b) {
		b.XY(200, 200).SL()
		b.cache(-200, -200, b.W(), b.H())
		b.filters = [$CMF(cM)]
		b.updateCache()
		//cjs.bindSlide(b)
	})
	s.mug(function (b) {
		b.XY(-100, -50)
		b.cc()
		b.clMF('a', '+')
		b.clMF('w', '+')
		cjs.bindSlide(b)
	})
	s.mug(function (b) {
		b.XY(400, 0).cc()
		SL(b)
		b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
				.dr0(400).H().cc(400).cc('*'))
		]).cc(400)
	})
	s.mug(function (b) {
		b.XY(100, 300).cc();
		SL(b)
		b.cc().fl([clF(.3, 1, .3, 1, 0, 0, 0, 0)]).cc('+')
	})
	s.mug(function (b) {
		var ag = 0, rg = 20, sp = 0.04;
		b.XY(500, 300).cc();
		SL(b)
		//this has gotta just mean 'on tick'
		tt(function (e) {
			v = M.sin(ag += sp) * rg;
			b.cc('+').fl([blF(v, v, 2)])
		})
	})
}
function cache() {
	dO.uCx = dO.updateContext
	dO.caCv = dO.cC = dO.cc = function () {
		return this.cacheCanvas
	}
	dO.gCDU = function (ca) {
		return this.getCacheDataURL(ca)
	}
	dO.uCa = dO.updCa = function (ca) {
		this.updateCache(ca);
		return this
	}
	dO.uc = dO.uncache = function (ca) {
		this.uncache(ca);
		return this
	}
	dO.__ca = function () {
		this.cache.apply(this, arguments);
		return this
	}
	dO._ca = function (x, y, w, h) {
		var dO = this
		x = N(x, 0)
		y = N(y, 0)
		w = N(w, dO.width)
		h = N(h, dO.height)
		dO.__ca(x, y, w, h)
		return dO
	}
	dO.ca = function () {
		var dO = this, g = G(arguments), o
		var st = dO.getStage()
		var op
		if (!g.n && !g.p && O(dO.image)) {
			dO._ca($(dO.image)[0])
		}
		if (passTest(g)) {
			op = g.f;
			dO.updCa(op);
			return dO
		}
		o = g.O_ ? {i: g.f, x: g.s, y: g.t} : N(g.t) ?
		{x: g.f, y: g.s, w: g.t, h: g.f} :
				N(g.s) ? {w: g.f, h: g.s} : {}
		if (O(o.i)) {
			o.i = toImg(o.i)
			dO = toObImg(dO)
			if (!g.n) {
				dO._ca()
			}
		}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, O(o.i) ? o.i.width : N(o.h) ? o.h :
				st ? st.W() : 0)
		o.h = N(o.h) ? o.h :
				O(o.i) ? o.i.height :
						st ? st.H() : 0
		return dO._ca(o.x, o.y, o.w, o.h)
	}
	function passTest(g) {
		return (!g.p && dO.caCv()) || g.n || g.S_ || g.u
	}
	
	function toObImg(i) {
		return $(i.image ? i.image : i)[0]
	}
	
	function toImg(i) {
		return i.image ? i.image : $(i)[0];
	}
}
cache()