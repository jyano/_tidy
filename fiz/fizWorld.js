Wor = b2d.W = b2d.mW = b2d.makeWorld = makeWorld = mW = function (ops) {
	var width, height
	if (!O(ops)) {
		ops = {}
	}
	width = ops.W || 1200;
	height = ops.H || 600
	w = b2d.world(V(0, 0))
	cjs.watchKeys()
	w.st = w.stage = w.s = cjs.tripleStage('r', width, height)
	w.stage.back.A()
	w.stage.A()
	w.stage.HUD.A()
	w.canvas = w.stage.canvas;
	w.c = w.can = $(w.canvas)
	canvas = $(w.canvas).id('canvas')
	w.context = w.canvas.getContext('2d')
	setInterval(function () {
		w.step(1 / 60, 10, 10).clearForces()
		w.stage.update()
	}, 1000 / 60)
	w.gameW = w.st.canvas.width
	w.gameH = w.st.canvas.height
	return w
}
W = b2d.W = function (W, H, wW, wH) {
//cjs.Ticker.removeAllEventListeners() 
// w.show(function(){})//not working with scroll
	var o = N(H) ? {W: W, H: H, wW: wW, wH: wH} :
			N(W) ? {g: W} :
					A(W) ? _.x(H, {W: W[0], H: W[1], wW: W[2], wH: W[3]}) :
							O(W) ? W : {}
	o.W = o.W || 1200
	o.H = o.H || 600
	o.wW = o.wW || o.W
	o.wH = o.wH || o.H
	o.w = o.w == 0 ? 0 : o.w ? o.w : ['o', o.wW, o.wH]
	o.g = N(o.g) ? V(0, o.g) : o.g ? V(o.g) : V(0, 300)
	cjs.watchKeys()
	w = b2d.world(o.g);
	w.o = o
	if (o.z != false) {
		z()
	}
	w.gx(o).setBg(o)
			.dd(o).db()
			.startListening()
			.wMouse().wMouseJ(o)
			.walls(o)
			.u(o)
	w.worldW = w.w = o.wW
	w.worldH = w.h = o.wH
	w.gameW = w.W = o.W
	w.gameH = w.H = o.H
	w.wRatio = w.Ww = w.gameW / w.worldW
	w.hRatio = w.Hh = w.gameH / w.worldH
	w.wMultiple = 1 / w.wRatio
	w.hMultiple = 1 / w.hRatio
	function higher(a, b) {
		return a > b ? a : b
	}
	
	function lower(a, b) {
		return a > b ? b : a
	}
	
	w.minScale = w.minZoom = w.mS = 1 / lower(w.wMultiple, w.hMultiple);
	w._zoom = w._scale = 1;
	w.z = w._zoom
	w.halfW = w.hW = w.W / 2
	w.halfH = w.hH = w.H / 2
	return w
}
function collide() {
	b2d.world = b2d.W = function (a, b) {
		var w = new b2d.World(a, D(b) ? b : false)
		w.startListening()
		return w
	}
}
function dimensions() {
	//half width/height nobiggie..
	w.W2 = w.HW = w.hW = w.W / 2;
	w.H2 = w.HH = w.hH = w.H / 2;
	w.hH = w.h / w.H;
	w.Ww = w.W / w.w;
	w.wW = w.w / w.W;
	w.Hh = w.H / w.h;
	w.mZ = w.hH > w.wW ? w.hH : w.wW;
	w.mS = w.Ww > w.Hh ? w.Ww : w.Hh;
	//scale
	w.z = w.SCALE = 1
}
 