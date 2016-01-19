CLIP = function () {
	i = $.img('me').A()
	i.dots()
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