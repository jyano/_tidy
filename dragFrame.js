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