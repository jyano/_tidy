Cx=Context = {
	canvas: null,
	context: null,
	create: function (canvas_tag_id) {
		this.canvas = document.getElementById(canvas_tag_id)
		this.context = this.canvas.getContext('2d')
		return this.context
	}
}
cx = Cx.context

Draw = Spite = Stamp = Brush = function (filename, is_pattern) {
	this.image = null
	this.pattern = null
	this.TO_RADIANS = M.PI / 180
	this.draw = function (x, y, w, h) {
		var cx = Cx.context
		var i
		
		if (this.pattern) {
			$l('found patttern')
			cx.f(this.pattern)
		}
		
		else {
			$l('no patttern')
			i = this.image
			w ? cx.dI(i, x, y, w, h) :
					cx.dI(i, x, y, i.width, i.height)
		}
	}
	this.rotate = function (x, y, angle) {
		var cx = Cx.context
		var i
		cx.save()
		cx.translate(x, y)
		cx.rotate(angle * this.TO_RADIANS)
		i = this.image
		cx.dI(i, -(i.width / 2), -(i.height / 2))
		cx.restore()
	}
	if (filename) {
		this.image = new Image()
		this.image.src = filename
		
	}
	else {$l('unable to load sprite.');return}
	if (is_pattern) {
	$l('is pattern!')
		cx= Cx.context
		im =this.image
		this.pattern = cx.createPattern(im, 'repeat')
		pt = this.pattern
	}
	
 
}

TUT2=function(){
	$.c().id('canvas')
	Cx.create('canvas')
	WALL = '/grass64.png'
	CRATE = '/wall64.jpeg'
	i=image = new Spite(WALL,false)
	i2=image2 = new Spite(CRATE, false)
	ptt = pattern = new Spite(CRATE, true)
	$(window).load(function(){
		angle = 0
		setInterval(function () {
			Cx.context.f('z').fR(0, 0, 800, 800)
			i.draw(0, 0, 64, 64)//normal
			i.draw(0, 74, 256, 32) //streched one
			ptt.draw(160, 160, 256, 180) //pattern(larger than other sprites)
			i.rotate(115, 160, angle += 4)
			i2.rotate(115, 260, -angle / 2)
		}, 125)
	
	})
	
	
}