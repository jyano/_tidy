// 'user' middleware:
// what can it do?
// it can see is someone is 'authed'
// how does it know?  requests from authorized users have 'loggedIn' property set to true
// so just check that property
// /W =
//var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;
// $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');
// p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})
// if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}
//  for posting/creating a new user
/*
 g('/user', function (q, p) {
 // *** sends back all the users,
 // but has to parse/filter them first 
 // we only want an ob with THESE FOUR properties 
 // {id, username, mug, status} 
 // (NOT all the actual properties on the ob instance)
 Ur.fi(p.daFn($user))
 // p.da( $user(da) ) // toUser
 })
 G('user/:un', function (q, p) {
 Ur.f1(q.un_(), p.daFn($user))
 p.j($user(user))
 })

 */
$Mw.ur = $Mw.user = qp(function (q, p, nx) {
	if (q.lI || q.loggedIn) {
		Ur.f1(q.un(), function (z, ur) { // if (z) { nx(z) }
			nx.if(z);
			q.parUr(ur);
			nx()
		})
	}	//$l('.user mw.. loggedIn?= ' + q.loggedIn) //req.li ||//Midware.u =
	else {
		p.se('guest');
		return
	} //$l('mw says NOT logged in :(')
	//auth(q, p, next, function (q, p, nx) {
	//	$md.user.findOne({un: q.un},
	//			function (z, user) {if (z) {next(z)} else if (user) {loginSuccess(q, p, user)}
	//				nx()})})
	//
})