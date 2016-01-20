LoggedInNavView = Bb.V.x({
	
	initialize: function () {
		$l('loggedinnavview!')
		this.render()
		return this
	},
	
	el: '#loggedInDiv',
	
	render: function () {
		$.get('/user/session', function (sess) {
			var ss = sess || {}
			loggedInDiv.E(
					ss.un ?
							IsLoggedInTempl(ss) :
							NotLoggedInTempl()
			)
		})
	}
})



HOME = function () {
	$s({
		$: {M: 2, P: 2, fS: 16, tA: 'c'},
		bd: {
			C: 'R',
			dp: 'fl',
			dir: 'c',
			jC: 'center',
			alI: 'c',
			wr: 'wrap'
		},
		d: {P: 10, M: 10},
		$content: {
			display: 'flex',
			'flex-direction': 'column',
			'justify-contents': 'center'
		},
		_flex: {
			dp: 'fl'
		}
	})
	
	content = $.d().id('content')
 

	loggedInDiv = $.d().C('y').H(100).A('???').id('loggedInDiv')
	
	view = new LoggedInNavView()
	
	
	blue=$.d().C('b').A(
			form = $.f().attr({
				enctype: 'multipart/form-data',
				action: '/imgFile'})
	)
	
	form.A(
			$.ip().ty('file').name('fieldname'),
			$.ip().name('title'),
			$.bt('submit form', function (e) {
				//e.preventDefault()
			})
	)
	
	 
	
	
	y = 80
	n = 0
	pics = $.d()
	
	$.get('/myFileImgs', function (p) {
		_.e(p, function (p) {$l('pic: ' + n++)//$('body').A($('<image>').attr('src', src))//$.i('/' + p._id + p.ext).A().W(100).H(100)
		
			
					$.pic(p).a2(pics)//$.picDiv(y).A(UpPic(p))//y += 220
		})
	})
	
	//function UpPic(p) {return $.sp().A($.pic(p), $.delBt('/pic', p))}
	
	flex = $.dK('flex')
	
//	$.h1('-- just YOUR cutouts ---')
	$.get('/cutout', function (cutouts) {
		n = 0
		_.e(cutouts, function (cutout) {
			n++
			cut = cutout
			i = $.i(cutout.dU)
			i.WH(100, 100).a2(flex)
		})
		$.h1('YOU have  ' + n + ' cutout(s)')
		flex2 = $.dK('flex')
		$.get('/admin/allCutouts', function (cutouts) {
			$.br()
			n = 0
			_.e(cutouts, function (cutout) {
				n++
				cut = cutout
				
				var d = $.sp().A(
						$.h5(cutout.un || 'anonymous'),
						$.i(cutout.dU).WH(100, 100)
				).a2(flex2)
			})
			
			$.h1('ALL wappy has ' + n + ' cutouts')
		})
		
	})

	content.A(
			loggedInDiv,
			blue,pics
	)
}


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
		view.render()
	})
}