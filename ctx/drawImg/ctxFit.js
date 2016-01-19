 
x.fit = function f(i, x, y) {
	i = i || 'me'
	x = N(x, 0)
	y = N(y, 0)
	this.d(i, x, y, this.W(), this.H())
	return cv
} 