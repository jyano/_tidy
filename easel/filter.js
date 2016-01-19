 
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