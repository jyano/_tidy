b2d.iH = b2d.isShape = function (h) {
	if (!O(h)) {
		return
	}
	var ty = h.constructor.name
	return ty == "b2PolygonShape" ? 'p' :
			ty == "b2CircleShape" ? 'c' :
					ty == "b2AShape" ? 'a' : false
}
b2d.iPH = b2d.iP = function () {
	return this.iH() == 'p'
}
b2d.iCH = b2d.iC = function () {
	return this.iH() == 'c'
}
b2d.iAH = b2d.iA = function () {
	return this.iH() == 'a'
}