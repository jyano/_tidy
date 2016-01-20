  
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

EWTA= EDIT_WITH_TEXTADDER = function () {
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
