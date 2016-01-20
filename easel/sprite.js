cjs.iSp = function (sp) {
	return O(sp) && F(sp.toString) && sp.toString().indexOf('Sprite') != -1 && !cjs.iSS(sp)
}
cjs.Sp = cjs.Sprite;
sp = cjs.Sp.prototype
 
cjs.Sp = cjs.Sprite;
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
$An = $Anim = function (frames, speed) {
	return {frames: frames, speed: N(speed, 1)}
}
function spritePt() {
	sp = cjs.Sp.prototype
	sp.numFr = sp.numFrames = sp.nF = function () {
		return sp.sS.getNumFrames()
	}
	sp.fr = sp.cF = sp.cf = sp.cF = sp.cFr = sp.f = function (num) {
		var sp = this, g = G(arguments)
		/*
		 var args = G(arguments), num = args[0]
		 if (args.p) {
		 return sp.frame(
		 sp.frame() + ( N(num) ? num : 1 )
		 )
		 }
		 if (args.n) {
		 return sp.frame(
		 sp.frame() - ( N(num) ? num : 1 )
		 )
		 }
		 if (U(num)) {
		 return sp.ob.currentFrame
		 }
		 $l(num)
		 return sp.isPlaying() ? sp.play(num) : sp.stop(num)
		 */
		if (g.u) {
			return sp.currentFrame
		}
		sp.currentFrame = g.f
		return sp
		//= sp.frame = sp.currentFrame
	}
	sp.an = sp.anim = sp.cA = sp.ca = sp.a = sp.cA = sp.cAn = function (a) {
		if (a) {
			return sp.isPlaying() ?
					sp.play(a) :
					sp.stop(a)
		}
		return this.currentAnimation
	}
	sp.anFr = sp.cAnFr = sp.cAF = sp.caf = function (fr) {
		if (U(fr)) {
			return this.currentAnimationFrame
		}
		this.currentAnimationFrame = fr
		return this
	}
	sp.getAn = sp.gAn = sp.getAnim = sp.ans = sp.as = sp.gA = function (a) {
		return U(a) ? sp.spriteSheet.getAnimations() :
				sp.spriteSheet.getAnimation(a)
	}
	sp.rate = sp.r = sp.fR = function (rate) {
		if (U(rate)) {
			return this.framerate
		}
		var g = G(arguments), a = g[0]
		if (g.p) {
			return sp.fr(sp.fr() + N(rate, 1))
		}
		if (g.n) {
			return sp.fr(sp.fr() - N(rate, 1))
		}
		if (g.m) {
			return sp.fr(sp.fr() * N(rate, 2))
		}
		if (g.d) {
			return sp.fr(sp.fr() / N(rate, 2))
		}
		if (U(a)) {
			return sp.framerate
		}
		sp.framerate = rate
		this.framerate = rate
		return this
	}
// events
	sp.load = sp.ready = sp.done = sp.complete = sp.oC = sp.cm = function (a) {
		sp.ob.on('complete', a)
	}
	sp.adv = p.skip = sp.av = sp.N = function (num) {
		this.advance(num);
		return this
	}
	sp.numFr = sp.numFrames = sp.nF = function () {
		return sp.sS.getNumFrames()
	}
	sp.fr = sp.frame = sp.currentFrame = sp.cF = sp.cf = sp.cF = sp.cFr = sp.f = function (num) {
		var sp = this, g = G(arguments)
		/*
		 var args = G(arguments), num = args[0]
		 if (args.p) {
		 return sp.frame(
		 sp.frame() + ( N(num) ? num : 1 )
		 )
		 }
		 if (args.n) {
		 return sp.frame(
		 sp.frame() - ( N(num) ? num : 1 )
		 )
		 }
		 if (U(num)) {
		 return sp.ob.currentFrame
		 }
		 $l(num)
		 return sp.isPlaying() ? sp.play(num) : sp.stop(num)
		 */
		if (g.u) {
			return sp.currentFrame
		}
		sp.currentFrame = g.f
		return sp
	}
	sp.adv = p.skip = sp.av = sp.N = function (num) {
		this.advance(num);
		return this
	}
	sp.an = sp.anim = sp.cA = sp.ca = sp.a = sp.cA = sp.cAn = function (a) {
		if (a) {
			return sp.isPlaying() ?
					sp.play(a) :
					sp.stop(a)
		}
		return this.currentAnimation
	}
	sp.anFr = sp.cAnFr = sp.cAF = sp.caf = function (fr) {
		if (U(fr)) {
			return this.currentAnimationFrame
		}
		this.currentAnimationFrame = fr
		return this
	}
	sp.getAn = sp.gAn = sp.getAnim = sp.ans = sp.as = sp.gA = function (a) {
		return U(a) ? sp.spriteSheet.getAnimations() :
				sp.spriteSheet.getAnimation(a)
	}
	sp.rate = sp.r = sp.fR = function (rate) {
		if (U(rate)) {
			return this.framerate
		}
		var g = G(arguments), a = g[0]
		if (g.p) {
			return sp.fr(sp.fr() + N(rate, 1))
		}
		if (g.n) {
			return sp.fr(sp.fr() - N(rate, 1))
		}
		if (g.m) {
			return sp.fr(sp.fr() * N(rate, 2))
		}
		if (g.d) {
			return sp.fr(sp.fr() / N(rate, 2))
		}
		if (U(a)) {
			return sp.framerate
		}
		sp.framerate = rate
		this.framerate = rate
		return this
	}
// events
	sp.load = sp.ready = sp.done = sp.complete = sp.oC = sp.cm = function (a) {
		sp.ob.on('complete', a)
	}
	function playing() {
		sp.play = sp.p = function (an) {
			var sp = this
			/*
			 sp.play = sp.p = function (a, b) {
			 var g = G(arguments),
			 a = g[0],
			 b = g[1],
			 l = g.f,
			 n
			 if (U(a)) {
			 sp.ob.play();
			 return o
			 }
			 if (U(b)) {
			 if (g.n) {
			 sp.next(a, false)
			 }
			 if (g.p) {
			 sp.next(a, a)
			 }
			 sp.ob.gotoAndPlay(a)
			 return o
			 }
			 _.each(g.r, function (a) {
			 sp.next(l, a)
			 l = a
			 })
			 sp.next(g.l, g.isPlaying ? false : g.f)
			 sp.play(g.f)
			 }
			 */
			if (U(an)) {
				sp.play()
			}
			else {
				sp.gotoAndPlay(an)
			}
			return sp
		}
		sp.stop = sp.s = sp.P = function (an) {
			var sp = this
			if (U(an)) {
				sp.stop()
			}
			else {
				sp.gotoAndStop(an)
			}
			return sp
		}
		sp.playing = sp.iPl = sp.isPlaying = sp.iP = function () {
			return !this.paused
		}
		sp.iP = function () {
			return this.paused
		}
		sp.play = sp.p = function (an) {
			var sp = this
			/*
			 sp.play = sp.p = function (a, b) {
			 var g = G(arguments),
			 a = g[0],
			 b = g[1],
			 l = g.f,
			 n
			 if (U(a)) {
			 sp.ob.play();
			 return o
			 }
			 if (U(b)) {
			 if (g.n) {
			 sp.next(a, false)
			 }
			 if (g.p) {
			 sp.next(a, a)
			 }
			 sp.ob.gotoAndPlay(a)
			 return o
			 }
			 _.each(g.r, function (a) {
			 sp.next(l, a)
			 l = a
			 })
			 sp.next(g.l, g.isPlaying ? false : g.f)
			 sp.play(g.f)
			 }
			 */
			if (U(an)) {
				sp.play()
			}
			else {
				sp.gotoAndPlay(an)
			}
			return sp
		}
		sp.stop = sp.s = sp.P = function (an) {
			var sp = this
			if (U(an)) {
				sp.stop()
			}
			else {
				sp.gotoAndStop(an)
			}
			return sp
		}
		sp.playing = sp.iPl = sp.isPlaying = sp.iP = function () {
			return !this.paused
		}
		sp.iP = function () {
			return this.paused
		}
	}
	
	function next() {
		sp.end = sp.onEnd = sp.e = sp.oAe = sp.ae = function (fn) {
			fn = fn || function () {
				n = N(window['n'], 0);
				$l('frame! ' + n++)
			}
			this.on('animationend', fn)
			return this
		}
//  animNext:  set/get NEXT animation on an animation
		sp._anNext = sp._animNext = function (anim, nx) {
			var sp = this
			var anim = sp.getAnim(anim)
			if (anim) {
				if (U(nx)) {
					return anim.next
				}
				anim.next = nx
			}
			return sp
		}
		sp.anNoNext = function (an) {
			return this._anNext(an, false)
		}
		sp.anSelfNext = function (an) {
			var sp = this
			return sp._anNext(an, sp.getAn(an))
		}
		sp.anNext = sp.animNext = sp.next = sp.gAN = function () {
			var sp = this, g = G(arguments)
			//1) can just pass in the anim string
			//2) can pass anim string and what to set its 'next' property to
			return U(g.s) ? (g.p ? sp.anSelfNext(g.f) : g.n ? sp.anNoNext(g.f) : sp.anNext(g.f)) :
					g.p ? sp._anNext(g.f, g.s)._anNext(sp._anNext(g.f)) : sp._anNext(g.f, g.s)
		}
		sp.end = sp.onEnd = sp.e = sp.oAe = sp.ae = function (fn) {
			fn = fn || function () {
				n = N(window['n'], 0);
				$l('frame! ' + n++)
			}
			this.on('animationend', fn)
			return this
		}
//  animNext:  set/get NEXT animation on an animation
		sp._anNext = sp._animNext = function (anim, nx) {
			var sp = this
			var anim = sp.getAnim(anim)
			if (anim) {
				if (U(nx)) {
					return anim.next
				}
				anim.next = nx
			}
			return sp
		}
		sp.anNoNext = function (an) {
			return this._anNext(an, false)
		}
		sp.anSelfNext = function (an) {
			var sp = this
			return sp._anNext(an, sp.getAn(an))
		}
		sp.anNext = sp.animNext = sp.next = sp.gAN = function () {
			var sp = this, g = G(arguments)
			//1) can just pass in the anim string
			//2) can pass anim string and what to set its 'next' property to
			return U(g.s) ? (g.p ? sp.anSelfNext(g.f) : g.n ? sp.anNoNext(g.f) : sp.anNext(g.f)) :
					g.p ? sp._anNext(g.f, g.s)._anNext(sp._anNext(g.f)) : sp._anNext(g.f, g.s)
		}
//https://www.youtube.com/watch?v=HaJ615V6qLk
	}
	
	playing()
	next()
}
cjs.sprite100 = function (a) {
	return cjs.zoeSp(a).rXY(50).al(.8)
}
$sprite = cjs.zoeSp = cjs.zoeSprite = cjs.sprite = function (sS) {
	if (sS.images) {
		sS = cjs.parseZoe(sS)
		sS = $SS(sS)
	}
	return $Sp(sS)
}
SPRITE = function (sprite) {
	sprite = $sprite(sprite || SS).XY(10).dg()
	stage = $St('o', 400).dg()//.op(.7),
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
	$.d('y', 460, 89).css({
		position: 'absolute',
		top: 200, left: 300,
		padding: 20, opacity: .9
	}).dg().A(
			$.sp(' '),
			$.bt('spin', function () {
				controls.spin()
			}), $.sp(' '),
			$.bt('jump', function () {
				controls.jump()
			}), $.sp(' '),
			$.bt('explode', function () {
				controls.explode()
			}), $.sp(' '),
			$.bt('play', function () {
				controls.play()
			}), $.sp(' '),
			$.bt('stop', function () {
				controls.stop()
			}), $.sp(' '),
			$.bt('meta', function () {
				SPRITE()
			})
	)
	s = sprite
	return controls
}
cjs.sprite100 = function (a) {
	return cjs.zoeSp(a).rXY(50).al(.8)
}
zoeApps
function zoeApps() {
	ZFR = ZOEFRAMES = function () {
		spr = $Sp({
			"framerate": 24,
			"images": ["/sprite2.png"],
			"frames": [
				[0, 0, 128, 128, 0, -176, -161],
				[128, 0, 128, 128, 0, -176, -161],
				[256, 0, 128, 128, 0, -176, -161]
			],
			"animations": {
				"weird": {"speed": 1, "frames": [2]},
				"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
			}
		})
		anis = spr.spriteSheet._animations
		// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
		s = $St(1000)
		s.A(spr.drag())
		ZOEFRAMES = function () {
			z()
			spr = cjs.sprite({
				"framerate": 24,
				"images": ["/sprite2.png"],
				"frames": [
					[0, 0, 128, 128, 0, -176, -161],
					[128, 0, 128, 128, 0, -176, -161],
					[256, 0, 128, 128, 0, -176, -161]
				],
				"animations": {
					"weird": {"speed": 1, "frames": [2]},
					"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
				}
			})
			anis = spr.spriteSheet._animations
			// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
			s = cjs.stg(1000).A()
			s.A(spr.drag())
		}
	}
	ZNA = ZOENOANIM = function () {
		spr = cjs.sprite({
			"framerate": 24,
			"images": ["/zoetest.png"],
			"frames": [
				[0, 0, 512, 256, 0, -133, -143],
				[512, 0, 512, 256, 0, -133, -143],
				[1024, 0, 512, 256, 0, -133, -143]
			],
			"animations": {}
		})
		s = $St(1000).A()
		s.A(spr)
	}
	ZNA = ZOENOANIM = function () {
		z()
		spr = cjs.sprite({
			"framerate": 24,
			"images": ["/zoetest.png"],
			"frames": [
				[0, 0, 512, 256, 0, -133, -143],
				[512, 0, 512, 256, 0, -133, -143],
				[1024, 0, 512, 256, 0, -133, -143]
			],
			"animations": {}
		})
		s = cjs.stg(1000).A()
		s.A(spr)
	}
	ZFR = ZOEFRAMES = function () {
		z()
		spr = cjs.sprite({
			"framerate": 24,
			"images": ["/sprite2.png"],
			"frames": [
				[0, 0, 128, 128, 0, -176, -161],
				[128, 0, 128, 128, 0, -176, -161],
				[256, 0, 128, 128, 0, -176, -161]
			],
			"animations": {
				"weird": {"speed": 1, "frames": [2]},
				"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
			}
		})
		anis = spr.spriteSheet._animations
		// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
		s = cjs.stg(1000).A()
		s.A(spr.drag())
		ZOEFRAMES = function () {
			z()
			spr = cjs.sprite({
				"framerate": 24,
				"images": ["/sprite2.png"],
				"frames": [
					[0, 0, 128, 128, 0, -176, -161],
					[128, 0, 128, 128, 0, -176, -161],
					[256, 0, 128, 128, 0, -176, -161]
				],
				"animations": {
					"weird": {"speed": 1, "frames": [2]},
					"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
				}
			})
			anis = spr.spriteSheet._animations
			// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
			s = cjs.stg(1000).A()
			s.A(spr.drag())
		}
	}
	CHA = CHAR0 = function () {
		showSprite(Sprites.char)
		function showSprite(sprite) {
			z()
			s = cjs.stg(1000).A()
			spr = cjs.sprite(sprite).drag().a2(s)
		}
	}
}