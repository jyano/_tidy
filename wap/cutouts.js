$L('cutting')
function cutting(){
	$.fn.dots = function () {
		var el = this
		el.img = el.copy()
		// el.img = $.img()
		// el.img.src(el.toDataURL())
		//el.copy()
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
			var du
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
}
$.fn.snap = function (fn) {
	var dU = this.canvas.toDataURL()
	$.post('/cutout', {
		dU: dU
		//, dats: this.dats //vestige from phaser physics?
	}, fn)
}

CLIP = function () {
	i = $.img('me').A()
	i.dots()
}


ALL=CUTS=ALLCUTOUTS=function(){
	$a.get('/admin/allCutouts', function (cutouts) {
		 n= 0
		_.e(cutouts,function(cutout){
		n++
				$.i(cutout.dU)
		})
		
		$.h1('number of cutouts is ' + n)
		
	})
}


CUTOUTS = function () {
	$.bX = $.btX = function () {
		var g = G(arguments), o = {url: g.f, data: g.s}
		return $.bt('X', function () {
			var bt = this
			$.ajax({
				type: 'DELETE',
				url: o.url,
				data: o.data,
				success: function () {
					rmParOf(bt)
					function rmParOf(bt) {
						$(bt).pa().rm()
					}
				}
			})
		})
	}
	$.fm();
	section1.A($.h4('click a pic to select it as your mug, or the x to delete it'))
	y = 80
	$.eJ('/cutouts', function (cutout) {
		var i
		i = $.i(cutout.dU)
		i.WH(100, 100)
		i.$(function () {
			$.post('/changeMug', {dU: cutout.dU},
					function () {
						i.selPic()
					})
		})
		$.dA('b', 100, 100, '+')
				.left(y).top(200)
				.K('pic')
				.A(i, $.btX('/cutout', cutout))
		y += 220
	})
	/*
	 section1.A(
	 $.h4('click a pic to select it as your mug, or the x to delete it'))
	 $.getJSON('/img', function (cutouts) {
	 var top = 80
	 _.e(cutouts, function (cutout) {
	 var imgDiv = $.divA('b', 100, 100).left(top).top(200).K('pic').drag()
	 imgDiv.A(
	 $.img(cutout.d).WH(100).$(function (q) {
	 //	$l('changemug')
	 $l(cutout.d)
	 $.po('/changeMug', {
	 url: cutout.d
	 })
	 ////
	 $('.pic').ea(function (index) {
	 $(this).C('b')
	 })
	 $(this).parent().C('y')
	 }),
	 $.bt('X', function () {
	 var that = this
	 $.ajax({
	 data: cutout,
	 url: '/img',
	 type: 'DELETE',
	 success: function (res) {
	 $(that).parent().remove()
	 }
	 })
	 })
	 )
	 top += 220
	 })
	 })*/
} 
