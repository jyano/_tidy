function sprite() {
	meSprite = function () {
		return $sprite(SS).XY(10).drag()
	}
	SPRITE = function (sprite) {
		sprite = $sprite(sprite || SS).XY(10).drag()
		stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
		stage.A(sprite)
		controls = {
			jump: function () {
				sprite.gotoAndPlay('jump')
			},
			explode: function () {
				sprite.gotoAndPlay('explode')
			},
			spin: function () {
				sprite.gotoAndPlay('spin')
			},
			stop: function () {
				sprite.stop()
			},
			play: function () {
				sprite.play()
			}
		}
		$.div('yellow', 460, 89).css({
			position: 'absolute',
			top: 200,
			left: 300,
			padding: 20,
			opacity: .9
		}).A().drag().A(
				$.span(' '),
				$.button('spin', function () {
					controls.spin()
				}), $.span(' '),
				$.button('jump', function () {
					controls.jump()
				}), $.span(' '),
				$.button('explode', function () {
					controls.explode()
				}), $.span(' '),
				$.button('play', function () {
					controls.play()
				}), $.span(' '),
				$.button('stop', function () {
					controls.stop()
				}), $.span(' '),
				$.button('meta', function () {
					SPRITE()
				})
		)
		s = sprite
		return controls
	}
	SPRITE2 = function () {
		stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
		stage.A(sprite = $sprite(SS).XY(10).drag())
	}
	RECTS = function () {
		z()
		x = 20
		y = 20
		s = cjs.stage(500).A()//.drag()
		h0 = cjs.shape().rect(-20, -20, x + 40, y + 40, 'yellow', 'yellow')
		h1 = cjs.shape().rect(-10, -10, x + 20, y + 20, 'red', 'pink')
		h2 = cjs.shape().rect(0, 0, x, y, 'orange', 'black')
		s.A(h0, h1, h2)
		SL(h2)
		SL(h2, h1)
		SL(h2, h0)
		RT(h1)
		RT(h1, h2)
		RT(h1, h0)
		SC(h0)
		SC(h0, h2)
		SC(h0, h1)
		a = function () {
			x += 20;
			y += 20
			h1.clear()
			h2.clear()
			h1.rect(-10, -10, x + 20, y + 20, 'black', 'pink')
			h2.rect(0, 0, x, y, 'orange', 'transparent')
		}
		// h0.rect(50,50,30,30,'black','orange')
	}
	meSprite = function () {
		return $sprite(SS).XY(10).drag()
	}
	SPRITE = function (sprite) {
		sprite = $sprite(sprite || SS).XY(10).drag()
		stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
		stage.A(sprite)
		controls = {
			jump: function () {
				sprite.gotoAndPlay('jump')
			},
			explode: function () {
				sprite.gotoAndPlay('explode')
			},
			spin: function () {
				sprite.gotoAndPlay('spin')
			},
			stop: function () {
				sprite.stop()
			},
			play: function () {
				sprite.play()
			}
		}
		$.div('yellow', 460, 89).css({
			position: 'absolute',
			top: 200,
			left: 300,
			padding: 20,
			opacity: .9
		}).A().drag().A(
				$.span(' '),
				$.button('spin', function () {
					controls.spin()
				}), $.span(' '),
				$.button('jump', function () {
					controls.jump()
				}), $.span(' '),
				$.button('explode', function () {
					controls.explode()
				}), $.span(' '),
				$.button('play', function () {
					controls.play()
				}), $.span(' '),
				$.button('stop', function () {
					controls.stop()
				}), $.span(' '),
				$.button('meta', function () {
					SPRITE()
				})
		)
		s = sprite
		return controls
	}
	SPRITE2 = function () {
		stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
		stage.A(sprite = $sprite(SS).XY(10).drag())
	}
	PACK = function () {
		stage = cjs.stage(800).A()
		//stage.op(.7)
		sprite = $sprite(Pack).XY(200, 260).sXY(1.2).drag()
		stage.A(sprite)
		//.rgc()
		sprite.framerate = 6
		sprite.play()
	}
//make movie 
}
function stage() {
	STAGE = function () {
		z()
		m$$("location=location")
		s = St(600).a().rgc().drg().xy(300)
		s.bm('chicks')
		s.bm('me', function (mm) {
			m = mm
			m.rgc()
			m.xy(300)
			cjs.tween(s, [{r: -10000}, 300000])
			cjs.tween(m, [{r: 100000}, 300000])
		})
		s.bm('guy', function () {
		})
	}
	STAGE = function () {
		z()
		m$$("location=location")
		s = St(600).a().rgc().drg().xy(300)
		s.bm('chicks')
		s.bm('me', function (mm) {
			m = mm
			m.rgc()
			m.xy(300)
			cjs.tween(s, [{r: -10000}, 300000])
			cjs.tween(m, [{r: 100000}, 300000])
		})
		s.bm('guy', function () {
		})
	}
}
function spinner() {
	CJSSPINNER = function () {
		z()
		s = cjs.stage('purple', 1000).A().rCenter()
		cjs.tween(s, [{r: -10000}, 300000])
		s.bm('me', function (bm) {
			m = bm.XY(500)
			SL(bm)
		})
		s.A(r = cjs.rectangle(400, 400, 'orange', 'red').XY(1200))
		s.A(r2 = cjs.rectangle(300, 300, 'pink', 'red').XY(800))
		s.A(r3 = cjs.rectangle(300, 300, 'green', 'green').XY(0))
	}
	CJSSPINNER = function () {
		z()
		s = cjs.stage('purple', 1000).A().rCenter()
		cjs.tween(s, [{r: -10000}, 300000])
		s.bm('me', function (bm) {
			m = bm.XY(500)
			SL(bm)
		})
		s.A(r = cjs.rectangle(400, 400, 'orange', 'red').XY(1200))
		s.A(r2 = cjs.rectangle(300, 300, 'pink', 'red').XY(800))
		s.A(r3 = cjs.rectangle(300, 300, 'green', 'green').XY(0))
	}
	CJSSPINNER = function () {
		z()
		s = cjs.stage('purple', 1000).A().rCenter()
		cjs.tween(s, [{r: -10000}, 300000])
		s.bm('me', function (bm) {
			m = bm.XY(500)
			SL(bm)
		})
		s.A(r = cjs.rectangle(400, 400, 'orange', 'red').XY(1200))
		s.A(r2 = cjs.rectangle(300, 300, 'pink', 'red').XY(800))
		s.A(r3 = cjs.rectangle(300, 300, 'green', 'green').XY(0))
	}
}
function recs() {
	RECTS = function () {
		z()
		x = 20
		y = 20
		s = cjs.stage(500).A()//.drag()
		h0 = cjs.shape().rect(-20, -20, x + 40, y + 40, 'yellow', 'yellow')
		h1 = cjs.shape().rect(-10, -10, x + 20, y + 20, 'red', 'pink')
		h2 = cjs.shape().rect(0, 0, x, y, 'orange', 'black')
		s.A(h0, h1, h2)
		SL(h2)
		SL(h2, h1)
		SL(h2, h0)
		RT(h1)
		RT(h1, h2)
		RT(h1, h0)
		SC(h0)
		SC(h0, h2)
		SC(h0, h1)
		a = function () {
			x += 20;
			y += 20
			h1.clear()
			h2.clear()
			h1.rect(-10, -10, x + 20, y + 20, 'black', 'pink')
			h2.rect(0, 0, x, y, 'orange', 'transparent')
		}
		// h0.rect(50,50,30,30,'black','orange')
	}
	RECTS = function () {
		z()
		x = 20
		y = 20
		s = cjs.stage(500).A()//.drag()
		h0 = cjs.shape().rect(-20, -20, x + 40, y + 40, 'yellow', 'yellow')
		h1 = cjs.shape().rect(-10, -10, x + 20, y + 20, 'red', 'pink')
		h2 = cjs.shape().rect(0, 0, x, y, 'orange', 'black')
		s.A(h0, h1, h2)
		SL(h2)
		SL(h2, h1)
		SL(h2, h0)
		RT(h1)
		RT(h1, h2)
		RT(h1, h0)
		SC(h0)
		SC(h0, h2)
		SC(h0, h1)
		a = function () {
			x += 20;
			y += 20
			h1.clear()
			h2.clear()
			h1.rect(-10, -10, x + 20, y + 20, 'black', 'pink')
			h2.rect(0, 0, x, y, 'orange', 'transparent')
		}
		// h0.rect(50,50,30,30,'black','orange')
	}
}
  
function ease() {
	EASING = function () {
		stage = createjs.stage(1000, 10000).tick().A()
		stage.mug(
				function (b) {
					bb = b
					b.sXY(.2).XY(50, 100)
					cjs.tween([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000]
					)
				})
		eas = function (y, e) {
			stage.mug(
					function (b) {
						b.sXY(.2).XY(50, y)
						cjs.tween([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
						b.$(function () {
							pop(e + ' : ' + oO('E', e))
						})
					})
		}
		eas(300, 'bO');
		eas(500, 'bI');
		eas(700, 'bIO')
		eas(900, 'bnO');
		eas(1100, 'bnI');
		eas(1300, 'bnIO')
		eas(1500, 'cO');
		eas(1700, 'cI');
		eas(1900, 'cIO')
		eas(2100, 'eO');
		eas(2300, 'eI');
		eas(2500, 'eIO')
		eas(2700, 'qO');
		eas(2900, 'qI');
		eas(3100, 'qIO')
		eas(3900, 'qnO');
		eas(4100, 'qnI');
		eas(4300, 'qnIO')
		eas(4500, 'sO');
		eas(4700, 'sI');
		eas(4900, 'sIO')
		eas(5100, 'qdO');
		eas(5300, 'qdI');
		eas(5500, 'qdIO')
	}
	EASING = function () {
		stage = createjs.stage(1000, 10000).tick().A()
		stage.mug(
				function (b) {
					bb = b
					b.sXY(.2).XY(50, 100)
					cjs.tween([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000]
					)
				})
		eas = function (y, e) {
			stage.mug(
					function (b) {
						b.sXY(.2).XY(50, y)
						cjs.tween([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
						b.$(function () {
							pop(e + ' : ' + oO('E', e))
						})
					})
		}
		eas(300, 'bO');
		eas(500, 'bI');
		eas(700, 'bIO')
		eas(900, 'bnO');
		eas(1100, 'bnI');
		eas(1300, 'bnIO')
		eas(1500, 'cO');
		eas(1700, 'cI');
		eas(1900, 'cIO')
		eas(2100, 'eO');
		eas(2300, 'eI');
		eas(2500, 'eIO')
		eas(2700, 'qO');
		eas(2900, 'qI');
		eas(3100, 'qIO')
		eas(3900, 'qnO');
		eas(4100, 'qnI');
		eas(4300, 'qnIO')
		eas(4500, 'sO');
		eas(4700, 'sI');
		eas(4900, 'sIO')
		eas(5100, 'qdO');
		eas(5300, 'qdI');
		eas(5500, 'qdIO')
	}
}