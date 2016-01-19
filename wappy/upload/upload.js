UPLOAD = function () {
	$.fU = $.fileUpload = function (lb, t) {
		var fG = $.d().K("form-group").A(
				$.lb(
						D(lb) ? lb : 'upload file',
						'upl'
				),//.K('control-label')//.fS(20),
				$.ip().ty('file').id('upl').n('avatar')
		)
		if (t) {
			fG.A($.p(t)//.K('help-block')
			)
		}
		return fG
		function alt() {
			$fileUpload = fup = function (labelText, text) {
				var theFormGroup = fg(
						$label(D(labelText) ? labelText : 'upload file', 'upl').k('ctl').f(20),
						ip('file').id('upl').nm('i'))
				if (text) {
					theFormGroup(
							pg(['help-block'], text))
				}
				return theFormGroup
			}
			$.fileUpload = function (labelText, text) {
				var theFormGroup = $.div().K("form-group").A(
						$.label(D(labelText) ? labelText : 'upload file', 'upl').K('control-label').fontSize(20),
						$.input().type('file').id('upl').name('i')
				)
				if (text) {
					theFormGroup.A($.p(text).K('help-block'))
				}
				return theFormGroup
			}
		}
	}
//<div class="form-group">
//      <label style="font-size: 20px;" class="control-label" for="upl">
//              upload file
//      </label>
//      <input name="i" id="upl" type="f">
// </div>
	$.pop($.f().attr({
				method: 'post', action: '/pic',
				enctype: 'multipart/form-data'
			}).C('o').A(
					$.fU('').attr('name', 'avatar'),
					$.sm().val('ok').K("show"), $.fileUpload(''),
					$.input().K("show").type('submit').val('ok')
			),
			{title: 'upload a new pic'}
	).dg()
}