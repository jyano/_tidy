Y.HomePage = $HomePage = function () {
	Y.nav() //WappyNav($r()) //load navigator
	Y.run(wappyApp)//update un on screen
	$.getJSON('loggedIn', function (un) {
		$l('----' + un)
		$('#uname').text(_un = $l(un))
	})
}


home = function () {
	Y.render('HomePage')
}
 
Y.logOut = function () {
	$.getJSON('/logOut', function () {
		Y.render('GuestPage')
	})
} //logOut =
$logOut = function (fn) {
	$a.G('/logOut', function (q, p, n) {
		$l('logging out')
		fn(q, p, n)
	})
}

$logOut = Y.logOut = function () {
	$.Gj('logOut', function () {
		Y('GuestPage')
	})
}

$logOut = Y.logOut = function () {
	$.getJSON('/logOut', function () {
		Y.render('GuestPage')
	})
}
 