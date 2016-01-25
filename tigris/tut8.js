function checkAKeycode(){
	$('body').keyup(function (e) {
		$l("e.keyCode = " + e.keyCode)
	})}
KEY_LEFT = 37
KEY_RIGHT = 39
KEY_UP = 38
KEY_DOWN = 40
KEY_W = 87
KEY_S = 83
KEY_A = 65
KEY_D = 68


Keyboard = function(){
	this.leftArrow= false
	this.rightArrow = false
	this.upArrow = false
	this.downArrow = false
	this.w=false
	this.s=false
	this.a=false
	this.d=false
	
}
disableScrollbar = function () {

// at 25ish
}
//kstate = key = [false, false, false, false] // left,right,up,down
 
InitializeKeyboard=function(){
	key = new Keyboard()
	$(document).keydown(function (e) {
		if(e.keyCode == KEY_LEFT){
			
			key.left=true
		}
		if (e.keyCode == KEY_RIGHT) {
			key.right = true
		}
		if (e.keyCode == KEY_UP) {
			key.up = true
		}
		if (e.keyCode == KEY_DOWN) {
			key.down = true
		}
	})
	$(document).keyup(function (e) {
		if (e.keyCode == KEY_LEFT) {
			key.left = true
		}
		if (e.keyCode == KEY_RIGHT) {
			key.right = true
		}
		if (e.keyCode == KEY_UP) {
			key.up = true
		}
		if (e.keyCode == KEY_DOWN) {
			key.down = true
		}
	})
}
 
TUT8 = function () {
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
	InitializeKeyboard()
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
						else if (tileType == 1) {
							tile = wall
						}
						if (tile) {
							tile.draw(tile_x, tile_y)
						}
					}
				}
			}

			if(key.right){dog_x += 1}
			if (key.left) {dog_x -= 1}
			if (key.up) {dog_y += 1}
			if (key.down) {dog_y -= 1}
			 
			dog.drawAnimated(dog_x, dog_y, [0, 7])
			
			
		}, 100)
	})
}