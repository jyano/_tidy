 
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



Web = ['both', 'jq','web','l', 'superCanvas','context'
]



Box = ['bx', 'boxBase', 'boxBool', 'boxMath', 'boxCan',
'fixtPt','fixDefPt','bodyPt','bDefPt','boxShape',
	'worldPrt', 'worldQuery','joints','mouseJt',
		'debug', 'loop', 'superBox',
	'boxApps','forcesApps', 'worldGravity','makeWorld',
	
	'bxWebsiteEx1',
	'bxWebsiteEx2',
	'bxMouseApps','collApps','mouseJtApps','watchKeysApps'
]
Easel = ['cjs','createBase','cjsEvents', 'cjsMouse', 'dobs', 'official','stage',

'bitmap',
'loader',
'cjsShapes',
'createDraw','createShape','shapeCurve','shapeGrad',
	'bitmapApps','loaderApps',
	'createDrawApps',
	'cjsMouseApps','drawGrid',
	'cirApps','circles','official','circle',
	'filter','alphaMaskFilter','blurFlApps',
	'cjsGradApps','radialApps','shapeGrad'
	

]


jsArrs= [
  Web,
  Easel,
  Box//, Front, Wap
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
	