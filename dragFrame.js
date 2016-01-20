TextAdder = function (st) {
	var f = $.f().c('x').P(10).W(300).dg()
	f.A(
			$.ip().id('text'),
			$.bt('for text', function () {
				var val = $l($('#text').v())
				$('#text').val('')
				st.A($Tx(val, 'w', 30, 100, 10).SL())
			}),
			$.bt('for text', function () {
				var val = $l($('#text').v())
				$('#text').val('')
				var theText = $Ct().A($Tx(val, 'w', 30, 100, 10)).SL().a2(st)
				theText.dO = _text
				selected(theText)
			})
	)
	return form
}
EWTA = EDIT_WITH_TEXTADDER = function () {
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
$.dragFrame = function (d) {
 
	var outer = $.sp().C('b').dp('flex').W(600).dgb().css('padding', 18)//.mar(20)
	
	//d = d || $.d('y', 50, 50).mar(20).pad(8).A('jjklljkjkl')
	 
	d.on('mousedown', function (e) {
		 e.stopPropagation()
	})
	
	
	d.a2(outer )

	return outer 
}



FANCY= function (x, y) {

	d = $.d().C('r').A('kjkljlkjkjkl kjkjk').A($.i('me'))
	$.dragFrame(d)
}

FANC = FANCYEDITUSESDRAGFRAME = function (x, y) {
canvas = $.c('g', 400)
stage = $St(canvas[0])

frame = $.dragFrame(theSpan = $.sp())

	 theSpan.A(
		$.bt('X', function () {
			frame.remove()
		}),
		$.bt('pics', function () {
			$.imagesDiv(stage)
		}),
		$.bt('transform'),
		$.bt('text'),
		$.bt('paint', function () {
			_paintColor = '#0FF'
			var size = 10, oX = 0, oY = 0, shape
			var paintStage = $.dragStage()
			// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
			paintStage.bm(
					stage.du(), //?
					function (m) {
						m.XY(40).sXY(.4)
						stagePainter(paintStage)
					})
		}),
		$.bt('cut'),
		$.bt('save'))
theSpan.A($.br(), canvas)
theSpan.A($.d().A(
		$.bt('clear', function () {
			stage.removeAllChildren()
		}),
		$.bt('flat', function () {
			stage.removeAllChildren()
			stage.bm(stage.toDataURL(), function (bm) {
				bm.drag()
			})
		}),
		$.bt('clone', function () {
			var newSpan = $span()
			var newStage = dragStage(newSpan)
			newStage.bm(stage.du(), function (bm) {
				SL(bm)
			})
		}),
		$.bt('recur', function () {
			stage.bm(stage.du(), function (bm) {
				bm.sxy(.4)
				SL(bm)
			})
		}),
		$.bt('copy', function () {
			_copy = stage.du()
		}),
		$.bt('paste', function () {
			stage.bm(_copy, function (bm) {
				bm.drag()
			})
		}),
		
		$.bt('replace', function () {stage.rm()
			stage.bm(_copy, function (bm) {
				bm.drag()})})
))


theSpan.dblclick(function () {
	$('bt').toggle()
})
 

}
INDEXX = function () {
	z()
	s = dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.times(10, function () {
			s.bm('guy', SL)
		})
		s.ix(b, 3)
	})
}
DFP = DRAGFRAME = PATH = function () {
	$Ld(function () {
		s = c = $.c('g', 200, 200)
		d = $.c('x', 200, 200)
		
		f = $.dragFrame(c)
		
		f1 = $.dragFrame(d).X(300)
		x = c.ctx()
		
		xx = d.ctx()
		x.c('X', 'X').fr(0, 0, 1000, 1000)
		x.b(10, 30, 'r', 'X')
		x.lt([[30, 10], [160, 20], [50, 200]]).x()//.D()
		x.cl()
		x.d('me', 50, 50)
		d.ctx().d('me', 0, 0)
		
		_.in(function () {
			xx.d(d, 35, 15)
			xx.d(d, 35, 15)
			xx.d(d, 35, 15)
			xx.d(d, 35, 15)
			_.in(function () {
				x.d(d, 0, 0)
				_.in(function () {
					xx.c('X').clearRect(0, 0, 200, 200)
					xx.d(c)
				})
			})
		})
	})
}
