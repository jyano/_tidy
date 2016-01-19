x.dc = function (xx, y, rad) {
	var x = this
	x.ac(xx, y, N(rad, 0))
	return x
}

x.cir = function (xx, y, rad, fCol, sCol) {
	var x = this
	if(fCol){
		x.fC(fCol)
		if (sCol) {
			x.sC(sCol)
		}
	}
	
	x.dc(xx, y, N(rad, 0))
	return x
}
x.cvC=function(c){
	$(this.canvas).C(c)
	return this
}

ADB = function () {
	$Ld(function () {
	
	
		__C().$(function (xx, y) {
			 
			x.dc(xx, y, 10,'y').col('r')
			
		})
		
		 
		x.d('chicks', 600, 300)
	 
		
	})
	
	
	 


}

ADB = function () {
	$Ld(function () {
		__C().$(function (xx, y) {
			x.dc(xx, y, 10, 'y').C('o').col('r').C()
		})
		x.d('chicks', 600, 300)
	})
}

ADB = function () {$Ld(function () {
	
	
	ptsArr = []
	
	onCl = function (xx, y) {
	
	
		ptsArr.push([xx, y])
		x.d('chicks', 600, 300)
		x.dc(xx, y, 10, 'y')
				.C('o').col('r').C()
	}
	
	
	__C().$(onCl)
		
		c.dblclick(function(){
			c.off('click')
			
			x.cP().C().col()
			x.cP()
		 
			x.b()
			x.clR()
			
			x.mt(ptsArr[0][0], ptsArr[0][1])

			
			_.e(_.r(ptsArr), function(pt){
				x.lt(pt[0],pt[1])
			})
			
			
			x.cvC('z').cP().C().col().cl().d(
					'chicks', 600, 300)
			
			 
			$Im(x.tDU(), function(){
			
				x1.d(this, 100, 100)
			})
			
			
		})
		


	
	
		
	x.d('chicks', 600, 300)
	

	x1 = $.c().abs().ctx()

	
})}