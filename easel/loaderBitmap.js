loader()
function loader() {
	ld.get = ld.g = ld.gR = ld.i = ld.r = function (i) {
		i = this.getResult(i);
		i.w = i.width;
		i.h = i.height;
		return i
	}
	ld.done = ld.rdy = ld.c = ld.complete = function (fn) {
		if (F(fn)) {
			this.on("complete", fn)
		}
		return this
	}
	ld.mf = function (mf) {
		// q.mf protosig: 
		// (1) 'me',..
		// (2)  {src:'me', id:'him'},.. 
		// (3) [ {src:*, id:*}, 'me',.. ]		
		mf = $its(A(mf) ? mf : G(arguments))
		this.loadManifest(mf)
		return this
	}
	_$Ld = function () {
		return new cjs.LoadQueue(true)
	}
	$Ld = $ld = cjs.lQ = Q = function () {


//starts off as a fn (obviously)
//but ends up as an obj
// (can use his info to test if its been ran)
		var g = G(arguments), o
		o = g.F_ ? {done: g.f, file: g.s} :
				(g.A_ || g.S_) ?
				{mf: g.f, done: g.s, file: g.t} :
						g.f
		o.mf = o.mf || _MF
		var ld = _$Ld()
		if (o.file) {
			ld.file(o.file)
		}
		if (o.done) {
			ld.done(function (e) {
				//o.done(function(i) {return ld.i(i)}, e)
				o.done(ld)
			})
		}
		if (o.mf) {
			ld.mf(o.mf)
		}
		Q = ld
		Q.ran = true
		return Q
	}
	Q.ran = false
	ct.qB = ct.bQ = function (name, x, y, sX, sY, rt) {
		var b, g = G(arguments)
		b = Q.bm(name)
				.XY(N(x, 0), N(y, 0))
				.sXY(N(sX, 1), N(sY, sX || 1))
				.rt(N(rt, 0))
		if (!g.n) {
			b.rC()
		}
		if (g.p) {
			b.drag()
		}
		this.A(b);
		return b
	}
	Q1 = function (imgs, fn) {
		var q = cjs.lq()
		mf = []
		_.e(imgs, function (v) {
			mf.push({
				src: cjs.src(v),
				id: v
			})
		})
		q.manifest(mf)
		q.complete(function () {
			fn(q)
		})
	}
	ld.jQuery = ld.$ = function (i) {
		return $(this.i(i))
	}
	ld.dfF = cjs.handleFileLoad = function (e) {
		alert('q.dfF = cjs.handleFileLoad in loaderProto.js')
		images = window['images'] || {}
		if (e.item.type == "image") {
			images[e.item.id] = e.result
		}
	}
	ld.file = ld.f = ld.l = ld.fl = ld.fileload = function (fn) {
		this.on("fileload", fn)
		return this
	}
	ld.bm = function (i, ct, x, y) {
		var ld = this
		var bm = $Bm(ld.get(i))
		if (N(ct)) {
			bm.XY(ct, x)
		}
		else if (O(ct)) {
			bm.a2(ct, x, y)
		}
		return bm
	}
	function manifest() {
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
		_mf = [{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}]
		_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
		_$it = function (i) {
			return {src: _.src(i), id: i}
		}
		$it = function (i) {
			return S(i) ? _$it(i) : i
		}
		$its = function (its) {
			return _.m(A(its) ? its : arguments, $it)
		}
	}
	
	manifest()
	QU1 = function () {
		$St()
		Q(["me", {id: "guy", src: "/guy.png"}], function (q) {
			st.A(q.bm("me"))
			st.A(q.bm("guy", 300, 300))
		})
	}
	QU0 = function () {
		Q(['guy', 'me'], function () {
			$.A(Q.get('me'))
		})
	}
	QU = MF = MANIFEST = function () {
		Q(['me', 'guy'], function (q) {
			$St().A(q.bm('me'))
			st.A(q.bm('guy').dg())
		})
	}
	QU2 = function () {
		Q([{id: "myImage", src: "/me.png"}
		], function (q) {
			q.bm("myImage", $St())
		})
	}
	QU3 = function () {
		Q([$it("me"), $it({id: "guy", src: "/guy.png"})], function (q) {
			q.bm("me", $St());
			q.bm("guy", st)
		})
	}
	IT = QU4 = function () {
		Q(function () {
			Q.bm("me", $St());
			Q.bm("guy", st, 300, 300)
		}).mf("me", guyIt)
	}
//st.c = $(st.canvas) //s.bm('me', function(bb){b=bb })
//q.b('guy', st).XY(300, 300).spin()
//st.qB('guy').XY(300, 300).spin()
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function
	function later() {
		cjs.mf = cjs.manifest = function () {
			var g = G(arguments)
			var mf = []
			_.e(g, function (i) {
				mf.push($it(i))
			})
			return mf
		}
		cjs.handleFileLoad = function (e) {
			if (e.item.type == "image") {
				images[e.item.id] = e.result
			}
		}
		cjs.man = cjs.makeMan = cjs.makeManifest = function (a) {
			alert('manifest')
			return cjs.mf.apply(null, _.m(a.images, function (i) {
				return _.crs(i)
			}))
		}
	}
	
	guyIt = {id: "guy", src: "/guy.png"}
	myIt = {id: "myImage", src: "/me.png"}
	mf1 = [myIt, guyIt];
	mf2 = [$it("me"), $it(guyIt)]
	mf3 = ["me", guyIt];
	mf4 = [myIt, guyIt];
	mf5 = ['guy', 'me']
	$.me = function (name, fn) {
		if (F(name)) {
			return $.i('me', name)
		}
		window[name] = function () {
			$.i('me', fn)
		}
	}
	meFunction()
	function meFunction() {
		$.me('ME', function (me) {
			gx = $St().Gx()
					.SS().F().dc(200, 200, 200).S().dc(400, 400, 200)
					.S()._bf(me).dc(400, 400, 200)
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
}
_$Bm = function (i) {
	return new cjs.Bitmap(i)
}
$Bm = function () {
	var g = G(arguments), i = g[0]
	if (!O(i)) {
		return _$Bm()
	}
	if ($.iI(i)) {
		i = $(i)[0];
		var bm = _$Bm(i)
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
	if (O(stage)) {
		stage.a(superBitmap)
	}
	return superBitmap
}
cjs.Bm = $bitmapAsync = Bm = function (img, fn) {
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
//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
SuperBitmapAsync = function (i, fn) {
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
function bmFill() {
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
 