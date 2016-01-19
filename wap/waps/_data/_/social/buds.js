 
	$buddyRequestButton = btRq = function (ur) {
		return $.bt('buddy-request',
				function () {
					$.po('/sRq', {to: user.un})
				})
	}
 
//api calls
	withStatusX = wUSt = function (user, func) {//with first status?
		qG('/sts1',
				{u: user},
				function (status) {
					func(status.c)
				})
	}
	$mailButton = btMail = function (message, user) {
		return $.button('mail',
				function () {
					$.post('/sMsg', {m: message.V(), to: user.u}
					)
				})
	}
//avail=bbM({url:'/sts'})
//avails=bbC({model:avail, url:'/sts'})
	c3X = function (a) {
		return $.canvas(300).A().fit(a)
	}
	
	johnX = function () {
		var o = {}
		o.d = 3
		o.a = function () {
			o.d++
		}
		o.g = function () {
			return o.d
		}
		return o
	}
	
	fredX = function () {
		var o = john();
		o.m = function () {
			o.d--
		}
		return o
	}
 
	  
//api calls
	withStatusX = wUSt = function (user, func) {//with first status?
		qG('/sts1',
				{u: user},
				function (status) {
					func(status.c)
				})
	}
	$mailButton = btMail = function (message, user) {
		return $.button('mail',
				function () {
					$.post('/sMsg', {m: message.V(), to: user.u}
					)
				})
	}
	$buddyRequestButton = btRq = function (user) {
		return $button('buddy-request',
				function () {
					$.post('/sRq', {to: user.u})
				})
	}
  