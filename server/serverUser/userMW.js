 
// /W =
//var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;
// $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');
// p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})
// if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}
//  for posting/creating a new user
$a.get('/user', function (q, p) {
 // *** sends back all the users,
 // but has to parse/filter them first 
 // we only want an ob with THESE FOUR properties 
 // {id, username, mug, status} 
 // (NOT all the actual properties on the ob instance)
 
 User.find(p.daFn($user))
	// p.da( $user(da) ) // toUser
 })
 
 
 $a.get('user/:un', function (q, p) {
 
 User.findOne(q.un_(), p.daFn($user))
 
	 p.json($user(user))
 
 })

 

 
 $Mw.user = qp(function (q, p, next) {
	
	if (q.session.un) {
		
		User.findOne({un:q.session.un()}, function (z, user) {
			// if (z) { nx(z) }
			// next.if(z);
			if (user) {
				q.user = user   //res.locals.U = req.U =
				q.un =   user.un//res.locals.u = req.u =
				q.uId =  user._id //res.locals.I = req.I =
			}
			next()
		})
	}	//$l('.user mw.. loggedIn?= ' + q.loggedIn) //req.li ||//Midware.u =
	
	
	else {
		p.send(false)
	}
	
	 //$l('mw says NOT logged in :(')
	//auth(q, p, next, function (q, p, nx) {
	//	$md.user.findOne({un: q.un},
	//			function (z, user) {if (z) {next(z)} else if (user) {loginSuccess(q, p, user)}
	//				nx()})})
	//
})