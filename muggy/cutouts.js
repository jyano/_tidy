$.fn.selPic = function () {
	$('.pic').e(function () {
		$(this).C('b')
	})
	this.parent().C('y')
} 
CUTOUTS = function () {
	$.bX = $.btX = function () {
		var g = G(arguments), o = {url: g.f, data: g.s}
		return $.bt('X', function () {
			var bt = this
			$.aj({
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
	$.eJ('/img', function (img) {
		var i
		i = $.i(img.d)
		i.WH(100, 100)
		i.$(function () {
			$.po('/changeMug', {url: img.d}, function () {
				i.selPic()
			})
		})
		$.dA('b', 100, 100, '+')
				.left(y).top(200)
				.K('pic')
				.A(i, $.btX('/img', img))
		y += 220
	})
}
CUTOUTS = function () {
	$.fm()
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
	})
}
  
$mug = function (fn) {
	$.get('/getMug', fn)
}
getMug = function () {
	$mug(function (mug) {
		Y._userMug = _userMug = mug
	})
}
$picByUser = function (user, fn) {
	$m.pic.find({u: user}, fn)
}
$cutout = function (q) {
	return {
		un: q.un,
		d: q.body.d,
		dats: q.body.dats,
		data: q.body.d,
		physicsData: q.body.dats
	}
} 