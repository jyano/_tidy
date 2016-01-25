TUT5_PART1=   function () {
	$.c().id('game')
	Cx = Context = new $HTML('game', 640, 480)
	wall = new Spite('/me.png')
	water = new Spite('/sun.png')
	$(window).load(function () {
	
	
		
		setInterval(function(){
			for (var y = 0; y < 10; y++) {
				for (var x = 0; x < 10; x++) {
					var tile_x = x * BLOCK_W;
					var tile_y = y * BLOCK_H
					if (M.floor) {
						M.fl(M.r() * 2) ?
								wall.draw(tile_x, tile_y) :
								water.draw(tile_x, tile_y)
					}
				}
			}
		},100)

	})
}
TUT5 =PART2= function () {
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
		1, 1, 1, 0,0,0, 1, 0, 1,
	]
	$.c().id('game')
	Cx = Context = new $HTML('game', 640, 480)
	wall = new Spite('/me.png')
	water = new Spite('/water.jpg')
	
	
	$(window).load(function () {
		setInterval(function () {
		
		mapIndex=0
		
		
			for (var y = 0; y < 10; y++) {
				for (var x = 0; x < 10; x++, mapIndex++) {
					var tile_x = x * BLOCK_W;
					var tile_y = y * BLOCK_H
					if (M.floor) {
						var tile 
						var tileType= map[mapIndex]
						if(tileType == 0){
							 
							tile=water
					}
						else if (tileType == 1) {
						 
							tile = wall
						}
						
						if(tile){
							tile.draw(tile_x, tile_y)
						}
					}
				}}
			
			
			
		}, 100)
	})
	
	
	
}