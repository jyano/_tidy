function needsWorld() {
	SPRY = function () {
		W([1200, 600, 2400, 1200], {g: 20})//.chalk('spritebox example')
//for 400 x 400 flash squares !!!
		//w.s.bm('earth', function(me){me.XY(400,400)fn()})
		//function fn(){
		y = w.spBox($$ship).track()
		$.K($$ship.key)
		$.K({  //takes a spritebox!//uses cjs.watchKeys()
			l: function () {
				y.rot(8, '-')
			},
			r: function () {
				y.rot(8, '+')
			},
			u: function () {
				y.I(0, -10)
			}
		})
		y.aD(.5)
//}
	}
	CHAR = function () {
		w = b2d.W().debug()
		w.begin(function (cx) {
			if (cx.with('hurt')) {
				b.p('hurt').I(100, -200)
			}
			if (cx.with('fly')) {
				b.p('fly').I(-100, -200)
			}
		})
		b = w.ball(200, 200, 60).bindSprite2(cjs.sprite(Sprites.char).rXY(275, 220))
		guyBrick(100).K('hurt')
		guyBrick(500).K('fly')
		function guyBrick(x) {
			return w.brick(x, 500, 100, 100).bindSprite('guy', .6)
		}
	}
	MUMMYFLIP = function () {
		w = b2d.W() //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right
		b = b2d.box(100, 100, 50, 88).K('mummy').bindSprite2(
				cjs.sprite(Mummy).a2(w.s).drag()
						.rXY(20, 22).sXY(2).XY(200))
		b.coll(function () {
			b.linVel(0)
		})
		b.sprite.p('walk')
		cjs.tick(function () {
			b.rT(0)
			if (b.direction == 'right') {
				b.I(4, -2)
			}
			else if (b.direction == 'left') {
				b.I(-4, -2)
			}    // direction='neither' // <-- demumify (doesnt keep walking
			//if(jumpButton is pressed){jump()}
		})
		$.kD({
			u: function () {
				//jumpButtonPressed = true
				if (b.Y() > 530) {
					b.I(0, -80)
				}
			},
			U: function () {
				//jumpButtonPressed = false
			},
			l: function () {
				b.sprite.sX(-2)
				b.direction = 'left'
			},
			r: function () {
				b.sprite.sX(2)
				b.direction = 'right'
			}
		})
	}
	STICK = function () {
		w = b2d.W({grav: 3})
				.chalk('spritebox example').debug()
		w.spriteBox({
			"framerate": 4,
			"images": ["stick.png"],
			"frames": [
				[0, 0, 512, 512, 0, -22, -2],
				[512, 0, 512, 512, 0, -22, -2],
				[1024, 0, 512, 512, 0, -22, -2],
				[0, 512, 512, 512, 0, -22, -2],
				[512, 512, 512, 512, 0, -22, -2],
				[1024, 512, 512, 512, 0, -22, -2],
				[0, 1024, 512, 512, 0, -22, -2],
				[512, 1024, 512, 512, 0, -22, -2],
				[1024, 1024, 512, 512, 0, -22, -2],
				[0, 1536, 512, 512, 0, -22, -2],
				[512, 1536, 512, 512, 0, -22, -2],
				[1024, 1536, 512, 512, 0, -22, -2]
			],
			"animations": {
				"die": {"frames": [8, 9, 10], "speed": .1, next: false},
				"walk": {"frames": [1, 2, 3, 4], "speed": .1},
				"jump": {"frames": [5, 6, 7, 0], "speed": .1, next: false}
			}
		}, 300, 200, .25).mario()
		w.rect(600, 200, 50, 50, 'p')
		w.circ(600, 100, 40, 'b')
	}
}