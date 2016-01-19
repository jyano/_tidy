
 $.myMug = function (fn) {
	$.get('/myMug', fn) }
$mug = function (un, fn) {
	//make default un YOU (_username)
	$.get('/mugByUn/' + un, function (mug) {
		if (mug) {
			fn(mug)
		}
	})
}

getMug = function () {
	$mug(function (mug) {
		Y._userMug = _userMug = mug
	})
}
 

$.fn.selectCutout = function () {
	$('.cutout').each(function () {
		$(this).C('b')
	})
	this.parent().C('y')
}

$.fn.snap = function (fn) {
	var dU = this.canvas.toDataURL()
	$.post('/cutout', {
		dU: dU
		//, dats: this.dats //vestige from phaser physics?
	}, fn)
}

 
$picByUser = function (user, fn) {
	$m.pic.find({u: user}, fn)
}
