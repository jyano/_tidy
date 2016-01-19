Anim = ['anim','tween','wapSprite', //'meSprite', 
'shake']
CtxCore = ['context', 'ctxCan', 'ctxDataURL', 'ctxSaveRestore', 'ctxWH', 'getCtx', 'makeCtx','canvas']
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
Clipper = ['gpc','clipper', 'clipperCanvas', 'operations', 'polyDefault', 'geoBool']

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
Wapp = ['wapInit','cutouts', 'upload','uploads','sockStart',

'ct_mug','fn_fitMug','getMug',

'users', 'login','edit','fancyEditUsesDragFrame',
	'loginBar', 'social', 'widUser'

]
Webb = ['both', 'jq', 
	'web', 'events', 'css', 'html', 'img', 'l','webApps','mock','shapeDefs']

jsArrs= [
	Webb,
	Front,
	Can, CtxCore, Ctx,CtxApps,
	Fiz, 
	Clipper, 
	Easel,  Anim,
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
 