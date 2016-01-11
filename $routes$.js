 
Stage = ['cjs', 'cjsMC',
	'createCore', 'cjsEvents', 'stage', 'ticker', 'loader', 'tran',
	'objects', 'matrix', 'cjsPoly',
	'cjsGx', 'cjsShape', 'curve', 'domElOb', 'cjsGrad',
	'reggy', 'transform', 'cjsText', 'container',
	'cjsCir', 'cjsRec', 'official', 'interesting', 'cache', 'filter',
	'cjsColor',
	'alphaMaskFilter', 'alphaMapFilter', 'blurFilter', 'graphTest',
	'cache',
	'colorFilter', 'colorMatrixFilter', 'bitmap', 'cjsMouse',
	'tween', 'easing', 'sprite', 'ssBuilder', 'zoe', 'SSData',
	'movie', 'timeline', 'gunnertron', 'layers', 'tranTemp'
]


	Box = [
		'bx', 'box0', 'boxPt', 'vec', 'mat',
		'world', 'worldBod',
		'worldFix',
		'worldPol',
		'debug',
		'bodies', 'bodyDefs', 'fixtures', 'fixtureDefs',
		'fixShapes',
		'bodShapes',
		'shapes',
		'edges', 'walls',
		'bodFix', 'forces',
		'boxApps', 'bxMouseApps',
		'bxShapeApps',
		'edgeApps', 'controlApps', 'fixApps', 'boxBool',
		'fizApps', 'forcesApps', 'mouseJtApps',
		'worldApps', 'bxWebsiteEx1', 'bxWebsiteEx2',
		'boxEach', 'queryAB', 'queryPoint',
		'joints', 'distanceJt', 'mouseJt', 'boxKlas','spazMake'
	]
Both = ['superUnder', 'superJ', 'superTime']
Web = ['jq',
	'webColor', 'webCss', 'webFont', 'web',
	'rules', 'media', 'flex', 'styles',
	'sJQ', 'attributes', 'qAnim', 'traverse',
	'html', 'inputs', 'lists', 'submit',
	'root', 'nest', 'appy', 'localStorage',
	'll', 'l',
	'webEvents',
	'webMouse',
	'webDrag',
	'press',
	'webTouch',
	'webKeys'
]
Graphics = [
	'gpc', 'pureDa',
	'jqGraphics', 'gpClipper', 'superCtx', 'superCan',
	'ctxDraw', 'ctxImg', 'ctxGlobComp', 'ctxGrad', 'ctxMug', 'ctxPixels', 'ctxShad',
	'ctxText', 'ctxTransform',
	'canDraw', 'canImg', 'canGlobComp', 'canMug', 'canPixels', 'canShad',
	'canText', 'canTransform',
	'gpcCtx',
	'parallax'
]
Front = [
	'mock',
	'jqui', 'uiWids', 'custWids', 'widLS', 'effects', 'interactions', 'dog', 'wid', 'widLS',
	'bb', 'bone', 'bbColl', 'bbDirt', 'bbEvt', 'bbFiltColl', 'bbRtr', 'bbView', 'bbLS', 'bbServer', 'bbServerMore',
	'ko', 'knock', 'koCustom', 'koMore'
]
Wap = ['wappy', 'users', 'login', 'social', 'widUser']


jsArrs= [
	Both, Web,  Graphics, Stage, Box//, Front, Wap
]

$a.get('/box/:app*', function (q, p) {
	app = q.params.app.toUpperCase()
	html = ''//' - '
	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	html += $js(jsArrs)
	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	p.send(html)
})
 