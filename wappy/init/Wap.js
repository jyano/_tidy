Wap = function (app) {Y.render(app);return Y}
Wap.IMS = {}

$ren =   function (app) {
	if (F(Wap[app])) {
		Y[app]();//return Y[page]() || true
		return true
	}
	return false
}

$run =  function (app) {
	app = app.toUpperCase()
	app = Wap[app] || window[app]
	if (app) {
		app();
		return true
	}
	return false
}

$to = function (a) {
	//alert('y.to y.load')
	window.location = '/wap/' + a
}

$clr =   function () {
	z();
	//Wap.nav()
	//WappyNav()
}//= clearApps = fresh
 
  