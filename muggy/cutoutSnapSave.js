 


$.fn.snap = function (fn) {

	var dU = this.canvas.toDataURL()
	
	
	$.po('/cutout', {
		dU: dU
		//, dats: this.dats //vestige from phaser physics?
	}, fn)
	
}
 
 
 function old(){
	 sv = function (x, fn) {
		 $.po('/img', {
			 d: xx(C(x)).u(),
			 dats: x.dats
		 }, fn)
	 }
 }