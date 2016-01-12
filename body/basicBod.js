$rH = function () {
	var pH = $pH(), g = G(arguments)
	pH.sAOB.apply(pH, g)
	return pH
}
$bulBD = function (x, y) {
	var bD = $dB(x, y)
	bD.bullet = true
	bD
}
$sB = $bD = function (x, y) {
	//return $bD(x, y).ty(0)
	var g = G(arguments)
	var bD = new b2d.BD()
	if (g.u) {
		return bD
	}
	var v = V(x, y)
	bD.XY(N(v.x, 0), N(v.y, 0)
	)
//	x = N(x) ? x : 300
//	y = N(y) ? y : 300
	return bD
	// = $dBD=b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn
//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=
	function alt() {
		$bD = function (x, y) {
			_$bD = function () {
				return new b2d.BD()
			}
			return U(x) ? _$bD() : _$bD().XY(x, y)
		}
	}
}
$dB = function (x, y) {

//return $bD(x, y).ty(2)
	//aside: interesting that dyn comes after kin
	return $bD(x, y).T(2)
	//.dyn()
	//$dBD =   b2d.bD =   b2d.dBD =
}
$dBD = $bD = b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn = function (x, y) {
	var v, bD
	v = V(x, y)
	bD = new b2BodyDef()
	bD.XY(N(v.x, 100), N(v.y, 100))
	bD.dyn()
	return bD
}
$sBD = b2d.S = b2d.sB = b2d.stat = function (x, y) {
	return $dBD(x, y).stat()
}
$kBD = b2d.kD = function (x, y) {
	return $dBD(x, y).T(1)
}
$sB = $bD = function (x, y) {
	//return $bD(x, y).ty(0)
	var g = G(arguments)
	var bD = new b2d.BD()
	if (g.u) {
		return bD
	}
	var v = V(x, y)
	bD.XY(N(v.x, 0),
			N(v.y, 0)
	)
//	x = N(x) ? x : 300
//	y = N(y) ? y : 300
	return bD
	// = $dBD=b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn
//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=
	function alt() {
		$bD = function (x, y) {
			_$bD = function () {
				return new b2d.BD()
			}
			return U(x) ? _$bD() : _$bD().XY(x, y)
		}
	}
}
$dB = function (x, y) {

//return $bD(x, y).ty(2)
	//aside: interesting that dyn comes after kin
	return $bD(x, y).ty(2)
	//.dyn()
	//$dBD =   b2d.bD =   b2d.dBD =
}
$bulBD = function (x, y) {
	var bD = $dB(x, y)
	bD.bullet = true
	bD
}
$kB = $kBD = b2d.kD = function (x, y) {
	return $bD(x, y).T(1)
}
$kB = $bD1 = function (x, y) {
	return $bD(x, y).ty(1)
}
$kBD = b2d.kD = function (x, y) {
	return $dBD(x, y).T(1)
}
 