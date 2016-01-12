first()
function first() {
	COLOR = {
		b: "Blue",
		cB: "CadetBlue",
		aB: "AliceBlue",
		rB: "RoyalBlue",
		stB: "SteelBlue",
		slB: "SlateBlue",
		dB: "DodgerBlue",
		mB: "MediumBlue",
		cfB: "CornflowerBlue",
		mSB: "MediumSlateBlue",
		bA: "BlanchedAlmond",
		sB: "SkyBlue",
		_b: "LightBlue",
		dSB: "DeepSkyBlue",
		mnB: "MidnightBlue",
		nv: "Navy",
		B: "DarkBlue",
		pB: "PowderBlue",
		_stB: "LightSteelBlue",
		_sB: "LightSkyBlue",
		g: 'green',
		sG: "SeaGreen",
		hD: "HoneyDew",
		lC: "LightCyan",
		spG: "SpringGreen",
		lm: "Lime",
		G: "DarkGreen",
		fG: "ForestGreen",
		mSpG: "MediumSpringGreen",
		pG: "PaleGreen",
		_g: "LightGreen",
		yG: "YellowGreen",
		lnG: "LawnGreen",
		lmG: "LimeGreen",
		gY: "GreenYellow",
		mSG: "MediumSeaGreen",
		_sG: "LightSeaGreen",
		mAqM: "MediumAquaMarine",
		aqM: "Aquamarine",
		SG: "DarkSeaGreen",
		ol: "Olive",
		olDr: "OliveDrab",
		OG: "DarkOliveGreen",
		sv: "Silver",
		gr: "gray",
		Gr: "DarkGray",
		_gr: "LightGray",
		SlB: "DarkSlateBlue",
		SlG: "DarkSlateGray",
		_slG: "LightSlateGray",
		slG: "SlateGray",
		dmG: "DimGray",
		az: "Azure",
		co: "Coral",
		_co: "LightCoral",
		cy: "Cyan",
		Cy: "DarkCyan",
		tq: "Turquoise",
		mTq: "MediumTurquoise",
		pTq: "PaleTurquoise ",
		Tq: "DarkTurquoise",
		aq: "Aqua",
		gb: "Gainsboro",
		tl: "Teal",
		go: "Gold",
		X: "transparent",
		z: "Black",
		w: "White",
		k: "Khaki",
		K: "DarkKhaki",
		tn: "Tan",
		br: "Brown",
		mc: "Moccasin",
		ct: "Chartreuse",
		bW: "BurlyWood",
		o: "Orange",
		O: "DarkOrange",
		y: "Yellow",
		_y: "LightYellow",
		lmCh: "LemonChiffon",
		goR: "GoldenRod",
		GoR: "DarkGoldenRod",
		pGoR: "PaleGoldenRod",
		_goRY: "LightGoldenRodYellow",
		nvW: "NavajoWhite ",
		bq: "Bisque",
		bg: "Beige",
		wh: "Wheat",
		pP: "PeachPuff",
		u: "Purple", pu: 'Purple',
		ig: "Indigo",
		pl: "Plum",
		mPu: "MediumPurple",
		v: "Violet",
		bV: "BlueViolet",
		dV: "DarkViolet",
		vr: "MediumVioletRed",
		vrl: "PaleVioletRed",
		wS: "WhiteSmoke",
		fW: "FloralWhite",
		gW: "GhostWhite",
		wa: "Cornsilk",
		iv: "Ivory",
		ln: "Linen",
		mC: "MintCream",
		pW: "PapayaWhip",
		oL: "OldLace",
		aW: "AntiqueWhite",
		ss: "SeaShell",
		sn: "Snow",
		ch: "Chocolate",
		si: "Sienna",
		pe: "Peru",
		rBr: "RosyBrown",
		saBr: "SandyBrown",
		sBr: "SaddleBrown",
		l: 'Lavender',
		lB: "LavenderBlush",
		m: "Magenta",
		M: "DarkMagenta",
		or: "Orchid",
		mO: "MediumOrchid",
		fu: "Fuchsia",
		OR: "DarkOrchid",
		p: "Pink",
		_p: "LightPink",
		hP: "HotPink",
		mR: "MistyRose ",
		th: "Thistle",
		x: "DeepPink",
		r: "Red",
		mrn: "Maroon",
		rcr: "Crimson",
		R: "DarkRed",
		oR: "OrangeRed",
		ri: "IndianRed",
		rt: "Tomato",
		rfb: "FireBrick",
		s: "Salmon",
		_s: "LightSalmon",
		S: "DarkSalmon"
	}
	CSS = {
		d: "display", dp: "display", ds: "display", cl: "clear",
		ps: 'position', cu: 'cursor',
		al: 'opacity', vs: 'visibility',
		ct: 'content', //pseudoelements
		rs: 'resize' //resizable by user
	}
	_.x(CSS, {
		fl: 'flex', $: 'flex',
		dir: 'flex-direction',
		wr: 'flex-wrap',
		jC: 'justify-content',
		jfC: 'justify-content',
		aI: 'align-items', alI: 'align-items',
		aC: 'align-content', alC: 'align-content',
		ord: 'order',
		gr: 'flex-grow',
		shr: 'flex-shrink',
		bas: 'flex-basis',
		alS: 'align-self',
		flow: 'flex-flow',
	})
	_.x(CSS, {z: 'z-index', b: "bottom", l: 'left', r: 'right', t: 'top'})
	_.x(CSS, {
		cs: 'caption-side',
		ec: 'empty-cells',
		ly: 'table-layout',
		li: "list-style-image",
		lp: "list-style-position",
	})// lists
	_.x(CSS, {h: 'height', h_: 'min-height', _h: 'max-height', w: 'width', w_: 'min-width', _w: 'max-width'})
	_.x(CSS, {ov: 'overflow', ovX: "overflow-x", ovY: "overflow-y"}) //visible | hidden | scroll | auto | inherit
	_.x(CSS, {sd: "box-shadow", xs: "box-shadow"})
	_.x(CSS, {//transition/transform
		tr: "transition", ty: "transition-property",
		tu: "transition-duration", tt: "transition-timing-function",
		te: "transition-delay",
		tf: "transform",
		tfo: "transform-origin",
		ts: "transform-style",
		bv: "backface-visibility",
		ps: "perspective",
		po: "perspective-origin"
	})
	_.x(CSS, {//words/spacing
		lH: 'line-height',  //minimum distance between the baselines of adjacent lines of text
		lSp: 'letter-spacing',
		wSp: 'word-spacing',
		vA: 'vertical-align', //baseline,superscript,subscript,middle,text-top,text-bottom,top,bottom
		wsSp: 'white-space', //normal,nowrap,pre,pre-wrap,pre-line,inherit
		wBr: 'word-break', // normal|break-all|keep-all
		wWr: 'word-wrap',  //normal,break-word
		f: 'font',
		fF: 'font-family',
		$fF: '@font-face', // for font files
		fS: 'font-size',  //xx-small,x-small,small,medium,large,x-large,xx-large//smaller,larger
		sty: 'font-style', //normal,oblique,italic
		fV: 'font-variant', //normal,smallcaps
		fW: 'font-weight',//normal,bold,100-900
		str: 'font-stretch',
		c: 'color',
		tA: 'text-align',        //left, right, center and justify
		tD: 'text-decoration',     // underline, overline, line-through, blink
		tI: 'text-indent',    // indent for the first line of a block level element
		tTf: 'text-transform',   //none,uppercase,lowercase,capitalize
		tOl: 'text-outline',
		tOv: 'text-overflow',
		tSh: 'text-shadow'
	})
	_.x(CSS, {//background/image//borderImage
		bg: 'background',
		C: 'background-color',
		bgI: "background-image",
		bgA: "background-attachment",
		bgP: "background-position",
		bgR: "background-repeat",
		bgCl: "background-clip",
		bgOr: "background-origin",
		bgS: "background-size",
		clp: 'clip', crp: "crop", ft: 'fit', //replaced elements
		di: "border-image",
		dis: "border-image-source",
		dio: "border-image-outset",
		bir: "border-image-repeat",
		disl: "border-image-slice",
		diw: "border-image-width"
	})
	_.x(CSS, {//margin
		M: "margin", mar: "margin", m: "margin", mT: "margin-top", mR: "margin-right",
		mB: "margin-bottom", mL: 'margin-left',
		//outline
		o: "outline", oc: "outline-color", os: "outline-style",
		ow: 'outline-width', oo: 'outline-offset',
		//border
		rd: 'border-radius',
		bL: "border-left",
		dlc: "border-left-color",
		dls: "border-left-style",
		bLW: "border-left-width", bor: "border", B: "border", dc: "border-color",
		//ds:"border-style",
		borW: "border-width", co: 'border-collapse',
		sp: 'border-spacing',
		borT: "border-top", dtc: "border-top-color",
		borTS: "border-top-style", bTW: "border-top-width",
		bTW: "border-top-width",
		borB: "border-bottom", bBC: "border-bottom-color",
		bBS: "border-bottom-style", borBW: "border-bottom-width",
		bBW: "border-bottom-width", borR: "border-right",
		bRC: "border-right-color", borRS: "border-right-style",
		bRW: "border-right-width", borRW: "border-right-width",
		bRd: 'border-radius', borR: 'border-radius',
		//padding
		g: "padding", pad: "padding", P: 'padding',
		gt: "padding-top",
		//gr: "padding-right",
		gb: "padding-bottom",
		gl: "padding-left"
	})
	DOOR = CSS_TRANSFORM_PERSPECTIVE = function () {
		$s({
			$div1: {
				position: 'relative', h: 150, w: 150, M: 50, P: 10, bor: '1px solid black', perspective: 150
			},
			$div2: {
				P: 50, position: 'absolute', bor: '1px solid black', C: 'r', transform: 'rotateX(45deg)'
			}
		})
		$.dI('div1')
		$.dI('div2').A('HELLO')
	}
	
	FONTFAMILY = {
		u: "cursive", f: "fantasy", m: 'monospace', ss: 'sans-serif', s: 'serif',//generic
		t: 'times', c: 'courier', a: 'arial'
	}//nongeneric
	FONTVARIANT = {s: "small-caps"}
	FONTSTYLE = {"#": "inherit", n: "normal", i: "italic", o: "oblique"}
	FONTWIDTH = {
		n: "normal",
		"+": "bold",
		"++": "bolder",
		"-": "lighter",
		"*1": 100,
		"*2": 200,
		"*3": 300,
		"*4": 400,
		"*5": 500,
		"*6": 600,
		"*7": 700,
		"*8": 800,
		"*9": 900
	}
	TEXTTRANSFORM = {c: "capitalize", u: "uppercase", l: "lowercase"}
	FONTSTRETCH = {
		n: "normal",
		sC: "semi-condensed",
		c: "condensed",
		eC: "extra-condensed",
		u: "ultra-condensed",
		sE: "semi-expanded",
		e: "expanded",
		eE: "extra-expanded",
		uE: "ultra-expanded"
	}
	TEXTDECORATION = {
		u: "underline",
		o: "overline",
		l: "line-through", b: "blink"
	}
	TEXTALIGNMENT = {l: "left", r: "right", c: "center", j: "justify"}
	TEXTBASELINE = {s: 'sub', S: 'super', t: 'top', tt: 'text-top', m: 'middle', b: 'bottom', tb: 'text-bottom'}
}
FLOAT = {r: 'right', l: 'left', n: 'none', '#': 'inherit'}
DISPLAY = {
	i: "inline", b: "block", ib: "inline-block", t: "table",
	n: "none", '#': "inherit", it: "inline-table", l: "list-item", c: "table-column", r: "table-row",
	cg: "table-column-group", rg: "table-row-group", p: "table-caption",
	h: "table-header-group", f: "table-footer-group", e: "table-cell", $: 'flex', fl: 'flex'
}
OLSTYLE = {
	n: 'none', h: 'hidden', '.': 'dotted', '-': 'dashed',
	s: 'solid', d: 'double', g: 'groove',
	r: 'ridge', i: 'inset',
	o: 'outset', "#": 'inherit'
}
OLWIDTH = {'|': 'thin', '||': 'medium', '|||': 'thick', 's': 'thin', 'm': 'medium', 'b': 'thick'}
POSITION = {s: 'static', a: 'absolute', r: 'relative', f: 'fixed', '#': 'inherit'}
OVERFLOW = {v: 'visible', h: 'hidden', s: 'scroll', a: 'auto', '#': 'inherit'}
CURSOR = {
	d: 'default', p: 'pointer', m: 'move', w: 'wait', h: 'help', t: 'text',
	N: 'n-resize', E: 'e-resize', S: 's-resize', W: 'w-resize',
	NE: 'ne-resize', NW: 'nw-resize', SE: 'se-resize', SW: 'sw-resize'
}

ooo = {
	c: COLOR,
	s: CSS,// a: ATTRIBUTE,o: PROPERTY,
	olS: OLSTYLE, 
	olW: OLWIDTH,
	ov: OVERFLOW,
	cu: CURSOR,
	w: OLWIDTH, 
	ps: POSITION,
	dp: DISPLAY,
	fF: FONTFAMILY, 
	sty: FONTSTYLE,
	str: FONTSTRETCH,
	fW: FONTWIDTH, 
	fV: FONTVARIANT,
	tTf: TEXTTRANSFORM, 
	tD: TEXTDECORATION,
	tA: TEXTALIGNMENT,
	tBl: TEXTBASELINE
}

ooo.R = {
	C: 'c', f: 'c', s: 'c', dc: 'c',
	
	t: 'i', //type->input
	
	borS: 'os'
}

_oO = function (a, b) {
	return oO[a] && oO[a][b] ? oO[a][b] : b
}
oO = function (a, b, c) {
	var val = U(a) ? _.k(ooo)
			: '*' == b ? $r(a)
			: D(c) ? oO(oO(c, a), b)
			: U(b) ? _.df(function (x, y) {
		return oO(a, x, y)
	}, ooo[a] || {})
			: ooo[a] && ooo[a][b] ? ooo[a][b]
			: b
	return val
}

Oo = function (a, b) {
	return ooo[a] && ooo[a][b]
}
$r = function (a, b) {
	var vals = _.v(oO(a = a || 'c'))
	return Oo(a, b) || vals[_.r(_.s(vals) - 1)]
}
oO.c = function (c) {
	return oO('c', c)
}
oO.k =  function (a) {
	return oO('k', a)
}
oO.t =   function (a) {
	return oO('t', a)
}
oO.e =   function (a) {
	return oO('e', a)
}
oO.i =   function (a) {
	return oO('i', a)
}
oO.s =  function (a) {
	return oO('s', a)
}
oO.q = function (f, m) {
	$(function () {
		Q(m || mf, f)
	})
}
oO.V = function (a) {
	return _.v(S(a) ? oO(a) : a)
}
oOo = function (a, b) {
	if (U(b)) {
		return _I(lC(V(oO(a))))
	}
	if (oOo(a)[lC(b)]) {
		return b
	}
}
$L('traverse', 'manip', 'ipsum', 'text', 'ajax', 'fnCol', 'move')
function traverse() {
//_.ex = $ext = ext = function (o) {o.e = o.extend;return o}	// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
	$.tK = function (k, toAdd) {
		var g = G(arguments),
				t = $.t()
		t.K(k)
		if (A(toAdd)) {
			_.e(toAdd, function (q) {
				t.A(q)
			})
		}
		return t
	}
	$.ipI = function (id, arr) {
		var q = $.ip().id(id)
		if (A(arr)) {
			_.e(arr, function (qq) {
				q.A(qq)
			})
		}
		else if (arr) {
			q.A(arr)
		}
		return q
	}
	$.ulI = function (id, arr) {
		var q = $.ul().id(id)
		if (A(arr)) {
			_.e(arr, function (qq) {
				q.A(qq)
			})
		}
		else if (arr) {
			q.A(arr)
		}
		return q
	}
	$.fn.oh = function () {
		return this[0].outerHTML
	}
	$.fn.h = $.fn.ht = $.fn.html
	$.fn.t = $.fn.tx = $.fn.text
	$.fn.e = $.fn.ea = $.fn.each
	$.fn.f = $.fn.fi = $.fn.find
	$.fn.hd = $.fn.hide
	$.fn.sh = $.fn.show
	$.fn.gg = $.fn.toggle
	$.fn.osP = function () {
		return this.offsetParent
	}
	$.fn.g = function (ix) {
		if (U(ix)) {
			return this[0]
		}
		return this.eq(ix)
	}
	$.fn.ch = function () {
		return this.children()
	}
	$.fn._ = $.fn.closest
	$.fn.__ = $.fn.pa = $.fn.pr = $.fn.parent
	$.fn.sib = function () {
		var g = G(arguments);
		return this.sib.apply(this.g)
	}
	$.fn.N = $.fn.next
	$.fn.r = $.fn.rm = $.fn.xx = function () {
		var e = this
		e.remove()
		return e
	}
	$.fn.fRm = function (a) {
		return this.fi(a).rm()
	}
	$.fn.E = function (html) {
		var $el = this, g = G(arguments)
		//$l('$.fn.E in web.js (betweetn fRm and rp')
		$el.empty() //if (S(html)) {this.h(html); return this}
		g.A ? _.e(g.f, add) :
				g.e(add)
		return $el
		function add(q) {
			A(q) ? _.e(q, add) :
					$el.A(q)
		}
	}
	$.fn.rp + $.fn.replace
	$.fn.A = function (stuff) {
		if (U(stuff)) {
			$('body').append(this);
			return this
		}
		this.append.apply(this, arguments)
		return this
	}
	$.fn.a2 = function (a) {
		a.A(this);
		return this
	}
	$.fn.pp = function (a) {
		this.pp(a);
		return this
	}
	$.fn.p2 = $.fn.pp2 = function (a) {
		this.prependTo(a);
		return this
	}
	$.fn.bf = $.fn.iBf = $.fn.iB = $.fn.insertBefore
	$.fn.iA = $.fn.insertAfter
	$.fn.wr = $.fn.wrap
	$.fn.fCt = function (str) {
		return this.fi(":contains(" + str + ")")
	}
	$.ct = $.cts = $.contains
	function root() {
		$.bd = function () {
			var bd = $('body')
			return bd
		}
		$bd = function () {
			var g = G(arguments),
					bd = $('body')
			if (g.f) {
				bd.css.apply(bd, g)
			}
			return bd
		}
		$.A = function () {
			var g = G(arguments),
					bd = $('body')
			$.fn.A.apply(bd, g)
			return $
		}
		$.E = function () {
			$.bd().E()
		}
		$.H = function (html) {
			$(html).A()
			return $
		}
	}
	
	attributes()
	function attributes() {
		$.fn.at = $.fn.attr
		$.fn.foc = $.fn.focus
		$.iI = function (i) {
			if (O(i)) {
				return S($(i)[0].src)
			}
		}
		$.src = function f(e) {
			if (e.image) {
				e = e.image
			}
			if ($.tCan(e)) {
				e = $.tCan(e)
			}
			if (e.src) {
				e = e.src
			}
			if (e.toDataURL) {
				e = _.tDU(e)
			}
			return s$(e).contains('data:') ? e
					: S(e) ? _.src(e)
					: 0
		}
		$.fn.ed = function (ed) {
			if (U(ed)) {
				return this.attr('contenteditable')
			}
			this.attr('contenteditable', ed ? true : false)
			return this
		}
		$.fn.rmAt = $.fn.removeAttr
		$.fn.edFoc = function () {
			return this.ed(1).foc()
		}
		$.fn.nm = $.fn.name = function (name) {
			return name ? this.at('name', name) :
					this.at('name')
		}
		$.fn.idNm = function (id, nm) {
			this.id(id)
			this.nm(nm || id)
			return this
		}
		$.fn.i = $.fn.sr = $.fn.src = function (a) {
			if (U(a)) {
				return this.attr('src')
			}
			this.attr('src', _.src(a))
			return this
		}
		$.fn.n = function (name) {
			if (U(name)) {
				return this.attr('name')
			}
			this.attr('name', name);
			return this
		}
		$.fn.ml = $.fn.mlt = function (m) {
			return this.at('multiple', true)
		}
		$.fn.ph = $.fn.placeholder = function (forWhat) {
			return this.attr('placeholder', forWhat)
		}
		$.fn.ck = $.fn.chk = function () {
			this.at('checked', true)
		}
		$.fn.ty = $.fn.type = function (type) {
			if (U(type)) {
				return this.attr('type')
			}
			this.attr('type', type);
			return this
		}
		$.fn.id = function (id) {
			if (U(id)) {
				return this.attr('id')
			}
			;
			this.attr('id', id);
			return this
		}
		$.fn.hr = $.fn.hf = $.fn.href = function (href) {
			if (U(href)) {
				return this.attr('href')
			}
			this.attr('href', href);
			return this
		}
		$.fn.fr = $.fn.for = function (forWhat) {
			return this.attr('for', forWhat)
		}
		$.fn.ro = $.fn.role = function (role) {
			if (U(role)) {
				return this.attr('role')
			}
			this.attr('role', role)
			return this
		}
		$.fn.tt = $.fn.ti = function (a) {
			this.at('title', a)
			return this
		}
		$.fn.d = $.fn.da = $.fn.data
		$.fn.v = function (newVal) {
			var g = G(arguments)
			if (U(newVal)) {
				var v = this.val()
				if (g.n) {
					this.val('')
				}
				return v
			}
			this.val(newVal);
			return this
		}
		$.fn.V = function (newVal) {
			var g = G(arguments)
			if (U(newVal)) {
				var v = this.val()
				this.val('')
				return v
			}
			this.val(newVal);
			return this
		}
		$.fn.v = $.fn.val
		$.fn.v_ = function () {
			var val = this.val();
			this.val('');
			return val
		}
		$.v = function (id) {
			return $('#' + id).val()
		}
		$.V = function (id) {
			var $el = $('#' + id)
			var val = $el.val()
			$el.val('')
			return val
		}
	}
}
function manip() {
}
function ipsum() {
	$.ips = function (len) {
		len = len || 1;
		var str = '';
		_.t(len, function () {
			str = str + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
		});
		return str
	}
	$.ipsP = function (len) {
		return $.p().A($.ipsum(len))
	}
	$.fn.ips = $.fn.ipsum = function () {
		var that = this
		_.each(arguments, function (num) {
			that.A($.ipsum(num))
		})
		return this
	}
	$.fn.ipsumP = function () {
		var el = this
		_.e(arguments, function (num) {
			el.A($.ipsumP(num))
		})
		return el
	}
	ips1 = 'dolor sit amet, consectetuer adipi nibh euismod tincidunt ut laoreet dolore magna aliquam' +
	'erat volutpat. Ut wisi enim ad mini corper suscipit lobortis nisl ut a commodo consequat.'
	ips2 = l1 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +
	'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo' +
	'consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat' +
	'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore' +
	'te feugait nulla facilisi.'
	ips3 = l2 = 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper' +
	'suscipit lobortis nisl ut aliquip ex ea commodo consequat.' +
	'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,' +
	'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
	'et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue' +
	'duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,' +
	'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt' +
	'ut laoreet dolore magna aliquam erat volutpat.'
}
function text() {
	$.fn.tt = function (t, c) {
		var p = $.p(t).mH(10).pH(30)
				.fS(24).K('text-center')
		this.A(p,
				$.hr().fS(10))
		return this
	}//name conflict?
}
function ajax() {
	$.pD = function (ev) {
		ev.preventDefault()
		return ev
	}
	$.iQ = function (o) {
		return O(o) && F(o.ajaxStart)
	}
	$.iO$ = function (o) {
		return O$(o) && !$.iQ(o)
	}
	$.g = $.G = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.G, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} :
		{p: g[0], d: g[1], fn: g[2]};
		$.get(S.eL(o.p), o.d || {},
				function (d) {
					o.fn = o.fn || function () {
						return 'boo ya!'
					};
					o.fn(d)
				})
	}
	$.eG = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.eG, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} :
		{p: g[0], d: g[1], fn: g[2]};
		$.G(o.p, o.d || {},
				function (dd) {
					_.e(dd, function (d) {
						o.fn(d)
					})
				});
		return $
	}
	$.txG = function (url) {
		$.get('/' + url, function (aa) {
			a = aa
		})
	}
	$.j = $.gJ = $.Gj = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.Gj, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		o.fn = o.fn || function () {
			return 'boo ya!'
		};
		$.getJSON(
				S.eL(o.p),
				o.d || {},
				function (d) {
					o.fn(d)
				});
		return $
	}
	$.eJ = $.eGj = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.eJ, g[0])
		}
		o = F(g[1]) ?
		{p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		$.Gj(o.p, o.d || {}, function (dd) {
			_.e(dd, function (d) {
				o.fn(d)
			})
		});
		return $
	}
	$.po = $.P = function () {
		var g = G(arguments), o;
		o = F(g.s) ?
		{url: g.f, fn: g.s} :
		{url: g.f, da: g.s, fn: g.t};
		o.da = O(o.da) ? o.da : D(o.da) ? {da: o.da} : {}
		o.fn = o.fn || function () {
			return 'boo ya!'
		};
		o.url = S.eL(o.url)
		$.post(o.url, o.da, function (d) {
			o.fn(o.da, o)
		})
		return $
	}
	$.eP = $.ePo = function () {
		var g = G(arguments);
		if (U(g[1])) {
			return _.p($.eP, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		$.P(o.u, o.d || {}, function (dd) {
			_.e(dd, function (d) {
				o.fn(d)
			})
		});
		return $
	}
	$.aj = function (ob) {
		return $.ajax(ob)
	}
	$.XML = function () {
		alert('$.XML!');
		return new XMLHttpRequest()
	}
}
function fnCol() {
	$.red = function () {
		return $.d().C('r')
	}
	$.blue = function () {
		return $.d().C('b')
	}
	$.green = function () {
		return $.d().C('g')
	}
}
function move() {
	$.fn.toR = $.fn.moveRight = function (num) {
		alert('toL')
		num = num || 20
		if (this.left() == 'auto') {
			this.left(0)
		}
		this.left(parseInt(this.left()) + num)
		return this
	}
	$.fn.toL = $.fn.moveLeft = function (num) {
		alert('toL')
		num = num || 20
		if (this.left() == 'auto') {
			this.left(0)
		}
		this.left(parseInt(this.left()) - num)
		return this
	}
	$.fn.toU = $.fn.moveDown = function (num) {
		alert('toL')
		num = num || 20
		if (this.top() == 'auto') {
			this.top(0)
		}
		this.top(this.top() - num)
		return this
	}
	$.fn.toD = $.fn.moveDown = function (num) {
		alert('toL')
		num = num || 20
		if (this.top() == 'auto') {
			this.top(0)
		}
		this.top(this.top() + num)
		return this
	}
}
$.isCvId = $.iCI = function (id) {
	return S(id) && $('#' + id).length
}
$.c0 = function () {
	var g = G(arguments)
	$.c.apply($, g.A ? g.f : g)[0]
}
$0 = function () {
	return $.apply(null, arguments)[0]
}
$.iI = function (i) {
	if (O(i)) {
		return S($(i)[0].src)
	}
}
TANGLE1 = function () {
	a = $.divA('r', 50, 50).XY(50).A().pad(10)
	b = $.divA('b', 100, 100).XY(100).A().pad(10)
	c = $.divA('g', 200, 200).XY(200).A().pad(10)
	d = $.divA('y', 400, 400).XY(400).A().pad(10)
	y = function (aa, bb, cc, dd) {
		if (aa && U(bb)) {
			aa.A().P('a')
		}
		if (bb) {
			bb.A(aa.P('static'))
		}
		if (dd) {
			dd.A(cc.P('s'))
		}
	}
}
TNGL = TANGLE = function () {
	z()
	a = $.dA('r', 50, 50).XY(50).A().pad(10)
	b = $.dA('b', 100, 100).XY(100).A().pad(10)
	c = $.dA('g', 200, 200).XY(200).A().pad(10)
	d = $.dA('y', 400, 400).XY(400).A().pad(10)
	y = function (aa, bb, cc, dd) {
		if (aa && U(bb)) {
			aa.A().P('a')
		}
		if (bb) {
			bb.A(aa.P('static'))
		}
		if (dd) {
			dd.A(cc.P('s'))
		}
	}
}
MGA = MARGINAUTO = function () {
	o = outer = $.div('b', 500, 500).A()
	o.A(i = inner = $.div('r', 100, 100))
	i.mar('auto')
	o.mar('auto')
}
$.fn.ps = function () {//rel to document
	return this.position()
}
$.fn._os = function () {
	return this.offset() //rel to offset parent
}
$.fn.os = function () {
	var os = this.offset()
	return {x: os.left, y: os.top}
}
$.fn.tN = function () {
	return this[0].tagName
}
$.fn.osP = function () {
	return this[0].offsetParent
}
$.fn.osT = function () {
	return this[0].offsetTop
}
$.fn.osT = function () {
	return this[0].offsetLeft
}
i$ = function (id) {
	return $('#' + id)
}
k$ = function (k) {
	return $('.' + k)
}
i$0 = function (id) {
	return $0('#' + id)
}
k$0 = function (k) {
	return $0('.' + k)
}
$.fn.gC = function (context) {
	return this[0].getContext(context || '2d')
}
$.rulers = function () {
	$.d('b', 100, 100).al(.3).dg()
	$.d('r', 100, 300).al(.3).dg()
}
window['Y'] = window['Y'] || {}
Y.uPop = function (i, size) {
	i = (O(i) && F(i.u)) ? i.u() : i
	size = size || 300
	return $.c().WH(size, size).fit(i)
}
Y.dUD = function (d, n) {
	$.P('getImageById', {data: d}, function (u) {
		upop(u, n)
	})
} //sk-send du of your (first) can-el
Y.dU = function () {
	var u
	c = $.c().fit('me')
	u = c.toDataURL()
	k.emit('du', u);
	return u
}
jQAnim()
jQAnimApps()
webEvents()
function jQAnim() {
	$.fn.st = $.fn.stop
	$.fn.fdT = $.fn.fd2 = $.fn.f2 = $.fn.fT = $.fn.fadeTo
	$.fn.gFr = $.fn.getFrame
	$.fn.sFr = $.fn.setFrame
	//// 
	an = function (q, a) {
		alert('an')
		if (q.han) {
			_.xI(q.han)
		}
		if (a.u) {
			q.bi(a.u)
		}
		if (a.n > 1) {
			q.han = _.sI(function () {
				a.c++
				if (!a.l && a.c > a.n) {
					_.xI(q.han);
					q.han = false
				}
				else {
					a.c %= a.n
				}
				q.sFr(a)
			}, a.r)
		}
	}
	$.an = function () {
		var bd = $.bd();
		return bd.j.apply(
				bd, G(arguments))
	}
	$.aF = $.anFr = $.anf = function (n, w) {
		var c = 0;
		n = n || 10;
		w = w || 20;
		$.ev(function () {
			q.sFr(c, w)
			c = (c + 1) % n
		})
	}
	$.notAn = function (a) { // sel
		return a.filter(':not(:animated)')
	}
	$.fn.a = function (a, b, c, d) {
		ANob = {
			B: 'bottom', L: 'left', R: 'right', T: 'top',
			b: 'borderWidth', bb: 'borderBottomWidth',
			bl: 'borderLeftWidth', br: 'borderRightWidth',
			bt: 'borderTopWidth', bs: 'borderSpacing',
			C: 'backgroundColor', f: 'fontSize', h: 'height', w: 'width', H: 'maxHeight', W: 'maxWidth',
			mh: 'minHeight', mw: 'minWidth',
			i: 'textIndent', l: 'letterSpacing', lh: ' lineHeight',
			m: ' margin', mb: 'marginBottom', ml: 'marginLeft', mr: 'marginRight',
			mt: 'marginTop', o: ' outlineWidth',
			p: ' padding', pb: 'paddingBottom',
			pl: 'paddingLeft', pr: 'paddingRight', pt: 'paddingTop',
			ws: ' wordSpacing', x: 'backgroundPositionX', y: 'backgroundPositionY'
		}
		var g = G(arguments), o
		o = g.f
		var q = this
		if (O(a)) {
			if (a.c) {
				a.color = oO('c', a.c)
			}
			if (a.C) {
				a.backgroundColor = oO('c', a.C)
			}
		}
		q.animate(a, b, c, d)
		return q
		if (o.C) {//$l(o.C+'-->');
			o.C = oO('c', o.C);
			//$l(o.C)
		}
		_.e(o, function (v, k) {
			if (ANob[k]) {
				o[ANob[k]] = v
			}
		})
		if (N(g.s)) {
			g.s *= 1000
		}
		_p = o
		this.an(o, g.s, g.t, g[3], g[4])
		return this
		$.an = $.j = function () {
			var bd = $.bd();
			return bd.j.apply(bd, G(arguments))
		}
	}
	$.fn.an = function (a, b, c, d) {
		var g = G(arguments), q = this
		//if (N(g.s)) {g.s *= 1000}
		this.animate($sty(g.f), g.s, g.t, g[3], g[4])
		return this
	}
	$.fn.anFr = $.fn.animateFrames
	$.fn.qu = $.fn.queue
	$.fn.cQ = $.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
	$.fn.dq = $.fn.dqu = $.fn.dequeue
	$.fn.animloop = function () {
		var that = this
		this.show("slow")
		this.animate({"marginLeft": "300px"}, 2000)
				.animate({"marginLeft": "0px"}, 2000)
		this.hide("slow", function () {
			that.animloop()
		})
	}
}
function jQAnimApps() {
	JQ0 = BOR = BORDERS = function () {
		function borders() {
			BORDERS = function () {
				z()
				change = function () {
					$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
							.J({"border-top-width": 10}, 1000)
							.J({"border-bottom-width": 10}, 1000)
							.J({"border-left-width": 10}, 1000)
							.J({"border-right-width": 10}, 1000)
							.J({"padding-top": 10}, 1000)
							.J({"padding-bottom": 10}, 1000)
							.J({"padding-left": 10}, 1000)
							.J({"padding-right": 10}, 1000)
							.J({"margin-top": 10}, 1000)
							.J({"margin-bottom": 10}, 1000)
							.J({"margin-left": 10}, 1000)
							.J({"margin-right": 10}, 1000)
							.J({"margin-top": 0}, 1000)
							.J({"margin-bottom": 0}, 1000)
							.J({"margin-left": 0}, 1000)
							.J({"margin-right": 0}, 1000)
							.J({"padding-top": 0}, 1000)
							.J({"padding-bottom": 0}, 1000)
							.J({"padding-left": 0}, 1000)
							.J({"padding-right": 0}, 1000)
							.J({"border-top-width": 0}, 1000)
							.J({"border-bottom-width": 0}, 1000)
							.J({"border-left-width": 0}, 1000)
							.J({"border-right-width": 0}, 1000)
				}
				$.$$(
						function () {
							z();
							_.times(10, change)
						}
				)
				_.times(10, change)
			}
			BORDERS1 = function () {
				change = function () {
					$.img('me').WH(100).A().C('g').bs('-')  //bs??
							.j({bt: 40}, 1000)
							.j({bb: 40}, 1000)
							.j({bl: 40}, 1000)
							.j({br: 40}, 1000)
							.j({gt: 40}, 1000)
							.j({gb: 40}, 1000)
							.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
							.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
							.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
							.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
							.j({bt: 0}, 1000)
							.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
				}
				m$$(function () {
					z();
					_.times(10, change)
				})
				_.times(10, change)
			}
		}
		
		$.fn.an = $.fn.animate
		_.t(10, change)
		function change() {
			$.i('me', 100).A().C('g')
					.css(
					{
						borderStyle: 'dashed', borderWidth: '20px'
					}
			)
					.animate(
					{
						"border-top-width": 10
					}, 1000
			)
					.an({"border-bottom-width": 10}, 1000)
					.an({"border-left-width": 10}, 1000)
					.an({"border-right-width": 10}, 1000)
					.an({"padding-top": 10}, 1000)
					.an({"padding-bottom": 10}, 1000)
					.an({"padding-left": 10}, 1000)
					.an({"padding-right": 10}, 1000)
					.an({"margin-top": 10}, 1000)
					.an({"margin-bottom": 10}, 1000)
					.an({"margin-left": 10}, 1000)
					.an({"margin-right": 10}, 1000)
					.an({"margin-top": 0}, 1000)
					.an({"margin-bottom": 0}, 1000)
					.an({"margin-left": 0}, 1000)
					.an({"margin-right": 0}, 1000)
					.an({"padding-top": 0}, 1000)
					.an({"padding-bottom": 0}, 1000)
					.an({"padding-left": 0}, 1000)
					.an({"padding-right": 0}, 1000)
					.an({"border-top-width": 0}, 1000)
					.an({"border-bottom-width": 0}, 1000)
					.an({"border-left-width": 0}, 1000)
					.an({"border-right-width": 0}, 1000)
		}
		
		/*
		 $.img('me').WH(100).A().C('g').bs('-')  //bs??
		
		 .j({bt: 40}, 1000)
		
		 .j({bb: 40}, 1000)
		 .j({bl: 40}, 1000)
		 .j({br: 40}, 1000)
		 .j({gt: 40}, 1000)
		 .j({gb: 40}, 1000)
		 .j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
		 .j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
		 .j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
		 .j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
		 .j({bt: 0}, 1000)
		 .j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
		 };
		 */
		function alt() {
			BORDERS = function () {
				z()
				change = function () {
					$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
							.J({"border-top-width": 10}, 1000)
							.J({"border-bottom-width": 10}, 1000)
							.J({"border-left-width": 10}, 1000)
							.J({"border-right-width": 10}, 1000)
							.J({"padding-top": 10}, 1000)
							.J({"padding-bottom": 10}, 1000)
							.J({"padding-left": 10}, 1000)
							.J({"padding-right": 10}, 1000)
							.J({"margin-top": 10}, 1000)
							.J({"margin-bottom": 10}, 1000)
							.J({"margin-left": 10}, 1000)
							.J({"margin-right": 10}, 1000)
							.J({"margin-top": 0}, 1000)
							.J({"margin-bottom": 0}, 1000)
							.J({"margin-left": 0}, 1000)
							.J({"margin-right": 0}, 1000)
							.J({"padding-top": 0}, 1000)
							.J({"padding-bottom": 0}, 1000)
							.J({"padding-left": 0}, 1000)
							.J({"padding-right": 0}, 1000)
							.J({"border-top-width": 0}, 1000)
							.J({"border-bottom-width": 0}, 1000)
							.J({"border-left-width": 0}, 1000)
							.J({"border-right-width": 0}, 1000)
				}
				$.$$(
						function () {
							z();
							_.times(10, change)
						}
				)
				_.times(10, change)
			}
			BORDERS1 = function () {
				change = function () {
					$.img('me').WH(100).A().C('g').bs('-')  //bs??
							.j({bt: 40}, 1000)
							.j({bb: 40}, 1000)
							.j({bl: 40}, 1000)
							.j({br: 40}, 1000)
							.j({gt: 40}, 1000)
							.j({gb: 40}, 1000)
							.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
							.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
							.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
							.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
							.j({bt: 0}, 1000)
							.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
				}
				m$$(function () {
					z();
					_.times(10, change)
				})
				_.times(10, change)
			}
		}
	}
	JQ0 = BOR = BORDERS = function () {
		function borders() {
			BORDERS = function () {
				z()
				change = function () {
					$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
							.J({"border-top-width": 10}, 1000)
							.J({"border-bottom-width": 10}, 1000)
							.J({"border-left-width": 10}, 1000)
							.J({"border-right-width": 10}, 1000)
							.J({"padding-top": 10}, 1000)
							.J({"padding-bottom": 10}, 1000)
							.J({"padding-left": 10}, 1000)
							.J({"padding-right": 10}, 1000)
							.J({"margin-top": 10}, 1000)
							.J({"margin-bottom": 10}, 1000)
							.J({"margin-left": 10}, 1000)
							.J({"margin-right": 10}, 1000)
							.J({"margin-top": 0}, 1000)
							.J({"margin-bottom": 0}, 1000)
							.J({"margin-left": 0}, 1000)
							.J({"margin-right": 0}, 1000)
							.J({"padding-top": 0}, 1000)
							.J({"padding-bottom": 0}, 1000)
							.J({"padding-left": 0}, 1000)
							.J({"padding-right": 0}, 1000)
							.J({"border-top-width": 0}, 1000)
							.J({"border-bottom-width": 0}, 1000)
							.J({"border-left-width": 0}, 1000)
							.J({"border-right-width": 0}, 1000)
				}
				$.$$(
						function () {
							z();
							_.times(10, change)
						}
				)
				_.times(10, change)
			}
			BORDERS1 = function () {
				change = function () {
					$.img('me').WH(100).A().C('g').bs('-')  //bs??
							.j({bt: 40}, 1000)
							.j({bb: 40}, 1000)
							.j({bl: 40}, 1000)
							.j({br: 40}, 1000)
							.j({gt: 40}, 1000)
							.j({gb: 40}, 1000)
							.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
							.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
							.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
							.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
							.j({bt: 0}, 1000)
							.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
				}
				m$$(function () {
					z();
					_.times(10, change)
				})
				_.times(10, change)
			}
		}
		
		$.fn.an = $.fn.animate
		_.t(10, change)
		function change() {
			$.i('me', 100).A().C('g')
					.css(
					{
						borderStyle: 'dashed', borderWidth: '20px'
					}
			)
					.animate(
					{
						"border-top-width": 10
					}, 1000
			)
					.an({"border-bottom-width": 10}, 1000)
					.an({"border-left-width": 10}, 1000)
					.an({"border-right-width": 10}, 1000)
					.an({"padding-top": 10}, 1000)
					.an({"padding-bottom": 10}, 1000)
					.an({"padding-left": 10}, 1000)
					.an({"padding-right": 10}, 1000)
					.an({"margin-top": 10}, 1000)
					.an({"margin-bottom": 10}, 1000)
					.an({"margin-left": 10}, 1000)
					.an({"margin-right": 10}, 1000)
					.an({"margin-top": 0}, 1000)
					.an({"margin-bottom": 0}, 1000)
					.an({"margin-left": 0}, 1000)
					.an({"margin-right": 0}, 1000)
					.an({"padding-top": 0}, 1000)
					.an({"padding-bottom": 0}, 1000)
					.an({"padding-left": 0}, 1000)
					.an({"padding-right": 0}, 1000)
					.an({"border-top-width": 0}, 1000)
					.an({"border-bottom-width": 0}, 1000)
					.an({"border-left-width": 0}, 1000)
					.an({"border-right-width": 0}, 1000)
		}
		
		/*
		 $.img('me').WH(100).A().C('g').bs('-')  //bs??
		
		 .j({bt: 40}, 1000)
		
		 .j({bb: 40}, 1000)
		 .j({bl: 40}, 1000)
		 .j({br: 40}, 1000)
		 .j({gt: 40}, 1000)
		 .j({gb: 40}, 1000)
		 .j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
		 .j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
		 .j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
		 .j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
		 .j({bt: 0}, 1000)
		 .j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
		 };
		 */
		function alt() {
			BORDERS = function () {
				z()
				change = function () {
					$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
							.J({"border-top-width": 10}, 1000)
							.J({"border-bottom-width": 10}, 1000)
							.J({"border-left-width": 10}, 1000)
							.J({"border-right-width": 10}, 1000)
							.J({"padding-top": 10}, 1000)
							.J({"padding-bottom": 10}, 1000)
							.J({"padding-left": 10}, 1000)
							.J({"padding-right": 10}, 1000)
							.J({"margin-top": 10}, 1000)
							.J({"margin-bottom": 10}, 1000)
							.J({"margin-left": 10}, 1000)
							.J({"margin-right": 10}, 1000)
							.J({"margin-top": 0}, 1000)
							.J({"margin-bottom": 0}, 1000)
							.J({"margin-left": 0}, 1000)
							.J({"margin-right": 0}, 1000)
							.J({"padding-top": 0}, 1000)
							.J({"padding-bottom": 0}, 1000)
							.J({"padding-left": 0}, 1000)
							.J({"padding-right": 0}, 1000)
							.J({"border-top-width": 0}, 1000)
							.J({"border-bottom-width": 0}, 1000)
							.J({"border-left-width": 0}, 1000)
							.J({"border-right-width": 0}, 1000)
				}
				$.$$(
						function () {
							z();
							_.times(10, change)
						}
				)
				_.times(10, change)
			}
			BORDERS1 = function () {
				change = function () {
					$.img('me').WH(100).A().C('g').bs('-')  //bs??
							.j({bt: 40}, 1000)
							.j({bb: 40}, 1000)
							.j({bl: 40}, 1000)
							.j({br: 40}, 1000)
							.j({gt: 40}, 1000)
							.j({gb: 40}, 1000)
							.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
							.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
							.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
							.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
							.j({bt: 0}, 1000)
							.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
				}
				m$$(function () {
					z();
					_.times(10, change)
				})
				_.times(10, change)
			}
		}
	}
	JQ1 = EF3 = HIDESHOWNICE = HIDE = function () {
		$s({
			p: {C: '#bca', w: 200, bor: '1px solid green'},
			div: {w: 100, h: 100, C: 'r'}
		})
		$.p('$')
		$.bt('hd').id('hd')
		$.bt('sh').id('sh')
		d = $.dK('tg')
		$('#hd').$(function () {
			d.hd('sl', {d: 'r'}, 500)
		})
		$('#sh').$(function () {
			d.sh('sl', {d: 'd'}, 2000)
		})
		function alt() {
			JU33 = HIDESHOWNICE = HIDE = function () {
				$.s({
					p: {C: '#bca', w: 200, bor: '1px solid green'},
					div: {w: 100, h: 100, C: 'r'}
				})
				$.p('$')
				$.bt('hd').id('hd')
				$.bt('sh').id('sh')
				d = $.dK('tg')
				$('#hd').$(function () {
					d.hd('sl', {d: 'r'}, 500)
				})
				$('#sh').$(function () {
					d.sh('sl', {d: 'd'}, 2000)
				})
			}
		}
	}
	JQ2 = TANGLE = function () {
		a = $.divA('r', 50, 50).XY(50).A().pad(10)
		b = $.divA('b', 100, 100).XY(100).A().pad(10)
		c = $.divA('g', 200, 200).XY(200).A().pad(10)
		d = $.divA('y', 400, 400).XY(400).A().pad(10)
		y = function (aa, bb, cc, dd) {
			if (aa && U(bb)) {
				aa.A().P('a')
			}
			if (bb) {
				bb.A(aa.P('static'))
			}
			if (dd) {
				dd.A(cc.P('s'))
			}
		}
		function alt() {
			TANGLE = function () {
				z()
				a = $.divA('r', 50, 50).XY(50).A().pad(10)
				b = $.divA('b', 100, 100).XY(100).A().pad(10)
				c = $.divA('g', 200, 200).XY(200).A().pad(10)
				d = $.divA('y', 400, 400).XY(400).A().pad(10)
				y = function (aa, bb, cc, dd) {
					if (aa && U(bb)) {
						aa.A().P('a')
					}
					if (bb) {
						bb.A(aa.P('static'))
					}
					if (dd) {
						dd.A(cc.P('s'))
					}
				}
			}
		}
	}
	JQ3 = IP1 = FOC = SPANFOCUS = function () {
		$.sp('Some Span').id("my-span").at('tabindex', "0")
		$.sp('Some Span1').id("my-span1")//.at('tabindex',"0")
		$.sp('Some Span2').id("my-span2").at('tabindex', "0")
		document.getElementById('my-span').focus()
		document.getElementById('my-span2').focus()
	}
	JQ4 = HOVERBOX = function () {
		d = $.d('o', 500, 500, '+').id('test')
		y = $.c('p', 400).K('box').hd();
		d.A(y);
		$('#test').hover(function () {
			$('.box').stop().fadeTo(200, 1)
		}, function () {
			$('.box').stop().fadeTo(200, 0)
		})
	}
	JQ5 = EF2 = HIGHLIGHT = HLT = function () {
		$s({
			p: {C: 'y', w: 200, B: '1px solid green'},
			d: {C: 'r', w: 100, h: 100}
		})//  df HL col is yellow.// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd ) // hgl col= "#ffff99".    mode  of the effect =show | hide
		$.dK('target')
		$.bt('Highlight: ', function () {
			$(".target").ef("highlight",
					{color: "#669966"}, 3000)
		})
		function alt() {
			JU44 = HIGHLIGHT = HLT = function () {
				$.h({
					p: {C: 'y', w: 200, B: '1px solid green'},
					d: {C: 'r', w: 100, h: 100}
				})//  df HL col is yellow.// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd ) // hgl col= "#ffff99".    mode  of the effect =show | hide
				$.dK('target')
				$.bt('Highlight: ', function () {
					$(".target").ef("highlight",
							{color: "#669966"}, 3000)
				})
			}
		}
	}
	JQ7 = MAG = FRIDGEMAG = function () {
		$s({$: {fS: 40}})
		word = function (text, c1, c2) {
			var s = $.sp(text).C(c1, c2).drag()
			return s
		}
		w = word('hello', 'b', 'g');
		word('sicko', 'g', 'b');
		word('why, i oughta..', 'p', 'x');
		word('it was raining..', 'j', 'k');
		word('who ya gonna call?', 'h', 'i');
		word('dag nabit!', 'f', 'g');
		word('i like', 'd', 'e');
		word('tomorrow', 'a', 'c');
		word('me', 'r', 'b')
	}
	JQ8 = FLASH = function () {
		z();
		timeline = $.dA('+').WH('auto');
		timeline.A($.c('b', 500, 500), $.br());
		_.t(24, function (x) {
			timeline.A(
					$.d('r', 100, 100)
							.css({display: 'inline-block'}).H((x * 10) + 100)
			)
		})
	}
	JQ6 = JQ10 = CORNERS = function () {
		var W = function () {
			return $('body').W()
		}
		var H = function () {
			return $('body').H()
		}
		Z = function () {
		}
		function corners() {
			CORNERS = function () {
				$.fn.grow = function () {
					originalWidth = this.W()
					originalHeight = this.H()
					this.on('mousedown', function (e) {
						mx = e.clientX
						my = e.clientY
						$.mouseMove(function (e) {
							this.WH(originalWidth + e.clientX - mx,
									originalHeight + e.clientY - my)
						})
						$.mouseUp(function () {
							$(this).off()
						})  //mouseUp anything?
						this.children().on('mousedown', function (e) {
							e.stopPropagation()
						})
					})
				}
				//  dva(2, 2, 2, 2 )
				div = $.divA(200, 200).XY(200)
				div.A(
						$.divA('red', 20, 20).top(-10).left(-10),
						$.divA('yellow', 20, 20).bottom(-10).right(-10),
						$.divA('green', 20, 20).top(-10).right(-10),
						$.divA('blue', 20, 20).bottom(-10).left(-10)
				)
				i = $.divF('purple').col('white').fontSize(20).opacity(.2).textAlign('center')
						.width('100%').top(100)
				i.H(W() + ' * ' + H())
				$('*').resize(function () {
					i.H(W() + ' * ' + H())
				})
				$.$(function () {
					rat(function () {
						co()
					}, 10)
				})
				i.grow()
			}
			CORNERS = function () {
				$.fn.grow = function () {
					originalWidth = this.W()
					originalHeight = this.H()
					this.on('mousedown', function (e) {
						mx = e.clientX
						my = e.clientY
						$.mouseMove(function (e) {
							this.WH(originalWidth + e.clientX - mx,
									originalHeight + e.clientY - my)
						})
						$.mouseUp(function () {
							$(this).off()
						})  //mouseUp anything?
						this.children().on('mousedown', function (e) {
							e.stopPropagation()
						})
					})
				}
				//  dva(2, 2, 2, 2 )
				div = $.divA(200, 200).XY(200)
				div.A(
						$.divA('red', 20, 20).top(-10).left(-10),
						$.divA('yellow', 20, 20).bottom(-10).right(-10),
						$.divA('green', 20, 20).top(-10).right(-10),
						$.divA('blue', 20, 20).bottom(-10).left(-10)
				)
				i = $.divF('purple').col('white').fontSize(20).opacity(.2).textAlign('center')
						.width('100%').top(100)
				i.H(W() + ' * ' + H())
				Z(function () {
					i.H(W() + ' * ' + H())
				})
				$.$(function () {
					rat(function () {
						co()
					}, 10)
				})
				i.grow()
			}
		}
		
		$.fn.grow = function () {
			originalWidth = this.W()
			originalHeight = this.H()
			this.on('mousedown', function (e) {
				mx = e.clientX
				my = e.clientY
				$.mouseMove(function (e) {
					this.WH(originalWidth + e.clientX - mx,
							originalHeight + e.clientY - my)
				})
				$.mouseUp(function () {
					$(this).off()
				})  //mouseUp anything?
				this.children().on('mousedown', function (e) {
					e.stopPropagation()
				})
			})
		}
		$.divF = $.div
		//  dva(2, 2, 2, 2 )
		div = $.divA(200, 200).XY(200)
		div.A(
				$.divA('red', 20, 20).top(-10).left(-10),
				$.divA('yellow', 20, 20).bottom(-10).right(-10),
				$.divA('green', 20, 20).top(-10).right(-10),
				$.divA('blue', 20, 20).bottom(-10).left(-10)
		)
		i = $.divF('purple').col('white').fontSize(20).al(.2).textAlign('center')
				.width('100%').top(100)
		i.H(W() + ' * ' + H())
		Z(function () {
			i.H(W() + ' * ' + H())
		})
		$.$(function () {
			rat(function () {
				co()
			}, 10)
		})
		i.grow()
	}
}
function webEvents() {
	$L('upStart', 'downEnd', 'move')
	function upStart() {
		$.mu = function (fn) {
			$('body').on('mouseup', fn);
			return $
		}
		$.mu_ = function (fn) {
			$('body').off('mouseup', fn);
			return $
		}
		$.ts = function (fn) {
			$('body').on('touchstart', fn);
			return $
		}
		$.ts_ = function (fn) {
			$('body').off('touchstart', fn);
			return $
		}
		$.U = function (fn) {
			return $.mu(fn).ts(fn)
		}
		$.U_ = function (fn) {
			return $._mu(fn)._ts(fn)
		}
	}
	
	function downEnd() {
		$.md = function (fn) {
			$('body').on('mousedown', fn);
			return $
		}
		$.md_ = function (fn) {
			$('body').off('mousedown', fn);
			return $
		}
		$.te = function (fn) {
			$('body').on('touchend', fn);
			return $
		}
		$.te_ = function (fn) {
			$('body').off('touchend', fn);
			return $
		}
		$.D = function (fn) {
			return $.md(fn).te(fn)
		}
		$.D_ = function (fn) {
			return $.md_(fn).te_(fn)
		}
	}
	
	function move() {
		$.mm = function (fn) {
			$('body').on('mousemove', fn);
			return this
		}
		$.mm_ = function (fn) {
			$('body').off('mousemove', fn)
			return $
		}
		$.tm = function (fn) {
			$('body').on('touchmove', fn)
			return $
		}
		$.tm_ = function (fn) {
			$('body').off('touchmove', fn);
			return this
		}
		$.M = function (fn) {
			return $.mu(fn).tm(fn)
		}
		$.M_ = function (fn) {
			return $.mu_(fn).tm_(fn)
		}
	}
	clicks()
	function clicks() {
		$.off = function () {
			var dc = $(document)
			dc.off.apply(dc, arguments)
			return $
		}
		$.$ = function (f) {
			return $(document).on('click', _v(f))
			/*
			 $.$=function(){
			 var b=$('html')
			 b.click.apply(b, arguments)
			 return $
			 }*/
		}
		$.click = m$ = function (f) {
			return $(document).on('click', _v(f))
		}
		$.dblclick = m$$ = function (f) {
			return $(document).on('dblclick', _v(f))
		}
		$.fn.mCl = $.fn.cl = $.fn.$ = function (fn) {
			return this.click(fn)
		}
		$.fn.m = function (o) {
			var e = this
			if (o.mD) {
				e.mD(o.mD)
			}
			if (o.mU) {
				e.mD(o.mU)
			}
			if (o.pM) {
				e.pM(o.pM)
			}
			return e
		}
		$.fn.xPrp = function () {
			this.on('mousedown', function (e) {
				e.stopPropagation()
			})
			return this
		}
	}
	
	$.on = function () {
		var dc = $(body) // document ???
		dc.on.apply(dc, arguments)
		return $
	}
	$.$$ = function (f) {
		return $(body).on('dblclick', _v(f)) // document??
		//$.$$=function(a,b,c){$('body').$$(a,b,c); return this}
	}
	 
	function worldTouch() {
		$.ts(function (e) {
			w._mD = 1
			$mXY(e)
			$.touchmove($mXY)
			function $mXY(e) {
				$l('mXY')
				var touch = e.originalEvent.touches[0]
				mX = (touch.clientX - w.x) // / 30
				mY = (touch.clientY - w.y) // / 30
			}
		})
		$.te(function () {
			w._mD = 0
		})
	}
	
	$.fn.mU = function (l) {
		var q = this
		q.mouseup(function (e) {
			l(e.clientX, e.clientY)
		})
		return q
	}
	short()
	function short() {
		$.oMM = function (fn) {
			$.mm(function (e) {
				fn(e.clientX, e.clientY, e)
			});
			return $
		}
		$.oMD = $.fn.mD = function (fn) {
			$.md(function (e) {
				fn(e.clientX, e.clientY, e)
			})
			return $
		}
		$.oMU = function (fn) {
			$.mu(function (e) {
				fn(e.clientX, e.clientY, e)
			})
			return $
		}
	}
	
	$.fn.pM = function (l) {
		var c = this
		c.pressmove(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.mp = $.fn.mousePoint = function (e, scale) {
		scale = N(scale) ? scale : 1
		return V(e.pageX / scale, e.pageY / scale)
	}
	$.fn.pm = $.fn.pressmove = function (func) {
		var mouse_pressed
		this.mousedown(function () {
			mouse_pressed = true
		})
		this.mouseup(function () {
			mouse_pressed = false
		})
		this.mousemove(function (e) {
			if (mouse_pressed) {
				func(e)
			}
		})
		return this
	}
	$.fn.pM = function (l) {
		var c = this
		c.pressmove(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.dg = $.fn.drag = function () {
		this.A()
		this.each(function () {
			$(this).css('top', $(this).position().top)
			$(this).css('left', $(this).position().left)
		})
		this.P('a')
		this.on('mousedown', function (e) {
			var el = $(this)
			var offset = el.offset(),
					deltaX = e.pageX - offset.left,
					deltaY = e.pageY - offset.top
			$('html').on('mousemove', function (e) {
				var x = e.pageX - deltaX,
						y = e.pageY - deltaY
				el.left(x)
				el.top(y)
			}).on('mouseup', function () {
				$(this).off()
			})
		})
		//touchDrg(element)
		return this
	}
	$.scroll = function (a) {
		return $(window).scroll(a || function () {
			$('body').C('*')
		})
	}
	$.fn.hv = $.fn.hover
	$.tap = function (func) {
		this('body').on('keydown mousedown', func);
		return this
	}
	$.fn.fc = $.fn.focus
	KEYOB = KEYOBJ = {
		up: 38, u: 38,
		down: 40, d: 40,
		left: 37, l: 37,
		right: 39, r: 39,
		space: 32, s: 32,
		enter: 13, e: 13
	}
	$.kD = function self(key, fn) {
		if (O(key)) {
			_.e(key, function (fn, k) {
				if (s$(k).isUpper()) {
					$.kU(k.toLowerCase(), fn)
				}
				else {
					$.kD(k, fn)
				}
			})
			return
		}
		if (KEYOB[key]) {
			key = KEYOB[key]
		}
		$('body').on('keydown', function (e) {
			if (e.which == key) {
				fn(e, $.K)
			}
		})
	}
	$.kU = function (key, funk) {
		if (KEYOBJ[key]) {
			key = KEYOBJ[key]
		}
		$('body').on('keyup', function (e) {
			if (e.which == key) {
				funk(e, $.K)
			}
		})
	}
	$.K = {}
	$.space = function (fn) {
		return $.kD('space', fn)
	}
	KEYS = WHYQ = function () {
		cjs.Keys.l = cjs.Keys.left = false
		cjs.Keys.r = cjs.Keys.right = false
		cjs.Keys.u = cjs.Keys.up = false
		cjs.Keys.d = cjs.Keys.down = false
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			cjs.Keys.l = cjs.Keys.left = false
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			cjs.Keys.l = cjs.Keys.left = true
			cjs.Keys.dir = 'left'
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			cjs.Keys.l = cjs.Keys.left = true
			cjs.Keys.dir = 'left'
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			cjs.Keys.r = cjs.Keys.right = true
			cjs.Keys.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			cjs.Keys.r = cjs.Keys.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			cjs.Keys.u = cjs.Keys.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			cjs.Keys.u = cjs.Keys.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			cjs.Keys.d = cjs.Keys.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			cjs.Keys.d = cjs.Keys.down = false
		})
	}
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		$.K.l = 1
		$.K.L = 0
		$.K.dir = 'left'
	})
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		$.K.l = false
		$.K.l = 0;
		$.K.L = 1
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		$.K.r = 1
		$.K.dir = 'right'
		$.K.R = 0
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		$.K.r = 0;
		$.K.R = 1
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		$.K.u = 1;
		$.K.U = 0
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		$.K.u = 0;
		$.K.U = 1
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		$.K.d = 1;
		$.K.D = 0
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		$.K.d = 0;
		$.K.D = 1
	})
	$.wh = function (a, b) {
		return D(b) ? a.which == b : a.which
	}
	function keys1() {
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			$.K.l = 1
			$.K.L = 0
			$.K.dir = 'left'
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			$.K.l = false
			$.K.l = 0;
			$.K.L = 1
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			$.K.r = 1
			$.K.dir = 'right'
			$.K.R = 0
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			$.K.r = 0;
			$.K.R = 1
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			$.K.u = 1;
			$.K.U = 0
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			$.K.u = 0;
			$.K.U = 1
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			$.K.d = 1;
			$.K.D = 0
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			$.K.d = 0;
			$.K.D = 1
		})
	}
	
	JQ11 = QUU = function () {
		QUU = function () {
			$.x('x', 'quu')
			//  Qu   allow series fns to be execd asynch on an el
			//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
			//
			// which levgs qus to build up   series of steps
			// that will transtn  1+ CSS vals thru/out the dur
			//  can pass a cb fn to  .an()  to exec on done
			x = $('.x')
			x.an(
					{height: 20}, "slow",
					function () {
						$("#title").html("in cb")
					}
			)
			//   *Ques As Cbs
			// Instead of passing a cb as an argument,
			// we can add another function to the queue
			// that will act as our cb
			// This will execute
			// after all of the steps in the
			// anim  have completed.
			x.an(
					{height: 20},
					"slow"
			).qu(
					function () {
						$("#title").h("in anim")
						$(this).dq()
					}
			)
				//  tells jQ  to continto N-item in  que
				//    queued fn will exec   after the anim
				//  jQuery does not have any insight into
				// how the queue items function,
				// so we need to call .dequeue(),
				// which tells jQuery when to move to the n item in the queue.
				//  Another way of dequeuing
				// is by calling the fn that is passed to your cb
				// That fn will auto  call .dq() for you
					.qu(
					function (n) {
						$l("I fired!");
						n()
					}
			)
			//  *Custom Queues
			// Up to this point all of our anim
			// and qu   ex  have been using the def qu  n  which is fx.
			// Elements can have multiple queues
			// attached to them,
			// and we can give each of these qusa dif  name.
			// We can specify a custom queue name as
			// the 1st arg  to the .qu() method.
			x.qu(
					'an', function (n) {
						$l("Step 1");
						n()
					}
			).qu(
					'an', function (n) {
						$l("Step 2");
						n()
					}
			).dq('an');
			//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
			//   Clearing The Que
			//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
			x.qu(
					'an', function (n) {
						$l("nev log (qu clrd)");
						n()
					}
			)
					.clrQ('an').dq('an')
			//   In this example, nothing will happen as we removed everything from the steps queue.
			//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
			//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
			x.qu(
					'an',
					function (n) {
						$l("nev fire (qu replaced)");
						n()
					}
			)
					.qu(
					'an', [
						function (n) {
							$l("fired!");
							n()
						}
					]
			).dq('an')
			//
			// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
			x.qu(
					'an', function (n) {
						$l("fired!");
						n()
					}
			)
			$l(x.qu('an'))
			x.du('an') //?
		}
		$.x('x', 'quu')
		//  Qu   allow series fns to be execd asynch on an el
		//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
		//
		// which levgs qus to build up   series of steps
		// that will transtn  1+ CSS vals thru/out the dur
		//  can pass a cb fn to  .an()  to exec on done
		x = $('.x')
		x.an({height: 20}, "slow",
				function () {
					$("#title").html("in cb")
				})
		//   *Ques As Cbs
		// Instead of passing a cb as an argument,
		// we can add another function to the queue
		// that will act as our cb
		// This will execute
		// after all of the steps in the
		// anim  have completed.
		x.an(
				{height: 20},
				"slow").qu(function () {
					$("#title").h("in anim")
					$(this).dq()
				})
			//  tells jQ  to continto N-item in  que
			//    queued fn will exec   after the anim
			//  jQuery does not have any insight into
			// how the queue items function,
			// so we need to call .dequeue(),
			// which tells jQuery when to move to the n item in the queue.
			//  Another way of dequeuing
			// is by calling the fn that is passed to your cb
			// That fn will auto  call .dq() for you
				.qu(function (n) {
					$l("I fired!");
					n()
				})
		//  *Custom Queues
		// Up to this point all of our anim
		// and qu   ex  have been using the def qu  n  which is fx.
		// Elements can have multiple queues
		// attached to them,
		// and we can give each of these qusa dif  name.
		// We can specify a custom queue name as
		// the 1st arg  to the .qu() method.
		x.qu('an', function (n) {
			$l("Step 1");
			n()
		}).qu('an', function (n) {
			$l("Step 2");
			n()
		}).dq('an');
		//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
		//   Clearing The Que
		//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
		x.qu('an', function (n) {
			$l("nev log (qu clrd)");
			n()
		})
				.clrQ('an').dq('an')
		//   In this example, nothing will happen as we removed everything from the steps queue.
		//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
		//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
		x.qu(
				'an',
				function (n) {
					$l("nev fire (qu replaced)");
					n()
				})
				.qu(
				'an', [
					function (n) {
						$l("fired!");
						n()
					}
				]).dq('an')
		//
		// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
		x.qu('an', function (n) {
			$l("fired!");
			n()
		})
		$l(x.qu('an'))
		x.du('an')
	}
	JQ12 = ANF = function () {
		ANF = function () {
			z()
			a = $.dA().bgI('chicks').anf()
			anim = function (o) {
				o = o || {};
				return {
					u: o.u || 'chicks',
					n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
				}
			}
			an = function (q, a) {
				if (q.han) {
					_.cI(q.han)
				}
				if (a.u) {
					q.bi(a.u)
				}
				if (a.n > 1) {
					q.han = _.sI(
							function () {
								a.c++;
								if (!a.l && a.c > a.n) {
									_.cI(q.han);
									q.han = false
								}
								else {
									a.c %= a.n
								}
								q.sFr(a)
							}, a.r
					)
				}
			}
		}//call stack
		z()
		a = $.dA().bgI('chicks').anf()
		anim = function (o) {
			o = o || {};
			return {
				u: o.u || 'chicks',
				n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
			}
		}
		an = function (q, a) {
			if (q.han) {
				_.cI(q.han)
			}
			if (a.u) {
				q.bi(a.u)
			}
			if (a.n > 1) {
				q.han = _.sI(function () {
					a.c++;
					if (!a.l && a.c > a.n) {
						_.cI(q.han);
						q.han = false
					}
					else {
						a.c %= a.n
					}
					q.sFr(a)
				}, a.r)
			}
		}
	}
	JQ123 = JQANIMZ = function () {
		JQANIMZ = function () {
			$.x('s', 'jqanim')
			/*
			 setBackgroundImage = q.bi = function(url){//set background image
			 var toUrl =function(url){
			 return 'url("'+ src(url) +'")'}
			 q.backgroundImage(toUrl(url))
			 return q}
			
			 bp=q.positionBackgroundImage=function(x,y){
			 var g=G(arguments),x=g[0],y=g[1]
			 x=N(x)?x:0
			 y=N(y)?y:0
			 q.css({backgroundPos:x+'px '+y+'px'})
			 return q}
			 fr=q.stFr=function(n,w){
			 if(O(n)){q.bp(n.n,n.w)}
			 else{q.bp(n*w)}
			 return q}
			
			 anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
			 $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}
			
			 a= $.dA().bgImg('chicks').anf()
			
			 */
		}
		$.x('s', 'jqanim')
		/*
		 setBackgroundImage = q.bi = function(url){//set background image
		 var toUrl =function(url){
		 return 'url("'+ src(url) +'")'}
		 q.backgroundImage(toUrl(url))
		 return q}
		
		 bp=q.positionBackgroundImage=function(x,y){
		 var g=G(arguments),x=g[0],y=g[1]
		 x=N(x)?x:0
		 y=N(y)?y:0
		 q.css({backgroundPos:x+'px '+y+'px'})
		 return q}
		 fr=q.stFr=function(n,w){
		 if(O(n)){q.bp(n.n,n.w)}
		 else{q.bp(n*w)}
		 return q}
		
		 anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
		 $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}
		
		 a= $.dA().bgImg('chicks').anf()
		
		 */
	}
	JQ14 = LETTERING = function () {
		z()
		LETTERINGPLUG = function () {
			function injector(t, splitter, klass, after) {
				var text = t.text()
						, a = text.split(splitter)
						, inject = '';
				if (a.length) {
					$(a).each(function (i, item) {
						inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
					});
					t.attr('aria-label', text)
							.empty()
							.append(inject)
				}
			}
			
			var methods = {
				init: function () {
					return this.each(function () {
						injector($(this), '', 'char', '');
					});
				},
				words: function () {
					return this.each(function () {
						injector($(this), ' ', 'word', ' ');
					});
				},
				lines: function () {
					return this.each(function () {
						var r = "eefec303079ad17405c889e092e105b0";
						// Because it's hard to split a <br/> tag consistently across browsers,
						// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
						// (of the word "split").  If you're trying to use this plugin on that
						// md5 hash string, it will fail because you're being ridiculous.
						injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
					});
				}
			};
			$.fn.lettering = function (method) {
				// Method calling logic
				if (method && methods[method]) {
					return methods[method].apply(this, [].slice.call(arguments, 1));
				} else if (method === 'letters' || !method) {
					return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
				}
				$.error('Method ' + method + ' does not exist on jQuery.lettering');
				return this;
			};
		};
		LETTERINGPLUG()
		span = $.sp('hello').A()
		span.lettering() // wrap <span class="charx"/ > around each character within header
		$spans = span.find('span')
		$('.dropped span').css({transition: 'all 0.3s ease-in'})
	}
	JQ15 = FALLING = function () {
		FALLING = function () {
			z();
			//this goes in css
			$header2 = $.sp('hello').A();
			$header2.lettering(); // wrap <span class="charx"/ > around each character within header
			$spans = $header2.fi('span');
			delay = 0;
			$header2.$(
					function () {
						$spans.e(
								function () {
									$(this).css({transitionDelay: delay + 's'}); // apply sequential trans delay to each character
									delay += 0.1
								}
						);
						$header2.K('dropped'); // Add "dropped" class to header to apply transition
						setTimeout(
								function () { // reset header code
									$spans.e(
											function () {
												$(this).css({transitionDelay: '0ms'})
											}
									);
									// set transition delay to 0 so when 'dropped' class is removed,
									// letter appears instantly
									$header2.removeClass('dropped'); // remove class at the "end" to reset header.
									delay = 0
								}, 1800
						); // 1800 is just rough estimate of time transition will finish, not the best way
					}
			)
		}
		z()
		//this goes in css
		$header2 = $.span('hello').A()
		$header2.lettering() // wrap <span class="charx"/ > around each character within header
		$spans = $header2.find('span')
		delay = 0
		$header2.on('click', function () {
			$spans.each(function () {
				$(this).css({transitionDelay: delay + 's'}) // apply sequential trans delay to each character
				delay += 0.1
			})
			$header2.K('dropped') // Add "dropped" class to header to apply transition
			setTimeout(function () { // reset header code
				$spans.each(
						function () {
							$(this).css({
								transitionDelay: '0ms'
							})
						})
				// set transition delay to 0 so when 'dropped' class is removed,
				// letter appears instantly
				$header2.removeClass('dropped') // remove class at the "end" to reset header.
				delay = 0
			}, 1800) // 1800 is just rough estimate of time transition will finish, not the best way
		})
	}
}

function html5(){
	data()
	css()
	html()
	
	function css() {
	styles()
	rules()
	flex()
		function styles() {
			$.fn.s = $.fn.ss = function (css, val) {
				if (S(css)) {
					css = Ob(css, val)
				}
				css = $sty(css)
				return this.css(css)
			}
			$.fn.k = $.fn.K = function () {
				$.fn.addClass.apply(this, arguments);
				return this
			}
			$.fn.tK = $.fn.ggK = $.fn.toggleClass
			$.fn.rK = $.fn.rmK = $.fn.xK = $.fn.removeClass
			$.fn.dp = $.fn.display = function (v) {
				var q = this, g = G(arguments)
				return U(v) ? q.css('display') :
						q.css('display', v)
			}
			$.fn.ps = $.fn.pos = $.fn.P = $.fn.p = function (pos, x, y) {
				var q = this, g = G(arguments)
				if (g.u) {
					return q.css('position')
				}
				q.css('position', oO('p', pos))
				if (N(g.s)) {
					q.X(g.s)
				}
				if (g.t) {
					q.Y(g.t)
				}
				return q
			}
			$.fn.psA = $.fn.ab = $.fn.abs = function (x, y) {
				return this.P('a', x, y)
			}
			$.fn.none = function () {
				return this.css('display', 'none')
			}
			$.fn.ov = $.fn.overflow = function (overflow) {
				var q = this, g = G(arguments)
				if (U(overflow)) {
					return q.css('overflow')
				}
				q.css('overflow', overflow);
				return q
			}
			$.toColor = function (n1, n2, n3, n4) {
				return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")" : $r('c', n1)
			}
			$.fn.al = function (z) {
				if (U(z)) {
					return this.css('opacity')
				}
				this.css('opacity', z)
				return this
			}
			$.fn.col = function (col) {
				return this.css('color', oO('c', col))
			}
			$.fn.C = function (col, c2) {
				if (c2) {
					return this.C(col).col(c2)
				}
				if (col == '*') {
					col = Yano.random()
				}
				return this.css('backgroundColor', oO('c', col))
			}
			$.C = function (Col, col) {
				var bd = $('body')
				bd.C(Col)
				if (col) {
					bd.col(col)
				}
				return $
			}
			$.fn.fS = $.fn.fZ = $.fn.fontSize = function (z) {
				this.css('font-size', z)
				return this
			}
			$.Fo = $.font = $f = function (a, b) {
				var g = G(arguments)
				if (O(a)) {
					return ss(
							oB(b), {fz: a || 50}
					)
				}
				a = N(a) ? _S(a) : U(a) ? '' : a;
				var F = 'fantasy', W = 'normal', S = 'normal', Z = px(100);
				_.e(
						a.split(' '), function (p) {
							if (M(p[0])) {
								p = p.split('/')
								Z = p[0] + 'px' + p[1] ? '/' + p[1] + 'px' : ''
							}
							F = Oo('fF', p) || F
							W = Oo('fW', p) || W
							S = Oo('fS', p) || S
						}
				)
				return [W, S, Z, F].join(' ')
			}
			$.fn.T = function () {
				var g = G(arguments)
				if (g.u) {
					return this.text()
				}
				this.text(g.f)
				return this
			}
			$.fn.tA = $.fn.textAlign = function (z) {
				this.css('text-align', z)
				return this
			}
			$.fn.T0 = function () {
				var d = this, g = G(arguments)
				d.E()
				g.e(function (str) {
					d.A($.h3(str))
				})
				return d
			}
			$.fn.pad = function (padding) {
				if (U(padding)) {
					return this.css('padding')
				}
				this.css('padding', padding);
				return this
			}
			$.fn.pad = function (a) {
				return this.css("padding", a || 0)
			}
			$.fn.padTop = function (padding) {
				if (U(padding)) {
					return this.css('paddingTop')
				}
				this.css('paddingTop', padding);
				return this
			}
			$.fn.pT = $.fn.padTop = function (padding) {
				if (U(padding)) {
					return this.css('paddingTop')
				}
				this.css('paddingTop', padding);
				return this
			}
			$.fn.padLeft = function (padding) {
				if (U(padding)) {
					return this.css('paddingLeft')
				}
				this.css('paddingLeft', padding);
				return this
			}
			$.fn.pL = $.fn.padLeft = function (padding) {
				if (U(padding)) {
					return this.css('paddingLeft')
				}
				this.css('paddingLeft', padding);
				return this
			}
			$.fn.pR = $.fn.padRight = function (padding) {
				if (U(padding)) {
					return this.css('paddingRight')
				}
				this.css('paddingRight', padding);
				return this
			}
			$.fn.padRight = function (padding) {
				if (U(padding)) {
					return this.css('paddingRight')
				}
				this.css('paddingRight', padding);
				return this
			}
			$.fn.pad = function (a) {
				return this.css("padding", a || 0)
			}
			$.fn.pdB = function (a) {
				return this.css("padding-bottom", a || 0)
			}
			$.fn.pB = $.fn.padBottom = function (padding) {
				if (U(padding)) {
					return this.css('paddingBottom')
				}
				this.css('paddingBottom', padding);
				return this
			}
			$.fn.pH = $.fn.padHor = function (a) {
				return this.padLeft(a).padRight(a)
			}
			$.fn.pV = $.fn.padVer = function (a) {
				return this.padTop(a).padBottom(a)
			}
			$.fn.mgT = function (a) {
				return this.css("margin-top", a || 0)
			}
			$.fn.marTop = $.fn.mT = $.fn.marTop = function (margin) {
				if (U(margin)) {
					return this.css('marginTop')
				}
				this.css('marginTop', margin);
				return this
			}
			$.fn.marLeft = $.fn.mL = $.fn.marLeft = function (margin) {
				if (U(margin)) {
					return this.css('marginLeft')
				}
				this.css('marginLeft', margin);
				return this
			}
			$.fn.marRight = $.fn.mR = $.fn.marRight = function (margin) {
				if (U(margin)) {
					return this.css('marginRight')
				}
				this.css('marginRight', margin);
				return this
			}
			$.fn.marBottom = $.fn.mB = $.fn.marBottom = function (margin) {
				if (U(margin)) {
					return this.css('marginBottom')
				}
				this.css('marginBottom', margin);
				return this
			}
			$.fn.marHor = $.fn.mH = $.fn.marHor = function (a) {
				return this.marLeft(a).marRight(a)
			}
			$.fn.mV = $.fn.marVer = $.fn.marVer = function (a) {
				return this.marTop(a).marBottom(a)
			}
			$mar = $.mar = function () {
				var g = G(arguments), o
				o = N(g[3]) ? g.f + 'px ' + g.s + 'px ' + g.t + 'px ' + g[3] + 'px' :
						N(g.t) ? g.f + 'px ' + g.s + 'px ' + g.t + 'px ' + g.f + 'px' :
								N(g.s) ? g.f + 'px ' + g.s + 'px ' + g.s + 'px ' + g.f + 'px' :
										N(g.f) ? g.f + 'px ' + g.f + 'px ' + g.f + 'px ' + g.f + 'px' :
												'10px 10px 10px 10px'
				return o
			}
			$.mar = function (num) {
				$s({$: {M: N(num, 10)}})
				return $
			}
			$.fn.mar = function (margin) {
				if (U(margin)) {
					return this.css('margin')
				}
				this.css('margin', margin);
				return this
			}
			$.fn.bdC = $.fn.borCol = $.fn.bdC = $.fn.borderColor = function (a) {
				return this.css("border-color", oO('c', a || 'r'))
			}
			$.fn.bS = $.fn.borSty = $.fn.borderStyle = function (style) {
				this.css('border-style', style)
				return this
			}
			$.fn.borWidth = $.fn.bW = $.fn.borderWidth = function (w) {
				this.css('border-width', w)
				return this
			}
			$.fn.bor = function (border) {
				if (U(border)) {
					return this.css('border')
				}
				this.css('border', border);
				return this
			}
			$.fn.bdC = function (a) {
				return this.css("border-color", oO('c', a || 'r'))
			}
			$.Ol = $.outline = function () {
				var g = G(arguments), o, ol
				o = g.N_ ? {w: g.f} :
						Oo('c', o) ?
						{c: g.f, w: g.s, s: g.t} :
						{w: g.f, s: g.s}
				if (S(g.f)) {
					o = g.f.split(' ')
					ol = _.j([
						$r('c', o[0]),
						oO('oW', o[1] || 5) + 'px',
						oO('oS', o[2] || '-')
					])
					$l(ol)
					return ol
				}
				ol = _.j([
					$r('c', o.c),
					N(o.w) ? o.w + 'px' : $r('ow', o.w),
					$r('os', o.s)
				])
				//$l( ol )
				return ol
			}
			$.fn.bgImg = $.fn.backgroundImage = $.fn.bg = function (bg) {
				if (U(bg)) {
					return this.css('background')
				}
				this.css('background', bg)
				return this
			}
			$.fn.bgP = function (bg) {
				if (U(bg)) {
					return this.css('backgroundPosition')
				}
				this.css('backgroundPosition', bg)
				return this
			}
			$.fn.bgI = function (url) {//set background image
				this.bgI('url("' + $.src(url) + '")');
				return this
			}
			$.fn.pBgI = $.fn.bp = function (x, y) {
				var g = G(arguments), x = g[0], y = g[1];
				x = N(x) ? x : 0;
				y = N(y) ? y : 0;
				this.css({backgroundPos: x + 'px ' + y + 'px'});
				return this
			}
			function size() {
				$.fn.getPosition = $.fn.getTotalOffset = function () {
					alert('$.fn.getPosition')
					var e = this, x = 0, y = 0
					while ($.tEl(e) && e.tagName) {
						y += e.offsetTop
						x += e.offsetLeft
						if (isBodyElement(e)) {
							e = 0
						}
						e = e.offsetParent || e
					}
					return {x: x, y: y}//just gets the TOTAL offset of ANY element
				}
				$.fn.X = function (l) {
					var q = this, g = G(arguments)
					if (N(l)) {
						q.css(
								'left',
								g.p ? q.X() + l :
										l
						)
						return q
					}
					l = q.css('left')
					return l == 'auto' ? 'auto' : parseInt(l)
					/*
					 $.fn.X = $.fn.left = function (left) {
					 if (N(left)) {
					 return this.css('left', left)
					 }
					 var left = this.css('left')
					 if (left == 'auto') {
					 return 'auto'
					 }
					 return parseInt(left)
					 }
					 */
				}
				$.fn.Y = $.fn.top = function (top) {
					if (N(top)) {
						return this.css('top', top)
					}
					var top = this.css('top')
					if (top == 'auto') {
						return 'auto'
					}
					return parseInt(top)
					/*
					 $.fn.Y = $.fn.top = function (top) {
					 if (N(top)) {
					 return this.css('top', top)
					 }
					 var top = this.css('top')
					 if (top == 'auto') {
					 return 'auto'
					 }
					 return parseInt(top)
					 }
					 */
				} //$.fn.t
				$.fn.XY = function (x, y) {
					x = N(x) ? x : 0
					if (U(y)) {
						y = x
					}
					return this.X(x).Y(y)
					/*
					 $.fn.XY = function (x, y) {
					 x = N(x) ? x : 0
					 if (U(y)) {
					 y = x
					 }
					 return this.X(x).Y(y)
					 }
					 */
				}
				$.fn.L = $.fn.l = $.fn.left = function (l) {
					var q = this, g = G(arguments)
					if (N(l)) {
						q.css('left', l)
						return q
					}
					l = q.css('left')
					return l == 'auto' ? 'auto' : q.position().left
					function old() {
						$.fn.L = function (n) {
							if (U(n)) {
								return this.css('left')
							}
							this.css('left', n)
							return this
						}
					}
				}
				$.fn.right = $.fn.R = $.fn.rit = function (right) {
					if (U(right)) {
						return this.css('right')
					}
					this.css('right', right)
					return this
				}
				$.fn.LR = function (l, r) {
					var q = this
					if (O(l)) {
						r = l.r;
						l = l.l
					}
					if (N(l)) {
						q.L(l)
					}
					if (N(r)) {
						q.R(r)
					}
					return q
				}
				$.fn.bottom = $.fn.bot = $.fn.B = function (bottom) {
					if (U(bottom)) {
						return this.css('bottom')
					}
					this.css('bottom', bottom)
					return this
				}
				$.fn.zi = $.fn.zIndex = function (z) {
					if (U(z)) {
						return this.css('z-index')
					}
					this.css('z-index', z);
					return this
				}
				$.fn.os = function () {
					var os = this.offset()
					return os
				}
				$.fn.sz = function (sz) {
					return this.at('size', sz)
				}
				$.fn.ouH = $.fn.outerHeight
				$.fn.W = function (w) {
					return w ? this.width(w) : this.width()
				}
				$.fn.H = function (h) {
					return h ? this.height(h) : this.height()
				}
				$.fn.WH = function (w, h) {
					h = h || w;
					return this.W(w).H(h)
				}
				$.fn.MW = $.fn.maxW = function (a) {
					return this.css('max-width', a)
				}
				$.fn.mW = $.fn.minW = function (a) {
					return this.css('min-width', a)
				}
				$.fn.mH = $.fn.minH = function (a) {
					return this.css('min-height', a)
				}
				$.fn.maxH = function (a) {
					return this.css('max-height', a)
				}
				$.fn.Z = function (w, h) {
					return this.W(w).H(h || w)
				}
				$.fn.oH = $.fn.outerHeight
				$.fn.long = function () {
					return this.css({width: '100%'})
				}
			}
			
			size()
		}
		function rules() {
			$s = function () {
				var g = G(arguments), rulesOb
				if (g.u) {
					return $l($('style').oh())
				}
				if (g.O) {
					rulesOb = g.f
				}
				else if (g.s) {
					rulesOb = {}
					rulesOb[g.f] = g.s
				}
				var rulesStr = $rules(rulesOb)
				$('head').A($.sty(rulesStr))
				return rulesStr
			}
			$.sty = $.Sty = function (h) {
				var g = G(arguments)
				var styleTag = $('<style>')
						.at({type: 'text/css'});
				styleTag.h(h)
				if (!g.n) {
					styleTag.A()
				}
				return styleTag
			}
			$sel = function (sel) {
				if (A(sel)) {
					sel = '{' + sel[0] + ':' + sel[1] + '; ' + '}'
				}
				if (sel == '$') {
					return '*'
				}
				sel = sel.replace('_', '.')
						.replace('$', '#')
				_.e({
					bd: 'body', sp: 'span',
					bt: 'button',
					sc: 'section', nv: 'nav',
					d: 'div',
					i: 'img', ip: 'input', hdr: 'header', n: 'nav'
				}, function (v, k) {
					if (sel == k) {
						sel = v
					}
				})
				return sel
			}
			$rule = function (sel, decs, rulesOb) {
				return $sel(sel) + ' ' + $decBlk(decs, rulesOb)
			}
			$decBlk = function (decs, ob) {
				_dec = function (v, k) {
					return k + ':' + v + '; '
				}
				ob = ob || {}
				var decBlk = ' ',
						Decs = {}
				if (S(decs)) {
					return decs
				} //for @media ??
				$plugin(decs)
				$mixin(decs, ob)
				_.e(decs, function (v, k) {
					if (k == 'mixins' || k == 'plugins') {
						return
					}
					$setPropVal = function (ob, key, val) {
						ob[key] = $val(val, key)
					}
					Decs[oO('s', k)] = $val(v, k)
				})
				_.e(Decs, function (v, k) {
					var dec = _dec(v, k)
					//$l('dec: ' + dec)
					decBlk += dec
				})
				//$l('decBlk: ' + decBlk)
				_brace = function (str) {
					return '{' + (str || '') + '}'
				}
				return _brace(decBlk)
			}
			$val = function (v, k) {
				if (A(v)) {
					return $helperValue(v, k)
				}
				return N(v) && v > 10 ? $S(v) + 'px' :
						oO(k, v, 'R')
			}
			$sty = function (sty, styVal) {
				//= $decs = $css
				_$sty = function (o, a, b) {
					//= addSty
					if (N(b) && M.abs(b) > 10) {
						b = $S(b) + 'px'
					}
					o[oO('s', a)] = oO(a, b, 'R')
					return o
				}
				var o = {}
				if (S(sty)) {
					_$sty(o, sty, styVal)
				}
				else {
					_.e(sty, function (styVal, sty) {
						_$sty(o, sty, styVal)
					})
				}
				return o
				//= $.qs
			}
			$rules = function (rulesOb) {
				var rulesStr = '\n\n'
				_.e(rulesOb, function (decs, sel) {
					rulesStr += $rule(sel, decs, rulesOb) + '\n'
				})
				return rulesStr + '\n'
			}
			plugs()
			mixs()
			helps()
			function plugs() {
// PLUGINS ARE FUNCTIONS THAT EXTEND THE CSS OBJECT
				$s.plugins = {
					// these are functions that take pams
					// and ctx-bound to the dec obj
					// so its main use is to add decs directly on it
					// but one function can add multiple decs
					//(plugins)
				}
				/*
				
				 example:
				 {	
				 d: {C:'r'},
				 plugins : {	doSomething : ['red', 6]	}
				 }
				
				 $s.doSomething = function(color, num){
				 this.somethingElse = color + num
				 }
				
				 */
				$plugin = function (decs) {
					if (decs.plugins) {
						_.e(decs.plugins, function (pams, pluginName) {
							var plugin = $s.plugins[pluginName]
							if (F(plugin)) {
								A(pams) ? plugin.apply(decs, pams) :
										_.b(plugin, decs)(pams)
							}
						})
					}
				}
			}
			
			function mixs() {
// MIXINS ARE OBJECTS THAT EXTEND THE CSS OBJECT
				$s.mixins = $s.mx = {
					// this lets you associate a selector with a bunch
					// of declarations at once, and you can add more, too
				}
				$s.mixins.icon = {
					transition: 'background-color ease .2s',
					margin: '0 .5em'
				}
				$mixin = function (decs, rules) {
					_.e(decs.mixins || {}, function (mixin) {
						_.x(decs, rules && rules[mixin] ?
								rules[mixin] : ($s.mixins[mixin] || {}))
					})
					//tries to extend from one of its own first
					//then goes to global ($S.mx)
				}
			}
			
			function helps() {
// HELPERS ARE FUNCTIONS THAT RETURN VALUES FOR CSS PROPERTIES
				$s.helpers = $s.fn = {
					// (value-)helper functions:
					// lets you write/call functions that
					//produce a complicated value to a
					// particular property,
					// so you don't have to write out
					// the full location of the function
					// -helps with namespacing
				}
				$s.helpers.B = $s.fn.bor = function (c) {
					return '8px solid ' + oO('c', c || 'z')
				}
				FL2 = BASIS = function () {
					str = 'This is a bit longer lineThis is a bit longer lineThis is a bit longer' + ' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer' +
					' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer lineThis ' + 'is a bit longer lineThis is a bit longer lineThis is a bit longer line'
					// http://jsfiddle.net/jakub_g/s5jAB/
					// Both items have flex-basis: 200px defined.
// In 'equilibrium situation' they'll get those widths exactly.
					$s({
						_ch: {c: 'w', P: 10, M: 10},
						_ct: {
							C: 'y', P: 10,
							d: '$'
						},
						_ch1: {
							C: "u",
							fl: '8 1 600px'
						},// If there's more space, the first one grows 5x faster than the second.
						_ch2: {
							C: 'g',
							dp: 'fl',
							fl: '1 2 400px',
							wr: 'w'
						}, // If there's less space, the second one shrinks 3x faster than the first.
						d: {Bor: ['bor', 'b']}
					})
					$.dK('ct').A(
							$.dK('ch ch1').A($.h3('Child One'), $.p('Lorem ipsum'), $.p('dolor sit amet'), $.p(str)),
							div = $.dK('ch ch2').A('Two')
					)
					_.t(20, function () {
						$.d($r(), 40, 40).K('ch1').a2(div)
					})
					$s()
					/*
					
					 div { border:8px solid Blue; }
					 .ct { display:flex; padding:10px; background-color:Yellow; }
					 .ch { padding:10px; margin:10px; color:White; }
					 .ch1 { flex:8 1 600px; background-color:Purple; }
					 .ch2 { display:flex; flex-wrap:true; flex:1 2 400px; background-color:green; }
					
					
					
					 */
				}
				$s.helpers.bpLarge = function (cont) {
					return ['@media only screen and (max-width: 400px)', cont]
				}
				$s.helpers.bpMid = function (cont) {
					return ['@media only screen and (max-width: 600px)', cont
					]
				}
				$s.helpers.bpSmall = function (cont) {
					return [
						'@media only screen and (max-width: 800px)', cont
					]
				}
				$helperValue = function (v, k) {
					if (F($s.helpers[_.f(v)])) {
						return $s.helpers[_.f(v)].apply(null, _.r(v))
					}
					return $default(v, k)
				}
			}
			
			RU2 = CSSEXTENDKEYWORD = BORDERED = function () {
				$s({
					_toBeBordered: {
						'border-top': 'dotted 10px red',
						'border-bottom': 'solid 20px blue'
					},
					//And we want to use these properties inside other rule-sets.
					// Well, we just have to drop in the name of the class
					// where we want the properties, like so:
					d: {ex: '_toBeBordered', c: 'r'},
					bt: {c: 'y', ex: '_toBeBordered'}
				})
				l({
					l: 'bt', k: 'toBeBordered',
					t: 'BUTTON',
					a2: 1
				})
				l({
					l: 'h1', k: 'toBeBordered',
					t: 'border me, please',
					a2: 1
				})
				l({
					l: 'd', C: 'z', c: 'w',
					t: 'div',
					a2: 1
				})
			}
			RU1 = SEL = SELECTORS = VAL = RUS = function () {
				$.h1(ru = $rule('d', {C: 'r', c: 'b'}))
				$.hr()
				t = $.t()
				_.e(sels = [
					'd', '_klas_klas', '$id$id', '$'
				], function (sel) {
					t.A(
							$.tr().A(
									$.td(sel).W(100),
									$.td($sel(sel)).W(100)
							)
					)
				})
				$.hr()
				t = $.t()
				sels = {
					C: 'r',
					dp: 'flex'
				}
				_.e(sels, function (val, key) {
					t.A($.tr().A($.td(key + ': ' + val).W(100),
							$.td($val(val, key)).W(100)))
				})
				$.hr()
				css = {d: {C: 'r', c: 'b'}, bt: {C: 'b', c: 'r'}}
				$.h1($rules(css))
				$.br().A()
				$.h1($subRules(css))
			}
			RU3 = SS10 = QFN = LJQFN = HELLOWHYNOTSPAN = function () {
				css_ = {}
				css_.redDivs = {
					d: {
						C: 'v', c: 'p',
						M: 20, P: 40, h: 40
					},
					sp: {
						C: 'u'
					}
				}
				css_.big = {d: {fZ: 100}}
				$s(css_.redDivs)
				$s(css_.big)
				$.d().A('hello').A($.sp('why not span'))
				$.d().A('nice day')
				$.hr()
				$.hr()
				$('div').e(function () {
					$.h1('this:' + $(this).oh())
				})
				// $('body').f('div').C("b").r()
			}
			RU4 = SS8 = SIZE = MIXIN = SS9 = EXT = function () {
				$s({
					d: {
						ex: 'icon',
						C: 'y', c: 'o',
						mixins: {size: [825]}
					}
				}, '*')
				l({a: 'hello', a2: 1})
				l({a: 'hello', a2: 1})
				ll({a: 'hello', a2: 1})
				ll({a: 'hello', a2: 1})
				l({l: 'd', a: 'hello', a2: 1})
				l({l: 6, a: 'hello', a2: 1})
				l({l: 's', a: 'hello', a2: 1})
				l({l: 's', a: 'hello', a2: 1})
				l({l: 'd', a: 'hello', a2: 1})
				l({l: 1, a: 'hello', a2: 1})
			}
//The document element is available in the head of the document before loading any other HTML
		}
		function flex() {
			$.fn.flx = $.fn.flex = $.fn.fl = function () {
				return this.css('display', 'flex')
			}
			$.fn.jfC = $.fn.jC = $.fn.$J = function (a) {
				return this.css('justify-content', a)
			}
			$.fn.alI = $.fn.$I = function (a) {
				return this.css('align-items', a)
			}
			$.fn.alC = $.fn.$C = function (a) {
				return this.css('align-content', a)
			}
			function flexApps() {
				FLX1 = SS408 = MOB = MEDIAOBJECT = function () {
					Med = function () {
						$.imgMur = function () {
							return $('<img src=http://www.fillmurray.com/50/50>')
						}
						return $.dK('med').A(
								$.imgMur(),
								$('<div>').K('content').A(yada(18))
						)
					}
					$CSS({
						bd: {P: 50},
						_ex: {B: '8px dashed black', C: 'g'},
						h2: {C: 'z', c: 'o', h: 50, tA: 'c', lH: 50},
						_meds: {C: '_b', dp: 'fl', wr: 'wr'},
						_med: {
							C: '_o', dp: 'fl', _w: 300,
							M: 20, h: 50,
							jfC: 'c'
						},
						i: {mR: 10},
						_content: {shr: 1, gr: 1},
						///
						'.search-group': {dp: 'fl', M: 10},
						ip: {P: 10}, _tIp: {fl: 1}
					})
					$.dK('ex').A(
							$.h2('media object'),
							$.dK('meds').A(
									Med(), Med(), Med()),
							$.hr(),
							$.h2('media object'),
							$.dK('example-page example-media').A(
									$.dK('search-group').A(
											$.ip().ph('search').K('tIp'),
											$.sm())
							)
					)
				}// 12:50 ALIGNITEMS
				FLX2 = SS16 = DRB = DRIB = function () {
					Li = function (text) {
						return $.li().A($.a(text))
					}
					Shot = function () {
						return $.a().K('wrap').A(
								$.d().K('shot').A(
										$.i('me'),
										$.dK('meta').A(
												$.dK('views').C('b').col('w').A(' # views '),
												$.dK('comments').C('g').A('comments '),
												$.dK('likes').C('o').A(' likes ')
										)
								),
								$.dK('owner').A($.i('me').K('avatar'),
										$.sp(' - name - ').K('name')))
					}
					$s({
						$: {M: 4},
						_ps: {_w: 970, M: '0 auto'},
						_hdr: {
							dp: 'fl', jfC: 'sB',
							C: 'gray'//, w:'100%'
						},
						_nav: {dp: 'fl', alI: 'c', shr: 1},
						ul: {dp: 'fl'},
						li: {M: '0 20px'},
						_tools: {dp: 'fl', alI: 'c'},
						i: {M: '0 20px', w: 50, h: 50},
						_shots: {dp: 'fl', wr: 'wr', jfC: 'sB', C: 'p'},
						_meta: {dp: 'fl', dir: 'c', jfC: 'end'},
						_shot: {C: 'w'},
						_wrap: {C: 'v'},
						_tool: {w: 20, h: 20}
					})
					shots = $.sc().K('shots ps')
					_.t(8, function () {
						shots.A(Shot())
					})
					$.dK('ex').A(
							$.h2('dribbbl'),
							$.dK('ex-page ex-drib').A(
									$.dK('hdr ps').A(
											$.nav().K('nav ps').A(
													$.i('sun'), // logo
													$.ul().A(Li('Shots'), Li('Designers'),
															Li('Team'), Li('Meetup'), Li('Jobs'),
															Li(_bulls))
											).C('y'),
											$.d().K('tools').A(
													$.i('guy').K('tool'),
													$.i('guy').K('tool'), $.i('guy').K('tool'),
													$.f().A($.ip().ph('Search'))
											).C('r')
									)
									, shots)
					)
// linds with  class shot-wrap
//the shot  (images and meta)
// (meta is views, count, likes? more images?)
// owner (avatar)
				}
				FLX3 = SS13 = FLD1 = FLXD = function () {
					$s({
						_sB: {dp: 'fl', dir: 'r', wr: 'wr', jfC: 'sB'},
						_sA: {dp: 'fl', dir: 'r', wr: 'wr', jfC: 'sA'}
					})
					d = $.d().s({
						dp: 'fl',
						jfC: 'sB'
					})
					d.A(
							$.d('b', 400, 500).K('sB').A(
									$.d('y', 40, 150),
									$.d('z', 200, 50),
									$.d('r', 40, 150),
									$.d('y', 40, 150),
									$.d('z', 200, 50),
									$.d('r', 40, 150)
							),
							$.d('B', 400, 500).K('sB').A(
									$.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 140, 150),
									$.d('y', 40, 150), $.d('z', 300, 50), $.d('r', 40, 50)
							),
							$.i('me'),
							$.d('w', 400, 500).K('sA').A(
									$.d('y', 40, 150), $.d('z', 1000, 50), $.d('r', 140, 150),
									$.d('y', 40, 150), $.d('z', 10, 50), $.d('r', 40, 50)
							),
							$.d('p', 400, 500).K('sA').A(
									$.d('y', 40, 150), $.d('z', 300, 50), $.d('r', 140, 150),
									$.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 40, 50)
							)
					)
				}
				FLX4 = SS269 = GREENBTS = function () {
					$s({
						bd: {C: 'a', c: 'b'},
						$main: {
							h_: 800, M: 0, P: 0, dp: 'fl',
							$D: 'r'
						},
						'$main > button': {
							M: 4, P: 5, B: ['bor', 'p'],
							bRd: '7pt', C: 'g', _: 2, $: '3 1 50%'
						}
					})
					d = $.dI('main')
					_.e([1, 2, 3, 4, 5], function (num) {
						var name = 'button_' + num
						d.A($.bt(name, function () {
							$l('clicked: ' + name)
						}))
					})
				}
				FLX5 = J2 = SS5 = ACS = ARTICLES = function () {
					$s({
						bd: {C: 'a', c: 'b'},
						$main: {
							h_: 800,
							M: 0, P: 0,
							d: '$', $D: 'r'
						},
						'$main > article': {
							M: 4, P: 5, B: ['bor', 'p'],
							bRd: '7pt', C: 'g', _: 2, $: '3 1 50%'
						}
					})
					$.dI('main').A(
							$.ac('article1'),
							$.ac('ac2'),
							$.ac('ac3'),
							$.ac('ac4'),
							$.ac('ac5')
					)
				}
				FLX6 = SS27 = YELLOWBTS = function () {
					$s({
						d: {h: 100, dp: 'fl'},
						bt: {fl: '3 1 50%'}
					})
					d = $.d()
					_.e([1, 2, 3, 4, 5], function (num) {
						var name = 'button_' + num
						d.A($.bt(name, function () {
									$l('clicked: ' + name)
								}).C('y')
						)
					})
				}
				FLX7 = SS4 = FL0 = function () {
					$.d('b', 400, 500).s({dp: 'fl', jfC: 'sA'}).A(
							$.d('y', 40, 150),
							$.d('z', 200, 50),
							$.d('r', 40, 150)
					)
				}
				FLX8 = SS6 = MAR = MARGINAUTO = function () {
					o = outer = $.div('b', 500, 500).A()
					o.A(i = inner = $.div('r', 100, 100))
					i.mar('auto')
					o.mar('auto')
				}
				FLX9 = SS309 = FLD2 = BASISD = function () {
					$s({
						//_ct: {C: 'y',  d: '$'},
						_ch: {P: 10},
						_ch1: {
							C: "u",
							fl: '8 1 600px'
						},
						_ch2: {
							C: 'g',
							dp: 'fl',
							fl: '1 2 400px',
							wr: 'wr'
						},
						d: {B: ['bor', 'b']}
					})
					children(8,
							$.dK('ch ch2').a2(
									$.dK('ct').C('w')
							)
					)
					function children(num, parent) {
						_.t(num, function () {
							div().K('ch1').a2(parent)
							function div() {
								return $.d($r(), 40, 40)
							}
						})
						return parent
					}
				}
			}
			
			flexApps()
			item()
			vid()
			function item() {
				Item = function (n) {
					k = 'flex-item-' + (n || 1)
					$l('k: ' + k)
					return $.dK(k).A(
							$.i('me')
					).css({margin: 20}).C('b')
				}
				_It = function (child) {
					return $.dK('item').C('_b').A(child)
				}
				It = function () {
					return $.dK('item').A('hello').C()
				}
				FLX10 = SS299 = DOWN = FLEX_DIR_COLUMN = function () {
					$s({
						bd: {fS: 32},
						_ct: {dp: 'fl', jsC: 'c'},
						_parent1: {
							dp: 'fl',
							dir: 'c',
							w: 300, C: 'o'
						},
						_parent2: {
							dp: 'fl',
							dir: 'cRv',
							w: 500, C: 'o'
						},
						_item: {
							M: 10, c: 'y',
							bas: 80, dp: 'fl',
							jfC: 'c',
							alI: 'c'
						}
					})
					ct = $.dK('ct')
					Parent().K('parent1')
					Parent().K('parent2')
					function Parent() {
						return $.d().a2(ct)
								.A(It(), It(), It(), It(), It(), It())
					}
				}
				FLX11 = SS353 = DVT2 = WRAPREV = function () {
					$s({
						bd: {tA: 'c'},
						_parent: {
							dp: 'fl',
							B: _bor,
							dir: 'rv',
							wr: 'rv',
						},
						_item: {
							lH: 50,
							h: 50,
							w: '30%',
							M: 5
						}
					})
					$.dK('example').A(
							$.h2().T('Display: flex'),
							$.dK('example-content').A(
									parent = $.dK('parent').A(
											_It(1), _It(2), _It(3),
											_It(4), _It(5))))
				}// 4:20 parent display flex
// 5:50  item width 50
// 6:05 flex direction (row-reverse, column, column-reverse)
				FLX12 = SS346 = DVT1 = function () {
					$s({
						bd: {tA: 'c'},
						_parent: {
							dp: 'fl',
							border: _bor,
							dir: 'rv'
						},
						_item: {
							lH: 50,
							h: 50,
							w: 50,
							M: 5
						}
					})
					$.h2().T('Display: flex')
					$.dK('parent').A(_It(1), _It(2), _It(3), _It(4), _It(5))
				}
				FLX13 = SS379 = DVT4 = ALIGNITEMS = function () {
					$s({
						bd: {tA: 'c'},
						_parent: {
							height: 200,
							dp: 'flex',
							B: _bor,
							dir: 'rv',
							wr: 'wr',
							jfC: 'sA',
							alI: 'str'
						},
						_item: {
							lH: 50,
							w: 50,
							M: 5
						}
					})
					$.dK('example').A(
							$.h2().T('Display: flex'),
							$.dK('example-content').A(
									parent = $.dK('parent').A(
											_It(1), _It(2), _It(3),
											_It(4), _It(5))))
				}
				FLX14 = SS384 = DVT5 = ALIGNCONTENT = function () {
					$s({
						bd: {tA: 'center'},
						_parent: {
							h: 200,
							dp: 'fl',
							B: '5px solid red',
							dir: 'row-reverse',
							wr: 'wrap',
							jfC: 'space-around',
							alI: 'stretch'
						},
						_item: {
							lH: 50,
							w: 50,
							M: 5
						}
					})
					$.dK('example').A(
							$.h2().T('Display: flex'),
							$.dK('example-content').A(
									parent = $.dK('parent').A(
											_It(1), _It(2), _It(3),
											_It(4), _It(5))))
				}//7:30 flex-wrap ([nowrap] wrap
// 9:45
// 20:30  children finally!!! ORDER
//2350 grow
				FLX15 = SS33 = DVT = DEVTIPS = function () {
					$s({
						bd: {tA: 'c'},
						_parent: {B: _bor},
						_item: {lH: 50, h: 50, M: 5}
					})
					$.dK('example').A(
							$.h2().T('Display: flex'),
							$.dK('parent').A(
									_It(1), _It(2), _It(3),
									_It(4), _It(5)
							))
				}
				FLX16 = SS364 = DVT3 = JUSTIFYCONTENT = function () {
					$s({
						bd: {tA: 'c'},
						_parent: {
							dp: 'fl',
							B: _bor,
							dir: 'rv',
							wr: 'rv',
							jfC: 'sA'
						},
						_item: {
							lH: 50,
							h: 50,
							w: 50,
							M: 5
						}
					})
					$.dK('example').A(
							$.h2().T('Display: flex'),
							$.dK('example-content').A(
									parent = $.dK('parent').A(
											_It(1), _It(2), _It(3),
											_It(4), _It(5))))
				}
				FLX17 = SS14 = FLD3 = FLEXCTD = function () {
					$.C('r')
					$s({
						'.flex-container': {
							C: 'y',
							display: 'flex',
							'flex-direction': 'row',
							$W: 'w',
							'justify-content': 'space-around',
							'align-content': 'flex-start',
							'align-items': 'stretch'
						},
						//'.flex-items-default': {'flex-grow': 0, 'flex-shrink': 0, 'flex-basis': 0},
						'.flex-item-1': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'},
						'.flex-item-2': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'},
						'.flex-item-3': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '20px'},
						'.flex-item-4': {C: 'z', 'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'},
						'.flex-item-5': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'}
					})
					d = $.dK('flex-container').A(
							Item(1), Item(2), Item(3), Item(4), Item(5)
					)
				}
			}
			
			function vid() {
				vidHtml = function (css) {
					$s(_.x({
						bd: {dp: 'fl', jfC: 'c'},
						_ct: {w: 960, B: '20px solid yellow'},
						$right: {C: 'o', w: 260},
						$left: {C: 'b', w: 700},
						img: {
							w: 960, h: 400
						},
						_fl: {dp: 'fl', wr: 'wr'}
					}, css || {}))
					$ct().A(
							$.i('me'),
							$.d().K('fl').A(
									$.sc().id('left').A('this is the left column (a section)' + yada()),
									$.ac().id('right').A('this is the right column (an article)' + yada())
							))
				}
				FLX18 = SS18 = MVD1 = function () {
					SS19 = MVD2 = MEDVID = MEDIAVIDTUT = function () {
						vidHtml()
						med = '@media screen and (max-width: 960px)'
						decs = '{ #ct{width:100%;}  #left{width:70%} #right{width:30% } img{width:100%} }'
						$.Sty(med + decs)
						$.Sty('@media screen and (max-width: 640px) { #ct{width:100%;}  #left{width:100%} #right{width:100% }   }')
					}
					vidHtml({_tablet: $rules(tabRus), _phone: $rules(phRus)})
				}
			}
			
			function more() {
				$.flexy = function () {
					$s.d({	// cool: $s.d('margin', 10)
						margin: 10, display: 'flex',
						'justify-content': 'center',
						'flex-wrap': 'wrap'
					})
				}
				flxCt = function (css) {
					if (css) {
						$s(css)
					}
					return $.dK('flex-container')
							.A(Item(1), Item(2), Item(3), Item(4), Item(5))
					function Item(n) {
						return $.dK('.flex-item-' + (n || 1)).A(
								$.i('me')
						).css({margin: 20}).C('b')
					}
				}
				$cssApp = function (name, cssOb, fn) {
					return window[name] = function () {
						$s(cssOb)
						fn()
					}
				}
				$.fn.insertBts = function () {
					var el = this
					_.e([1, 2, 3, 4, 5, 6], function (num) {
						var name = 'button ' + num
						var bt = $.bt(name, function () {
							$l('clicked: ' + name)
						})
						bt.C('y').a2(el)
						bt.css({
							'font-size': 20,
							margin: 4,
							height: 40,
							width: 180
							//, width : '100%'
						})
					})
					return el
				}
				/*
				 $s({
				 _ct: {
				 d: '$',
				 //  define  flow dir
				 // and
				 // if we allow the items to wrap
				 //  Remember this is the same as:
				 $D: 'r',
				 $W: 'w',
				 //      'flex-flow' : 'row wrap',
				 // Then we define how is distributed the remaining space
				 flJC: 'space-around'
				 }
				 })
				 */
				css = {
					//_ct:{dp:'fl'},
					'.flex-container': {
						display: 'flex', 'flex-direction': 'row',
						$W: 'w', 'justify-content': 'space-around',
						'align-content': 'flex-start', 'align-items': 'stretch'
					},
					'.flex-items-default': {
						width: '300px', height: '250px',
						'flex-grow': 0, 'flex-shrink': 0, 'flex-basis': 0
					},
					'.flex-item-1': {
						width: '100px',
						height: '100px',
						'flex-grow': 1,
						'flex-shrink': 0,
						'flex-basis': '98%'
					},
					'.flex-item-2': {
						width: '100px', height: '100px',
						'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'
					},
					'.flex-item-3': {
						width: '100px', height: '100px',
						'flex-grow': 1, 'flex-shrink': 0,
						'flex-basis': '200px'
					},
					'.flex-item-4': {
						width: '100px', height: '100px',
						'flex-grow': 1, 'flex-shrink': 0,
						'flex-basis': '200px'
					},
					'.flex-item-5': {
						width: '100px', height: '100px',
						'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'
					}
				}
				$.k = function (k) {
					var q = $.sp()
					q.K(k)
					return q
				}
			}
			
			function media() {
				phone()
				tablet()
				cutoffs()
				$subRules = function (rulesOb) {
					return _brace($rules(rulesOb))
					//for meta (see Grail)
				}
				function cutoffs() {
					minW = above = greaterThan = atLeast = min = function (num, str) {
						return '@media all and (min-width: ' + num + 'px) ' + (str || '')
					}
					maxW = below = lessThan = max = function (num, str) {
						return '@media all and (max-width: ' + num + 'px) ' + (str || '')
					}
					between = within = function (n1, n2, str) {
						maxMin = function (n1, n2, str) {
							return max(n1) + ' and (min-width: ' + n2 + 'px)' + (str || '')
						}
						return maxMin(n2, n1, str)
					}
				}
				
				function phone() {
					_$phone = function (ob) {
						return _phone + $rules(ob)
					}
					$phone = function (ob) {
						$.Sty(_$phone(ob))
					}
				}
				
				function tablet() {
					_$tablet = function (ob) {
						return _tablet + $rules(ob)
					}
					$tablet = function (ob) {
						$.Sty(_$tablet(ob))
					}
				}
				
				MQ1 = LAY = function () {
					col = {
						_body: {dir: 'c'},
						'.c2, .c3': {w: '100%'},
						_c2: {ord: 0}
					}
					$s({
						'header, footer': {P: 20, C: 'gray', c: 'w'},
						_lay: {
							h: 400, C: 'y',
							dp: 'fl', dir: 'c'
						},
						_body: {dp: 'fl', gr: 1, C: 'p', dir: 'row'},
						_c1: {C: '_b', gr: 1},
						_c2: {C: 'g', w: 160, ord: '-1'},
						_c3: {C: 'p', w: 160}//, _phone: $subRules({bd: {C: 'z'}, _body:col})
					})
					sty = '@media only screen and (max-width: 500px) ' +
					$subRules(col)
					$.Sty(sty)
					//$tablet({bd: {C: 'z'}, _body: {dir: 'c'}})
					$.dK('lay').A(
							$.hdr('heead'),
							$.dK('body').A(
									$.dK('c1').A('main').C('b'),
									$.dK('c2').A('nav').C('o'),
									$.dK('c3').A('sidebar').C('g')
							),
							$.ftr('fooot')
					)
				}
				MQ2 = MVD = function () {
					vidHtml();
					$tablet(tabRus);
					$phone(phRus)
				}
				MQ0 = MVD2 = MEDVID = MEDIAVIDTUT = function () {
					vidHtml()
					med = '@media screen and (max-width: 960px)'
					decs = '{ #ct{width:100%;}  #left{width:70%} #right{width:30% } img{width:100%} }'
					$.Sty(med + decs)
					$.Sty('@media screen and (max-width: 640px) { #ct{width:100%;}  #left{width:100%} #right{width:100% }   }')
				}
				MQ3 = SS23 = MDCL = function () {
					$s({_sidebar: {dp: 'fl'}})
					$.sty('@media only screen and (max-width: 500px) ' +
					$subRules({_sidebar: {dir: 'c'}}))
					//  *** alt works :$.sty('@media (max-width: 600px) {.sidebar {flex-direction: column;}}')
					$.dK('sidebar').WH(400, 500).C('b').A($.i('me'), $.i('me'), $.i('me'))
				}
				MQ4 = MED = function () {
					MQ5 = MED1 = function () {
						$l('MD.')
						$s(above(960, " { body {font-size: 80px;}  }"),
								between(600, 960, "  {body {font-size: 40px;}}"),
								between(320, 600, "  {body {font-size: 20px;}}"))
						$s(
								above(960, "{ body {color:blue;}  }"),
								between(600, 960, " {body{color:red;}}") + below(600, " {body{color:green;}}")
						)
						$.sp().A('span')
						$.h1().A('h1')
					}
					MQ9 = MED3 = function () {
						$s("@media all and (min-width: 960px) { body {font-size: 80px;}  }",
								"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
								"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}")
						$s("@media all and (min-width: 960px) { body {color:blue;}  }",
								"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
								"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}")
						$.sp().A('span')
						$.h1().A('h1')
						SS16 = MED2 = MEDWORKS = BREAK3 = function () {

//works
							$s("@media all and (min-width: 960px) { body {font-size: 80px;}  }",
									"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
									"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}")
							$s("@media all and (min-width: 960px) { body {color:blue;}  }",
									"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
									"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}")
							$.sp('fasd').A()
							$.h1('fasd').A()
						}
					}
					str1 = above(960, "{ body {color:blue;}  }")
					str2 = between(600, 960, " {body{color:red;}}") +
					below(600, " {body{color:green;}}")
					//{@media all and (min-width: 960px) { body {color:blue;}  }: "@media all and (max-width: 960px)  and (min-width:… all and (max-width: 600px)  {body{color:green;}}"}
					$s($Ob(str1, str2))
					$.sp().A('span')
					$.h1().A('h1')
				}
				MQ5 = VANISH = NONE1 = function () {
					MQ7 = MEDIA = function () {
						sty = '@media only screen and (max-width: 500px) '
						sty += $subRules({bd: {C: 'b'}})
						$.Sty(sty)
					}
					$.dK('sidebar').WH(400, 500).C('b')
					$.Sty('@media (max-width: 600px) {.sidebar {display: none;}}')
				}
				DANI = function () {
					$s({
						$: {P: 0, M: 0},
						body: {
							C: 'z', c: 'p',
							//P: 30,
							display: 'flex', //'flex-direction': 'column'
							'justify-content': 'space-between',
							//	'align-items': 'stretch',
							//'align-items': 'stretch',
						},
						span: {
							'flex-basis': 80,
							display: 'flex'
						}
					})
					body = $('body')
					_.t(10, function () {
						body.A($.sp('hello').C($r()))
					})
					body.A(
							$.sp().A(
									$.i('me')//.W(100).H(50).C($r())
							).C($r()),
							$.sp().A('hello').C($r()),
							$.sp().A('hello').C($r())
					)
				}
				DATE = function () {
					$s({
						$: {
							fS: 22, //border: '4px dotted blue',
							M: 14, overflow: 'scroll'
						},
						body: {display: 'flex', 'flex-direction': 'column', C: '_b'},
						$content: {display: 'flex'},
						$main: {
							display: 'flex',
							'flex-direction': 'column',
							C: 'z', c: 'w', w: '100%'
						},
						$profile: {
							display: 'flex',
							// 'flex-wrap': 'wrap',
							C: 'o'
						},
						$left: {C: 'g'},
						$header: {C: 'b'},
						$compatibility: {C: 'u'},
						$imageBox: {
							C: 'r',//, w: 400, 
							'flex-shrink': 0
						},
						$about: {C: 's', w: '100%', 'flex-shrink': 1},
					})
					$s(below(960, "{#profile {display: flex; flex-direction: column;}}"))
					body = $('body')
					body.A(
							$.d().id('header').A('header'),
							$.d().id('content').A(
									$.d().id('left').A('left box'),
									$.d().id('main').A(
											$.d().id('profile').A(
													$.d().id('imageBox').A($.i('me')),
													$.d().id('about').A('about').A(
															$.d().A('afds fafd fda fdfsfdsa'),
															$.d().A('afdsf sfafsaf safsd fsd'),
															$.d().A('affa ffs dsfdfs dsfd')
													)
											),
											$.d().id('compatibility').A('compatibility')
									)
							)
					)
				}
			}
		}
	}
	function html() {
		hTags()
		divs()
		$.p = function () {
			var g = G(arguments), p = $('<p>')
			if (g.A_) {
				g.eF(function (g) {
					p.A(g)
				})
			}
			else {
				g.e(function (g) {
					p.A(g)
				})
			}
			p.A()
			return p
		}
		$.s = $.sp = $.span = function () {
			var g = G(arguments),
					sp = $('<span>'), str = '';
			_.e(g, function (val) {
				if (S(val)) {
					str += val
				}
				else {
					sp.A(val)
				}
			});
			if (str) {
				sp.T(str)
			}
			sp.A()
			return sp
		}
		$spA = function () {
			var sp = $.sp().fS(75).col('r')
			sp.A.apply(sp, arguments)
			return sp
		}
		$spA2 = function () {
			var sp = $.sp().fS(100).col('x').C('o')
			sp.A.apply(sp, arguments)
			return sp
		}
		$.S = $.str = function () {
			var g = G(arguments), s = $('<strong>');
			_.e(g, function (g) {
				s.A(g)
			});
			return s
		}
		$.pre = function () {
			return $("<pre>").A()
		}
		_B = $.b = $.B = function (a, k) {
			var g = G(arguments), b = $('<b>')
			//if(g.p){a =  '&nbsp;'+a  }
			//  b.H(a)
			//  b.K(k)
			if (a) {
				b = b.A(b)
			}
			if (!g.n) {
				b.A()
			}
			return b
		}
		$.hdr = $.header = function () {//$.H=
			var g = G(arguments), hdr = $('<header>')
			//  return $.ip().ty('header').n(n).v(v)
			g.e(function (q) {
				hdr.A(q)
			})
			hdr.A()
			return hdr
		}
		$.F = $.ftr = $.footer = function () {//$.H=
			var g = G(arguments), hdr = $('<footer>')
			//  return $.ip().ty('header').n(n).v(v)
			g.e(function (q) {
				hdr.A(q)
			})
			hdr.A()
			return hdr
		}
		$.nv = function () {
			return $('<nav>')
		}
		$.sc = $.sct = function (a) {
			var g = G(arguments)
			var sc = $('<section>')
			if (g.A) {
				_.e(g, function (el) {
					sc.A(el)
				})
			}
			else if (a) {
				sc.id(a)
			}
			sc.A()
			return sc
		}
		$.scI = function () {
			var g = G(arguments)
			var sc = $.sc()
			sc.id(g.f)
			if (A(g.s)) {
				_.e(g.s, function (el) {
					sc.A(el)
				})
			}
			return sc
		}
		$.ac = function () {//$.H=$.arg=
			var g = G(arguments), art = $('<article>')
			g.e(function (q) {
				art.A(q)
			})
			art.A()
			return art
		}
		$.em = function () {
			var em = $('<em>');
			return em
		}
		$.tp = function (id) {
			return $('<template>').id(id)
		}
		$.as = function () {
			var a = $('<aside>')
			G(arguments).e(function (q) {
				a.A(q)
			})
			a.A()
			return a
		}
		$.i = $.img = function () {
			var g = G(arguments), o, i = new Image(), $i = $(i);
			o = F(g.f) ? {fn: g.f} : O(g.f) ? g.f : {sr: g.f, fn: g.s};
			if (F(o.fn)) {
				$i.load(_.b(function (e) {
					o.fn(e.target, e)
				}, $i))
			}
			if (o.sr) {
				$i.sr(o.sr)
			}
			return $i
		}
		$.c = $.can = $.canvas = $.cv = $.c2 = function (c, width, h, x, y) {
			var g = G(arguments), o, q
			o = g.S_ ?
			{c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
			{w: g.f, h: g.s, x: g.t, y: g[3]}
			o.w = o.w || 1200
			o.h = o.h || 600
			q = $('<canvas>')
			q.attr({width: o.w, height: o.h})
			//o.c = o.c || 'x'
			if (o.c) {
				q.C(o.c)
			}
			if (N(o.x)) {
				q.abs(o.x, o.y)
			}
			if (g.p) {
				q.dg()
			}
			q.id('canvas').k('canvas can').al(.8)
			return q.A()
		}
		$.cv0 = function () {
			return $.c2.apply($, arguments)[0]
		}
		function hTags() {
			$.h1 = function () {
				var h = $('<h1>');
				h.A.apply(h, G(arguments));
				h.A()
				return h
			}
			$.h2 = function () {
				var h = $('<h2>');
				h.A.apply(h, G(arguments));
				h.A()
				return h
			}
			$.h3 = function () {
				var h = $('<h3>');
				h.A.apply(h, G(arguments));
				h.A()
				return h
			}
			$.h4 = function () {
				var h = $('<h4>');
				h.A.apply(h, G(arguments));
				h.A()
				return h
			}
			$.h5 = function () {
				var h = $('<h5>');
				h.A.apply(h, G(arguments));
				h.A()
				return h
			}
			$.h6 = function () {
				var h = $('<h6>');
				h.A.apply(h, G(arguments));
				h.A()
				return h
			}
		}
		
		function divs() {
			$._d = $.d_ = function () {
				var g = G(arguments),
						d = $('<div>')
				if (g.A()) {
					_.e(g.f, function (q) {
						d.A(q)
					})
				}
				else if (g.f) {
					d.A(g.f)
				}
				return d
			}
			$.d = $.div = function () {
				var g = G(arguments), d = $('<div>'), o
				o = g.A ? {a: g.f} : g.O ? g.f : S(g[1]) ?
				{c: g.f, k: g.s, w: g.t, h: g[3], x: g[4], y: g[5]} :
						g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
						{w: g.f, h: g.s, x: g.t, y: g[3]}
				if (o.c) {
					d.C(o.c)
				}
				if (N(o.w)) {
					d.W(o.w)
				}
				if (N(o.h)) {
					d.H(o.h)
				}
				if (N(o.x)) {
					d.ab(o.x, N(o.y, 0))
				}
				if (o.a) {
					_.e(g[0], function (g) {
						d.A(g)
					})
				}
				if (o.k) {
					d.K(o.k)
				}
				if (!g.n) {
					d.A()
				}
				if (g.p) {
					d.dg()
				}
				return _d = d
			}
			$.dI = function () {
				$l('$.dI')
				var g = G(arguments),
						d = $.d.apply($, g.r)
				d.id(g.f)
				return d
			}
			$.dK = function () {
				var g = G(arguments)
				var args = _.r(arguments)
				var d = $.d.apply(null, args || [])
				return g.f ? d.K(g.f) : d
			}
			$.dD = $.divD = function (c, w, h, x, y) {
				var d, g = G(arguments)
				w = N(w, 200)
				h = N(h, w)
				d = $.d(200, 200, '+')
				if (g.u) {
					return d.C('n')
				}
				if (g.S_) {
					d.C(c)
					if (N(w)) {
						d.W(w)
					}
					if (N(h)) {
						d.H(h)
					}
					if (N(x)) {
						d.X(x)
					}
					if (N(y)) {
						d.Y(y)
					}
					return d
				}
				if (g.N_) {
					return $.dD('o', c, w, h, x)
				}
			}
			$.dA = function func(col, w, height, x, y) {
				var g = G(arguments),
						div = $.d().P('absolute')
				if (U(col)) {
					return div.C('brown')
				}
				if (S(col)) {
					div.C(col);
					if (N(w)) {
						div.W(w)
					}
					if (N(height)) {
						div.H(height)
					}
					if (N(x)) {
						div.X(x)
					}
					if (N(y)) {
						div.Y(y)
					}
					if (g.p) {
						div.dg()
					}
					return div
				}
				if (N(col)) {
					return $.dA('o', col, w, height, x)
				}
			}
			$.divA = $.dA = $.divA = function (c, w, h, x, y) {
				var g = G(arguments),
						d = $.d().P('absolute'),
						o = g.O ? g.f :
								g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
								{w: g.f, h: g.s, x: g.t, y: g[3]}
				if (N(o.w)) {
					d.W(o.w)
				}
				if (N(o.h)) {
					d.H(o.h)
				}
				d.XY(N(x, 0), N(y, 0))
				if (o.c) {
					d.C(o.c)
				}
				return d
			}
			$.dD = $.divD = function func(col, w, h, x, y) {
				w = N(w) ? w : 200;
				h = N(h) ? h : w;
				var div = $.div(200, 200).drag();
				if (U(col)) {
					return div.C('brown')
				}
				if (S(col)) {
					div.C(col);
					if (N(w)) {
						div.W(w)
					}
					if (N(h)) {
						div.H(h)
					}
					if (N(x)) {
						div.X(x)
					}
					if (N(y)) {
						div.Y(y)
					}
					return div
				}
				if (N(col)) {
					return func('orange', col, w, h, x)
				}
			};
			$.dIl = $.inlineDiv = function (a, b, c) {
				var d = dv(a, b, c);
				d.display('inline');
				return d
			};
			$.ilBl = $.inlineBlockDiv = function (a, b, c) {
				var d = $.d(a, b, c);
				d.display('inline-block');
				return d
			};
			$.dva = function (r, w, h, l, t) {
				//color, w, h, left, top
				var g = G(arguments),
						r = g[0], w = g[1], h = g[2], l = g[3], t = g[4], d
				if (!S(r)) {
					return g.n ?
							$.dva($r(), r, w, h, l, '-') :
							g.p ? $.dva($r(), r, w, h, l, '+') :
									$.dva($r(), r, w, h, l)
				}
				d = $.d(r).p('a').C(r)
				if (g.p) {
					if (w) {
						d.l(w)
					}
					;
					if (h) {
						d.t(h)
					}
					d.P(16)
					return d.auto()
				}
				w = w || 1;
				h = h || w;
				d.WH(w * 100, h * 100)
				l = l || 0;
				t = t || l;
				d.l(l * 100).t(t * 100)
				if (!g.n) {
					d.dg()
				}
				return d
			}
			$dA = function () {
				var d = $.d()
				d.A.apply(d, arguments)
				return d
			}
			$.__d = function () {
				var d = $('<div>')
				_.e(arguments, function (ch) {
					d.A(ch)
				})
				return d
			}
			$.fn.dI = function () {
				return this.A(
						$.dI.apply($, arguments)
				)
			}
		}
		
		$.a = function (a, f) {
			var g = G(arguments), a = g[0], f = g[1], la = a || ''
			$.a2 = function (a, fn) {
				var g = G(arguments), a = g[0], f = g[1], el = $.a().id(a).A(a);
				if (F(fn)) {
					el.o(fn)
				} else {
					el.hr(fn || '#')
				}
				if (g.n) {
					el.dd()
				}
				//  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
				if (g.p) {
					el = li(el)
				}
				if (g.m) {
					el = li(el).K('active')
				}
				return el
			}
			l = $('<a>').A(a)//.id(a)
			if (F(f)) {
				l.$(f)
			} else {
				l.href(f || '#')
			}
			// if(g.n){ l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' }) }
			//if(g.p){ l = $.li( l ) }
			//if(g.m){ l = $.li( l ).K('active') }
			return l.A()
		}
		$.br = function (a) {
			if (U(a)) {
				return $('<br>')
			}
			var sp = $.sp();
			_.t(a, function () {
				sp.A($('<br>'))
			});
			return sp
		}
		$.cI = function (id) {
			return $.c().id(id || 'cv')
		}
		$.pre = function () {
			return $("<pre>").A()
		}
		$.hr = function (c, h, w) {
			var hr = $('<hr>')
			//  if( N(c) ){  return $.hr('z', c, h )  }
			//  hr = $('<hr>').h(h ||2).C(c||'z');
			//  if(w ){ hr.W(w ) }
			return hr.A()
		}
		$.nav = $.n = function () {
			return $('<nav>')
		}
		$.la = $.liA = function () {
			var g = G(arguments), o,
					a = $('<a>').hr('#'),
					li = $('<li>')
			// if(A(g.f)){     _.e(g.f, function(el){});   return li.A(a)     }
			o = g.F_ ? {fn: g.f} : g.S_ ? {id: g.f, fn: g.s} : {el: g.f, fn: g.s}
			o.ht = o.id
			if (o.id) {
				a.id(o.id)
			}
			if (o.ht) {
				a.html(o.ht)
			}
			if (o.el) {
				a.A(o.el)
			}
			if (o.fn) {
				a.$(o.fn)
			}
			li.A(a)
			return li
		}
		$.lL = $.lib = $.liLb = function () {
			var g = G(arguments), o,
					li = $('<li>'),
					lb = $.lb().a2(li)
			if (A(g.f)) {
				_.e(g.f, function (el) {
					lb.A(el)
				})
				return li
			}
			o = g.F_ ? {fn: g.f} :
					g.S_ ? {id: g.f, fn: g.s} :
					{el: g.f, fn: g.s}
			o.ht = o.id
			if (o.id) {
				a.id(o.id)
			}
			if (o.ht) {
				a.html(o.ht)
			}
			if (o.el) {
				a.A(o.el)
			}
			if (o.fn) {
				a.$(o.fn)
			}
			return li
		}
		$.li = function () {
			var g = G(arguments), li = $('<li>')
			if (A(g[0])) {
				_.e(g[0],
						function (g) {
							li.A(g)
						})
			}
			if (g.S_) {
				li.A(g.f)
			}
			if (g.p) {
				li.K('active')
			}
			if (g.n) {
				li.k('dropdown')
			}
			li.A()
			return li
		}
		$.ol = function (o, b) {
			var g = G(arguments),
					ol = $('<ol>');
			_.e(g, function (v) {
				ol.A(v)
			});
			return ol
		}
		$.ul = function () {
			var g = G(arguments),
					ul = $('<ul>')
			if (g.A_) {
				_.e(g.f, function (el) {
					if (g.p) {
						if (el.iLi()) {
							el = $.li([el])
						}
					}
					if (S(el)) {
						el = $.li(el)
					}
					ul.A(el)
				})
			}//if(g.p){ul.dg()}//if(g.n){ul.K('ddm')} //dropdown menu
			if (g.p) {
				alert('$.ul g.p')
				ul.K('n nbn')
			}//navbar nav
			// $l(ul.oh())
			_ul = ul.A()
			return ul
		}
		$.uK = $.ulK = function (k, a, b, c, d) {
			var ul = $.ul(a, b, c, d).K(k)
			return ul
		}
		$.liK = function (k, a, b, c, d) {
			var li = $.li(a, b, c, d)
			li.K(k)
			return li
		}
// tables:
		$.fs = function () {
			var g = G(arguments),
					q = $('<fieldset>')
			if (g.A) {
				_.e(g.f, function (e) {
					q.A(e)
				})
			}
			else {
				g.e(function (e) {
					q.A(e)
				})
			}
			return q
		}
		$.t = function (a) {
			var g = G(arguments)
			var t = $('<table>')
			if (A(a)) {
				_.e(a, function (el) {
					t.A(el)
				})
			}
			if (!g.n) {
				t.A()
			}
			return t
		}
		$.tHR = function (ch) {
			var el = $.tr().a2($.tH())
			if (A(ch)) {
				_.e(ch, function (ch) {
					if (S(ch)) {
						ch = $.th(ch)
					}
					el.A(ch)
				})
			}
			return el
		}
		$.tH = function (a) {
			var tH = $('<thead>')
			if (A(a)) {
				_.e(a, function (el) {
					tH.A(el)
				})
			}
			else if (O(a)) {
				tH.A(a)
			}
			return tH
		}
		$.th = function (a) {
			var th = $('<th>')
			if (A(a)) {
				_.e(a, function (el) {
					th.A(el)
				})
			}
			else if (S(a)) {
				th.A(a)
			}
			return th
		}
		$.tB = $.tb = function () {
			return $('<tbody>')
		}
		$.tr = function (a) {
			var g = G(arguments)
			var tr = $('<tr>')
			if (A(a)) {
				_.e(a, function (el) {
					if (S(el)) {
						el = g.p ? $.th(el) : $.td(el)
					}
					tr.A(el)
				})
			}
			else if (a) {
				tr.A(a)
			}
			return tr
		}
		$.td = function (a) {
			var g = G(arguments)
			var td = $('<td>')
			if (A(a)) {
				_.e(a, function (el) {
					td.A(el)
				})
			}
			else if (a) {
				td.A(a)
			}
			return td
		}
		$.cl = function () {
			var cl = $('<col>');
			return cl
		}
		$.cg = function () {
			var cg = $('<colgroup>');
			return cg
		}
		$.tH = function () {
			var g = G(arguments), q = $('<thead>')
			if (g.A_) {
				_.e(g.f, function (e) {
					q.A(e)
				})
			}
			return q
		}
		$.tB = function () {
			var g = G(arguments), q = $('<tbody>')
			if (g.A_) {
				_.e(g.f, function (e) {
					q.A(e)
				})
			}
			return q
		}
		$.lg = function () {
			var g = G(arguments),
					q = $('<legend>')
			if (g.A) {
				_.e(g.f, function (e) {
					q.A(e)
				})
			}
			else {
				g.e(function (e) {
					q.A(e)
				})
			}
			return q
		}
		$.A = function () {
			var g = G(arguments)
			g.e(function (el) {
				$('body').A(el)
			})
		}
		$.ipI = function (id, arr) {
			var q = $.ip().id(id)
			if (A(arr)) {
				_.e(arr, function (qq) {
					q.A(qq)
				})
			}
			else if (arr) {
				q.A(arr)
			}
			return q
		}
		$.ulI = function (id, arr) {
			var q = $.ul().id(id)
			if (A(arr)) {
				_.e(arr, function (qq) {
					q.A(qq)
				})
			}
			else if (arr) {
				q.A(arr)
			}
			return q
		}
		$.tK = function (k, toAdd) {
			var g = G(arguments),
					t = $.t()
			t.K(k)
			if (A(toAdd)) {
				_.e(toAdd, function (q) {
					t.A(q)
				})
			}
			return t
		}
		nestHTag()
		nestDiv()
		inputs()
		function nestHTag() {
			$.fn.h1 = function (text) {
				this.A($.h1(text))
				return this
			}
			$.fn.h2 = function (text) {
				this.A($.h2(text))
				return this
			}
			$.fn.h3 = function (text) {
				this.A($.h3(text))
				return this
			}
			$.fn.h4 = function (text) {
				this.A($.h4(text))
				return this
			}
			$.fn.h5 = function (text) {
				this.A($.h5(text))
				return this
			}
			$.fn.h6 = function (text) {
				this.A($.h6(text))
				return this
			}
			$.fn.H5 = function (a) {
				return $.h5(a).a2(this)
			}
			$.fn.h1 = function (t) {
				return this.A($.h1(t))
			}
			$.fn.h2 = function (text) {
				this.A($.h2(text))
				return this
			}
			$.fn.h3 = function (text) {
				this.A($.h3(text))
				return this
			}
			$.fn.h4 = function (text) {
				this.A($.h4(text))
				return this
			}
			$.fn.h5 = function (text) {
				this.A($.h5(text))
				return this
			}
			$.fn.h6 = function (text) {
				this.A($.h6(text))
				return this
			}
		}
		
		function nestDiv() {
			$.fn.d_ = function (k) {
				var q = this, d = $.d()
				d.K(k)
				d.A(q)
				return q
			}
			$.fn._d = function (k) {
				var q = this, d = $.d()
				d.K(k)
				q.A(d)
				return q
			}
			$.fn.D_ = function (k) {
				var q = this, d = $.d()
				d.K(k)
				d.A(q)
				return d
			}
			$.fn._D = function (k) {
				var q = this, d = $.d()
				d.K(k)
				q.A(d)
				return d
			}
		}
		
		function inputs() {
			$.ip = function (n) {
				var g = G(arguments), o, ip
				ip = $('<input>').at('type', 'text')
				return ip
				if (n) {
					ip.n(n);
					ip.id(n)
				}
				o = g.O ? g.f :
						g.N_ ? {w: g.f, id: g.s} :
						{ph: g.f, id: g.s, v: g.t || g.s, n: g.t || g.s}
				ip.ph(o.ph)
				if (o.w) {
					ip.W(o.w)
				}
				if (o.id) {
					ip.id(o.id)
				}
				if (o.v) {
					ip.v(o.v)
				}
				if (o.n) {
					ip.n(o.n)
				}
				ip.C(o.C || 'r').col(o.c || 'b')
				if (!g.n) {
					ip.K('form-control')
					ip.A()
				}
				return ip
			}
			$.ipBt = function (btT, f) {
				return $.d().A($.ip(),
						$.bt(btT, function () {
							f.A(ip.V())
						})).A()
			}
			$.pw = function (n) {
				var el = $('<input>').ty('password')
				if (n) {
					el.n(n)
				}
				return el
			}
			$.ta = $.textarea = function (rows, cols, Cl, cl) {
				var g = G(arguments),
						ta = $('<textarea>')
				Cl = Cl || 'pink'
				cl = cl || 'black'
				if (g.N) {
					ta.K('form-control')
				}
				if (N(rows)) {
					ta.attr({rows: rows})
				}
				if (N(cols)) {
					ta.attr({cols: cols})
				}
				return ta.C(Cl, cl)
			}
			$.ta = function (rows, cols, Cl, cl) {
				var g = G(arguments),
						ta = $('<textarea>');
				Cl = Cl || 'p';
				cl = cl || 'z';
				if (g.N) {
					ta.K('form-control')
				}
				if (N(rows)) {
					ta.at({rows: rows})
				}
				if (N(cols)) {
					ta.at({cols: cols})
				}
				return ta.C(Cl, cl)
			}
			$.l = function (t, fr, n, ph) {
				alert('$.l')
				var g = G(arguments), lb = $('<label>'),
						ip, sp
				if (!g.f) {
					return lb
				}
				lb.for(fr).K('control-label').h(t)
				if (!g[2]) {
					return lb
				}
				ip = $.ip().id(fr).n(n).ph(ph || '...')
				if (!g.n) {
					ip.K('form-control')
				}
				sp = $.sp().A(lb, ip)
				if (!g.n) {
					sp.A()
				}
				return sp
			}
			$.lb = function () {
				var g = G(arguments), o, lb = $('<label>')
				o = g.A_ ? {ch: g.f} : {t: g.f, fr: g.s}
				if (o.ch) {
					_.e(o.ch, function (ch) {
						lb.A(ch)
					})
					return lb
				}
				lb.ht(o.t).for(o.fr)
				//fr=fr||t
				//lb.K('control-label')
				if (!g.n) {
					lb.A()
				}
				return lb
			}
			$.cb = function (n, v, lb) {
				$._cb = function () {
					return $.ip().ty('checkbox')
				}
				var g = G(arguments), checked, n = g[0], v = g[1], lb = g[2],
						cb, id
				if (g.u) {
					return $('<input type="checkbox">').A()
				}
				if (A(v)) {
					v = v[0];
					checked = true
				}
				id = n + '-' + v
				V = '&nbsp' + v + '&nbsp'
				cb = $.ip().ty('checkbox')
				cb.n(n)
				cb.v(v)
				cb.id(id)
				if (checked) {
					cb.at({checked: 'checked'})
				}
				cb = lb ? $.sp().A(cb, $.lb(l, id))
						: g.p ? $.sp().A($.br(), cb, $.lb(V, id)) :
						!g.n ? $.sp().A(cb, $.lb(V, id)) :
								cb
				return cb.A()
				/*
				 $.cb =function(n,v,lb){var g=G(arguments), checked, n=g[0],v=g[1],lb=g[2]
				 if(A(v)){v=v[0];checked=true}
				 var I=n+'-'+ v,
				 V='&nbsp'+v+'&nbsp',
				 cbox = $.input().type('checkbox').n(n).v(v).id(I)
				 if(checked){cbox.attr({checked:'checked'})}
				 return lb? $.span().A(cbox , $.lb(l,I))
				 :g.p? $.span().A( $.br(), cbox , $.lb(V,I))
				 :g.N? $.span().A(cbox , $.lb(V,I) )
				 :cbox }
				 $.cb = function self(n ,v,id, makeDivWithLabel){var g=G(arguments);
				 n = g.f||''; v = g.s||'';id = g.t||'';
				 cb= $.ip().ty('checkbox')
				 sp  = $.sp()
				 if(g.A_){_.e(g, function(ar){
				 sp.A($.cb(ar[0], ar[1], ar[2], ar[3]),
				 $.lb(ar[1], ar[2]))});
				 return sp.A($.br())}
				 cb.n(n).v(v).id(id);
				 if(g.p){cb.prop('checked', true)}
				 if(makeDivWithLabel!==false){cb = $.dK('checkbox').A($.lb(n).prepend( cb ))}
				 return cb}
				 */
			}
			$.cbG = function (n, v) {
				var g = G(arguments), n = g[0], v = g[1], sp = sp();
				if (g.p) {
					_.e(v, function (v) {
						sp.A($.cb(n, v, '+'))
					})
				}
				else {
					_.e(v, function (v) {
						sp.A(
								$.cb(n, v))
					})
				}
				return s.id(n)
			}
			$.cbl = $.cbLb = function () {
				var g = G(arguments)
				return $.sp().A(
						$.cb(g.f, g.s, g.t, g[3]), $.lb(g.f, g.s))
			}
			$.rbOld = function () {
				var g = G(arguments),
						chkd, n = g[0] || 'n', v = g[1], lb = g[2];
				if (A(v)) {
					v = v[0];
					chkd = true
				}
				var I = n + '-' + v,
						V = '&nbsp' + v + '&nbsp',
						rbox = $.ip().ty('radio').n(n).v(v).id(I);
				if (chkd) {
					rbox.at({checked: 'checked'})
				}
				return l ?
						$.sp().A(rbox, $.lb(lb, I))
						: g.p ?
						$.sp().A($.br(), rbox, $.lb(V, I))
						: g.N ?
						$.sp().A(rbox, $.lb(V, I))
						: rbox
			}
			$.rb = function (name, id) {
				var g = G(arguments)
				id = id || name
				var q = $('<input>').at('type', 'radio')
				q.n(name)
				q.id(id)
				if (g.p) {
					q.at('checked', true)
				}
				return q
			}
			$.rbG = function (n, v) {
				var g = G(arguments), n = g[0], v = g[1], sp = $.sp()
				if (g.p) {
					_.e(v, function (v) {
						sp.A($.rb(n, v, '+'))
					})
				}
				else {
					_.e(v, function (v) {
								sp.A($.rb(n, v))
							}
					)
				}
				return sp.id(n)
			}
			$.rg = function (n, m, M) {
				m = N(m) ? m : 0;
				M = N(M) ? M : 100;
				n = n || 'r';
				var r = $('<input type="range">');
				r.attr({name: n, min: m, max: M});
				return r
			}
			$.sl = function () {
				var g = G(arguments), sl = $('<select>').A()
				if (g.A_) {
					g.eF(function (o) {
						if (N(o)) {
							o = '' + o
						}
						if (S(o)) {
							o = $.o(o)
						}
						sl.A(o)
					})
				}
				if (g.p) {
					sl.multiselect()
				}
				/*
				 //if(!A(g.f)){g.unshift( ['select'] )}
				 if(A(g.f)){
				 sl= $.sel.apply($, g.f);
				 _.e(g.r,function(v){
				 if(S(v)){v = $.op(v)}
				 sl(v)})}
				 else {sl= $.sel();
				 _.e(g,function(v){if (S(v)) {v = $.o(v)}
				 sl(v)})  }
				 */
				sl.V = function (v) {
					if (U(v)) {
						return sl.q.v()
					}
					sl.v(v);
					return sl
				}
				sl.o = function (f) {
					f = f || alert
					sl.change(function () {
						f(sl.V())
					})
					return sl
				}
				if (g.O) {
					g.eF(function (v, k) {
						sl.A($.o(k, v))
					})
				}
				return sl
				//$.sl(['volvo', $.op('merc'), 'saab' ])
				//$('<select multiple>').A().A(  $.op('merc'),        $.op('merc1'),        $.op('merc2'))
				//$('<select size="3">').A().A($.op('merc'), $.op('merc1'),  $.op('merc2'))
			}
			$.SEL = function (n, i) {
				var g = G(arguments), sl
				sl = $('<select>')
				sl.n(n).id(i)
				if (!g.n) {
					sl.K('form-control')
				}
				if (g.p) {
					sl.at({mutiple: true})
				}
				return sl
			}
			$.sel = function () {
				var g = G(arguments)
				var sl = $.sl().id(g.f)
				_.e(g.r, function (g) {
					var o = $.op(g).v(g)
					sl.A(o)
				})
				sl.A()
				return sl
			}
			$.o = $.op = function (n, v) {
				var g = G(arguments),
						o = $('<option>')
				o.A(g.f);
				o.v(g.s || g.f)
				// n = n||'option';  v=v||n; o.T(n).v(v)
				// o.V( g[0] )
				if (g.p) {
					o.at({selected: true})
				}
				o.A()
				return o
			}
			$.og = $.opGr = function (lb) {
				var g = G(arguments), o, og
				o = g.S_ ? {lb: g.f, ch: g.s} : {ch: g.f}
				og = $('<optgroup>')
				if (o.lb) {
					og.at('label', o.lb)
				}
				if (o.ch) {
					if (A(o.ch)) {
						_.e(o.ch, function (q) {
							//if(N(q)){q =''+ q }
							if (S(q)) {
								q = $.o(q)
							}
							og.A(q)
						})
					}
					else {
						og.A(o.ch)
					}
				}
				og.A()
				return og
			}
			_form = function () {
				var f = $.f().C('g').pad(4).A(
						bs.fGpD().A(
								$.lb('un: ', 'un'),
								$.ip('un')),
						bs.fGpD().A(
								$.lb('pw: ', 'pw'),
								$.ip('pw')),
						$.sbm('log in')
				)
				return f
			}
			$.bt = $.button = function () {
				var g = G(arguments), o, bt = $('<button>');
				o = g.F ? {fn: g[0]} : {t: g[0], fn: g[1]};
				o.t = o.t || 'submit';
				if (!g.n) {
					bt.A()
				}
				bt.T(o.t)
				if (F(o.fn)) {
					bt.click(o.fn)
				}
				return bt
			}
			$.BT = $.btL = function (t, fn) {
				if (F(t)) {
					return $.bt('submit', t)
				}
				var b = $('<button>');
				b.text(t);
				b.$(fn)
				return b.K('btn-lg')
				/*
				 $.btL=  function(t,f,C,c){
				 var g=G(arguments),
				 t=g[0],f=g[1],C=g[2],c=g[3],
				 t=t||'ok', k=  'btn-lg' , C=C||'b', c=c||'y';
				 b = $.bt().K('btn-lg').c(C, c);
				 b(t);if(f){ b.o( f ) }
				 if( g.n ){ b.dd() }//dropdown
				 return b
				 }
				 */
			}
			$._bt = $.btM = function (t, fn) {
				return $.bt(t, fn).C('b').K("btn btn-mini")
			}
			$.bts = function (a, b) {
				var g = G(arguments), d = $.dA(200);
				if (g.p) {
					return $.bts(['start', a], ['stop', b]).auto()
				}
				g.e(function (v) {
					v = A(v) ? v : [v];
					d.A($.bt(v[0], v[1]).k(g.p ? ('fc') : '').M(4))
				})
				return d
			}//floating div of buttons
			$.btR = function (t, fn) {
				var b = $.bt(t, fn).float('right')//.display('block')
				return b
			}
			$.$bt = $.btLf = function (t, fn) {
				var b = $.bt(t, fn).float('left')//.display('block')
				return b
			}
			$.bX = $.btX = function (t, fn) {
				var g = G(arguments), bt, o;
				o = {
					url: g.f,
					data: g.s
				}
				t = t || g.p ? 'submit' : 'X'
				fn = fn || function () {
					var bt = this;
					$.aj({
						url: o.url, data: o.data, type: 'DELETE',
						success: function () {
							$(bt).pa().rm();
							if (g.n) {
								$.rl()
							}
						}
					})
				}
				bt = $.bt(t, fn)
				return bt
			}
			$.btR = function (text, func) {
				var b = $.button(text, func).float('right')//.display('block')
				return b
			}
			$.btL = function (text, func) {
				var b = $.button(text, func).float('left')//.display('block')
				return b
			}
			$.bts = function (a, b) {
				var g = G(arguments), d = dva(2)
				if (g.p) {
					return bts(['start', a], ['stop', b]).auto()
				}
				_.e(g, function (v) {
					v = A(v) ? v : [v]
					d($button(v[0], v[1]).k(g.p ? ('fc') : '').M(4))
				})
				return d
			}//floating div of buttons //beta
			$.f = $.form = function (c, act) {
				var g = G(arguments),
						o, f = $('<form>').K('form')
				o = g.A ? {ch: g.f} : {c: g.f, a: g.s}
				if (o.ch) {
					g.eF(function (el) {
						f.A(el)
					})
				}
				if (o.a) {
					f.attr({action: o.a})
				}
				if (o.c) {
					f.C(o.c)
				}
				f.attr({method: g.p ? 'get' : 'post'})
				if (!g.n) {
					f.A()
				}
				return f
			}
			$.f.gr = $.fG = $.fGD = function () {
				return $.dK('form-group').fS(20)
			}
			$.formGet = function (c, act) {
				var g = G(arguments), c = g[0], act = g[1],
						f = $.f().K('form').attr('method', 'get')
				if (c) {
					f.C(c)
				}
				if (act) {
					f.at({action: act})
				}
				return f
			}
			$.fI = $.formInline = function (a, b) {
				var f = $.form().C('b').K('form-inline form-group'),
						g = G(arguments);
				_.e(g, function (g) {
					f.A(g)
				});
				if (g.p) {
					f.A($.submit('ok'))
				}
				return f
			}
			$.f.i = $.fR = $.formRight = function (a, b) {
				var g = G(arguments),
						f = $.form().C('b').K('form navbar-form navbar-right');
				_.e(g, function (g) {
					f.A(g)
				});
				if (g.p) {
					f.A($.submit('ok'))
				}
				return f
			}
			$.f.f = $.fF = $.formFalse = function (a, b) {
				var g = G(arguments),
						f = $.form().C('b').K('form well').attr({method: false, action: false});
				_.e(g, function (g) {
					f.A(g)
				});
				if (g.p) {
					f.A($.submit('ok'))
				}
				return f
			}
			$.sm = $.submit = $.submitButton = function (buttonText, func) {
				return $.button(buttonText, func).type('submit')
			}
			$.sb = function () {
				var g = G(arguments)
				var ip = $.ip()
				ip.at('type', 'submit')
				ip.A()
				return ip
			}
			$.sbb = function () {
				var g = G(arguments)
				var ip = $.ip()
				ip.at('type', 'submit')
				return ip
			}
			$.smBt = $.submitButton = function () {
				var args = G(arguments),
						button = $button.apply(0, args)
				return button.type('submit')
			}
			$.submit2 = sm = function (a) {
				var g = G(arguments)
				if (g.p) {
					return $button().type('submit').k('btn btn-mini button-default').T(ok(a))
				}
				return ip('submit').k('show').v(ok(a))
			}
			$.sm = function (v) {
				var el = $('<input>').ty('submit').fS(16)
				if (v) {
					el.v(v)
				}
				return el
			}
			$.sb = function (t, fn) {
				var g = G(arguments), bt = $.bt(t, fn).ty('submit')
				if (g.p) {
					bt.K('btn btn-mini button-default').T(a || 'ok')
				}
				//bt.A('submit').K('show')
				return bt
			}
			$.fU = $.fileUpload = function (lb, t) {
				var fG = $.d().K("form-group").A(
						$.lb(D(lb) ? lb : 'upload file', 'upl').K('control-label').fS(20),
						$.ip().ty('file').id('upl').name('i')
				)
				if (t) {
					fG.A($.p(t).K('help-block'))
				}
				return fG
			}
		}
		
		mock()
		function mock() {
			bbMock = function () {
				return docs = _.m($mk.docs, function (doc) {
					return new Bb.Model(doc)
				})
			}
			__ = 'fadsfasasdf'
			Ap = {M: {}, C: {}, V: {}, T: {}}
			$Mk = function () {
				$mk = function () {
				}
				ipsum()
				mks()
				function mks() {
					$mk.strs = ['wallaby', 'Macropus', 'agilis',
						'Agouti', 'Dasyprocta', 'leporina']
					$mk.Doc = function (title, content) {
						title = title || $mk.l1()
						content = content || $mk.lI()
						return {
							title: title,
							content: content
						}
					}
					$mk.Docs = function (num) {
						var docs = []
						_.t(N(num, 27), function () {
							docs.push($mk.Doc())
						})
						return docs
					}
					$mk.docs = $mk.Docs(12)
					var Doc = $mk.Doc
					$mk.obs = [
						new Doc('title1', 'content1'),
						new Doc('title2', 'content2'),
						new Doc('title3', 'content3'),
						new Doc('title4', 'content4'),
						new Doc('title5', 'content5'),
					]
					$mk.ob = {
						eyes: 2,
						'secret nickname': null,
						obs: $mk.obs,
						strs: $mk.strs,
						likes: ['shopping', 'puking']
					}
					$mk.ob = {
						ob: $mk.ob,
						eyes: 2,
						'secret nickname': null,
						obs: $mk.obs,
						strs: $mk.strs,
						likes: ['shopping', 'puking']
					}
				}
				
				function ipsum() {
					$mk.lI = function (n) {
						n = N(n, R(40))
						var str = _.sample($mk.strs)
						_.t(n, function () {
							str += ' ' + _.sample($mk.strs)
						})
						return str
					}
					$mk.l1 = function () {
						return $mk.lI(1) + $sa.S($sa.S('-') + $mk.lI(1))
					}
				}
			}
			$Sa = function () {
				$sa = function (a, b) {
					if (U(b)) {
						return _.partial($sa, a)
					}
					return _.sample(arguments)
				}
				$sa.S = $sa('')
			}
			$Sa()
			$Mk()
//$mk.css = $s({h1: {C: 'o'}, li: {C: 'o'}, ul: {C: 'gray'}, d: {C: 'r'}, $: {B: '4px dashed pink', M: 20}})
			$mk.$ = function () {
				$s($mk.css)
				return $
			}
			$mockPage = function (pageName) {
				return $.sp(pageName).id(pageName + '-pg').K('pg').fS(50)
			}
		}
	}
	function data() {
		_bor = '5px solid red'
		_bulls = '&bull; &bull; &bull;'
		ooo.fl = {
			a: 'auto', b: 'baseline', m: 'center', c: 'column', C: 'column-reverse',
			i: 'initial', _: 'inherit', r: 'row', R: 'row-reverse',
			n: 'nowrap', s: 'flex-start', e: 'flex-end', S: 'stretch',
			sB: 'space-between', sA: 'space-around', w: 'wrap', W: 'wrap-reverse'
		}
		_.x(ooo, {
			dir: {r: 'row', rv: 'row-reverse', c: 'column', cRv: 'column-reverse'},
			wr: {
				w: 'wrap', wr: 'wrap',
				rv: 'wrap-reverse', nw: 'nowrap'
			},
			jfC: {
				st: 'flex-start',
				end: 'flex-end',
				c: 'center',
				sB: 'space-between',
				sA: 'space-around',
				i: 'initial',
				_: 'inherit'
			},
			alC: {
				fs: 'flex-start',
				fe: 'flex-end',
				c: 'center',
				sB: 'space-between',
				sA: 'space-around',
				i: 'initial',
				_: 'inherit'
			},
			alI: {
				fs: 'flex-start',
				fe: 'flex-end',
				c: 'center',
				b: 'baseline',
				s: 'stretch',
				i: 'initial',
				_: 'inherit',
				a: 'auto'
			}
		})
		_tablet = '@media screen and (max-width: 960px)'
		_phone = '@media screen and (max-width: 640px)'
		$tp = window['$tp'] || {}
		tabRus = {$ct: {w: '100%'}, $left: {w: '70%'}, $right: {w: '30%'}, i: {w: '100%'}}
		phRus = {$left: {w: '100%'}, $right: {w: '100%'}}
	}
	
	$CSS = function () {
		var res = $s.apply(null, arguments)
		$l(res)
		return res
	}
	$s.bd = function (ob) {
		$s('body', ob)
	}
	$s.bt = function (ob) {
		$s('button', ob)
	}
}

html5()
z=function(){$('body').E()}
red = {C: 'r'}
black = {c: 'z'}
displayNone = {display: 'none'}
body = {C: 'z', c: 'w'}
divWrapper = {
	display: 'flex',
	'flex-direction': 'column',
	'align-items': 'center'
}
divTools = {
	display: 'flex',
	'flex-direction': 'column',
	'align-items': 'center'
}
username = {'font-size': 20, 'text-decoration': 'underline'}
rightBox = {
	float: 'left', width: '250px',
	'margin-left': '20px', border: '3px solid blue'
}
leftBox = {
	float: 'left', padding: '20px', border: '3px solid red'
}
aFilter = {
	C: 'b',
	c: 'y',
	P: '5px 10px',
	M: '5px',
	'border-radius': '3px',
	'text-decoration': 'none'
}
aFilterHelper = {
	C: 'y',
	c: 'b',
	P: '5px 10px',
	M: '5px',
	'border-radius': '3px',
	'text-decoration': 'none'
}
bucCSS = {$leftbox: leftBox, $rightbox: rightBox}
twtCss = {_un: username, _sts: {}}
CssOb = {
	body: body,
	'.details': displayNone,
	'.active': red,
	'a.filter': aFilter,
	'a.filter:hover': aFilterHelper,
	'div#wrapper': divWrapper,
	'div.tools': divTools,
	'input#searchBox': black
}
JQLScss = {
	// {
	// width:250; // float:left;
	// mar:0;
	// background-color:gray;
	// min-height:240;
	// border-radius:10;
	// padding-bottom:15;
	// }
	'.task-list': {
		w: '250px', float: 'left',
		mar: '0px', C: 'gray', 'min-height': '240px',
		'border-radius': '10px', 'padding-bottom': '15px'
	},
	h3: {'text-align': 'center'},
	'.task-list input, .task-list textarea': {w: '240px', mar: '1px 5px'},
	'.task-list input': {h: '30px'},
	'.task-list input[type="button"]': {w: '100px', mar: '5px'},
	'.td-task': {'border-radius': '5px', C: 'g', w: '230px', mar: '5px', pad: '5px'},
	'.td-task > .task-header': {'font-weight': 'bold'},
	'.td-task >.task-date': {'font-size': 'small', 'font-style': 'italic'},
	'.td-task > .task-desc': {'font-size': 'smaller'},
	'#delete-div': {
		C: 'b', bor: '3px dotted #000', mar: '10px', h: '75px',
		'line-height': '75px', 'text-align': 'center'
	}
}
yA = yAr = yanofski = ['y', 'a', 'n', 'o', 'f', 's', 'k', 'i']
uA = usAr = users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
	{'id': 2, 'name': 'Ted', 'last': 'White'},
	{'id': 3, 'name': 'Frank', 'last': 'James'},
	{'id': 4, 'name': 'Ted', 'last': 'Jones'}
]
dirData = [
	{ID: '1', fN: 'jason', lN: 'sad', par: 'mom', p: '239-2394', e: 'fasfsd@sd.com'},
	{ID: '2', fN: 'frank', lN: 'fad', par: 'sfad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '3', fN: 'fred', lN: 'fuckman', par: 'dad', p: '239-2394', e: 'fadss@sd.com'},
	{ID: '4', fN: 'rigo', lN: 'sadman', par: '', p: '239-2394', e: 'fas@sd.com'},
	{ID: '5', fN: 'jan', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'fas@sd.com'},
	{ID: '6', fN: 'paul', lN: 'fsamand', par: 'dad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '7', fN: 'steve', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'rfas@sd.com'},
	{ID: '8', fN: 'scott', lN: 'manfsad', par: 'sfad', p: '239-2394', e: 'afas@sd.com'},
	{ID: '9', fN: 'chad', lN: 'fsadman', par: '', p: '239-2394', e: 'afas@sd.com'},
	{ID: '10', fN: 'greg', lN: 'fsadman', par: '', p: '239-2394', e: 'jas@sd.com'}
]
bksArr = [
	{title: 'yaba daba', author: 'wanda'},
	{title: 'clawface', author: 'deez nuts'},
	{title: 'under the knee', author: 'p .qu rstly'}
]
BBVTdArr = [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
codes = {"1": "#pending", "2": "#inProgress", "3": "#completed"}
initialData = [
	{name: "Well-Travelled Kitten", sales: 352, price: 75.95},
	{name: "Speedy Coyote", sales: 89, price: 190.00},
	{name: "Furious Lizard", sales: 152, price: 25.00},
	{name: "Indifferent Monkey", sales: 1, price: 99.95},
	{name: "Brooding Dragon", sales: 0, price: 6350},
	{name: "Ingenious Tadpole", sales: 39450, price: 0.35},
	{name: "Optimistic Snail", sales: 420, price: 1.50}
]
PLANS = [
	{name: "Mercury", type: "rock"},
	{name: "Venus", type: "rock"},
	{name: "Earth", type: "rock"},
	{name: "Mars", type: "rock"},
	{name: "Jupiter", type: "gasgiant"},
	{name: "Saturn", type: "gasgiant"},
	{name: "Uranus", type: "gasgiant"},
	{name: "Neptune", type: "gasgiant"}
]
availableMeals = [
	{mealName: "Standard (sandwich)", price: 0},
	{mealName: "Premium (lobster)", price: 34.95},
	{mealName: "Ultimate (whole zebra)", price: 290}
]
peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
Peep = function () {
	return [
		new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
		new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
		new Per("Charles", ["Cayenne", "Cleopatra"])
	]
}
__ = 'hjkhjkhjk hkjhjkhjk hjkjkhjhjhk hjkkjhjkhjkhjkhjkhjkhjkh  jkkjkjhjhkjhkh '
verts = [[-100, 0], [0, -100], [100, -20], [50, 20]]
guyInBed = [[30], [20, 30, 30], [100, 30]]
dick = [[50, 300, 0, -100], [50, 100, 150], [50, -100, 150]] //[b2d.poly(50, 300, 0,-100), b2d.circ(50, 100, 150), b2d.circ(50, -100, 150)]
dick = [
	[50, 300, 0, -100],
	[50, 100, 150],
	[50, -100, 150]
]
guyInBed = [
	[30],
	[20, 30, 30],
	[100, 30]
]
sqr = [[-50, 50], [-50, -50], [50, -50], [50, 50]]
combo = [[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]]
flatTri = [[400, 0], [800, 100], [120, 120]]
vs1 = [
	[61, 68],
	[145, 122],
	[186, 94],
	[224, 135],
	[204, 211],
	[105, 200],
	[141, 163],
	[48, 139],
	[74, 117]
];
vs2 = [
	[131, 84],
	[224, 110],
	[174, 180],
	[120, 136],
	[60, 167],
];
vs3 = [
	[190, 140],
	[170, 180],
	[160, 160]
]
vs4 = [
	[131, 84], [224, 110], [174, 280], [120, 136], [60, 167],
]
tictactoe = [
	[[200, 0], [200, 600]],
	[[400, 0], [400, 600]],
	[[0, 200], [600, 200]],
	[[0, 400], [600, 400]]
]
sh1 = [[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]]
sh2 = [[[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]], [[8, 13], [12, 13]], [[9, 14], [9, 18]], [[10, 14], [10, 18]]]
v = [[-100, 0], [0, -100], [100, 50]]
vs = [
	[[-100, 0], [0, -100], [100, 50]],
	[[-200, 0], [-100, -100], [0, 50]],
	[[0, 200], [0, -200], [400, -300], [400, 300]]
]
vs1 = [
	[61, 68],
	[145, 122],
	[186, 94],
	[224, 135],
	[204, 211],
	[105, 200],
	[141, 163],
	[48, 139],
	[74, 117]
];
vs2 = [
	[131, 84],
	[224, 110],
	[174, 180],
	[120, 136],
	[60, 167],
];
v1 = [[-100, 0], [0, -100], [100, -50], [0, -50]]
turtle = [
	['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
	, ['yellow', [10, -10], [20, -30], [50, -15], [45, -5]]
	, ['yellow',
		[-50, 10], [-50, -10], [-40, -10], [-40, 10]
	]
	, ['yellow',
		[-10, 10], [-10, -10], [0, -10], [0, 10]
	]
]
pin = [
	['o', [-20, 20], [0, -80], [20, 20], [0, -40]],
	['w', 8, 0, -75],
	['w', 8, -20, 20],
	['w', 8, 20, 20]
]
p1 = [[-50, 50], [-50, -50], [50, -50], [50, 50]]
p2 = [[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]]
vs1 = [
	[61, 68],
	[145, 122],
	[186, 94],
	[224, 135],
	[204, 211],
	[105, 200],
	[141, 163],
	[48, 139],
	[74, 117]
]
server = {
	d: 2,
	n: 2,
	docs: {
		1: {text: 'this is a doc', id: 1}
	},
	notes: {
		1: {1: {text: 'note'}, 2: {text: 'another note'}}
	},
	get: {
		'/docs': function (q, p) {
			var res = []
			for (var doc in docs) {
				if (docs.hasOwnProperty(doc)) {
					res.push(docs[doc])
				}
			}
			p.json(res)
		},
		'/docs/:did/notes': function (q, p) {
			var res = [], n = notes[q.params.id]
			for (var note in n) {
				if (n.hasOwnProperty(note)) {
					res.push(n[notes])
				}
			}
		}
	},
	post: {
		'/docs': function (q, p) {
			var doc = q.body
			doc.id = d++
			docs.doc.id = doc
			p.json(doc)
		},
		'/docs/:did/notes': function (q, p) {
			var note = q.body, id = q.params.id
			note.id = n++
			if (!notes[id]) {
				notes[id] = {}
			}
			notes[id][notes.id] = note
			p.json(note)
		}
	},
	put: {
		'docs/:id': function (q, p) {
			docs[q.params.id] = q.body
			p.json(q.body)
		},
		'docs/:did/notes:nid': function (q, p) {
			notes[q.params.id][q.params.nid] = q.body
			p.json(q.body)
		}
	}
}
yada = function (n) {
	n = N(n, 20)
	var str = ''
	_.t(n, function () {
		str += 'yada '
	})
	return str
}