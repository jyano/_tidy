PAINT = function () {
 
		_paintColor = 'blue'
		_paintSize = 10
		canvas = $.canvas('r', 400, 400).A().P('a', 100, 50)
		stage = canvas.stage.tick()
		shape = new createjs.Shape()
		stage.mug(function (mug) {
			mug.sXY(.4)
			stage.A(shape)
		})
		graphics = shape.graphics
		graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
				.setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)
	
	stage.on('stagemousedown', function (e) {
		graphics.beginStroke(_paintColor)
		stage.on('stagemousemove', function (e) {
			graphics.lineTo(e.stageX, e.stageY)
		})
	})
	stage.on('stagemouseup', function () {
		stage.removeAllEventListeners('stagemousemove')
	})
	div = $.dK('controls')
	div.a2($('body'))
	
	colorPicker = $(' <input   type="color">')
 
 
  
 
	div.A(colorPicker, $.sp(10), $.sp(20), $.sp(30))
	colorPicker.on('input', function () {
		_paintColor = $l(colorPicker.val())
		graphics.beginStroke(_paintColor)
	})
	span = $('.controls span')
	if (span && F(span.$$)) {
		span.$$(function () {
			graphics.setStrokeStyle(parseInt($(this).T()))
		})
	}
} 