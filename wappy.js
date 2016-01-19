UPL = USERUPLOAD = function () {
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
HOM = HOMPAG = function () {
	$s({
		$: {M: 2, P: 2, fS: 36, tA: 'c'},
		bd: {
			C: 'R', dp: 'fl', dir: 'c', alI: 'c',
			wr: 'wrap'
		}
	})
	loggedInDiv = $.d('y', 400, 400)
	$.get('/user/session', function (sess) {
		var ss = sess || {}
		if (ss.un) {
			loggedInDiv.A($.h1('welcome you logged in as "' + ss.un + '"'))
		}
		else {
			loggedInDiv.A($.h1('welcome you are NOT logged in'))
		}
	})
	$.d($.h1('welcome to wappy').fS(50),
			$.bt('get session', function () {
				$.get('/user/session', function (sess) {
					ss = sess || {}
					_.e(ss = sess, function (v, k) {
						one.E().A($.h2(k + ' : '), $.h1(v))
					})
				})
			}))
	ct = $.d().s({
		dp: 'fl', jfC: 'sB', w: '100%',
		wr: 'wrap'
	}).A(
			one = $.d().s({dp: 'fl'}).A(' no session data ...'),
			two = $.d().s({dp: 'fl'}).A(
					$.ip().C('_b').A().ph('username').id('un'),
					$.ip().C('_b').A().ph('password').id('pw')),
			three = $.d().s({dp: 'fl'}).A(
					$.bt('login', loginUser),
					$.bt('new account', newAcc))
	)
	function newAcc() {
		creds = {
			un: $('#un').val(),
			pw: $('#pw').val()
		}
		$l('will make new account: ' + creds.un + ' : ' + creds.pw)
		_unIsAvailible = function (un, fn) {
			$.g('/wappy/unIsAvail', fn)
		}
		_unIsAvail(creds.un, function (un) {
			if (un) {
				$l('available')
			}
			else {
				$l('taken')
			}
		})
	}
	
	function loginUser() {
		creds = {
			un: $('#un').val().toLowerCase(),
			pw: $('#pw').val().toLowerCase()
		}
		$l('will try to login: ' + creds.un + ' : ' + creds.pw)
		$.post('/user/login', creds, function (res) {
			$l('res')
			$l(res)
		})
	}
	
	$.bt('logout', function () {
		$.get('/user/logout', function (res) {
			$l('logout res:')
			$l(res)
		})
	})
	$.bt('new account', function () {
	})
	$.bt('login', function () {
	})
}
ALL = ALLCUTOUTS = function () {
	$l('all cuts')
	$s({d: {C: 'r', P: 10, M: 10}})
	$.get('/admin/allCutouts', function (cutouts) {
		n = 0
		_.e(cutouts, function (cutout) {
			n++
			cut = cutout
			i = $.i(cutout.dU)
			i.WH(100, 100)
			var d = $.d().A(
					$.h5(cutout.un || 'anonymous'),
					i
			)
		})
		$.h1('number of cutouts is ' + n)
	})
}
CUTS = MYCUTOUTS = function () {
	$s({d: {C: 'r', P: 10, M: 10}})
	$.get('/cutout', function (cutouts) {
		n = 0
		_.e(cutouts, function (cutout) {
			n++
			cut = cutout
			i = $.i(cutout.dU)
			i.WH(100, 100)
			var d = $.d().A(
					$.h5(cutout.un || 'anonymous'),
					i
			)
		})
		$.h1('number of cutouts is ' + n)
	})
}
CUTOUTS = function () {
	$.bX = $.btX = function () {
		var g = G(arguments), o = {url: g.f, data: g.s}
		return $.bt('X', function () {
			var bt = this
			$.ajax({
				type: 'DELETE',
				url: o.url,
				data: o.data,
				success: function () {
					rmParOf(bt)
					function rmParOf(bt) {
						$(bt).pa().rm()
					}
				}
			})
		})
	}
	$.fm();
	section1.A($.h4('click a pic to select it as your mug, or the x to delete it'))
	y = 80
	$.eJ('/cutouts', function (cutout) {
		var i
		i = $.i(cutout.dU)
		i.WH(100, 100)
		i.$(function () {
			$.post('/changeMug', {dU: cutout.dU},
					function () {
						i.selPic()
					})
		})
		$.dA('b', 100, 100, '+')
				.left(y).top(200)
				.K('pic')
				.A(i, $.btX('/cutout', cutout))
		y += 220
	})
	/*
	 section1.A(
	 $.h4('click a pic to select it as your mug, or the x to delete it'))
	 $.getJSON('/img', function (cutouts) {
	 var top = 80
	 _.e(cutouts, function (cutout) {
	 var imgDiv = $.divA('b', 100, 100).left(top).top(200).K('pic').drag()
	 imgDiv.A(
	 $.img(cutout.d).WH(100).$(function (q) {
	 //	$l('changemug')
	 $l(cutout.d)
	 $.po('/changeMug', {
	 url: cutout.d
	 })
	 ////
	 $('.pic').ea(function (index) {
	 $(this).C('b')
	 })
	 $(this).parent().C('y')
	 }),
	 $.bt('X', function () {
	 var that = this
	 $.ajax({
	 data: cutout,
	 url: '/img',
	 type: 'DELETE',
	 success: function (res) {
	 $(that).parent().remove()
	 }
	 })
	 })
	 )
	 top += 220
	 })
	 })*/
}
EDIT = function () {
	st = $St('z', 400)
	ct = $.Ct().A(d = $.d(), st.canvas)
	$.eJ('/img', function (i) {
		c = d.Can('o', 40, 40)
		c.fit(i.d)
		c.$(function () {
			st.bm(i.d, function (bm) {
				bm.rC(200, 200).XY(200, 300).TR()
			})
		})
		c.mar(20).C('r')
		// d.A($.btX('/img', i, '-'))
	})
	$.$$(function () {
		$.po('/img', {d: st.du()}, $.rl)
	})
	d.C('b').al(.6).W(400).H(100)
	d.ov('scroll').css('overlflow-y', 'auto')
}

FANCY = function (x, y) {
	z()
	$.iD = $.imgDiv = function (st) {
		d = $.d('y', '+')
		$.eGj('img', function (i) {
			d.A($.c(100, 100).fit(i.d)
					.$(function () {
						st.bm(i.d, function (bm) {
							bm.sXY(.4).dg()
						})
					}))
		})
	}
	$.iD = $.imgDiv = function (st) {
		d = $.d('y', '+')
		$.eGj('img', function (i) {
			d.A($.c(100, 100).fit(i.d)
					.$(function () {
						st.bm(i.d, function (bm) {
							bm.sXY(.4).dg()
						})
					}))
		})
	}
	canvas = $.c('g', 400)
	stage = new cjs.Stage(canvas[0]).t()
	frame = $.dragFrame(theSpan = $.sp())
	theSpan.A(
			$.button('X', function () {
				frame.remove()
			}),
			$.button('pics', function () {
				$.imgDiv(stage)
			}),
			$.button('transform'),
			$.button('text'),
			$.button('paint', function () {
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
			$.button('cut'),
			$.button('save'))
	theSpan.A($.br(), canvas)
	theSpan.A($.div().A(
			$.button('clear', function () {
				stage.removeAllChildren()
			}),
			$.button('flat', function () {
				stage.removeAllChildren()
				stage.bm(stage.toDataURL(), function (bm) {
					bm.drag()
				})
			}),
			$.button('clone', function () {
				var newSpan = $.sp()
				var newStage = $.dragStage(newSpan)
				newStage.bm(stage.du(), function (bm) {
					SL(bm)
				})
			}),
			$.button('recur', function () {
				stage.bm(stage.du(), function (bm) {
					bm.sXY(.4)
					SL(bm)
				})
			}),
			$.button('copy', function () {
				_copy = stage.du()
			}),
			$.button('paste', function () {
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			}),
			$.button('replace', function () {
				stage.rm()
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			})
	))
	theSpan.dblclick(function () {
		$('button').toggle()
	})
	theSpan.A()
} 
 
appInitRdyFn = function () {
	$.getJSON('/loggedIn', function (un) {
		$l('un: ' + un);
		Y._userName = _un = un
		notLoggedIn(un) ?
				Y.render('GuestPage') : enterSite()
		////////// guest(); getMug(); socks(); home()
	})
}
onRdyFn = function () {
	if (window[_app = S.uC(_app)]) {
		window[_app]()
	}
}
logInUser = function (un) {
	k.em('id', un);
	k.em('joinRoom', _username)
	$.get('/myMug', function (mug) {
		__mug = mug
		//$l('going to home page..')
		Y('HomePage')
	})
}
userOnRdyFn = function () {
	$.getJSON('/loggedIn', function (un) {
		__un = un
		__un ? logInUser(__un) : Y('GuestPage')
	})
}
$logOut = function (fn) {
	fn = fn || function () {
		$ren('GuestPage')
		// Y('GuestPage')
	}
	$a.getJSON('/logOut', fn)
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
$.getJSON('loggedIn', function (un) {
	$('#uname').text(_un = $l(un))
})
LoginBar = function () {
}