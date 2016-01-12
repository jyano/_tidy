$Wor = function () {
	//= _$W
	var g = G(arguments), o
	o = // g.O? g.f:
			g.O_ ? {grav: g.f, doSleep: g.s} :
					N(g.s) ? {grav: V(g.f, g.s), doSleep: g.t} :
							N(g.f) ? {grav: V(0, g.f), doSleep: g.s} :
							{grav: V(0, 10), doSleep: g.f}
	o.doSleep = U(o.doSleep) ? true : o.doSleep ? true : false
	return w = new b2d.W(o.grav, o.doSleep)
}

$box = function () {
	bx.can()
	$Wor().bug()
	w.loop()
	return w
}

$boxFn = function (fn) {
	return function () {
		$box()
		fn()
	}
}