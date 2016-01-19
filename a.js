intro()
node()
dirs()
routes()
listen()

function intro(){
	console.log('.\n\n\n\n\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n\n\n')
	require('./web/both');
	$l(' - tidy - \n')
}
function listen(){
	$htSv = httpServer = $h.createServer($a)
	$htSv.listen(80, lsFn)
	require('./sock/$kets$')
	function lsFn() {
		$l('\nserver listening on port 80 \n')
	}

//require('./server/uplodLibRts')
	/*
	 $a.use(function (q, p, nx) {
	 q.b = q.bd = q.body
	 q.fl = q.f = q.files// q.n  = q.flash
	 q.ss = q.session
	 q.q = q.query
	 q.p = q.pm = q.params// q.p= function(a){return q.params[a]}
	 p.lc.loggedIn = q.loggedIn = (q.ss.un) ? true : false   //=  res.locals.li=  req.li
	 q.un = q.ss.un// $l('MAIN middleware says req.username = ' + req.username)
	
	 //
	 p.lc = p.l = p.locals
	 p.rr = p.ren = p.r = p.render
	 p.s = p.send
	 p.j = p.js = p.json
	 p.rd = p.d = p.redirect
	 nx()
	 })
	 */
}
function dirs() {
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
	$stc('', '../art', '../deps', '../data', '../imgFiles',
			'bone', 'easel', 'front','web',
			//fiz
			'box', 'fiz', 'spaz', 'joints', 'controller', 'scroll', 'track',
			'protos', 'arcade',
			'bap0', 'bap1', 'bap2', 'box/bap1', 'box/bap2',
			'fiz/box', 'fiz/spaz', 'fiz/clipperBox', 'fiz/collide',
			'fiz/controller', 'fiz/edge', 'fiz/joints', 'fiz/query', 'fiz/arcade',
			'fiz/makeWorkd',
			'fiz/_'
	)
}




function routes() {
	 
	jsArrs = [
			
			
		Webb = ['both', 'jq', 'web', 'events', 'css', 'html', 'img',
			'l', 'webApps', 'mock', 'shapeDefs'],

		Bone = ['bb', 'bone', 'bbColl', 'bbDirt', 'bbEvt',
			'bbFiltColl', 'bbRtr', 'bbView',
			'bbLS', 'bbServer', 'bbServerMore'],

		Front = ['jqui',  'widLS', 'wid', 'widLS', 'ko', 'knock', 'koCustom'],

		Graphics = ['gpc', 'clipper', 'context', 'canvas'],
		
		Easel = ['cjs', 'createBase','bitmap', 'circle', 'cjsEvents', 'createDraw', 'dobs', 'filter', 'loader',
			'official', 'shapeGrad', 'sprite', 'stage', 'tween'], 
		
				
		Wapp = ['wappy', 'cutouts', 'muggy']
	]
	

	$a.get('/box/:app*', function (q, p) {
		app = q.params.app.toUpperCase()
		html = ''//' - '
		html += '<h1>hello</h1>'
		html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
		html += $js(jsArrs)
		html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
		p.send(html)
	})
 
	Fiz = [
		'bx', 'boxBase',
		'boxBool',
		'boxMath', 'boxCan', 'fixDefPt', 'bodyPt',
		'bDefPt', 'boxShape',
		'worldPrt', 'worldQuery', 'joints',
		'mouseJt',
		'debug', 'loop', 'superBox',
		'boxApps', 'forcesApps', 'worldGravity',
		'makeWorld',
		'bxWebsiteEx1',
		'bxWebsiteEx2',
		'bxMouseApps', 'collApps',
		'mouseJtApps', 'watchKeysApps',
		'fixtPt'
	]
	//html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
}




function node() {
	require('./server/$superNode$')
	require('./server/$xap$')
	require('./server/$goo$')
	$w = $Mw = function (q, p, nx) {
		// regular (pre-user) middleware
		miniQP = function (q, p) {
			miniQ(q)
			miniP(p)
		}
		miniQP(q, p)
		q.loggedIn = isLoggedIn(q)
		q.un = q.ss.un;
		// =  p.lc.loggedIn
		//q.un = q.un; p.lc.lI =q.lI = q.loggedIn
		nx()
	}
	$ss = require('express-session')
	$cnMg = require('connect-mongo')($ss)
	$ssSt = new $cnMg({url: 'mongodb://localhost/jy'})
	methodOverride = require('method-override')
	$bP = require('body-parser');
	_.e([
				$ss({
					store: $ssSt,
					secret: 'foo',
					resave: true,
					saveUninitialized: true
				}),
				require('cookie-parser')('xyz'),
				$bP.urlencoded({extended: false, limit: '50mb'}),
				$bP.json({limit: '50mb'}),
				//methodOverride('X-HTTP-Method-Override'),
				//methodOverride('_method')
			],
			function (mw) {
				$a.use(mw)
			})
	$a.g('/', function (q, p) {
		$l('/')
		$l(q.session)
		p.json(q.sesson // || 'it worked jason..'
		)
	})
//require('./server/serverWap/socialRts')
	require('./routes/imgRts')
	require('./routes/adminRts')
	require('./routes/userRts')
	require('./api/$twitServer$')
}