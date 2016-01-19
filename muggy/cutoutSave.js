sv = function (x, fn) {
	$.po('/img', {
		d: xx(C(x)).u(), dats: x.dats
	}, fn)
}
$.fn.snap = function (fn) {
	$.po('/img', {
		d: this.canvas.toDataURL(),
		dats: this.dats //vestige from phaser physics?
	}, fn)
}
 