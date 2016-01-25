i2xy = function (index, mapWidth) {
	var x = index % mapWidth
	var y = M.floor(index / mapWidth)
	return [x, y]
}

xy2i=function(x,y,mapWidth){
	return y * mapWidh + x
} 


Draw = Spite = function (filename, is_pattern) {
this.animationDelay=0

this.animationIndexCounter=0

this.animationCurrentFrame=0

	this.image = null
	this.pattern = null
	this.TO_RADIANS = M.PI / 180
	this.draw = function (x, y, w, h) {
		var cx = Cx.context
		var i
		if (this.pattern) {
			 
			cx.f(this.pattern)
		}
		else {
			 
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
	
	this.drawAnimated = function (x, y, spriteSheetIndex) {
		if (this.animationDelay++ >= 3) {
			this.animationIndexCounter++
			if (this.animationIndexCounter >= spriteSheetIndex.length) {this.animationIndexCounter = 0}
			this.animationCurrentFrame = spriteSheetIndex[this.animationIndexCounter]
			this.animationDelay = 0
		}
		
		var res = i2xy(this.animationCurrentFrame, 8)// previously before shortening: var spriteSheetX = this.animationCurrentFrame % 8,var  spriteSheetY = M.fl(this.animationCurrentFrame / 8)
		Context.context.drawImage(
				this.image,
				res[0] * 32,
				res[1] * 64,
				 32, 64,
				  x, y, 32, 64)}
	
	this.draw2 = function (x, y, w, h) {
		if (this.is_pattern) {
		}
	}
	if (filename) {
		this.image = new Image()
		this.image.src = filename
	}
	else {
		$l('unable to load sprite.');
		return
	}
	if (is_pattern) {
		$l('is pattern!')
		cx = Cx.context
		im = this.image
		this.pattern = cx.createPattern(im, 'repeat')
		pt = this.pattern
	}
}

TUT7 = function () {
	map = [
		1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
		0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
		0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
		0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
		0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
		1, 0, 1, 0, 1, null, 1, 0, 1, 0,
		1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
		1, 1, 1, 0, 0, 0, 1, 0, 1,
	]
	$.c().id('game')
	Cx = Context = new $HTML('game', 640, 480)
	wall = new Spite('/me.png')
	water = new Spite('/water.jpg')
	dog = new Spite('/girlSS.jpg') // <- we have succesfully loaded the spriteSheet into our engine!
	
	$(window).load(function () {
		setInterval(function () {
			mapIndex = 0
			for (var y = 0; y < 10; y++) {
				for (var x = 0; x < 10; x++, mapIndex++) {
					var tile_x = x * BLOCK_W;
					var tile_y = y * BLOCK_H
					if (M.floor) {
						var tile
						var tileType = map[mapIndex]
						if (tileType == 0) {
							tile = water
						}
						else if (tileType == 1
					)
						{
							tile = wall
						}
						if (tile) {
							tile.draw(tile_x, tile_y)
						}
					}
				}
			}
		
			
		dog.drawAnimated(64,64, [0,7
		])
		
		}, 100)
		
		
	})
}