function bods(){
	Bod2 = function () {
		var c1 = new createjs.Container(),
				cL = new createjs.Container()
		c1.mug(function (m) {
			SL(m, c1)
			m.sXY(.4)
			// c1.cI(m, 0)
		})
		c1.bm('arm', function (b) {//arm=b;
			b.name = 'arm';
			b.sX(-.8).X(140).Y(100).rX(200).rY(80)
			RT(b)
			b.on('dblclick', function () {
				tweens.rpunch(b)
			})
		})
		cL.bm('uparm',
				function (b) {//lu=b
					b.name = ('lu')
					RT(b, cL)
					b.sX(.8).X(80).Y(180).rX(200).rY(80)
					cL.on('dblclick',
							function () {
								tweens.lpunch(cL)
							})
					cL.X(140).Y(100).rX(100).rY(100)
				})
		cL.bm('forearm',
				function (b) {//lf=b
					b.name = ('lf')
					b.sX(.8).X(-100).Y(140).rX(20).rY(120)
					RT(b)
				})
		return c1.A(cL)
	}
	Bod1 = function () {
		var outerCont = new createjs.Container().drag()
		var innerCont = new createjs.Container()
		outerCont.A(innerCont)
		outerCont.mug(
				function (m) {
					m.sXY(.4)
					createjs.bindSlide(m, outerCont)
					outerCont.bm('arm', function (b) {
						b.name = 'arm'
						b.sX(-.8).XY(140, 100).rXY(200, 80)
						createjs.bindRotate(b)
						b.on('dblclick', function () {
							tweens.rpunch(b)
						})
					})
					innerCont.XY(40, 120).rXY(40, 100)
					innerCont.bm('uparm', function (b) {
						b.name = 'lu'
						b.sX(.8).XY(80, 180).rXY(200, 80)
						createjs.bindRotate(b, innerCont)
					})
					innerCont.bm('forearm', function (b) {
						b.name = 'lf'
						b.XY(-100, 140).sX(.8).rXY(20, 120)
						createjs.bindRotate(b)
						innerCont.on('dblclick', function () {
							tweens.lpunch(b)
						})
					})
				})
		return b = outerCont
	}
	BODS = function () {
		z()
		createjs.stage(800, 800).A().tick()
				.A(Bod1(), Bod2())
	}
	BOD = function () {
		z()
		s = createjs.stage(800, 800).A().tick()
		var b1 = Bod1(), b2 = Bod2().XY(300),
				f = Flame1().XY(300, 500),
				cyc = Cycle1().X(400), cyc2 = Cycle2().X(500)
		s.A(b1, f, b2, cyc, cyc2)
	}
	Bod2 = function () {
		var c1 = new createjs.Container(),
				cL = new createjs.Container()
		c1.mug(function (m) {
			SL(m, c1)
			m.sXY(.4)
			// c1.cI(m, 0)
		})
		c1.bm('arm', function (b) {//arm=b;
			b.name = 'arm';
			b.sX(-.8).X(140).Y(100).rX(200).rY(80)
			RT(b)
			b.on('dblclick', function () {
				tweens.rpunch(b)
			})
		})
		cL.bm('uparm',
				function (b) {//lu=b
					b.name = ('lu')
					RT(b, cL)
					b.sX(.8).X(80).Y(180).rX(200).rY(80)
					cL.on('dblclick',
							function () {
								tweens.lpunch(cL)
							})
					cL.X(140).Y(100).rX(100).rY(100)
				})
		cL.bm('forearm',
				function (b) {//lf=b
					b.name = ('lf')
					b.sX(.8).X(-100).Y(140).rX(20).rY(120)
					RT(b)
				})
		return c1.A(cL)
	}
	Bod1 = function () {
		var outerCont = new createjs.Container().drag()
		var innerCont = new createjs.Container()
		outerCont.A(innerCont)
		outerCont.mug(
				function (m) {
					m.sXY(.4)
					createjs.bindSlide(m, outerCont)
					outerCont.bm('arm', function (b) {
						b.name = 'arm'
						b.sX(-.8).XY(140, 100).rXY(200, 80)
						createjs.bindRotate(b)
						b.on('dblclick', function () {
							tweens.rpunch(b)
						})
					})
					innerCont.XY(40, 120).rXY(40, 100)
					innerCont.bm('uparm', function (b) {
						b.name = 'lu'
						b.sX(.8).XY(80, 180).rXY(200, 80)
						createjs.bindRotate(b, innerCont)
					})
					innerCont.bm('forearm', function (b) {
						b.name = 'lf'
						b.XY(-100, 140).sX(.8).rXY(20, 120)
						createjs.bindRotate(b)
						innerCont.on('dblclick', function () {
							tweens.lpunch(b)
						})
					})
				})
		return b = outerCont
	}
	BODS = function () {
		z()
		createjs.stage(800, 800).A().tick()
				.A(Bod1(), Bod2())
	}
	BOD = function () {
		z()
		s = createjs.stage(800, 800).A().tick()
		var b1 = Bod1(), b2 = Bod2().XY(300),
				f = Flame1().XY(300, 500),
				cyc = Cycle1().X(400), cyc2 = Cycle2().X(500)
		s.A(b1, f, b2, cyc, cyc2)
	}
	Bod2 = function () {
		var c1 = new createjs.Container(),
				cL = new createjs.Container()
		c1.mug(function (m) {
			SL(m, c1)
			m.sXY(.4)
			// c1.cI(m, 0)
		})
		c1.bm('arm', function (b) {//arm=b;
			b.name = 'arm';
			b.sX(-.8).X(140).Y(100).rX(200).rY(80)
			RT(b)
			b.on('dblclick', function () {
				tweens.rpunch(b)
			})
		})
		cL.bm('uparm',
				function (b) {//lu=b
					b.name = ('lu')
					RT(b, cL)
					b.sX(.8).X(80).Y(180).rX(200).rY(80)
					cL.on('dblclick',
							function () {
								tweens.lpunch(cL)
							})
					cL.X(140).Y(100).rX(100).rY(100)
				})
		cL.bm('forearm',
				function (b) {//lf=b
					b.name = ('lf')
					b.sX(.8).X(-100).Y(140).rX(20).rY(120)
					RT(b)
				})
		return c1.A(cL)
	}
	Bod1 = function () {
		var outerCont = new cjs.Container().drag()
		var innerCont = new cjs.Container()
		outerCont.A(innerCont)
		outerCont.mug(function (m) {
			cjs.bindSlide(m.scXY(.4), outerCont)
			outerCont.bm('arm', function (b) {
				b.name = 'arm'
				cjs.bindRotate(b.sX(-.8).XY(140, 100).rXY(200, 80))
				b.on('dblclick', function () {
					tweens.rpunch(b)
				})
			})
			innerCont.XY(40, 120).rXY(40, 100)
			innerCont.bm('uparm', function (b) {
				b.name = 'lu'
				b.sX(.8).XY(80, 180).rXY(200, 80)
				cjs.bindRotate(b, innerCont)
			})
			innerCont.bm('forearm', function (b) {
				b.name = 'lf'
				cjs.bindRotate(b.XY(-100, 140).sX(.8).rXY(20, 120))
				innerCont.on('dblclick', function () {
					tweens.lpunch(b)
				})
			})
		})
		return b = outerCont
	}
	BODS = function () {
		z()
		createjs.stage(800, 800).A().tick()
				.A(Bod1(), Bod2())
	}
	BOD = function () {
		z()
		s = cjs.stage(800, 800).A().tick()
		var b1 = Bod1(), b2 = Bod2().XY(300),
				f = Flame1().XY(300, 500),
				cyc = Cycle1().X(400), cyc2 = Cycle2().X(500)
		s.A(b1, f, b2, cyc, cyc2)
	}
	function cycle() {
		Cycle1 = function () {
			var cont = new createjs.Container()
			cont.mug(function (mug) {
				mug.sXY(.4)
				cont.bm('uni', function (bitmap) {
					bitmap.sX(-.8).X(-20).Y(200).rX(240).rY(80)
					bitmap.name = 'uni'
					createjs.bindTransform(mug, cont)
					createjs.bindRotate(bitmap, cont)
				})
			})
			return cont
		}
		Cycle2 = function () {
			var cont = new createjs.Container()
			var qu = new createjs.LoadQueue().complete(graphics).manifest([
				{id: "mug", src: "/getMug"},
				{id: "uni", src: "/uni.png"}
			])
			
			function graphics() {
				cont.bm(
						qu.getResult("uni"),
						function (b) {
							bitmap = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
							bitmap.name = ('uni')
						})
				cont.bm(
						$.img($.parseJSON(qu.getResult("mug"))),
						function (b) {
							mug = b.sXY(.4)
						})
				SL(mug, cont)
				cjs.tween([mug, 'l'], [{y: -10}, 200], [{y: 10}, 200], [{y: 0}, 200])
			}
			
			return cont
		}
		CYCLE = function () {
			z()
			s = $stage(800, 800).A().tick()
			c1 = Cycle1()
			c2 = Cycle2()
			s.A(c1, c2)
		}
		Cycle1 = function () {
			var cont = new createjs.Container()
			cont.mug(function (mug) {
				mug.sXY(.4)
				cont.bm('uni', function (bitmap) {
					bitmap.sX(-.8).X(-20).Y(200).rX(240).rY(80)
					bitmap.name = 'uni'
					createjs.bindTransform(mug, cont)
					createjs.bindRotate(bitmap, cont)
				})
			})
			return cont
		}
		Cycle2 = function () {
			var cont = new createjs.Container()
			var qu = new createjs.LoadQueue().complete(graphics).manifest([
				{id: "mug", src: "/getMug"},
				{id: "uni", src: "/uni.png"}
			])
			
			function graphics() {
				cont.bm(
						qu.getResult("uni"),
						function (b) {
							bitmap = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
							bitmap.name = ('uni')
						})
				cont.bm(
						$.img($.parseJSON(qu.getResult("mug"))),
						function (b) {
							mug = b.sXY(.4)
						})
				SL(mug, cont)
				cjs.tween([mug, 'l'], [{y: -10}, 200], [{y: 10}, 200], [{y: 0}, 200])
			}
			
			return cont
		}
		CYCLE = function () {
			z()
			s = $stage(800, 800).A().tick()
			c1 = Cycle1()
			c2 = Cycle2()
			s.A(c1, c2)
		}
	}
	
	function flame() {
		Flame1 = function () {
			var c = new cjs.Container().drag()
			c.bm('flame', function (b) {
				tweens.shakeY(b)
				c.mug(function (b) {
					b.rCenter()
					tweens.shakeX(tweens.rott(b))
					c.bm('flame', tweens.shakeX)
				})
				c.on('dblclick', function () {
					c.bm('flame',
							function (b) {
								b.sXY(.2)
								tweens.prod1(b)
							})
					c.bm('flame',
							function (b) {
								b.sXY(.2)
								tweens.prod2(b)
							})
				})
			})
			return c
		}
		FLAME = function () {
			s = $stage(800, 800).A().tick()
			f = Flame1().X(300)
			s.A(f)
		}
		Flame1 = function () {
			var c = new cjs.Container().drag()
			c.bm('flame', function (b) {
				tweens.shakeY(b)
				c.mug(function (b) {
					b.rCenter()
					tweens.shakeX(tweens.rott(b))
					c.bm('flame', tweens.shakeX)
				})
				c.on('dblclick', function () {
					c.bm('flame',
							function (b) {
								b.sXY(.2)
								tweens.prod1(b)
							})
					c.bm('flame',
							function (b) {
								b.sXY(.2)
								tweens.prod2(b)
							})
				})
			})
			return c
		}
		FLAME = function () {
			s = $stage(800, 800).A().tick()
			f = Flame1().X(300)
			s.A(f)
		}
		Flame1 = function () {
			var c = new cjs.Container().drag()
			c.bm('flame', function (b) {
				tweens.shakeY(b)
				c.mug(function (b) {
					b.rCenter()
					tweens.shakeX(tweens.rott(b))
					c.bm('flame', tweens.shakeX)
				})
				c.on('dblclick', function () {
					c.bm('flame', function (b) {
						b.sXY(.2)
						tweens.prod1(b)
					})
					c.bm('flame', function (b) {
						tweens.prod2(b.sXY(.2))
					})
				})
			})
			return c
		}
		FLAME = function () {
			s = $stage(800, 800).A().tick()
			f = Flame1().X(300)
			s.A(f)
		}
	}
	
	function more() {
		BOD = function () {
			z()
			s = $St(800, 800).A(
					b1 = Bod1(),
					b2 = Bod2().XY(300),
					cyc = Cycle(500),
					f = Flame(200)
			)
			function Cycle(x, y, rt) {
				ct = $Ct().mug(function (mug) {
					mug.sXY(.4)
					ct.bm('uni', function (b) {
						b.sX(-.8).XY(-20, 200).rXY(240, 80)
						b.n('uni')
						cjs.TR(mug, ct)
						cjs.RT(b, ct)
					})
				})
				if (N(x)) {
					ct.X(x)
				}
				if (N(y)) {
					ct.Y(y)
				}
				if (N(rt)) {
					ct.rt(rt)
				}
				return ct
			}
			
			function Flame(x, y) {
				var c
				c = $Ct().dg()
				c.bm('flame', function (b) {
					tweens.shakeY(b)
					c.mug(function (b) {
						b.rC()
						tweens.shakeX(tweens.rott(b))
						c.bm('flame', tweens.shakeX)
					})
					c.$$(function () {
						c.bm('flame', function (b) {
							tweens.prod1(b.sXY(.2))
						})
						c.bm('flame', function (b) {
							tweens.prod2(b.sXY(.2))
						})
					})
				})
				if (N(x)) {
					c.X(x)
				}
				if (N(y)) {
					c.Y(y)
				}
				return c
			}
			
			function Bod1() {
				var outerCont = $Ct().dg()
				var innerCont = $Ct()
				outerCont.A(innerCont)
				outerCont.mug(
						function (m) {
							m.sXY(.4)
							cjs.bindSlide(m, outerCont)
							outerCont.bm('arm', function (b) {
								b.name = 'arm'
								b.sX(-.8).XY(140, 100).rXY(200, 80)
								cjs.bindRotate(b)
								b.$$(function () {
									tweens.rpunch(b)
								})
							})
							innerCont.XY(40, 120).rXY(40, 100)
							innerCont.bm('uparm', function (b) {
								b.sX(.8).XY(80, 180).rXY(200, 80)
								cjs.bindRotate(b, innerCont)
							})
							innerCont.bm('forearm', function (b) {
								b.name = 'lf'
								b.XY(-100, 140).sX(.8).rXY(20, 120)
								cjs.bindRotate(b)
								innerCont.$$(function () {
									tweens.lpunch(b)
								})
							})
						})
				return b = outerCont
			}
			
			function Bod2(x, y) {
				var c1 = $Ct(), cL = $Ct()
				c1.mug(function (m) {
					SL(m.sXY(.4), c1)
				})
				c1.bm('arm', function (b) {
					b.sX(-.8).X(140).Y(100).rX(200).rY(80)
					RT(b);
					b.$$(function () {
						tweens.rpunch(b)
					})
				})
				cL.bm('uparm', function (b) {
					RT(b, cL)
					b.sX(.8).XY(80, 180).rXY(200, 80)
					cL.$$(function () {
						tweens.lpunch(cL)
					})
					cL.XY(140, 100).rXY(100, 100)
				})
				cL.bm('forearm', function (b) {
					b.name = ('lf')
					b.sX(.8).XY(-100, 140).rXY(20, 120)
					RT(b)
				})
				return c1.A(cL)
			}
		}
		BOD = function () {
			z()
			s = $St(800, 800).A(
					b1 = Bod1(),
					b2 = Bod2().XY(300),
					cyc = Cycle(500),
					f = Flame(200)
			)
			function Cycle(x, y, rt) {
				ct = $Ct().mug(function (mug) {
					mug.sXY(.4)
					ct.bm('uni', function (b) {
						b.sX(-.8).XY(-20, 200).rXY(240, 80)
						b.n('uni')
						cjs.TR(mug, ct)
						cjs.RT(b, ct)
					})
				})
				if (N(x)) {
					ct.X(x)
				}
				if (N(y)) {
					ct.Y(y)
				}
				if (N(rt)) {
					ct.rt(rt)
				}
				return ct
			}
			
			function Flame(x, y) {
				var c
				c = $Ct().dg()
				c.bm('flame', function (b) {
					tweens.shakeY(b)
					c.mug(function (b) {
						b.rC()
						tweens.shakeX(tweens.rott(b))
						c.bm('flame', tweens.shakeX)
					})
					c.$$(function () {
						c.bm('flame', function (b) {
							tweens.prod1(b.sXY(.2))
						})
						c.bm('flame', function (b) {
							tweens.prod2(b.sXY(.2))
						})
					})
				})
				if (N(x)) {
					c.X(x)
				}
				if (N(y)) {
					c.Y(y)
				}
				return c
			}
			
			function Bod1() {
				var outerCont = $Ct().dg()
				var innerCont = $Ct()
				outerCont.A(innerCont)
				outerCont.mug(
						function (m) {
							m.sXY(.4)
							cjs.bindSlide(m, outerCont)
							outerCont.bm('arm', function (b) {
								b.name = 'arm'
								b.sX(-.8).XY(140, 100).rXY(200, 80)
								cjs.bindRotate(b)
								b.$$(function () {
									tweens.rpunch(b)
								})
							})
							innerCont.XY(40, 120).rXY(40, 100)
							innerCont.bm('uparm', function (b) {
								b.sX(.8).XY(80, 180).rXY(200, 80)
								cjs.bindRotate(b, innerCont)
							})
							innerCont.bm('forearm', function (b) {
								b.name = 'lf'
								b.XY(-100, 140).sX(.8).rXY(20, 120)
								cjs.bindRotate(b)
								innerCont.$$(function () {
									tweens.lpunch(b)
								})
							})
						})
				return b = outerCont
			}
			
			function Bod2(x, y) {
				var c1 = $Ct(), cL = $Ct()
				c1.mug(function (m) {
					SL(m.sXY(.4), c1)
				})
				c1.bm('arm', function (b) {
					b.sX(-.8).X(140).Y(100).rX(200).rY(80)
					RT(b);
					b.$$(function () {
						tweens.rpunch(b)
					})
				})
				cL.bm('uparm', function (b) {
					RT(b, cL)
					b.sX(.8).XY(80, 180).rXY(200, 80)
					cL.$$(function () {
						tweens.lpunch(cL)
					})
					cL.XY(140, 100).rXY(100, 100)
				})
				cL.bm('forearm', function (b) {
					b.name = ('lf')
					b.sX(.8).XY(-100, 140).rXY(20, 120)
					RT(b)
				})
				return c1.A(cL)
			}
		}
	}}
SHOOTY = INVADERS = function () {
	$St().dg()
	
	
	st.mug(function (mug) {
	
			key(mug.XY(100, 100).WH(150).SL(), '-')
		// ugun(mug)
	})
	
	cv = ghostMe().A().dg().XY(10)
}
  

SPACE = function () {
		//wMs(function (b, st) {st.WH(2000,2000).bgi('/space.jpg'); b.sxy(.2); b.fn(RT, SL)})
		$St().bgI('/space.jpg').mug(function (m) {
			m.sXY(.2).dg().rt().RT().SL()
		})
	}
	  function solar(){
		  dO = cjs.DisplayObject.prototype
		  dO.warpX = function (low, high, cush) {
			  var ob = this,
					  warp = M.warp(low, high, cush)
			  cjs.t(function () {
				  ob.x = warp(ob.x)
			  })
			  return ob
		  }//wrx
		  dO.warpY = function (low, high, cush) {
			  var ob = this,
					  warp = Math.warp(low, high, cush)
			  cjs.t(function () {
				  ob.y = warp(ob.y)
			  })
			  return this
		  }//wry
		  dO.warp = function (n) {
			  n = n || 0
			  var stage = this.getStage()
			  this.warpX(0, stage.W(), n)
			  this.warpY(0, stage.H(), n)
			  return this
		  }//wr
		  dO.go = dO.startMoving = function (x, y) {
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
		  dO.bounce = function (n) {
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
		  dO.vX = function (a) {
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
		  dO.vY = function (a) {
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
		  dO.vXY = function (x, y) {
			  return this.vX(x).vY(y)
		  }
		  SOLAR = function () {
			  $St().bm('guy', function (bm) {
				  guy = bm
				  bm.dg()
				  bm.vXY(_.random(10) + 1, _.random(10) + 1).XY(_.random(800), _.random(600))
				  bm.startMoving()
				  bm.warp()
				  st.bm('sun', 0.2, function (bm) {
					  sun = bm
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
			  st.mug(0.4, function (bm) {
				  mug = bm
				  bm.X(400).dg().bounce(0)
				  bm.startMoving(10, 10)
			  })
			  st.bgImg('/space.jpg')
		  }
		  cjs.bulletHit = function (bu, inWhat) { //used in solar
			  var res
			  res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
			  if (res == true) {
				  $l('hit!')
			  }
			  return res
		  }}
function ghostMe() {// how cool.. it 'steals' the drag because its on top but looks like its below
	return $.c('X', 500, 500).fit('me').al(.1)
}
 
 function mugQueue(){
	 QUEUE = function () {
		 s = cjs.stage(500).tick().A()
		 queue = new cjs.LoadQueue()
		 queue.on("complete", handleComplete, this)
		 queue.loadManifest(
				 [{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}])
		 function handleComplete() {
			 image = queue.getResult("myImage")
			 s.A(cjs.bm(image))
		 }
	 }
	 QUEUE = function () {
		 s = cjs.stage(500).tick().A()
		 queue = new createjs.LoadQueue()
		 queue.on("complete", handleComplete, this)
		 queue.loadManifest(
				 [{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}])
		 function handleComplete() {
			 image = queue.getResult("myImage")
			 s.A(cjs.bm(image))
		 }
	 }
	 QUEUEMUG = function () {
		 s = cjs.stage(500, 500).tick().A()
		 qu = Ql().c(graphics, this).l([
			 {id: "mug", src: "/getMug"},
			 {id: "me", src: "/me.png"}
		 ])
		 ////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
		 function graphics() {
			
			 // mug= s.bData( qu.gR("mug") ).drag()
			 me = cjs.bm(qu.gR("me")).drag()
			 s.A(me)
		 }
	 }
	 QU6 = QUEUEMUG = QM = function () {
		 s = new cjs.Stage($.c('b', 500, 500)[0])
		 Q([{id: "mug", src: "/myMug"}],
				 function () {
					 mug = new cjs.Bitmap($.i(Q.i('mug'))).dg()
					 s.A(mug)
				 })
	 }
	 QU9 = QUEUEMUG = QM = function () {
		 s = new cjs.Stage($.c('b', 500, 500)[0])
		 Q([{id: "mug", src: "/myMug"}],
				 function () {
					 mug = $Bm($.i(Q.i('mug'))).dg()
					 s.A(mug)
				 })
	 }
	 QUEUEMUG = function () {
		 s = cjs.stage(500, 500).tick().A()
		 qu = Ql().c(graphics, this).l([
			 {id: "mug", src: "/getMug"},
			 {id: "me", src: "/me.png"}
		 ])
		 ////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
		 function graphics() {
			
			 // mug= s.bData( qu.gR("mug") ).drag()
			 me = cjs.bm(qu.gR("me")).drag()
			 s.A(me)
		 }
	 }//// ***
	 Cycle1 = function () {
		 var cont = new cjs.Container()
		 cont.mug(function (mug) {
			 mug.sXY(.4)
			 cont.bm('uni', function (bitmap) {
				 bitmap.sX(-.8).X(-20).Y(200).rX(240).rY(80)
				 bitmap.name = 'uni'
				 cjs.bindTransform(mug, cont)
				 cjs.bindRotate(bitmap, cont)
			 })
		 })
		 return cont
	 }
	 Cycle2 = function () {
		 var cont = new cjs.Container()
		 var qu = new cjs.LoadQueue()
				 .complete(graphics).manifest([
					 {id: "mug", src: "/getMug"},
					 {id: "uni", src: "/uni.png"}
				 ])
		
		 function graphics() {
			 cont.bm(
					 qu.getResult("uni"),
					 function (b) {
						 bitmap = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
						 bitmap.name = ('uni')
					 })
			 cont.bm(
					 $.img($.parseJSON(qu.getResult("mug"))),
					 function (b) {
						 mug = b.sXY(.4)
					 })
			 SL(mug, cont)
			 cjs.tween([mug, 'l'], [{y: -10}, 200], [{y: 10}, 200], [{y: 0}, 200])
		 }
		
		 return cont
	 }
	 CYCLE = function () {
		 s = $stage(800, 800).A().tick()
		 c1 = Cycle1()
		 c2 = Cycle2()
		 s.A(c1, c2)
	 }
	 MX1 = MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		 stage = St()
		 $.d('b', 50, 50).A()
		 //stage = s = cjs.stage(1600,1000).tick().A()
		 // on stage enter, change background color, though you
		 // cant see it here because stage fills screen
		 // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		 st.on('e', co)
		 //make a container
		 st.ct(function (c, s) {
			
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
				 bm.$(function () {
					 $l('mid')
				 }, '-')  //on click, log('mid'), and stop prop
			 })
			 c.bm('me', function (bm) {
				 bm.sXY(1.5)
				 bm.on('click', function () {
					 $l('big')
				 })  //on click, log('big')
			 })    //on click, log('con')
			 c.on('click', function () {
				 $l('con')
			 })
		 })
		 st.ct(function (ct) {
			 c = ct
			 var vn = 0, rvn = 0, on = 0, ron = 0
			 ct.X(200)
			 ct.mug(function (b) {
				 b.sXY(.8).XY(200, 80)
			 })
			 ct.mug(function (b) {
				 b.sXY(.8).XY(100, 280)
			 })
			 ct.mg(function (b) {
				 b.sXY(.8).XY(340, 180)
			 })
			 //this shows over/out vs rollover/rollout
			 //over/out get retriggered when switching between connected sprites
			 //rollover/rollout does not because it is still touching 'something'
			 ct.on('mouseover', function () {
				 c.X(10, '+');
				 $l('v: ' + vn++)
			 })
			 ct.on('rollover', function () {
				 c.X(20, '-');
				 $l('rv: ' + rvn++)
			 })
			 ct.on('mouseout', function () {
				 c.Y(10, '+');
				 $l('o: ' + on++)
			 })
			 ct.on('rollout', function () {
				 c.Y(20, '-');
				 $l('ro: ' + ron++)
			 })
		 }).MV(40)
		 st.ct(function (ct, st) {
			 ct.X(700)
			 ct.mug(function (bm) {
				 bm.sXY(.8).XY(200, 80)
			 })
			 ct.mug(function (bm) {
				 bm.sXY(.8).XY(100, 280)
			 })
			 ct.mug(function (bm) {
				 bm.sXY(.8).XY(340, 180)
			 })
			 //this example shows which sprites are acted upon with over/rollover
			 //over only affects one
			 //rollover affects ALL
			 //if you enter a sprite from outside, they all grow (via rollover),
			 //and the one sprite grows double (via over)
			 ct.on('mouseover', function () {
				 $l('mouseover');
				 this.sXY(.01, '+')
			 })
			 ct.on('rollover', function () {
				 $l('rv');
				 this.sXY(.01, '+')
			 })
			 ct.on('mouseout', function () {
			 })
			 ct.on('rollout', function () {
			 })
			 // in summary,
			 // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			 // BUT, they will all recieve events separately
		 }).MV(40) //??? mouse events? speed for some mouse checking thing
		 st.ct(function (ct, st) {
			 ct.x = 1400
			 ct.bm('me', function (bm) {
				 //make the little me slide the entire container
				 //it acts as a handle! (for its container)
				 lit = bm.sXY(.2).XY(100, 80)
				 SL(bm, ct)
				 ctr.bm('me', function (bm) {
					 //big me will scale the little me
					 big = bm.sXY(2).XY(100, 180)
					 SC(bm, lit)
					 ct.bm('me', function (bm) {
						 bm.sXY(.6).XY(150, 180).SL();
						 RT(bm, big)
					 })
				 })
			 })
			 //guy slides stage
			 ct.bm('guy', function (bm) {
				 bm.sXY(.4).XY(100, 180);
				 SL(bm, st)
			 })
		 })
	 }
	 SOY = SHOOTY = function () {
		 St()
		 $.ghost = function () {
			 return $.c('X', 500, 500).fit('me').al(.1)
		 } // how cool.. it 'steals' the drag because its on top but looks like its below
		 st.mug(function (m) {
			 m.XY(100, 100).WH(150)
			 SL(m)
			 //key(m, '-')
			 // ugun(mug)
		 })
		 c = $.ghost().XY(10, 10).A().dg()
	 }//C-
	 QMUG = function () {
		 $Ld([{id: "mug", src: "/getMug"}, {id: "me", src: "/me.png"}], function (ld) {
			 // mug= s.bData( qu.gR("mug") ).drag()
			 St().A($Bm(ld.get("me")).drag())
		 })
		 ///// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
	 }
	 function mugSuit() {
		 mugCont = function (stage) {
			 cont = cjs.container()
			 cont.flame = function () {
				 cont.desuit()
				 cont.A(
						 cont.suit = cjs.container().bm('flame', function (flame) {
						 })
				 )
			 }
			 cont.uni = function () {
				 cont.desuit()
				 cont.A(
						 cont.suit = cjs.container().bm('uni', function (uni) {
							 uni.x(200).y(200)
							 cont.mug.sxy(.2).x(300)
						 }))
			 }
			 cont.guy = function () {
				 cont.desuit()
				 cont.A(
						 cont.suit = cjs.container().bm('guy', function (guy) {
							 guy.spin()
							 cont.spin()
						 })
				 )
			 }
			 cont.desuit = function () {
				 cont.mug.sXY(1).XY(200)
				 if (cont.suit) {
					 cont.suit.remove()
					 cont.suit = null
				 }
			 }
			 qu = new cjs.LoadQueue().complete(onMug)
					 .manifest([{id: "mug", src: "/myMug"}])
			 function onMug() {
				 mug = qu.getResult("mug")
				 // cont.bData( mug )//.rgc('+')
				 cont.A(cont.mug = cjs.bm(mug))
			 }
			
			 return cont
		 }
		 CONTMUG = function () {
			 z()
			 s = cjs.stage(1000).A()
			 s.A(m = mugCont())//.rgc('+')
			 // SL(m)
		 }
//// ***
//// ***
		 mugCont = function (stage) {
			 qu = new cjs.LoadQueue().complete(onMug).manifest([{id: "mug", src: "/myMug"}])
			 cont = cjs.container()
			 cont.flame = function () {
				 cont.desuit()
				 cont.A(
						 cont.suit = cjs.container().bm('flame', function (flame) {
						 })
				 )
			 }
			 cont.uni = function () {
				 cont.desuit()
				 cont.A(
						 cont.suit = cjs.container().bm('uni', function (uni) {
							 uni.x(200).y(200)
							 cont.mug.sxy(.2).x(300)
						 }))
			 }
			 cont.guy = function () {
				 cont.desuit()
				 cont.A(
						 cont.suit = cjs.container().bm('guy', function (guy) {
							 guy.spin()
							 cont.spin()
						 })
				 )
			 }
			 cont.desuit = function () {
				 cont.mug.sXY(1).XY(200)
				 if (cont.suit) {
					 cont.suit.remove()
					 cont.suit = null
				 }
			 }
			 function onMug() {
				 mug = qu.getResult("mug")
				 // cont.bData( mug )//.rgc('+')
				 cont.A(cont.mug = cjs.bm(mug))
			 }
			
			 return cont
		 }
		 CONTMUG = function () {
			 s = cjs.stage(1000).A()
			 s.A(m = mugCont())//.rgc('+')
			 // SL(m)
		 }
		 //// ***
		 CONTMUG = function () {
			 z()
			 s = cjs.stage(1000).A()
			 s.A(m = mugCont())//.rgc('+')
			 // SL(m)
		 }
		 SUIT = function (st) {
			 alert('mugCont')
			 qu = new cjs.LoadQueue().complete(onMug)
					 .manifest([{id: "mug", src: "/myMug"}])
			 cont = $Ct()
			 cont.flame = function () {
				 cont.desuit()
				 cont.A(
						 cont.suit = cjs.container().bm('flame', function (flame) {
						 })
				 )
			 }
			 cont.uni = function () {
				 cont.desuit()
				 cont.A(
						 cont.suit = cjs.container().bm('uni', function (uni) {
							 uni.x(200).y(200)
							 cont.mug.sxy(.2).x(300)
						 }))
			 }
			 cont.guy = function () {
				 cont.desuit()
				 cont.A(
						 cont.suit = cjs.container().bm('guy', function (guy) {
							 guy.spin()
							 cont.spin()
						 })
				 )
			 }
			 cont.desuit = function () {
				 cont.mug.sXY(1).XY(200)
				 if (cont.suit) {
					 cont.suit.remove()
					 cont.suit = null
				 }
			 }
			 function onMug() {
				 mug = qu.getResult("mug")
				 // cont.bData( mug )//.rgc('+')
				 cont.A(cont.mug = $Bm(mug))
			 }
			
			 mugCont = function (stage) {
				 qu = $Ld([{id: "mug", src: "/myMug"}], function (l) {
					 var mug = l.get("mug")
					 // cont.bData( mug )//.rgc('+')
					 ct.A(ct.mug = cjs.bm(mug))
				 })
				 ct = cjs.container()
				 ct.flame = function () {
					 ct.desuit()
					 ct.A(
							 cont.suit = cjs.container().bm('flame', function (flame) {
							 })
					 )
				 }
				 cont.uni = function () {
					 cont.desuit()
					 cont.A(
							 cont.suit = cjs.container().bm('uni', function (uni) {
								 uni.x(200).y(200)
								 cont.mug.sxy(.2).x(300)
							 }))
				 }
				 cont.guy = function () {
					 cont.desuit()
					 cont.A(
							 cont.suit = cjs.container().bm('guy', function (guy) {
								 guy.spin()
								 cont.spin()
							 })
					 )
				 }
				 cont.desuit = function () {
					 cont.mug.sXY(1).XY(200)
					 if (cont.suit) {
						 cont.suit.remove()
						 cont.suit = null
					 }
				 }
				 return cont
			 }
			 return cont
		 }
	 }}