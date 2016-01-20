SHOOTY = INVADERS = function () {
	St().dg()
	stage.mug(function (mug) {
		key(mug.XY(100, 100).WH(150).SL(), '-')
		// ugun(mug)
	})
	cv = ghostMe().A().dg().XY(10)
}
function space() {
	SPACE = function () {
		St().bgI('/space.jpg').mug(function (m) {
			m.sXY(.2).dg().RT().SL()
		})
	}
	SPACE = function () {
		St().bgI('/space.jpg').mug(function (m) {
			m.sXY(.2).dg().RT().SL()
		})
	}
	SPACEOLD = function () {
		wMs(function (b, st) {
			st.wh(2000)
			st.bgi('/space.jpg')
			b.sxy(.2)
			b.fn(RT, SL)
		})
	}
	SPACE = function () {
		St(2000, 2000).bgImg('/space.jpg').mug(
				function (mug) {
					mug.sXY(.2).dg().rt()
				}
		)
	}
	SPACEOLD = function () {
		wMs(function (b, st) {
			st.wh(2000)
			st.bgi('/space.jpg')
			b.sxy(.2)
			b.fn(RT, SL)
		})
	}
	SPACE = function () {
		$St().backgroundImage('/space.jpg').mug(
				function (mug) {
					mug.scXY(.2).dg().rt()
				}
		)
	}
}
function solar() {
	SOLAR = function () {
		i = cjs.DisplayObject.prototype
		i.warpX = function (low, high, cush) {
			var ob = this,
					warp = M.warp(low, high, cush)
			cjs.t(function () {
				ob.x = warp(ob.x)
			})
			return ob
		}//wrx
		i.warpY = function (low, high, cush) {
			var ob = this,
					warp = Math.warp(low, high, cush)
			cjs.t(function () {
				ob.y = warp(ob.y)
			})
			return this
		}//wry
		i.warp = function (n) {
			n = n || 0
			var stage = this.getStage()
			this.warpX(0, stage.W(), n)
			this.warpY(0, stage.H(), n)
			return this
		}//wr
		i.go = i.startMoving = function (x, y) {
			if (x) {
				this.vX(x)
			}
			if (y) {
				this.vY(y)
			}
			var ob = this
			T.on('tick', function () {
				ob.X(ob.X() + (ob.vx || 0))
				ob.Y(ob.Y() + (ob.vy || 0))
			})
			return this
		}
		cjs.bulletHit = function (bu, inWhat) { //used in solar
			var res
			res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
			if (res == true) {
				$l('hit!')
			}
			return res
		}
		i.bounce = function (n) {
			n = N(n) ? n : 0
			var ob = this, st = this.st(), h = st.H(), w = st.W()
			cjs.t(
					function () {
						var x = ob.x, y = ob.y
						if (x > w - ob.W() - n || x < (n )) {
							ob.vX('-')
						}
						if (y > h - ob.H() - n || y < (n )) {
							ob.vY('-')
						}
					})
			return st
		}
		i.vX = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vx = this.vx + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vx = this.vx - a
				}
				else {
					this.vx = this.vx * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vx
			}
			this.vx = a;
			return this
		}
		i.vY = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vy = this.vy + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vy = this.vy - a
				}
				else {
					this.vy = this.vy * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vy
			}
			this.vy = a
			return this
		}
		i.vXY = function (x, y) {
			return this.vX(x).vY(y)
		}
		z();
		st = $St(1000, 500).bgI('/space.jpg')
		st.bm('guy', function (bm) {
			guy = bm
			bm.dg()
			bm.vXY(_.random(10) + 1, _.random(10) + 1).XY(_.random(800), _.random(600))
			bm.startMoving()
			bm.warp()
			st.bm('sun', 0.2, function (bm) {
				sun = bm
				bm.dg()
				bm.startMoving(4, 10)
				bm.warp()
				_.ev(.1, function () {
					if (cjs.bulletHit(sun, guy)) {
						sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
						sun.vx += .2;
						sun.vy += .2
					}
				})
			})
		})
		st.mug(0.4, function (bm) {
			bm.X(400).dg().bounce(0)
			bm.startMoving(10, 10)
		})
	}
	SOLAR = function () {
		i = cjs.DisplayObject.prototype
		i.warpX = function (low, high, cush) {
			var ob = this,
					warp = M.warp(low, high, cush)
			cjs.t(function () {
				ob.x = warp(ob.x)
			})
			return ob
		}//wrx
		i.warpY = function (low, high, cush) {
			var ob = this,
					warp = Math.warp(low, high, cush)
			cjs.t(function () {
				ob.y = warp(ob.y)
			})
			return this
		}//wry
		i.warp = function (n) {
			n = n || 0
			var stage = this.getStage()
			this.warpX(0, stage.W(), n)
			this.warpY(0, stage.H(), n)
			return this
		}//wr
		i.go = i.startMoving = function (x, y) {
			if (x) {
				this.vX(x)
			}
			if (y) {
				this.vY(y)
			}
			var ob = this
			T.on('tick', function () {
				ob.X(ob.X() + (ob.vx || 0))
				ob.Y(ob.Y() + (ob.vy || 0))
			})
			return this
		}
		cjs.bulletHit = function (bu, inWhat) { //used in solar
			var res
			res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
			if (res == true) {
				$l('hit!')
			}
			return res
		}
		i.bounce = function (n) {
			n = N(n) ? n : 0
			var ob = this, st = this.st(), h = st.H(), w = st.W()
			cjs.t(
					function () {
						var x = ob.x, y = ob.y
						if (x > w - ob.W() - n || x < (n )) {
							ob.vX('-')
						}
						if (y > h - ob.H() - n || y < (n )) {
							ob.vY('-')
						}
					})
			return st
		}
		i.vX = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vx = this.vx + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vx = this.vx - a
				}
				else {
					this.vx = this.vx * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vx
			}
			this.vx = a;
			return this
		}
		i.vY = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vy = this.vy + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vy = this.vy - a
				}
				else {
					this.vy = this.vy * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vy
			}
			this.vy = a
			return this
		}
		i.vXY = function (x, y) {
			return this.vX(x).vY(y)
		}
		z();
		st = $St(1000, 500).bgI('/space.jpg')
		st.bm('guy', function (bm) {
			guy = bm
			bm.dg()
			bm.vXY(_.random(10) + 1, _.random(10) + 1).XY(_.random(800), _.random(600))
			bm.startMoving()
			bm.warp()
			st.bm('sun', 0.2, function (bm) {
				sun = bm
				bm.dg()
				bm.startMoving(4, 10)
				bm.warp()
				_.ev(.1, function () {
					if (cjs.bulletHit(sun, guy)) {
						sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
						sun.vx += .2;
						sun.vy += .2
					}
				})
			})
		})
		st.mug(0.4, function (bm) {
			bm.X(400).dg().bounce(0)
			bm.startMoving(10, 10)
		})
	}
	SOLAR = function () {
		$St().bm('guy', function (bm) {
			guy = bm
			bm.dg()
			bm.vXY(_.random(10) + 1, _.random(10) + 1)
					.XY(_.random(800), _.random(600))
			bm.startMoving()
			bm.warp()
			st.bm('sun', 0.2, function (bm) {
				sun = bm
				bm.drag().startMoving(4, 10)
				bm.warp()
				setInterval(
						function () {
							if (
									cjs.bulletHit(sun, guy)) {
								sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
								sun.vx += .2
								sun.vy += .2
							}
						}, 100)
			})
		})
		st.mug(0.4, function (bm) {
			mug = bm
			bm.X(400).drag().startMoving(10, 10)
			bm.bounce(0)
		})
		st.bgImg('/space.jpg')
	}
}