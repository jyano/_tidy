
	_$Bm = function (i) {
		return new cjs.Bitmap(i)
	}
	
	$Bm = function () {
		var g = G(arguments), i = g[0]
	
			if (!O(i)) {return _$Bm()}
	
			if ($.iI(i)) {
			i = $(i)[0];
			var bm = _$Bm(i)
			if (g.p) {bm.drag()}
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
			bm.rCenter()
		}
		if (g.p) {
			bm.drag()
		}
		return bm
	}
	cjs.BmSync = function (i, st) {
		var bm = $Bm(src(i[0]))
		if (O(st)) {
			st.A(bm)
		}
		return bm
	}
	

	SuperBitmap = SuperBitmapSync = bm = function (img, stage) {
		
		var superBitmap = Do(new cjs.Bitmap(src(img)))
		
		if (O(stage)) {stage.a(superBitmap)}
		
		return superBitmap
	
	}
	
	
	
	
	
	cjs.Bm = $bitmapAsync = Bm = function (img, fn) {
		if (O(img) && S(img.d)) {img = img.d}
		$.i(img, function (i) {bm = $Bm(i)
			if (F(fn)) {fn(bm)}
			if (S(fn)) {$w[fn] = bm}})
		return img}
		
	//source obj can be:
	// Image|HTMLCanvasElement|HTMLVideoElement
	// |String URIto an image file to load and use.
	//If it is a URI, a new Image object will be constructed and assigned to the .image property.
	SuperBitmapAsync = function (i, fn) {
		i = i[0]
		if (O(i) && S(i.d)) {i = i.d}
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
	
	
	ct.Bm = function (i) {
		return $Bm(i).a2(this)
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
			bmp = $Bm(i).a2(ct).rC().sXY(o.sc).a2(ct)
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
	
	ct.bmR = function (i, fn) {
		var ct = this, bm
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
	
	
bmFill()
function bmFill(){
	gx._bf = function (i, tf) {
		return this.bf(i, null, tf)
	}
	
	h.bf = function () {

//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case,
// the function draws a rectangle
// (and the bitmap is automatically used as the fill)
		var h = this, gx = h.graphics, g = G(arguments), o
		o = O(g.f) && A(g.f.hs) ?
				g.f :
				F(g.s) ? 
				{i: g.f, fn: g.s, hs: g.t} :
				{i: g.f, mx: g.s, hs: g.t}
		
		
		o.mx = A(o.mx) ?
				$Mx(o.mx) :
				 o.mx

		o.fn = _.tFn(o.fn)

		o.i = o.i || 'me'
		
		
		if (S(o.i) && !Q.ran) {
			$.i(o.i, function (i) {
				_bf(i, o)
			})
		}
		
		
		else {
			_bf(
			S(o.i) ?
			 Q.i(o.i) :
			 o.i
			 , o)
		}
		
		
		function _bf(i, o) {
			gx._bf(i, o.mx);
			o.hs ? _.e(o.hs, function (shp) {
				o.fn(shp, h)
			}) : o.fn(h)
		}
		
		return h
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
	
	gx._bs = function (i, tf) {
		return this.bs(i, null, tf)
	}
	h.bs = function (i) {
		var h = this;
		h.graphics.bs(i);
		return h
	}
	h.bs = function (i) {
		var h = this;
		h.graphics.bs(i);
		return h
	}
	bmFillTf()
	
	function bmFillTf() {
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
				var tfMx = $Tf(_.tA(o.tf))
				h._bf(g.f, tfMx)
				_.tFn(o.fn)(h)
			})
			return h
		}
	}
	
	matrix()
	function matrix() {
		mx.aTf = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
			x = N(x, 0)
			y = N(y, 0)
			scaleX = N(scaleX, 1)
			scaleY = N(scaleY, 1)
			rotation = N(rotation, 0)
			return this.appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY)
		}
		$Mx = function () {
			var g = G(arguments), o;
			// = cjs.m2d
			if (A(g.f)) {
				return $Mx.apply(null, g.f)
			}
			o = g.O ? g.f :
					U(g.t) ? {tx: N(g.f), ty: N(g.s)} :
					{a: g.f, b: g.s, c: g.t, d: g.fo, tx: g.fi, ty: g.si}
			_MxOb = function (mx) {//( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
				mx.a = N(mx.a, 1)
				mx.b = N(mx.b, 0)
				mx.c = N(mx.c, 0)
				mx.d = N(mx.d, 1)
				mx.tx = N(mx.tx, 0)
				mx.ty = N(mx.ty, 0)
				var m = new cjs.Matrix2D(mx.a, mx.b, mx.c, mx.d, mx.tx, mx.ty)
				return m
			}
			return _MxOb(o)
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
	}
}
	_.tFn = function (fn, fn2) {
		return F(fn) ? fn :
				fn2 ? fn2 : function () {
					return
				}
	}
	BF4 = TFM = function () {
		$St()
		$.i('chicks', function (img) {
			//stroke color
			h.sC('b', 50)
//bitmap fill
			h.bf(img, $tMx(210, 230, .5, .5))
//draw circle
			h.dc(100, 100, 100)
		})
	}
	BF2 = LDB = function () {
		$St()
		Q('me', function (q) {
			st.h('+').bf(q.get('me')).dc(100)
			$h().a2(st).XY(500, 100).bf('me').dc(100)
		})
	}
	DRG = BF0 = HBF = function () {
		$St().h(300, 300).bf('me', function (h) {
			h.dc(300).dg()
		})
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
	BF8 = BFH = function () {
		$St()
			//bitmap fill
				.h().bf({
					i: 'me',
					// for each of these radii..
					hs: [100, 300, 500, 700, 900],
					fn: function (x) {
						//draw circle
						h.dc(x, 30, 120).es()
					}
				})
	}
	BF100 = BMC = function () {
		$St()
				.h().bmCir({
					circs: [
						{r: 100},
						{x: 200, y: 200}, {}
					]
				})
		BF101 = BCS = function () {
			$St()
			h.bmCir({circs: cirs})
			h2 = $H(700, 300).a2(st).dg()
			h2.bmCir({circs: vs})
		}
	}
	$Ldr('LBF0', function (ld) {
		h = $St().h().C('z')
		h.dr(0, 0, 40, 40)
		h.bf(ld.get('me'), -100)
		h.dr(0, 0, 500, 200)
		h.dr(100, 100, 500, 200)
	})
	$Ldr('HBS0', function (ld) {
		h = $St(1000, 500).h()
		chicks = ld.get('chicks')
		me = ld.get('me')
		h.l(8)
		h.bf(chicks, $Mx(1, 0, 0, 1, -800, -400))
		h.dr(0, 0, 1600, 800)
		var Ch = function (x, y) {
			var h = $H().a2(st).l(8)
			h.graphics.bf(chicks)
			h.bs(me)
			//cjs.SL(h)
			return h
		}
		Ch(200, 200).rec(200, 300)
		Ch(400, 250).rec(200, 300)
		Ch(600, 250).rec(200, 300)
		Ch(750, 350).rec(200, 300)
		Ch(900, 250).rec(200, 300)
	})
	$Ldr('BFS', function (ld) {
		h = $St().h()
		me = ld.get('me')
		chicks = ld.get('chicks')
		h.l(20)
		h.bf(me)
		h.bs(chicks)
				.rec(200, 200, 200, 300).rec(400, 250, 200, 300)
				.rec(600, 250, 200, 300).rec(750, 350, 200, 300)
				.rec(900, 250, 200, 300)
		var Ch = function () {
			var h = st.h('+').l(20).bf(chicks).bs(me)
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
		h = $St().h()
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
	$Ldr('HBC', function (ld) {
		h = $St().h('+')
		h = $H().a2(st)
		h.bC({
			circs: [{x: 200, y: 100, r: 150}, {r: 100}, {x: 300}]
		}).dg()
	})
	MX00 = M2D = CJSM2D = function () {
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
 