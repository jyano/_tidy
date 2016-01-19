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
 $.pic = function (p) {
	 var fileN = p._id + p.ext
	 var img = $.i('/' + fileN).A()
	 img.img = img[0]
	 return img.W(100).H(100).click(function () {
		 $.cut(fileN)
	 })
 }
 $.cut = function (m) {
	 z();
	 m = m || 'me'
	 $('body').A(
			 $.bt('save sprite', function () {
				 c.snap(CUTOUTS)//; EDIT()
			 }), $.br(2),
			 $.bt('start cut', function () {
				 c.dots()
			 }), $.br(2),
			 $.bt('restart cut', function () {
				 $.cut(m)
			 }), $.br(2),
			 c = $.c('r', 500, 500).A().fit(m)
	 )
 } // $.bt('file uploads', function () {window.location = '/wap/uploads'}),
 $.fn.URL = function () {
	 return el[0].toDataURL()
 }
 $.fn.dots = function () {
	 var el = this
	 el.img =
			 el.copy()
	 el.DOTS = []
	 el.dats = []
	 el.$(function (x, y) {
		 x = parseInt(x)
		 y = parseInt(y)
		 $l('click:' + x + ', ' + y)
		 el.cir(x, y)
		 el.DOTS.push([x, y])
		 el.dats.push(x);
		 el.dats.push(y) //vestige from phaser physics?
		 el.line(el.DOTS)
	 })
	 el.$$(function (X, Y) {
		
		 //el.C('X')
		 el.off('click')
		 el.closePath()  //el.paste() // el.copy()  //el.save()
		 du = el.toDataURL()
		 //el.clear()
		 //	el.clip()
		 //	el.paste() 
		 //	el.fit(du)
	 })
	 return el
 }
 