function routes(){
	dirs()
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
		$stc('', '../art',
				'../deps', '../data',
				'../imgFiles',
				//anim
				'anim',
				//can
				'can', 'can/can', 'can/_apps',
				//clipper
				'clipper',
				//easel
				'easel', 'easel/draw', 'easel/grad', 'easel/filter', 'easel/bmap',
				//fiz
				'box', 'fiz', 'spaz', 'joints', 'controller', 'scroll', 'track',
				'protos', 'arcade',
				'bap0', 'bap1', 'bap2', 'box/bap1', 'box/bap2',
				'fiz/box', 'fiz/spaz', 'fiz/clipperBox', 'fiz/collide',
				'fiz/controller', 'fiz/edge', 'fiz/joints', 'fiz/query', 'fiz/arcade',
				'fiz/makeWorkd',
				'fiz/_',
				//front
				'front', 'front/bone', 'front/nok', 'front/wid', 'front/sync',
				//wap
				'wap', 'wap/mug', 'wap/sock', 'wap/waps', 'wap/upload', 'wap/login', 'wap/edit',
				//web
				'web', 'web/_data', 'web/_apps'
		)
	}
	
	Anim = ['anim', 'tween', 'wapSprite', //'meSprite', 
		'shake']
	CtxCore = ['context', 'ctxCan', 'ctxDataURL', 'ctxSaveRestore', 'ctxWH', 'getCtx', 'makeCtx', 'canvas']
	Ctx = [
//draw
		'ctxColor', 'ctxCurve', 'ctxPattern', 'ctxPol', 'ctxRec',
//drawImg
		'ctxCenter', 'ctxCrop', 'ctxDrawImg', 'ctxFit',
//globComp
		'ctxGlobComp',
		//grad
		'ctxGradProto', 'ctxLinGrad', 'ctxRadGrad',
//imgDa
		'ctxImgData', 'x_jD', 'ctxLineProps', 'ctxMtLt',
//path
		'ctxClip', 'ctxPath', 'ctxPtInPth',
		//shadow
		'ctxShad',
		//text
		'ctxFont', 'ctxText',
		//transform
		'ctxTf', 'ctxTranslate', 'ctxScale', 'ctxRotate'
	]
	CtxApps = [
//drawImg
		'ctxDrawImgApps', 'ctxADB',
//glob comp
		'ctxGlobCompApps',
//grad
		'ctxGradApps',
//imgDa
		'ctxPixelApps',
//loader
		'ctxLdrApps',
//draw
		'ctxDrawApps', 'ctxPathApps',
//shadow
		'ctxShadApps',
//text
		'ctxTextApps',
//tf
		'clipStars', 'ctxRtApps', 'ctxTfApps'
	]
	Can = ['canText', 'canText', 'canPixel', 'canGrad', 'canApps']
	Clipper = ['gpc', 'clipper', 'clipperCanvas', 'operations', 'polyDefault', 'geoBool']
	Easel = ['cjs', 'createBase', 'cjsEvents', 'cjsMouse', 'dobs', 'official', 'stage',
		'bitmap',
		'loader',
		'cjsShapes',
		'createDraw', 'createShape', 'shapeCurve', 'shapeGrad',
		'bitmapApps', 'loaderApps',
		'createDrawApps',
		'cjsMouseApps', 'drawGrid',
		'cirApps', 'circles', 'official', 'circle',
		'filter', 'alphaMaskFilter', 'blurFlApps',
		'cjsGradApps', 'radialApps', 'shapeGrad'
	]
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
	Front = [
		'mock',
		'jqui', 'uiWids', 'custWids', 'widLS', 'effects', 'interactions', 'dog', 'wid', 'widLS',
		'bb', 'bone', 'bbColl', 'bbDirt', 'bbEvt', 'bbFiltColl', 'bbRtr', 'bbView', 'bbLS', 'bbServer', 'bbServerMore',
		'ko', 'knock', 'koCustom'//, 'koMore'
	]
	Wapp = ['wapInit', 'cutouts', 'upload', 'uploads', 'sockStart',
		'ct_mug', 'fn_fitMug', 'getMug',
		'users', 'login', 'edit', 'fancyEditUsesDragFrame',
		'loginBar', 'social', 'widUser'
	]
	Webb = ['both', 'jq',
		'web', 'events', 'css', 'html', 'img', 'l', 'webApps', 'mock', 'shapeDefs']
	jsArrs = [
		Webb,
		Front,
		Can, CtxCore, Ctx, CtxApps,
		Fiz,
		Clipper,
		Easel, Anim,
		Wapp
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
	
	$l('no theme')

	//html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
}


console.log('.\n\n\n\n\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n\n\n')

require('./web/both');
 $l(' - tidy - \n')

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


$a.g('/', function (q, p) {$l('/')
	$l(q.session)
	p.json(q.sesson // || 'it worked jason..'
	)})
//require('./server/serverWap/socialRts')
 require('./routes/imgRts') 
 require('./routes/adminRts')
 require('./routes/userRts')
require('./api/$twitServer$')
routes()

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
 