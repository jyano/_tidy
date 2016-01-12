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


$stc('', '../art','_', 'web')