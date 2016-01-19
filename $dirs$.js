$stc = function () {
	
	_.e(arguments, function (arg) {
		A(arg) ? _.e(arg, $stc) : Use(arg)
	})
	
	function Use(arg) {
		use(name(arg))
		use(name(arg + '/_pre'))
		use(name(arg + '/_deps'))
		use(name(arg + '/_protos'))
		use(name(arg + '/_data'))
		use(name(arg + '/_draw'))
		use(name(arg + '/_core'))
		use(name(arg + '/_apps'))
		use(name(arg + '/_games'))
		use(name(arg + '/_routes'))
		use(name(arg + '/_api'))
		use(name(arg + '/_alpha'))
		function name(dir) {
			return __dirname + '/' + dir
		}
		function use(dir) {
			$a.use($e.static(dir))
		}
	}
}


$stc('', '../art', '../imgFiles', 
		
		//anim
		'anim',
		
		
		//can
		'can', 'can/can', 'can/draw', 'can/drawImg',
		'can/globComp', 'can/grad', 'can/imgDa',
		'can/ldr', 'can/line', 'can/path',
		'can/shad', 'can/text',
		'can/tf', 'can/tf/_apps',
		
		
		//clipper
		'clipper',
		
		
		//easel
		'easel', 'easel/draw','easel/grad','easel/filter','easel/bmap', 
	
	
		//fiz
		'box','fiz','spaz', 'joints','controller', 'scroll', 'track',
		 'protos', 'arcade', 
		'bap0', 'bap1', 'bap2', 'box/bap1','box/bap2',
		'fiz/box','fiz/spaz', 'fiz/clipperBox','fiz/collide',
		'fiz/controller','fiz/edge','fiz/joints','fiz/query','fiz/arcade',
		'fiz/makeWorkd',
		
		
		//front
		'front', 'front/bone', 'front/nok', 'front/wid', 'front/sync',
		
		//wap
		'wap', 'wap/mug','wap/sock','wap/waps', 'wap/upload','wap/login','wap/edit',
		
		//web
		'web','web/_data','web/_apps'
)
