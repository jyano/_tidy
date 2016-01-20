$.fn.snap = function (fn) {
	var dU = this[0].toDataURL()
	$.post('/cutout', {
		dU: dU
		//, dats: this.dats //vestige from phaser physics?
	}, fn)
}
SNAP = function () {
	Q(function () {
		chicks = Q.get('chicks')
		me = Q.get('me')
		c = $.c()
		c.ctx().d(chicks).d(me)
		$.bt(function () {
			c.snap()
		})
	})
}
	