LoggedInNavView = Bb.V.x({
	
	initialize: function () {
		$l('loggedinnavview!')
		this.render()
		n= 0
		$.get('/user/session', function (sess) {
			var ss = sess || {}
			$l('ss len: ' + _.size(ss))
			_.e(ss, function (v, k) {
			
				
					$l(n +' #----' + k + ' ===== ' + J.s(v))
				n++
			})
			

			$Im('me', function(){
			div= $.sp().C('b').pad(20).dgb()
				$(this).C('r').a2( div)
			})
			
			
		 
		})
		
		return this
	},
	
	el: '#loggedInDiv',
	
	render: function () {
		$.get('/user/session', function (sess) {
			var ss = sess || {}
			
			
			$l('ss len: ' + _.size(ss) )
			_.e(ss, function(v,k){
				
				$l(k + ', ' + v)
			})
			
			loggedInDiv.E(
					ss.un ?
							IsLoggedInTempl(ss) :
							NotLoggedInTempl()
			)
		})
	}
})


function setCss(){
	$s({
		$: {M: 2, P: 2, fS: 22, tA: 'c'},
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
	})}


HOME = function () {setCss()
	
	content = $.d().id('content')
 

	loggedInDiv = $.d().C('y').H(100).A('???').id('loggedInDiv')
	
	view = new LoggedInNavView()
	
	blue=$.d().C('b').A($.f().attr({
				enctype: 'multipart/form-data',
				action: '/imgFile'}).A(
					$.ip().ty('file').name('fieldname'), $.ip().name('title'),
					$.bt('submit form', function (e) {//e.preventDefault()
					})))
	
	
	
	
	y = 80
	n = 0
	pics = $.d()
	$.get('/myFileImgs', function (p) {
		_.e(p, function (p) {$l('pic: ' + n++)
	 
			
			
			$.pic(p).a2(pics)//.$(function(){Cuttable(p.dU)})
		})
	
	})
	 
	 
	flex = $.dK('flex')
	flex2 = $.dK('flex')
	
	$.get('/cutout', function (cutouts) {
		n = 0
		_.e(cutouts, function (cutout) {
			n++
			cut = cutout
			i = $.i(cutout.dU)
			i.WH(150, 150).a2(flex)
			i.$(function(){
			
				
				dU = $.c().rm().WH(i.W(), i.H()).d(i).dU()
				 
				
				$.post('/changeMug', {dU: dU}, function(user){
				
				$l(u=user)
					
				})
			})
			
		})
		
	 		/*
		$.get('/admin/allCutouts', function (cutouts) {
			$.br()
		 
			_.e(cutouts, function (cutout) {
				n++
				cut = cutout
				
				var d = $.sp().A(
						$.d().C('w').A(
								$.i(cutout.dU).WH(75, 75),
								$.h3(cutout.un ? 'user: ' + cutout.un  :  '?')
						)
						
				).a2(flex2)
			})
			 
		})*/
		
	})

	content.A(
			loggedInDiv,
			blue,
			pics,flex,flex2
	)
	_.in(function(){
		$.i(defaultMug).dgb()
	})
	
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
ADB2 = function () {
	$Ld(function () {
		__C().$(function (xx, y) {
			x.dc(xx, y, 10, 'y').col('r')
		})
		x.d('chicks', 600, 300)
	})
}
ADB1 = function () {
	$Ld(function () {
		__C().$(function (xx, y) {
			x.dc(xx, y, 10, 'y').C('o').col('r').C()
		})
		x.d('chicks', 600, 300)
	})
}

ADB = function () {
	
	$Ld(function () {
	
		ptsArr = []
		onCl = function (xx, y) {
			ptsArr.push([xx, y])
			x.d('chicks', 600, 300)
			x.dc(xx, y, 10, 'y')
					.C('o').col('r').C()
		}
		
		__C().$(onCl)
		c.dblclick(function () {
			c.off('click')
			x.cP().C().col()
			x.cP()
			x.b()
			x.clR()
			x.mt(ptsArr[0][0], ptsArr[0][1])
			_.e(_.r(ptsArr), function (pt) {
				x.lt(pt[0], pt[1])
			})
			x.cvC('z').cP().C().col().cl().d(
					'chicks', 600, 300)
			$Im(x.tDU(), function () {
				x1.d(this, 100, 100)
			})
		})
		x.d('chicks', 600, 300)
		x1 = $.c().abs().ctx()
		$.bt('snap', function () {
			$.post('/cutout', {dU: x1.dU()})
		})
	})
	
}

ADB = function () {

	Cuttable('chicks')

}


Cuttable=function(img){
	$Im(img, function (chicks) {
		ptsArr = []
		__C().$(function (xx, y) {
			ptsArr.push([xx, y])
			x.dI(chicks, 10, 10)
			x.dc(xx, y, 10, 'y').C('o').col('r').C()
		})
		x.d(chicks, 10, 10)
		x1 = $.c().ctx()
		$.bt('snap', function () {
			$.post('/cutout', {dU: x1.dU()})
		})
		c.dblclick(function () {
			c.off('click')
			x.cP().C().col()
			x.cP()
			x.b()
			x.clR()
			x.mt(ptsArr[0][0], ptsArr[0][1])
			_.e(_.r(ptsArr), function (pt) {
				x.lt(pt[0], pt[1])
			})
			x.cvC('z').cP().C().col().cl().d(chicks, 10, 10)
			$Im(x.tDU(), function () {
				x1.d(this, 10, 10)
			})
		})
	})
}


$.pic = function (p) {
	
	var fileN = p._id + p.ext
	
	var img = $.i('/' + fileN)
	
	img.img = img[0]
	
	return img.WH(100,100).$(function () {
	Cuttable(fileN)
		//$.cut(fileN)
	
	})
}
$.fn.dU=function(){return this.gC().dU()}
 
$.dragStage = function (x, y) {
	$.dragStage1 = function (x, y) {
		$.dragStage = function (x, y) {
			c = $.canvas('g', 400)
			s = new cjs.Stage(c[0]).tick()
			dragFrame(c).A()
			return s
		}
		var can = $.c('g', 400)
		$St(can[0])
		$.dragFrame(can)
		return st
	}
	c = $.c('g', 400)
	s = $St(c[0])
	$.dragFrame(c).A()
	return s
}
TWEENBOX = DRAGSTAGE = function () {
	stage = $.dragStage()
	stage.bm('me', function (bm) {
		SL(bm)
		$Tw([bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000],
				[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
		$Tw([bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
		)
		//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
	})
	$.dragStage().t().bm('me', function (bm) {
		b = bm
		SL(bm)
		bm.rgc('+')
		scaleShake(bm)
		rotateShake(bm)
	})
}

IX1 = INDEX = DRAGSTAGETRANSFORM = function () {
	s = $.dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.t(10, function () {
			s.bm('guy', SL)
		})
		s.ch(b, 3)
	})
}

INDEXX = function () {
	s = dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.t(10, function () {
			s.bm('guy', SL)
		})
		s.ix(b, 3)
	})
}

CV20 = DRAGSTG = function () {
	Q(function () {
		c = $.c('g', 600, 300)
		f = $.dragFrame(c)
		x = c.ctx()
		x.d('me', 100, 100)
		c.$(function (x1, y1) {
			x.a(x1, y1, 2).s()
		})
	})
}

DFP = DRAGFRAME = PATH = function () {
	$Ld(function () {
		s = c = $.c('g', 200, 200)
		d = $.c('x', 200, 200)
		f = $.dragFrame(c)
		f1 = $.dragFrame(d).X(300)
		x = c.ctx()
		xx = d.ctx()
		x.c('X', 'X').fr(0, 0, 1000, 1000)
		x.b(10, 30, 'r', 'X')
		x.lt([[30, 10], [160, 20], [50, 200]]).x()//.D()
		x.cl()
		x.d('me', 50, 50)
		d.ctx().d('me', 0, 0)
		_.in(function () {
			xx.d(d, 35, 15)
			xx.d(d, 35, 15)
			xx.d(d, 35, 15)
			xx.d(d, 35, 15)
			_.in(function () {
				x.d(d, 0, 0)
				_.in(function () {
					xx.c('X').clearRect(0, 0, 200, 200)
					xx.d(c)
				})
			})
		})
	})
}