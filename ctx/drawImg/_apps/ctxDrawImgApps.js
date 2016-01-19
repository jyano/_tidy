$.fn.ld = function(){
	var q =this
	q.load.apply(q, arguments)
	return q
} 

DRI = DRAWIMAGE = function () {
	
	DRI.CSS()
	
	x = $.c(900, 400).a2($.d()).ctx()
	
	$Im('chicks').ld(function () {
		x.dI( this, 100, 100 )
	})
	
	
	$Im('me', function () {
		x.dI(this, 400, 100, 500, 200)
	})
}




DRI.CSS = function () {
	$CSS({
		body: {C: 'o'},
		div: {
			C: 'r', P: 10,
			M: 10, B: 10,
		},
		canvas: {outline: 'dashed yellow 20px'}
	})
}



function AppLoader(appOb){
	
	
}


function AppLoaderApps(){
	App = {
		name: 'DIR',
		js: function () {
		},
		css: {}
	}
}