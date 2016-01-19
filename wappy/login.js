 
HOMPAG=function(){$s({$:{M:2,P:2, fS:36, tA:'c'},

	bd:{C:'R', dp:'fl', dir:'c', alI:'c',
		wr: 'wrap'
	}})
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
					 })})
			 }))
	
	 ct = $.d().s({dp: 'fl', jfC:'sB', w: '100%',
	 
	 wr:'wrap'
	 }).A(
			 one = $.d().s({dp: 'fl'}).A(' no session data ...'),
			 two = $.d().s({dp: 'fl'}).A(
					 $.ip().C('_b').A().ph('username').id('un'), 
					 $.ip().C('_b') .A().ph('password').id('pw')),
			 three = $.d().s({dp: 'fl'}).A(
					 $.bt('login', loginUser),
					 $.bt('new account', newAcc))
	 )
	 
	function newAcc(){
		creds = {
			un: $('#un').val(),
			pw: $('#pw').val()
		  }
		$l('will make new account: ' + creds.un + ' : ' + creds.pw)
		_unIsAvailible = function (un, fn) {
			$.g('/wappy/unIsAvail', fn)}
		_unIsAvail(creds.un, function(un){
			if(un){$l('available')}
			else {$l('taken')}	
		})
	}
	
	function loginUser(){
		
		creds = {
			un: $('#un').val().toLowerCase(),
			pw: $('#pw').val().toLowerCase()
		}
		
		$l('will try to login: ' + creds.un + ' : ' + creds.pw)
		
		$.post('/user/login', creds, function(res){
			$l('res')
			$l(res)
		})
	}
	
	$.bt('logout', function(){
		$.get('/user/logout', function(res){
			
			$l('logout res:')
			$l(res)
		})
	})
	$.bt('new account', function () {
	})
	$.bt('login', function () {
	})
}

USERUPLOAD = function () {
	
	$s({
		$: {M: 2, P: 2, fS: 16, tA: 'c'},
		bd: {
			C: 'R', dp: 'fl', dir: 'c', alI: 'c',
			wr: 'wrap'
		}})
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
			$.bt('submit form', function(e){
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
	
	return img.W(100).H(100).click(function () {

		$.cut(fileN)
			
	})
	
	
}


$.cut = function (m) {z();
	m = m || 'me'

	$('body').A(
			$.bt('save sprite', function () {
				c.snap(CUTOUTS)//; EDIT()
			}), $.br(2),
			$.bt('start cut', function () {
				c.dots()
			}), $.br(2),
			$.bt('restart cut', function () {
				$.cut(m)
			}), $.br(2),
		
			
			c = $.c('r', 500, 500).A().fit(m)
	)
} // $.bt('file uploads', function () {window.location = '/wap/uploads'}),


$.fn.URL  = function () {
	return el[0].toDataURL()
}




$.fn.dots = function () {
	
	var el = this
	el.img = 
	
	 el.copy()
	
	el.DOTS = []
	
	el.dats = []
	
	el.$(function (x, y) {
		
		x = parseInt(x)
		
		y = parseInt(y)
		
	$l('click:' + x + ', ' + y)
	
		el.cir(x, y)
		el.DOTS.push([x, y])
		
		el.dats.push(x);
		
		el.dats.push(y) //vestige from phaser physics?
		
		el.line(el.DOTS)
	})
	
	el.$$(function (X, Y) {
		 
		//el.C('X')
		
		el.off('click')
		
		el.closePath()  //el.paste() // el.copy()  //el.save()
		
		du = el.toDataURL()
		
		//el.clear()
		//	el.clip()
		//	el.paste() 
		//	el.fit(du)
	
	})
	
	return el
}

_canMug = function (el) {

	//wap specific
	el.snap = function (func) {
		pams = {
			d: el.toDataURL(),
			dats: el.dats
		}
		$.post('/img', pams, func)
	}
	//el.img = $.img()
	//el.img.src(el.toDataURL())
	el.dots = function () {
		el.copy()
		el.DOTS = []
		el.dats = []
		el.$(function (x, y) {
			x = parseInt(x)
			y = parseInt(y)
			el.cir(x, y)
			el.DOTS.push([x, y])
			el.dats.push(x)
			el.dats.push(y)
			el.line(el.DOTS)
		})
		
		el.$$(function (X, Y) {
			var du
			//el.C('X')
			el.off('click')
			el.closePath()  //el.paste() // el.copy()  //el.save()
			el.clear() //du = el.toDataURL()
			el.clip()
			el.paste() //el.fit(du)
		})
		return el
	}
	return el
}

CLIP = function(){

	
	i = $.img('me').A()
	
	i.dots()

	
}

