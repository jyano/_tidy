sav = function (stage, a) {
	return function () {
		stage.sv(a)
	}
}
eachImage = eaI = function (f) {
	$.getJSON('/img',
			function (i) {
				_.each(i, f)
			})
}
EDIT = function () {
	$St()
	$St()
	container = $.d()
	imgHolder = $.d()
	container.A(imgHolder, st.canvas)
	ct = $.d().id('ct').A(d = $.d(), st.canvas)
	container = $.d()
	imgHolder = $.d()
	container.A(imgHolder, st.canvas)
	$.eJ('/cutouts', function (i) {
		c = d.Can('o', 40, 40)
		c.fit(i.d)
		c.$(function () {
			st.bm(i.d, function (bm) {
				bm.rC(200, 200)
						.XY(200, 300)
						.TR()
			})
		})
		c.mar(20).C('r')
		// d.A($.btX('/img', i, '-'))
	})
	$.getJSON('/img', function (i) {
		imgs = i
		_.each(i, function (img) {
			console.log(img.d)
			var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
			c = can
			can.click(function () {
				stage.bm(img.d,
						function (bm) {
							bm.rCenter().X(400).Y(400);
							TR(bm)
						}
				)
			})
			imgHolder.A(can)
		})
	})
//    return stage
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
	$.$$(function () {
		$.post('/cutout', {
					dU: st.dU()
				}, $.rl
		)
	})
	d.C('b').al(.6).W(400).H(100)
	d.overflow('scroll').css('overlflow-y', 'auto')
	$.getJSON('/img', function (i) {
		imgs = i
		_.each(i, function (img) {
			console.log(img.d)
			var can = $.c('X', 100, 100)
					.fit(img.d) // must be in body in order to use FIT!
			c = can
			can.$(function () {
				st.bm(img.d,
						function (bm) {
							bm.rCenter().X(400).Y(400);
							TR(bm)
						}
				)
			})
			imgHolder.A(can)
		})
	})
	container.dblclick(function () {
		$.post('/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
}
EDITOR = function () {
	var r = '#0FF', size = 2, oX = 0, oY = 0, shape,
			st = $.dragStage(),
			imgHolder = $.d('y', '+')
	$.eG('img', function (i) {
		imgHolder($.imgSizeFnCan(
				i.d, 1, function () {
					st.bm(i.d, function (bm) {
						SL(bm.sxy(.4))
					}, '+')
				}))
	})
	TextAdder2(st)
}
 
EDIT1 = function () {
	setup()
	container.A(imgHolder, st.canvas)//.$$(sav(st, 'edit'))
	$.getJSON('/img', function (i) {
		imgHolder.A(
				$.c('X', 100, 100).fit(img.d).click(function () {
					stage.bm(img.d,
							function (bm) {
								bm.rCenter('+');
								TR(bm)
							})
				})
		)
		_.e(i, function (img) {
			var can = $.c('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
			can.click(function () {
				stage.bm(img.d, function (bm) {
					bm.rCenter().X(400).Y(400)
					TR(bm)
				})
			})
			imgHolder.A(can)
		})
	})
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
	return st
}
function onDblClk() {
	$.post('/img',
			{d: st.canvas.toDataURL()},  //, dats: x.dats
			function () {
				window.location = window.location
			})
}
function onEachImg(img) {
	var can = $.c('X', 100, 100).fit(img.d) // must be in body in order to use FIT!
	can.$(function () {
		st.bm(img.d, function (bm) {
			bm.rCenter().X(400).Y(400)
			TR(bm)
		})
		st.bm(img.d, function (bm) {
			bm.rCenter().X(400).Y(400)
			TR(bm)
		})
	})
	imgHolder.A(can)
	imgHolder.A($.c('X', 100, 100).fit(img.d))
	imgHolder.$(function () {
		st.bm(img.d, function (bm) {
			bm.rCenter('+');
			TR(bm)
		})
	})
}
function shake() {
 
}
function setup() {//the challenge here is to make the stage draggable
// but still usable, by dragging it by a wrapper div
	$St()
	container = $.d()
	imgHolder = $.d()
}