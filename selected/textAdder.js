TextAdder = function (stage) {
	var f = $.f().a().C('x').P(10).W(300).dg()
	f.A(
			$.ip().id('text'),
			$.bt('for text', function () {
				var _text, theText, val = $l($('#text').val())
				$('#text').val('')
				_t = $T(val, 'w', 30, 100, 10)
				t = $Ct().A(_t)
				t.dO = _t
				SL(t)
				st.A(t)
				selected(t)
			}))
	return f
}

TextAdder2 = function (stage) {
	var form = $.f().C('x').P(10).W(300).dg()
	form(
			$textInput().id('text'),
			$.bt('for text', function () {
				var val = $l($('#text').val())
				$('#text').val('')
				var theText = EaselText(val, 'w', 30, 100, 10)
				SL(theText)
				stage.a(theText)
			}))
	return form
}
TextAdder = function (stage) {
	var f = $.f().a().C('x').P(10).W(300).dg()
	f.A(
			$.ip().id('text'),
			$.bt('for text', function () {
				var _text, theText, val = $l($('#text').val())
				$('#text').val('')
				_t = $T(val, 'w', 30, 100, 10)
				t = $Ct().A(_t)
				t.dO = _t
				SL(t)
				st.A(t)
				selected(t)
			}))
	return f
}
TextAdder2 = function (stage) {
	var form = $.f().C('x').P(10).W(300).dg()
	form(
			$textInput().id('text'),
			$.bt('for text', function () {
				var val = $l($('#text').val())
				$('#text').val('')
				var theText = EaselText(val, 'w', 30, 100, 10)
				SL(theText)
				stage.a(theText)
			}))
	return form
}
TextAdder2 = function (st) {
	var f = $.f().c('x').P(10).W(300).dg()
	f.A(
			$.ip().id('text'),
			$.bt('for text', function () {
				var val = $l($('#text').v())
				$('#text').v('')
				st.A($Tx(val, 'w', 30, 100, 10).SL())
			}))
	return form
}
TextAdder = function (st) {
	var f = $.f().A().c('x').P(10).w(300).dg().A(
			$.ip().id('text'),
			$.bt('for text', function () {
				var val = $l($('#text').v())
				$('#text').val('')
				var theText = $Ct().A($Tx(val, 'w', 30, 100, 10)).SL().a2(st)
				theText.dO = _text
				selected(theText)
			}))
	return f
}
EDITOR = function () {
	var r = '#0FF', size = 2, oX = 0, oY = 0, shape
	var st = dragStage()
	imgHolder = $div().a().drg().c('y')
	eaI(function (img) {
		imgHolder($imageSizeFuncCan(
						img.d, 1, function () {
							st.bm(img.d,
									function (bm) {
										SL(bm.sxy(.4))
									}
									, '+')
						} //rgc
				)
		)
	})
	TextAdder2(st)
}
 