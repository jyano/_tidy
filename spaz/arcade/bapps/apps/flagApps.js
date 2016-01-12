WHEN = function () {
	W('A').G(1)
	r = w.S(500, 300, 'r', 500, 300, '-').K('r')
	y = w.y(1100, 300)
	//work
	y.cl(function () {
		w.D(600, 300, $r(), 22)
	})
	y.lD(30)
	// y.cl('r', function(){w.C('q') })
	//dont work
	//y.cl(r, function(){w.C('q') })
	//w.cl(y, function(){ w.C('z')    })
}
KING = function () {
	W({g: 12}).Y()
	w.S(200, 250, 'r', 900, 20);
	w.S(400, 250, 'w', 20, 40)
	_.t(10, function () {
		w.D(100, 100, 'z', 10).K('ball')
		w.D(200, 100, 'w', 10)
	})
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () {
			this.lV(-2, -10)
		})
		w.me(700, 100, 5).fR().my('feet', function () {
			this.lV(2, -10)
		})
	})
	vor = w.S(600, 200).K('vor')
	vor.cir({s: 1, c: 'z', r: 340, o: .2, C: 'z', l: 20})
	y.wl(vor, function () {
		alert('y.wl(vor,fn)')
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	})
}
VEL = function () {
	W({g: 0}).Y()
	b = w.ball()
	r = w.S(300, 300, 'r', 30).K('r')
	w.cl('r', function (other, cx) {
		var pt = cx.cen(), v1 = b.lVW(pt), v2 = b1.lVW(pt)
		w.D(600, 300, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
	})
}
NOTSUREVEL = function () {
	W({g: 0}).Y()
	b = w.ball()
	b1 = w.ball(300, 300)
	w.b(function (cx) {
		var p, v1, v2, temp, i
		cx.w(b, b1, function (b1, cx) {
			var b = this
			pt = cx.cen()
			v1 = b.lVW(pt);
			v2 = b1.lVW(pt)
			temp = w.D(600, 300, 'r', 10);
			$.in(.5, function () {
				temp.kill()
			})
			i = temp.I(v1.x - v2.x, v1.y - v2.y)
		})
	})
}
GHOSTS = function () {
	W({g: 2});
	b = w.D(100, 100, 'b', 50).d(1);
	r = w.ball(400, 400, 'r', 80).d(1)
	z(function () {
		var v = b.lVW(b).div(10);
		r.lV(v)
	})  // set b2's linVel to b's linWorVel (scaled down by 20) // $l(b.lV());   //b3= w.ball(100,100,10); $l('vel: ' + b3.lV().x); $l('velW: ' + b3.lVW().x); $l('velL: ' + b3.lVL().x)
}
CENPTS = function () {
	W(0).C('z')
	//technically.. this is all depped by cx.cen
	w.bump(50, 550, 200)
	w.bump(800, 300, 80)
	w.brick(750, 300, 150, 100)
	w.ball(300, 300, 80)
	w.beg(function (cx) {
		var a = cx.A(), b = cx.B()
		markAABB(a);
		markAABB(b) // dot both upper and lower bounds of AABB of both fixts
		a.dot('g');
		b.dot('r')  //dot center of both fixts
		w.dot('y', M.lC(a.cen(), b.cen()))//dot center of their centers
		//2do:draw line to connect these pts..
	})
	w.chalk('here you can clearly see that the center of the two fixtures',
			'is not necessarily the same as the contact point,',
			'and can only represent collision center if fixtures are similar size.',
			'..perhaps halfway between this and the actual contact point would be nice')
	function markAABB(f) {
		ab = f.GetAABB()
		lb = ab.lowerBound
		up = ab.upperBound
		lx = lb.x * 30
		ly = lb.y * 30
		ux = up.x * 30
		uy = up.y * 30
		dx = ux - lx
		dy = uy - ly
		w.dot('w', ux, uy)
		w.dot('p', lx, ly)
	}
}
later = function () {
	old = function () {
		HAT = function () {
			W()
// could i automatically have body listen to their sens?
			w.ball().r(.3)
			p = w.me(400, 150, 5)
			p.my('hat', function () {
				p.bS('guy')
			})
			p.my('right');
			p.my('left')
			$.space(function () {
				if (p.trg.right) {
					p.I(100, -400)
				}
				if (p.trg.left) {
					p.I(-100, -400)
				}
			})
		}
		CONTACTS = function () {
			W()
			var centerFx = b2d.cir(80).K('center')
			b = w.D(500, 300, 'r', [
				centerFx,
				b2d.rec(60, 90, 0, 40, 10).sen(1).K('sen1')
			]).aV(100)
			//wow!  no friction?? ..b and floor both hav fr .2!
			w.D(700, 300, 'p', [
				centerFx,
				b2d.cir(100).sen(1).K('sen2')
			]).aV(100)
			w.col('s1', 's2',
					function () {
						w.D(100, 100, 'w', 100)
					})
			w.b(function (cx) {
				if (cx.w('s1', 's2')) {
					w.flag('new')
				}
			}) //w.on('new', function(){w.ball()})
		}
		THROTTLE = function () {
			W()
			b = w.ball(300, 300, 100)
			b1 = w.brick(300, 500)
			time = 0
			$.ev(1, function () {
				time++
			})
			cjs.t(function () {
				if (w.flagged('moveBrick')) {
					b1.X(20, '+')
				}
			})
			lastTime = 0
			change = 0
			w.b(function (cx) {
				if (cx.w('brick')) {
					if (lastTime != time) {
						lastTime = time;
						w.flag('moveBrick')
					}
				}
			})
		}
		b.when1 = function () {
			var b = this, w = b.W(), ob = {}
			ob.cxs = function (k, fn) {
				w.beg(k, fn)
				return {
					after: function (fn) {
						w.end(k, fn)
					}
				}
			}
			return ob
		}
		rM = function () {
			cx.rM = cx.manifold = cx.gM = function () {
				var cx = this;
				return cx.GetManifold()
			}
			cx.lN = cx.localPlaneNormal = cx.lPN = function () {
				var cx = this
				return cx.rM().m_localPlaneNormal
			}
			cx.lP = cx.localPoint = function () {
				var cx = this;
				return cx.rM().m_localPoint
			}
			cx.n = cx.pointCount = cx.pC = function () {
				var cx = this
				return cx.rM().m_pointCount
			}
			cx.ps = cx.points = cx.p = function () {
				var cx = this
				return cx.rM().m_points
			}
		}; //rM()
		PRE = function () {
			W()
			w.D(200, 300, 'r', 50)
			STATE = {}
			cjs.t(function () {
				if (STATE.newBall) {
					w.D(200, 300, 'b', 50)
				}
				STATE.newBall = false
			})
			w.pre(function (cx, mf) {
				c = cx;
				m = mf
			})
			//second pam is really info about previous collision manfest?  may be usesless?!!!!
		}
		cx.cen = cx.mid = cx.center = function () {
			var cx = this
			return M.lC(
					cx.A().cen(),
					cx.B().cen())
		}
		/*
		 w.when = function(k, k2, oB, oE){var w=this,g=G(arguments)
		
		
		 //instructions:
		 //
		
		 if (F(g[0])){
		
		 oE=k2; oB=k
		 w.beg(g[1])
		 if (g[2]) { w.end(g[]) }
		 }
		
		
		 else if (F(what2)) {
		 eFn = bFn
		 bFn = what2
		 w.beg(what, oB)
		 if (eFunc) { w.end(what, eFn) }}
		
		 else if (F(oB)){
		 w.beg(what, what2, bFn)
		 if (eFn) {w.end(what, what2, eFn)}}
		
		
		
		 return w
		
		 }*/
		//cx.excludes=function(u){return !this.includes(u)}
		/*
		 cx.destroy = cx.destroyBoth = function () {
		 this.a().setDestroy()
		 this.b().setDestroy()
		 return this
		 }
		
		 cx.destroyIf = function (kind) {
		 this.a().setDestroyIf(kind);
		 this.b().setDestroyIf(kind)
		 }
		
		 cx.destroyOtherIf = function (k) {
		 var a = this.a(), b = this.b()
		 if (a.is(k)) {
		 b.setDestroy()
		 }
		 else if (b.is(k)) {
		 a.setDestroy()
		 }
		
		 }
		
		 */
		w.collx = function (k1, k2, fn) {
			var w = this,
					n = k1 + k2,
					cx
			if (F(k2)) {
				return w.collideAny(k1, k2)
			}
			else {
				w.beg(function (cx) {
					if (cx.with(k1, k2)) {
						w.flag(n, cx)
					}
				})
				cjs.t(function () {
					if (cx = w.flagged(n)) {
						fn(cx)
					}
				})
			}
		}
		w.classx = function (k) {
			var w = this,
					ob = {class: k, k: k, world: w, w: w}
			ob.with = ob.collWith = function (k, fn) {
				var ob = this
				if (O(k)) {
					_.e(k, function (fn, k) {
						ob.with(k, fn)
					})
				}
				else {
					w.with(w.class, k, fn)
				}
				return w
			}
			return ob
		}
		w.collideAny = function (a, fn) {
			var w = this
			w.beg(a, function (cx) {
				$.do(function () {
					fn(cx)
				})
			})
			return w
		}
		w.flagx = function (flag, val) {
			var w = this
			w.flags = w.flags || {}
			if (U(val)) {
				val = true
			}
			w.flags[flag] = val
			return w
		}
		w.flaggedx = function (flag) {
			var w = this, wasFlagged
			w.flags = w.flags || {}
			wasFlagged = w.flags[flag]
			if (wasFlagged) {
				w.flags[flag] = false
			}
			return wasFlagged
		}
		w.onx = function (onWhat, fn) {
			var w = this, val
			//this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)
			//interesting default !!!!!!!
			//func=func||function(val){val()}
			cjs.t(function () {
				val = w.flagged(onWhat)
				if (val) {
					fn(val)
				}
			})
			return w
		}
		b2d.superManifold = function (m) {//used????
			m.lPN = m.m_localPlaneNormal
			m.lP = m.m_localPoint
			m.pC = m.m_pointCount
			m.p = m.m_points
			m.t = m.m_type
			return m
		}
		function SuperImpulses(impulses) {
			impulses.n = impulses.nI = function () {
				return impulses.normalImpulses
			}
			impulses.t = impulses.tI = function () {
				return impulses.tangentImpulses
			}
			return impulses
		}

//do any of these get used? i think filterData does
		b2d.manager = b2d.contactManager = b2d.cM = function () {//used?
			var m = new BXD.b2ContactManager
			m.c = m.cl = m.Collide
			m.a = m.aP = m.AddPair
			m.f = m.fNC = m.FindNewContacts
			m.d = m.ds = m.Destroy
			return m
		}
		b2d.cxFilt = b2d.filter = function () {//used?
			var f = new b2d.b2ContactFilter
			f.rC = f.RayCollide
			f.sC = f.ShouldCollide
			return f
		}
		b2d.neither = function (b1, b2) {//d~data
			return {
				is: function (d) {
					return !b1.is(d) && !b2.is(d)
				}
			}
		}
		b2d.either = function (b1, b2) {
			return {
				is: function (d) {
					return b1.is(d) || b2.is(d)
				}
			}
		}
		b2d.either1 = function (ob1, ob2, is1, is2) {
			return (ob1.is(is1) && ob2.is(is2)) ||
					(ob1.is(is2) && ob2.is(is1))
		}
		//Array.prototype.sen=function(k){var arr=this; arr.isSensor=k||true; return arr}
	}
///////
///////  lVW
///////
//from tx:
	/*
	 w.l(1000,200,100,900,'-')
	 w.l (600,0,700,500)
	 w.l(200,200,500,500,'+')
	 w.dr(350,260, 200,200,'-')
	 w.dr( 500,240, 160,160,'+')
	 w.dr( 400,200, 100,100)
	 b= w.D(100, 200, 'y', 150, 100).d(.5).$(function(){this.B().I(0,-50)})
	 w.D(500, 400, 'y', 50, 100).d(.5).$(function(){this.B().I(0,-50)})
	 */
	bits = function () {
		f.grp = function (grpIx) {
			var f = this,
					fl = f.GetFilterData()
			if (U(grpIx)) {
				return fl.groupIndex
			}
			fl.groupIndex = grpIx
			f.SetFilterData(fl)
			return f //get/set for groupIndex
		}
		fd.grp = fd.group = fd.index = fd.gI = function (a) {
			if (U(a)) {
				return this.filter.groupIndex
			}
			this.filter.groupIndex = a;
			return this
		}
		fd.cat = fd.category = fd.cB = function (cB) {
			var fd = this
			if (U(cB)) {
				return fd.filter.categoryBits
			}
			fd.filter.categoryBits = cB
			return fd
		}
		fd.msk = function (mB) {
			var fd = this,
					fl = fd.filter, n
			if (U(mB)) {
				return fl.maskBits
			}
			if (A(mB)) {
				n = 0
				_.e(mB, function (b) {
					n += b
				})
				mB = n
			}
			fl.maskBits = mB
			return fd
		}
		fd.bit = function (cat, msk) {
			var fd = this
			fd.cat(cat).msk(msk)
			return fd
		}
		w.sCF = w.setContactFilter = w.SetContactFilter
		cx.fl = cx.filtering = cx.fFF = function () {
			var cx = this//whats the point?
			cx.FlagForFiltering()
			return cx
		}// Flag this contact for filtering.
// Filtering will occur the next time step.
		b2d.fl = b2d.filt = b2d.filterData = function () {
			var d = new b2d.Dynamics.b2FilterData
			d.gI = function (a) {
				if (U(a)) {
					return d.groupIndex
				}
				d.groupIndex = a;
				return d
			}
			d.cat = function (a) {
				if (U(a)) {
					return d.categoryBits
				}
				d.categoryBits = a;
				return d
			}
			d.mask = function (a) {
				if (U(a)) {
					return d.maskBits
				}
				d.maskBits = a;
				return d
			}
			return d
		}
		f.fil = function (d) {
			var f = this
			if (U(d)) {
				return f.GetFilterData()
			}
			f.SetFilterData(d)
			return f
		}
		f.grp = function (i) {
			var f = this, fl = f.fil()
			if (U(i)) {
				return fl.groupIndex
			}
			fl.groupIndex = i
			return f.fil(fl)
		}
		f.cat = function (cB) {
			var f = this,
					d = f.fil()
			if (U(cB)) {
				return d.categoryBits
			}
			d.categoryBits = cB
			return f.fil(d)  //get/set for groupIndex
		}
		f.msk = function (m) {
			var f = this,
					fl = f.fil(), n
			if (U(m)) {
				return fl.maskBits
			}
			if (A(m)) {
				n = 0
				_.e(m, function (b) {
					n += b
				})
				m = n
			}
			fl.maskBits = m
			return f.fil(fl)
		}
		f.bit = function (cat, msk) {
			var f = this
			f.cat(cat).msk(msk)
			return f
		}
		b.bit = function (cat, msk) {
			var b = this
			b.cat(cat).msk(msk)
			return b
		}
		b.grp = function (i) {
			var b = this
			if (U(i)) {
				return b.f().grp()
			}
			b.fs(function (f) {
				f.grp(i)
			})
			return b
		}
		b.cat = function (cat) {
			var b = this
			b.fs(function (f) {
				f.cat(cat)
			})
			return b
		}
		b.grp = function (grp) {
			var b = this
			b.fs(function (f) {
				f.grp(grp)
			})
			return b
		}
		b.msk = function (m) {
			var b = this
			b.fs(function (f) {
				f.msk(m)
			})
			return b
		}
		GRP = function () {
			W(30).Y();
			w.pop('b and r')
			w.right.grp(-1)
			y.grp(-1)
			w.D(600, 400, 'r', 30).grp(-1)
			w.D(600, 400, 'r', 40).grp(-1)
			w.D(600, 400, 'r', 50).grp(-1)
			w.D(600, 400, 'b', 50, 50).grp(-2)
			w.D(600, 400, 'b', 60, 60).grp(-2)
			w.D(600, 400, 'b', 70, 70).grp(-2)
		}
		CAT = function () {
			W(40)
			b = w.D(300, 300, 'b', 200).r(1).I(100, 0)
			$.in(1, function () {
				w.pop('catbits=0');
				b.cat(0)
			})
			w.D(400, 300, 'b', 80).cat(2).grp(-3)
			w.D(400, 300, 'g', 60, 90, 0, 40, 10).grp(-3)
			w.D(300, 300, 'r', 80).bit(2, [1, 4])
			w.D(300, 300, 'y', 60, 90, 0, 40, 10).bit(8, [1, 2])
		}
		BIT = function () {
			W(2)
			w.D(300, 300, 'r', 80).bit(2, [1, 4])
			w.D(400, 30, 'b', 80).bit(2, [1, 4])
			w.D(300, 300, 'y', 60, 90).bit(4, [1, 2, 4])
			w.D(400, 300, 'g', 60, 90).bit(4, [1, 2, 4])
			w.pop('cirs are ghosts to each other')
		}
		FIL = function () {
			W(0).Y()
			w.D(700, 200, 'o', [
				[40],
				b2d.cir(5).bit(1, 2), //cat is 1, but will only collide with 2's
				b2d.cir(10, 100, 100, '-'),
				['w', b2d.cir(10, 100, -100)],
				b2d.rec(10, 300, '-'), //sets as sensor
				['b', b2d.rec(300, 10)],
				['w', [100, 0], [150, -100], [200, 20]],
				[[200, 0], [250, -100], [300, 20], 'arr'], ['p', 50]
			])
			b = w.D(300, 400, 'r', [
				b2d.rec(200, 100),
				['g', b2d.cir(40, 100, 100).K('excited'), 'oook'],
				[5, 100, 200, 0, 'orgasmic excited']
			])
			/*
			 f = b.f().K('happy')  //apparently b.fixt is LIFO
			 f.W().dot('b')
			 $l('f is f: ' + f.is(f))
			 $l('f is happy: ' + f.is('happy'))
			 f.N().K('excited')// bug: k not getting communicated above (in the b def func)
			 $l('f.N is excited: ' + f.N().is('excited'))
			 $l('f is orgasmic: ' + f.is('orgasmic'))
			 */
		}
	};
	bits()
}