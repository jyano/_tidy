var creds

 


$a.post('/user/login', function (q, p, next) {
	
	$l('user trying to login:')
	$l(q.body)
	
	var ss = q.session
	//check if un and pw are legit
	//creds = {un: q.body.un, pw: q.body.pw}
	
	User.findOne(creds = q.body , function (er, user) {
		
		if(er){next(er)}
		
		else if (user){var un = user.un

			$l('logged in: ' + un + ' !')
			
			ss.un = un //=q.un =q.ss.loggedIn = q.loggedIn = q.ss.u= q.ss.li
			
			ss.save(function () {
				$l('q.ss.un: ' + ss.un)
			
			p.json(un)
		})
		 
		
		
	 }
	 
	 else {
		$l('FAIL -> guest');
		p.json('guest')
	 }
	 
				 
				
	})
})


$a.get('/user/logout', function (q, p, next) {
	$l('user trying to LOG OUTTTT:')
	$l(q.body)
	
	var ss = q.session
	 
			
	var un = ss.un
	ss.un = null //=q.un =q.ss.loggedIn = q.loggedIn = q.ss.u= q.ss.li
	
	ss.save(function () {
				$l('q.ss.un: ' + ss.un)
		
		p.json(un)
		
	})
	 
		
	 
	 
})

 