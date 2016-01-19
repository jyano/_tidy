$.colorPicker = $.ColorPicker = function () {
	z()
	colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))
	colorPicker.change(function () {
		$l(colorPicker.val())
	})
}