 
$logOut = function (fn) {
	fn = fn || function () {
		$ren('GuestPage')
		// Y('GuestPage')
	}
	$a.getJSON('/logOut', fn)
}

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
 
 function old(){
	 $HomePage = function () {
		 //Y.nav() //WappyNav($r()) //load navigator
		 $run(wappyApp)//update un on screen
	 }
	 home = function () {
		 $ren('HomePage')
	 }
 }