$.me = function (name, fn) {
	
	if (F(name)) {
		return $.i('me', name)
	}
	
	window[name] = function () {
		$.i('me', fn)
	}
}



meFunction()

function meFunction() {

	$.me('ME', function (me) {
		gx = $St().Gx()
				.SS().F().dc(200, 200, 200).S().dc(400, 400, 200)
				.S()._bf(me).dc(400, 400, 200)
	})
}  