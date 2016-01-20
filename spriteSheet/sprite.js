Sp = spriteQLoader = function (sS, fn, st) {
	return Ql({
		manfifest: makeManifest(sS),
		complete: function (i) {
			var sp = $Sp($SS(sS))
			if (fn) {
				fn(sp)
			}
			if (st) {
				st.A(sp)
			}
		}
	})
}
 
sp = cjs.Sp.prototype
$SSU = cjs.SSU = cjs.sSU = cjs.SpriteSheetUtils
cjs.Sp = cjs.Sprite;
$An = $Anim = function (frames, speed) {
	return {frames: frames, speed: N(speed, 1)}
}
 
MESP = function () {
	st = _$St().t()
	sp = meSprite().a2(st)
	sp.p('jump')
}
cjs.iSp = function (sp) {
	return O(sp) && F(sp.toString) && sp.toString().indexOf('Sprite') != -1 && !cjs.iSS(sp)
}
_$Sp = function (sS, x, y) {
	var sp = new cjs.Sp(sS)
	sp.XY(N(x, 0), N(y, 0))
	return sp
}
$Sp = function (sS, x, y) {
	var sp = _$Sp(cjs.toSS(sS), x, y)
	sp.sS = sp.ss = sp.spriteSheet
	return sp
}
KEYBOARDWALK = SID = SIDE = function () {
	$sideSp = side = function () {
		this.initialize();
	}
	$sideSp.prototype = $Sp()
	$sideSp.prototype.Sprite_initialize = side_p.initialize;
	$sideSp.prototype.initialize = function () {
		this.Sprite_initialize(side._SpriteSheet);
		this.paused = false;
	}
	$sideSp.prototype.walkLeft = function () {
		this.gotoAndPlay("walkLeft");
	}
	$sideSp.prototype.takeoff = function () {
		this.gotoAndPlay("takeoff");
	}
	$sideSp._SpriteSheet = $SS({
		images: ["side.png"],
		frames: [[0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [0, 297, 352, 315, 0, 253.95, 49.5], [0, 297, 352, 315, 0, 253.95, 49.5], [352, 297, 383, 326, 0, 186.95, 79.5], [352, 297, 383, 326, 0, 186.95, 79.5], [0, 623, 550, 337, 0, 315.95, 95.5], [0, 623, 550, 337, 0, 315.95, 95.5], [0, 960, 520, 534, 0, 315.95, 214.5], [0, 960, 520, 534, 0, 315.95, 214.5], [0, 1494, 543, 552, 0, 330.95, 226.5]],
		animations: {walkLeft: [0, 9, true], takeoff: [10, 11, true]}
	})
	st = $St()
	sp = new $sideSp().XY(400, 200).a2(st).walkLeft().sXY(.5).gotoAndStop()
	var lfHeld
	var rtHeld
	var upHeld
	var dnHeld
	var keyDn = false
	document.onkeydown = handleKeyDown
	document.onkeyup = handleKeyUp
	$t(function () {
		if (lfHeld) {
			sp.x -= 15
		}
		if (rtHeld) {
			sp.x += 15
		}
		if (upHeld) {
			sp.y -= 4
		}
		if (dnHeld) {
			sp.y += 4
		}
		if (lfHeld && !keyDn) {
			sp.scX(.5).p('walkLeft')
			keyDn = true
		}
		if (rtHeld && !keyDn) {
			sp.scX(-.5).p('walkLeft')
			keyDn = true
		}
		if (upHeld && !keyDn) {
			sp.p('takeoff')
			keyDn = true
		}
	})
	function handleKeyDown(e) {
		switch (e.keyCode) {
			case 37:
				lfHeld = true;
				break
			case 39:
				rtHeld = true;
				break
			case 38:
				upHeld = true;
				break
			case 40:
				dnHeld = true;
				break
		}
	}
	
	function handleKeyUp(e) {
		switch (e.keyCode) {
			case 37:
				sp.gotoAndStop('walkLeft')
				keyDn = false;
				lfHeld = false;
				break
			case 39:
				sp.gotoAndStop('walkLeft')
				keyDn = false;
				rtHeld = false;
				break
			case 38:
				sp.gotoAndStop('takeoff')
				keyDn = false
				upHeld = false;
				break
			case 40:
				sp.gotoAndStop('takeoff')
				keyDn = false
				dnHeld = false;
				break
		}
	}
}
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
cjs.Sp = cjs.Sprite;
 