USERUPLOAD = function () {
	$s({
		$: {M: 2, P: 2, fS: 16, tA: 'c'},
		bd: {
			C: 'R', dp: 'fl', dir: 'c', alI: 'c',
			wr: 'wrap'
		}
	})
	loggedInDiv = $.d('y', 400, 100)
	$.get('/user/session', function (sess) {
		var ss = sess || {}
		if (ss.un) {
			loggedInDiv.A($.h1('welcome you logged in as "' + ss.un + '"'))
		}
		else {
			loggedInDiv.A($.h1('welcome you are NOT logged in'))
		}
	})
	form = $.f().attr({
		enctype: 'multipart/form-data',
		action: '/imgFile'
	})
	form.A(
			$.ip().ty('file').name('fieldname'),
			$.ip().name('title'),
			$.bt('submit form', function (e) {
				//e.preventDefault()
			})
	)
	y = 80
	n = 0
	$.get('/myFileImgs', function (p) {
		pics = p
		_.e(p, function (p) {
			$l('pic: ' + n++)
			//$('body').A($('<image>').attr('src', src))
			//$.i('/' + p._id + p.ext).A().W(100).H(100)
			$.pic(p)
			//$.picDiv(y).A(UpPic(p))
			//y += 220
		})
	})
	//function UpPic(p) {return $.sp().A($.pic(p), $.delBt('/pic', p))}
}
$.pic = function (p) {
	var fileN = p._id + p.ext
	var img = $.i('/' + fileN).A()
	img.img = img[0]
	return img.W(100).H(100)
			.click(function () {
				$.cut(fileN)
			})
}
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