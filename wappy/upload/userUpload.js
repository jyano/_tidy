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