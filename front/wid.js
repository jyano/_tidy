HLF = HIGHLIGHTFADE = function () {
	$s({
		_ct: {
			C: 'r', P: 10
			//B:'40px solid green'
		},
		_gg: {C: 'o', w: 100, h: 100}
	})
	// ?? hides or shows an el  by ang its bgC 1st // bgC ="#ffff99"
	d = $('<div>').A().A('Click to tog ').K('gg')
	d.a2($.dK('ct'))
	$.$(function () {
		$l('$.$')
		$(".gg").toggle("highlight")
	})
}
NV1 = UITAB = function () {
	$.d([
		$.ul([$('<li><a href="#fragment-1"><span>One</span></a></li>'),
			$(' <li><a href="#fragment-2"><span>Two</span></a></li>'),
			$('<li><a href="#fragment-3"><span>Three</span></a></li>')
		]),
		$.dI('fragment-1').A(
				$('<p>First tab is active by default:</p> <pre><code>$( "#tabs" ).tabs(); </code></pre>')),
		$.dI('fragment-2').A(l1),
		$.dI('fragment-3').A(l2)
	]).tabs()
	alt = function () {
		NV8 = UITAB = function () {
			z()
			$.d([
				$.ul([$('<li><a href="#fragment-1"><span>One</span></a></li>'),
					$(' <li><a href="#fragment-2"><span>Two</span></a></li>'),
					$('<li><a href="#fragment-3"><span>Three</span></a></li>')
				]),
				$.dI('fragment-1').A(
						$('<p>First tab is active by default:</p> <pre><code>$( "#tabs" ).tabs(); </code></pre>')),
				$.dI('fragment-2').A(l1),
				$.dI('fragment-3').A(l2)
			]).tabs()
		}
	}
}
NV2 = ACCORD = ACC = function () {
	ul = $.ul([
		$.li('List item 1'),
		$.li('List item 2'),
		$.li('List item 3')
	])
	$.d([
		$.h3('Section 1'), $.d([$.p(l1)]),
		$.h3('Section 2'), $.d([$.p(l2)]),
		$.h3('Section 3'), $.d([$.p(l1), ul])
	]).accordion()
	alt = function () {
		NV5 = UI54 = ACCORD = ACC = function () {
			z()
			ul = $.ul([
				$.li('List item 1'),
				$.li('List item 2'),
				$.li('List item 3')
			])
			$.d([
				$.h3('Section 1'), $.d([$.p(l1)]),
				$.h3('Section 2'), $.d([$.p(l2)]),
				$.h3('Section 3'), $.d([$.p(l1), ul])
			]).accordion()
		}
	}
}
UIBT = IP6 = UI15 = UIBUT = function () {
	$.sp('span btb').button()
	$.a('a btb').button()
	$.bt('button label')
	$("button").button()
	$.d('r', 50, 60)
	$.d('b', 70, 50).button()
	_.in(3, function () {
		$.C('o')
		$.d().A('hello').WH(70, 50).button()
		$.d().A('hello').WH(70, 50).H(200).css({
			borderColor: 'blue',
			borderStyle: 'dashed',
			borderWidth: 20
		})
	})
}
UI0 = FID = function () {
	$.wg("jy.simp", {
		options: {text: ""},
		_setOption: function (k, v) {
			if (k === "text") {
				this.element.text(v)
			}
			this._trigger("change")
		}
	})
	a = $.a('Hello World')
			.simp().on("simpchange", function () {
				//p.html( a.simp("option", "text"))
			})
	// p = $.p()
	$.bt('Change Text', function () {
		a.simp("option", "text", "new text")
	}).button()
}
NV5 = UISLMENU = USM = function () {
	$.fn.slM = function () {
		var g = G(arguments)
		this.selectmenu.apply(this, g)
		return this
	}
	$CSS({
		fieldset: {B: 0},
		label: {d: 'b', M: '30px 0 0 0'},
		select: {w: 200},
		_overflow: {h: 200}
	})
	$.d([$.f().at('action', '#').A($('<fieldset>').A(
			$.lb('select a speed').for('speed'),
			$.sl().id('speed').n('speed').A(
					$.op('slower'), $.op('slow'),
					$.op('medium').at('selected', 'selected'),
					$.op('fast'), $.op('faster')),
			$.lb('Select a file').for('files'),
			$.sl().n('files').id('files').A(
					$.og("Scripts").A(
							$.op('jquery', 'jquery'),
							$.op('ui.juqery.jus', 'jqueryui')),
					$.og("Other files").A(
							$.op('some unknown file', 'somefile'),
							$.op('Some other file w long option text', 'someotherfile'))),
			$.lb('Select a number').for('number'),
			$.sl().n('number').id('number').A(
					$.op('1'), $.op('2').at('selected', "selected"),
					$.op('3'), $.op('4'), $.op('5'), $.op('6'), $.op('7'),
					$.op('8'), $.op('9'), $.op('10'),
					$.op('11'), $.op('12'), $.op('13'), $.op('14'),
					$.op('15'), $.op('16'), $.op('17'), $.op('18'),
					$.op('19')
			)))]).K('demo')
	$("#speed").selectmenu()
	$("#files").selectmenu()
	$("#number").selectmenu().selectmenu("menuWidget").K("overflow")
}
JU3 = FID = function () {
	$.wg("jy.simp", {
		options: {text: ""},
		_setOption: function (k, v) {
			if (k === "text") {
				this.element.text(v)
			}
			this._trigger("change")
		}
	})
	a = $.a('Hello World')
			.simp().on("simpchange", function () {
				//p.html( a.simp("option", "text"))
			})
	// p = $.p()
	$.bt('Change Text', function () {
		a.simp("option", "text", "new text")
	}).button()
}
JU333 = OVERLAY = FADEIN = FIN = function () {
	$s({
		bd: {B: 0, M: 0},
		'_ui-widget-overlay': {
			bg: 'repeat-x scroll 50% 50% #AAA', al: '0.3'
		},
		'_ui-widget-overlay': {
			h: '100%', l: 0,
			ps: 'a', t: 0, w: '100%'
		}
	})
	ovL = $.dK("ui-overlay", [
		$.dK("ui-widget-overlay")]).hd().fI()
	$('body').resize(function () {
		ovL.WH($(document).W(), $(document).H()).hd().fI()
	})
}
DGG = DRAGGY = function () {
	$.d('r', 500, 500).K('sel')
	$('.sel').dgb({
		delay: 1000,
		distance: 100,
		helper: "clone",
		addClasses: false,
		snapMode: "inner",
		grid: [50, 20],
		snap: true
	})
}
APP2 = function () {
	k = $('.k')
	k.dgb({appendTo: "body"})
	k.dgb({helper: "clone"})
}
TABSELIX = function () {
	$s({
		ip: {bor: '1px solid #000'}, d: {pad: 5}
	})
	$.d([
		'no tabindex'
	])
	$.d([$.ip().tIx(5, '+tIx')
	])
	$.d([$.ip().tIx(5, '+tIx')
	])
	$.d(['-tIx',
		$.ip().tIx(-1, '-tIx')
	])
	$(":tabbable").bdC("red")
}
MENU1 = function () {
	$s({
		'.ui-menu': {
			width: 200,
			C: 'r'
		}
	})
	$.ul().A(
			$.li('Item 1'),
			$.li('Item 2'),
			$.li().A(
					'Item 3',
					$.li('Item 3-1'),
					$.li('Item 3-2'),
					$.li('Item 3-3'),
					$.li('Item 3-4'),
					$.li('Item 3-5')),
			$.li('Item 4'),
			$.li('Item 5')
	).id("menu")
	$("#menu").menu()
}
JUSTREDDIV = IXSTAT = function () {
	$.x()
	k = $.d('r', 500, 200)
	// to clb bT-like elS. Applies clb df ct stys to el
	// and its ch t, lks, and icons.
	k.K('.ui-state-default')
	//   on mv to clb bt-oid. Applies "clickable hover" ct stys
	// to an element and its child text, links, and icons.
	k.K('.ui-state-hover')
	//  on kb fcs to clb btoids. Applies "clickable focus"
	// ct stys  to el and its child text, links, and icons.
	k.K('.ui-state-focus')
	//   on md to clb btoids. Applies "clickable active" cot stysto an el
	// and its ch t, lks, and icons.
	k.K('.ui-state-active')
}
DATESCR = function () {
	$.x('b', 'jqui')
	('<link rel="stylesheet" href="/jquery-ui.min.css">').A()
	('<script src="/jquery-ui.min.js">').A()
	d = $.d('b', 400, 400).A(
			ip = $.ip('date').datepicker()
	).pad(20)
}
DROP = function () {
	$CSS({
		$dgb: {
			w: 100, h: 50, pad: '0.5em', fl: 'l',
			mar: '22px 5px 10px 0'
		},
		$dpb: {w: 130, h: 90, pad: '0.5em', mar: 10, fl: 'l'},
		div: {w: 400, h: 300, C: 'r', c: 'y'},
		$dgb2: {w: 100, h: 50, pad: '0.5em', mar: '0px 5px 10px 0'},
		'#dpb2,#dpb3,#dpb4,#dpb5': {w: 12, h: 90, pad: '0.5em', fl: 'l', mar: 10}
	})
	$.d().id('dgb').K('ui-widget-content').A($.p('Drag me'))
	$.d().id('dpb').K('ui-widget-header').A($.p('here'))
	$("#dgb").dgb()
	$("#dpb").dpb()
	Dpb(2, 'Drag me to my target', 'ui-widget-content')
	Dpb(2, 'here');
	Dpb(3, "dsbld !drop");
	Dpb(4, 'tol toch');
	Dpb(5, 'tol fit')
	$("#dgb2").dgb()
	$("#dpb2").dpb({
		drop: function (ev, ui) {
			$(this).K("ui-state-highlight").find("p").html("Dpd")
		}
	})
	$("#dpb3").dpb({
		disabled: "true", drop: function (ev, ui) {
			$(this)
					.K("ui-state-highlight").find("p").html("Dpd")
		}
	})
	$("#dpb4").dpb({
		tolerance: 'touch', drop: function (ev, ui) {
			$(this).K("ui-state-highlight").find("p").html("Dpd w tch")
		}
	})
	$("#dpb5").dpb({
		tolerance: 'fit', drop: function (ev, ui) {
			$(this).K("ui-state-highlight")
					.find("p").html("Dpd whn fulfit")
		}
	})
	function Dpb(id, pT, k) {
		k = k || "ui-widget-header"
		return $.d().id('dpb' + id).K(k).A($.p(pT))
	}
}
CRAZYWEIRD = POSI = function () {
	$s({
		$par: {
			C: 'b', ta: 'c', w: '60%', ht: 40,
			mar: '10px auto', pad: 5, bor: '1px solid #777'
		},
		_psb: {
			p: 'a', ds: 'b',
			r: 0, b: 0, C: 'r', ta: 'c'
		},
		$psb1: {w: 75, h: 75},
		$psb2: {w: 120, h: 40},
		'select,input': {mL: 15}
	})
	$.d([$.p('This is the ps par el')]).id('par')
	$.dK('psb').id("psb1")
	$.p('to ps')
	$.d([$.p('to ps2')]).K('psb', 'psb2')
	$.d().mgT(75).pad(20), 'ps...'
	$.d().pdB(20)
	$.b().A('my:')
	$.sl('my_hz', 'left', 'center', 'right')
	$.sl("my_vrt", 'top', 'center', 'bottom')
	$.d().pdB(20)
	$.p().A('at:')
	$.sl("at_hz", 'left', 'center', 'right')
	$.sl("at_vrt", 'top', 'center', 'bottom')
	$.d([
		$.b().A('cl:'),
		$.sl('cl_vrt', 'flip', 'flit', 'flipfit', 'none'),
		$.sl('cl_hz', 'flip', 'flit', 'flipfit', 'none')
	]).pdB(200)
	$("select, input").bind("click keyup change", ps)
	$("#par").dgb({drag: ps})
	$(".psb").al(.5)
	ps()
	function ps() {
		$(".psb").ps({
			of: $("#par"),
			my: $("#my_hz").v() + $("#my_vrt").v(),
			at: $("#at_hz").v() + $("#at_vrt").v(),
			collision: $("#cl_hz").v() + $("#cl_vrt").v()
		})
	}
}
BLANK = LAYOUTHELP = function () {
	k = $('.k')
	k.K('ui-helper-hidden')//  Hides content visually  and from assistive technologies, such as screen readers.
	k.K('ui-helper-hidden-accessible')// Hides cont
	k.K('.ui-helper-reset')// A basic style reset for DOM nodes. Resets pad, mar, t-dec, ls-sty
	k.K('.ui-helper-clearfix')// Appls float, wrapg pops to par els
	k.K('.ui-front')// z-ix to mang  stackg  of mult wids on screen.  See  stacking ELS
	k.K('.ui-widget')// outer ct of all wids. Appls fo-fam  and fZ to wids
	k.K('.ui-widget-header')// : appl2  hdr conts. Appls hdr cont sty to el and its ch t,lks, and icons.
	k.K('.ui-widget-content')
	// : appl2 cont cts. // Appls cont-ct stys to el and its ch t, lks, and icons.
	// (can be appld to par  or sib  of hdr).
}
NOTWORKING = ICONN = function () {
	$.x('y', 'icon')
	$.sp('helllloooo1')
	$.sp('helllloooo2')
			.K("ui-icon ui-icon-arrowthick-1-n")
	k = $.d('k', 500, 500)
	k.K('ui-icon ui-icon-triangle-1-e')
	/*
	 Base class to be applied to an icon element.
	 Sets dimensions to a 16px square
	 block,
	 hides inner text,
	 sets background image to
	 "content" state sprite image.
	
	 Note: ui-icon class will be given    different sprite background image
	 depending on its parent container.
	
	 For example,
	 a ui-icon element
	 within a ui-state-default container
	 will get colored according to
	 the ui-state-default's icon color.
	 Icon types
	
	 After declaring a ui-icon class,
	 you can follow up with a second class
	 describing the type of icon.
	 Icon classes generally follow a syntax
	
	
	 */
	//  .ui-icon-{icon type}-{icon sub description}-{direction}.
//             For example, a single triangle icon pointing to the right
	//    .ui-icon-triangle-1-e
	//  ThemeRoller provides
	// full set of CSS framework icons  in  prev col
	//  Hv over them to see the class name.
}
NOTHINGATALL = VLAYSHAD = function () {
	k = $('.k')
	k.K('ui-widget-overlay')
	/*
	
	 Applies 100% width & height dimensions to an overlay screen,
	 along with background color/texture, and screen opacity.
	 k.K('ui-widget-shadow')
	 appy to vlay widg shad els
	 Applies bg    c/texture, cust cor rad, al,
	 top/left ofs and shd "thickness".
	 Thickness is appld via pad  all sides of shad  that
	 set to mat  the dims of the overlay el .
	 Offsets are appld via t and l  margs  (can be pos  or neg ).
	 */
	// https://www.packtpub.com/books/content/jquery-ui-themes-states-cues-overlays-and-shadows
}
ITHINKNOTHING = CORRAD = function () {
	$.x('o')
	$.d('d', 500, 500)
	k = $.d('d', 500, 500)
	/*   k.K('.ui-corner-tl') // corner-radius to top left corner of element.
	 k.K('.ui-corner-tr')// t r cor
	 k.K('.ui-corner-bl')//to bt l corn
	 k.K('.ui-corner-br')// bt r cor
	 k.K('.ui-corner-top')//o both t cors
	 k.K('.ui-corner-bottom')//both bt cors
	 k.K('.ui-corner-right')// both r cors
	 k.K('.ui-corner-left')// both left cors
	 k.K('.ui-corner-all')//all 4 cors
	 */
}
STUCKLOGINFORM = UICT = function () {

//http://www.phpeveryday.com/articles/jQuery-UI-Using-The-Framework-Classes-P986.html
	num = 3
	if (num == 1) {
		$.dK("ui-widget").A(
				$.dK("ui-widget-header ui-corner-top").A(
						$.h2('his is a ui-widget-header container')),
				$.dK("ui-widget-content ui-corner-bottom").A(
						$.p('This is a ui-widget-content container')))
		$.dK("ui-widget").A(
				$.dK("ui-state-default ui-state-active ui-corner-all").A(
						$.a('clickable and selected')),
				$.d([
					$.a('clickable but not selected')
				]).K("ui-state-default ui-corner-all"))
	}
	$('.ui-state-default a').hv(function () {
		$(this).parent().K("ui-state-hover")
	}, function () {
		$(this).parent().xK("ui-state-hover")
	})
	if (num == 2) {
		$.dK("ui-widget").A(
				$.dK("ui-state-default ui-state-active ui-corner-all").A(
						$.dK("ui-icon ui-icon-circle-plus"), $.a('clb, seld')),
				$.dK("ui-state-default ui-corner-all").A(
						$.dK("ui-icon ui-icon-circle-plus"),
						$.a('clb, !selected')))
		$(".ui-state-default a").hv(function () {
					$(this).pa().K("ui-state-hover")
				},
				function () {
					$(this).pa().xK("ui-state-hover")
				})
	}
	if (num == 3) {
		$CSS({
			'_ui-form': {w: 470, mar: '0 auto'},
			'_ui-form _ui-widget-header h2': {margin: '10px 0 10px 20px'},
			'_ui-form _ui-widget-content': {padding: 20},
			'_ui-form label, _ui-form input, _ui-form _ui-state-error,_ui-form _ui-icon, _ui-form _ui-state-error p': {fl: 'l'},
			'_ui-form label, _ui-state-error p': {fz: 12, pad: '10px 10px 0 0'},
			'_ui-form _ui-state-error': {pad: 4},
			'_ui-form _ui-state-error p': {'font-weight': 'bold', pT: 5},
			'_ui-form _ui-state-error _ui-icon': {mar: '5px 3px 0 4px'}
		})
		$.dK("ui-widget ui-form").A(
				$.dK("ui-widget-header ui-corner-all").A(
						$.h2('Login Form')),
				$.dK("ui-widget-content ui-corner-all").A(
						$.f().K('ui-helper-clearfix').A(
								$.lb('Username').K("ui-helper-reset"),
								$.d("ui-state-error ui-corner-all").A(
										$.ip(), $.dK("ui-icon ui-icon-alert"),
										$.p('Required field')
												.K("ui-helper-reset ui-state-error-text")))))
	}
	// <link rel="stylesheet" type="text/css" href="css/ui.form.css">
//http://www.w3.org/TR/html4/strict.dtd">
}
LOOKSLIKEHIGHLIGHT = DOESNOTHING = INTX = function () {
	$.x()
	$CSS({
		$d: {C: 'r'}
	})
	k = $('.k')
	// to highlighted/selected els
	// Applies "highlight" ct sty to an el and
	// its ch text, links, and icons.
	k.K('.ui-state-highlight')
	// appl to z msg ct eles. Applies z ct stys to   el
	// and its ch text, links, and icons.
	k.K('.ui-state-error')
	//  appls just z t  c  w/o bg. Can be used on f-lbs, appls z icon c  to ch  icons.
	k.K('.ui-state-error-text')
	//// Appl dimmed al to dsabld UI els,  (adjunct, to an already-styled el)
	k.K('.ui-state-disabled')
	//    apl2 priority-1 bt when need bt hier
	k.K('.ui-priority-primary')
	k.K('.ui-priority-secondary')
	//: Class to be applied to a priority-2 button in situations where button hierarchy is needed.
	j = $('<div>').A($.h3('hello'))
			.id('d').WH(100, 100).A()
			.K('.ui-state-highlight')
	$.d('r', 100, 100).A($.h3('hello'))
}
BROKENMENUMAYBE = HLFDL = function () {
	$.d(['z1']).K('error')
	$.d(['z2']).K('error')
	$.d(['hl1']).K('highlight')
	$.d(['hl2']).K('highlight')
	//   http://jsfiddle.net/774wH/
	function errorHighlight(e, type, icon) {
		if (!icon) {
			if (type === 'highlight') {
				icon = 'ui-icon-info';
			} else {
				icon = 'ui-icon-alert';
			}
		}
		return $(this).each(function () {
			$(this).addClass('ui-widget');
			var h = '<div class="ui-state-' + type + ' ui-corner-all" style="padding:0 .7em;">';
			h += '<p>';
			h += '<span class="ui-icon ' + icon + '" style="float:left;margin-right: .3em;"></span>';
			h += $(this).text();
			h += '</p>';
			h += '</div>';
			$(this).html(h);
		});
	}

//error dialog
	(function ($) {
		$.fn.error = function () {
			errorHighlight(this, 'error');
		};
	})(jQuery);
//highlight (alert) dialog
	$.fn.highlight = function () {
		errorHighlight(this, 'highlight');
	};
	$('.error').error()
	$('.highlight').highlight()
}
// https://msdn.microsoft.com/en-us/magazine/ff706600
$Ul = function (bnd) {
	var g = G(arguments)
	var ul = $.ul().e$(bnd)
	_.e(A(g.s) ? g.s : g.r, function (q) {
		$.li().A(q).a2(ul)
	})
	return ul
}
$Cb = function (bnd, tx) {
	return $.sp().A($.lb((D(tx) ? tx : bnd) + ': '), ch$(bnd))
}
ULI = SHOWTIME = ROOT = $$$TWOLAYERSDEEPNESTED$$$ = function () {
	e$('peep').A(
			t$('n'), ' has ', t$('ch().length'), ' children',
			cl$('A').mar(10),
			$Ul(
					'ch',
					t$(),
					vs$('$root.showDT',
							'(child rendered at ',
							t$('$Dt().getSeconds()'),
							')')
			))
	$Cb('showDT', 'show time')
	//anonymous vm
	ok({
		peep: Peep(),
		showDT: $o(),
		A: function () {
		}
	})
}
function alt() {
	KOCL = SHOWTIME = function () {
		$.ul().$('peep').A(
				$.li().A(
						$.d([
							$.sp().t$('n'), 'has',
							$.sp().t$('ch().length'),
							'children &nbsp;',
							$.a$('New', 'A')
						]),
						$.ul().e$('ch').A(
								$.li([
									$.sp().t$(), $.sp().vs$('$root.showDT').A(
											' (child rendered at ',
											$.sp().t$('$Dt().getSeconds()'),
											')'
									)]))))
		$.cb().ch$('showDT').a2($.lb('Show time:'))
		//anonymous vm
		OK({
			n: 'j',
			ch: Peep(),
			showDT: $o()
		})
	}
}
ULE = function () {
	$.ul().e$('PL').A(
			$.li().A(
					$.sp('Planet: '), $.b().t$('n'),
					$.d().t$('cap.n')))
	ok({
		PL: $oA([
			{n: 'Merc', cap: {n: 'afsdfads'}},
			{n: 'Earth', cap: {n: 'Barn'}},
			{n: 'Uranus', cap: {n: 5}}
		])
	})
}
ULROOT = function () {
	$.ul().e$('fs').A([
		$.li().b({t: '$data', sl: '{selected: $data==$root.chFI()}', cl: '$root.gtf'})
	]).K('fs')
	//$.ul().K('fs').e$("fs").A($.li().b("text:$data, css:{selected:$data==$root.chFI()},click:$root.gtf"))
	MVM = function () {
		var vm = {
			selected: $(),
			fs: ['I', 'A', 'Se', 'Sp'],
			chFI: $o()
		}
		vm.gtf = function (f) {
			vm.chFI(f)
		}
		return vm
	}
	ok(MVM())
}
SEL = CUNTS = function (n, v) {
	$.sl().o$('cunts')
	ok('cunts', $oa('Fran', 'Ger', 'Spa'))
	_.in(2, function () {
		vm.cunts.push('Chi')
	})
}
SEL1 = SELPUSH = CHERRY = function () {
	$.p($.sp('spam?'), $.cC('wants'))
	$.d(['Preferred flavors of spam:',
		$.d([
			$.p($.sp('cherry'),
					$.cC('flav').v('cherry')),
			$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
			$.p($.sp('Glut'), $.cC('flav').v('glut'))
		])
	]).vs$('wants')
	_.in(function () {
		vm.flav.push("glut")
	})
	ok({
		wants: $o(1),
		flav: $oa(["cherry", "almond"])
	})
	// vm.flav.push("msg")
	/*
	 function $.cKO(m, b, v){
	 var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
	 if(v){ cb.v(v)}
	 return p
	 }*/
}
SELMULTI = SLM = function () {
	$.p('Where you want to go?', $.sl().at({
		size: 5, multiple: true
	}).b({
		o: 'available', sO: 'chosen'
	}))
	ok({
		available: $oa(['France', 'Germany', 'Spain']),
		chosen: $oa(['Germany'])
	})
	_.in(function () {
		vm.chosen.push('France')
	})
}
KOS = function () {
	_$({
		c: 'v',
		t: 'css example.. will i use it?',
		vm: vm = {n: $o(1)},
		A: $.d(['info']).b("style: {color: n()<0?'red':'black'}")
	})
	_.in(function () {
		vm.n(-5)
	})
}
K5 = BSTY = function () {
	$s({
		bd: {fS: 100, C: 'p'},
		_profWarn: {C: 'r', c: 'b'},
		_profPos: {C: 'b', c: 'r'}
	})
	d = $.d(['Prof Info'])
	str = "{ color: curProf() < 0 ? 'red' : 'black', padding: curProf() < 0 ? '20px' : '200px'}"
	d.b({y: str})
	vm = {curProf: $o(150000)}
	ok(vm)
	_.in(2, function () {
		// Causes the "profitPositive" class to be removed
		// and "profitWarning" class to be added
		vm.curProf(-50)
	})
}
K6 = BCSS = function () {
	$s({
		_profWarn: {C: 'r', c: 'b'}, _profPos: {C: 'b', c: 'r'}
	})
	$.d(['Prof Info']).fS(40).b({s: 'profSts'})
	vm = {
		curProf: $o(150000)
	}
	vm.profSts = ko.pureComputed(function () {
		var res = this.curProf() < 0 ? "profWarn" : "profPos"
		return res
	}, vm)
	ok(vm)
	_.in(2, function () {
		// Causes the "profitPositive" class to be removed
		// and "profitWarning" class to be added
		vm.curProf(-50)
	})
}
GIFT = CUSTBDJ = function () {
	Gift = function (gifts) {
		var vm = this
		vm.gifts = ko.oa(gifts)
		vm.addGift = function () {
			vm.gifts.push({name: "", price: ""})
		}
		vm.removeGift = function (gift) {
			vm.gifts.remove(gift)
		}
		vm.save = function (form) {
			alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
		}
		// To actually transmit to server as a regular form post, write this:
		// ko.utils.postJson($("form")[0], self.gifts)
	}
	var vm = this
	vm.gifts = $oA(gifts)
	vm.addGift = function () {
		vm.gifts.push({name: "", price: ""})
	}
	vm.removeGift = function (gift) {
		vm.gifts.remove(gift)
	}
	vm.save = function (form) {
		alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
	}
	// To actually transmit to server as a regular form post, write this:
	// ko.utils.postJson($("form")[0], self.gifts)
	vm.addGift = function () {
		vm.gifts.push({name: "", price: ""})
	}
	vm.removeGift = function (gift) {
		vm.gifts.remove(gift)
	}
	vm.save = function (form) {
		alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
	}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
	vm.addGift = function () {
		vm.gifts.push({name: "", price: ""})
	}
	vm.removeGift = function (gift) {
		vm.gifts.remove(gift)
	}
	vm.save = function (form) {
		alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
	}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
	$.d('You have selected the option').b({
		slVs: 'wrap',
		slDur: 600
	})
	$.lb().A($.cbC('wrap'), 'Gift wrap')
	ok({wrap: $o(1)})
}
AC0 = ARICLE = KOC1 = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).ch$('selectedView')
	$.sp('summary')
	$.ip('r').at({
		name: 'choices',
		value: 'details'
	}).ch$('selectedView');
	$.sp('details')
	$.hr()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().v$('title'),
				$.br(), $.ip().v$('content')])
	)
	ok({
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o(),
		templateToUse: function (i) {
			return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
		}
	})
}
AC1 = KOOC = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).ch$('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).c$('selectedView');
	$.sp('details').A();
	$.hr().A()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().v$('title'),
				$.br(), $.ip().v$('content')])
	)
	ok({
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o(),
		templateToUse: function (i) {
			return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
		}
	})
}//broken select and inputs
AC2 = KOC = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).bC('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).ch$('selectedView');
	$.sp('details')
	$.hr()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().v$('title'), $.br(), $.ip().v$('content')])
	)
	ok({
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o(),
		templateToUse: function (i) {
			return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
		}
	})
}
BDSMPGRD = SIMPLEGRIDPLUGIN = function () {
	
	// This is an example of one possible way to make a reusable component (or 'plugin'), consisting of:
//  * A view model class,
//           which gives a way to configure the component and to interact with it
// (e.g., by exposing currentPageIndex as an observable, external code can change the page index)
//
// * A custom binding (ko.bindingHandlers.simpleGrid in this example)
// so a developer can place instances of it into the DOM
//     - in this example,
// the custom binding works by rendering some predefined templates
// using the ko.jqueryTmplTemplateEngine template engine
//
// There are loads of ways this grid example could be expanded. For example,
//  * Letting the developer override the templates used to create the table header, table body, and page links div
//  * Adding a "sort by clicking column headers" option
//  * Creating some API to fetch table data using Ajax requests
//  ... etc
//http://knockoutjs.com/examples/resources/knockout.simpleGrid.js
	ko.simpleGrid = {
		// Defines a view model class you can use to populate a grid
		// If you don't specify columns configuration, we'll use scaffolding
		m: function (cf) {
			this.data = cf.data
			this.currentPageIndex = ko.o(0);
			this.pageSize = cf.pageSize || 5;
			this.columns = cf.columns || gScafCols(ko.ut.uo(this.data))
			this.itemsOnCurrentPage = ko.c(function () {
				var startIndex = this.pageSize * this.currentPageIndex();
				return ko.ut.uo(this.data)
						.slice(startIndex, startIndex + this.pageSize);
			}, this);
			this.maxPageIndex = ko.c(function () {
				return M.ceil(ko.ut.uo(this.data).length / this.pageSize)
			}, this)
		}
	}
	/*
	 // Templates used to render the grid
	 var templateEngine = new ko.jqueryTmplTemplateEngine();
	 templateEngine.addTemplate("ko_simpleGrid_grid", "\
	 <table class=\"ko-grid\" cellspacing=\"0\">\
	 <thead>\
	 <tr>\
	 {{each(i, columnDefinition) columns}}\
	 <th>${ columnDefinition.headerText }</th>\
	 {{/each}}\
	 </tr>\
	 </thead>\
	 <tbody>\
	 {{each(i, row) itemsOnCurrentPage()}}\
	 <tr class=\"${ i % 2 == 0 ? 'even' : 'odd' }\">\
	 {{each(j, columnDefinition) columns}}\
	 <td>${ typeof columnDefinition.rowText == 'function' ? columnDefinition.rowText(row) : row[columnDefinition.rowText] }</td>\
	 {{/each}}\
	 </tr>\
	 {{/each}}\
	 </tbody>\
	 </table>");
	 templateEngine.addTemplate("ko_simpleGrid_pageLinks", "\
	 <div class=\"ko-grid-pageLinks\">\
	 <span>Page:</span>\
	 {{each(i) ko.utils.range(1, maxPageIndex)}}\
	 <a href=\"#\" data-bind=\"click: function() { currentPageIndex(i) }, css: { selected: i == currentPageIndex() }\">\
	 ${ i + 1 }\
	 </a>\
	 {{/each}}\
	 </div>");
	 */
	// The "simpleGrid" binding
	function gScafCols(d) {
		var cols
		if ((typeof d.length != 'number') || d.length == 0) {
			return []
		}
		cols = [];
		for (var popN in d[0])
			cols.push({headerText: popN, rowText: popN});
		return cols
	}
}
$.fn.cm$ = function (bnd) {
	return this.b('component', bnd)
}
cm$ = function (name, params) {
	//= ko._
	var ob2s = function (ob) {
		ob = ob || {};
		var o = []
		_.e(ob, function (v, k) {
			o.push(k + ':"' + v + '"')
		})
		return o.join()
	}
	var _params = function (n, pam) {
		return $('<' + n + ' params = ' + (pam || '') + ' >')
	}
	if (name) {
		var q = $('<' + name + '>').A()
		if (params) {
			if (O(params)) {
				params = (   ob2s(params) )
			}
			q.at('params', params)
		}
		return q
	}
}
$rg = function (name, ob) {
	var $tpEl = function () {
		var g = G(arguments)
		var $q = $.sp().rm()
		_.e(g.A ? g.f : g, function (q) {
			$q.A(q)
		})
		return {element: $q[0]}
	}
	ob = ob || {}
	ob.viewModel = ob.viewModel || ob.vM
	ob.template = ob.template || ob.tp
	ob.template = $tpEl((ob.template))
	return ko.cm.rg(name, ob)
}
REG = function () {
	$s({i: {w: 40, h: 40}})
	$rg('test', {
		vM: function (pm) {
			this.text = $o(pm.name, 'default')
		},
		tp: $.d(['hello, ', t$('text'), ' ! ', $.i('me')])
	})
	cm$('test')
	cm$('test', {name: "tesfadsafdst"})
	ok({})
}
EXA = function () {
	$.mar()
	$rg('editor', {
		vM: function (pm) {
			this.text = $o(pm.initText, '')
		},
		tp: ['Message: ', v$('text'),
			'[', 'length:', t$('text().length'),
			']']
	})
	$.h4('First instance, without parameters')
	cm$('editor')
	$.h4('Second instance, passing parameters')
	cm$('editor', {initText: "Heldflo, world!"})
	ok({})
}
LIKE = function () {
	$.mar(10)
	function Product(name, rating) {
		this.name = name;
		this.userRating = ko.observable(rating || null);
	}
	
	$rg('like', {
		vM: function (params) {
			// Data: value is either null, 'like', or 'dislike'
			this.chosenValue = params.value;
			// Behaviors
			this.like = function () {
				this.chosenValue('like')
			}.bind(this)
			this.dislike = function () {
				this.chosenValue('dislike')
			}.bind(this);
		},
		tp: $.d().A(
				vs$('!chosenValue()').A(
						cl$('like'),
						cl$('dislike')).K("like-or-dislike"),
				vs$('chosenValue').A('You ', t$('chosenValue'), ' it').K('result')
		).bor('4px solid yellow')
	})
	e$('products', $.d().A(
			t$('name'),
			cm$('like', 'value:userRating')
	).C('g'))
	ok({
				products: [
					new Product('Garlic bread'),
					new Product('Pain au chocolat'),
					new Product('Seagull spaghetti', 'like') // This one was already 'liked'
				]
			}
	)
}
$.fn.ef = $.fn.effect
$.fn.zLite = function (type, icon) {
	var e = this
	icon = icon ? icon : (type === 'highlight') ?
			'ui-icon-info' : 'ui-icon-alert'
	return e.each(function () {
		var d
		$(this).K('ui-widget')
		d = $.d([$.sp().K("ui-icon '+icon+'").css({float: 'left', 'margin-right': '3em'}),
			$(this).text()])
		d.K('ui-state-' + type + 'ui-corner-all').css({padding: '0 .7em'})
		$(this).html(d)
	})
}
$.fn.error = function () {
	this.zLite('error')
}
$.fn.highlight = function () {
	this.zLite('highlight')
}
$.fn.st = $.fn.stop
$.fn.f2 = $.fn.fadeTo
$.fn.fI = $.fn.fadeIn
$.fn.wd = $.fn.wg = $.fn.wid = $.fn.widget
$.fn.hd = function (ef, o, ms) {
	if (ef == 'sl') {
		ef = 'slide'
	}
	if (o && o.d) {
		if (o.d == 'l') {
			o.d = 'left'
		}
		if (o.d == 'r') {
			o.d = 'right'
		}
		if (o.d == 'up') {
			o.d = 'up'
		}
		if (o.d == 'down') {
			o.d = 'down'
		}
		o.direction = o.d
	}
	return this.hide(ef, o, ms)
}
$.fn.sh = function (ef, o, ms) {
	if (ef == 'sl') {
		ef = 'slide'
	}
	if (o && o.d) {
		if (o.d == 'l') {
			o.d = 'left'
		}
		if (o.d == 'r') {
			o.d = 'right'
		}
		if (o.d == 'u') {
			o.d = 'up'
		}
		if (o.d == 'd') {
			o.d = 'down'
		}
		o.direction = o.d
	}
	return this.show(ef, o, ms)
}
UI_hide = function ($el) {
	return $el.rmK("ui-helper-hidden-accessible");
}
UI_btRm = function ($el) {
	$el.button.button("destroy").remove();
	return $el
}
$.fn.UIHide = function () {
	return this.K("ui-helper-hidden-accessible")
}
codes = {"1": "#pending", "2": "#inProgress", "3": "#completed"}
$.fn.ps = $.fn.position
$.fn.tIx = function (a, b) {
	a = this.at('tabindex', a)
	if (b) {
		a.v(b)
	}
	return a
}
// CSS Framework
//   list of the class names
// used by jQuery UI.
// The classes are designed to
// create a visual consistency
// across an application
// and allow components
// to be themeable by jQuery UI ThemeRoller.
// The class names are split
// between ui.core.css and ui.theme.css,
// depending on whether styles are
// fixed and structural, or themeable
// (colors, fonts, backgrounds, etc) respectively.
//jqAnim:
/*

 :data() Selector
 Selects elements which have data stored under the specified key.
 Also in: UI Core
 :focusable Selector
 Selects elements which can be focused.
 Also in: UI Core
 :tabbable Selector
 Selects elements which the user can focus via tabbing.
 */
EF1 = COLORANIM = CANIM = function () {
	function alt() {
		JU1 = COLORANIM = CANIM = function () {
			$.x()
			$CSS(
					{
						$el: {
							C: '#aaa', c: '#006', fZ: 25,
							tA: 'c', P: '1em'
						}
					}
			)
			$.d().id('el').A('-color anim-')
			$.bt('anim!', function () {
						$("#el").an({
							c: 'g',
							C: "rgb(20,20,20)"
						})
					}
			)
			/*
			 Color Animation
			 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), 
			 hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
			
			 The following properties are supported:
			
			 backgroundColor
			 borderBottomColor
			 borderLeftColor
			 borderRightColor
			 borderTopColor
			 color
			 columnRuleColor
			 outlineColor
			 textDecorationColor
			 textEmphasisColor
			 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
			 Class Animations
			 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
			
			 link
			 */
		}
	}
	
	$.x()
	$CSS(
			{
				$el: {
					C: '#aaa', c: '#006', fZ: 25,
					tA: 'c', P: '1em'
				}
			}
	)
	$.d().id('el').A('-color anim-')
	$.bt('anim!', function () {
				$("#el").an({
					c: 'g',
					C: "rgb(20,20,20)"
				})
			}
	)
	/*
	 Color Animation
	 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), 
	 hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
	
	 The following properties are supported:
	
	 backgroundColor
	 borderBottomColor
	 borderLeftColor
	 borderRightColor
	 borderTopColor
	 color
	 columnRuleColor
	 outlineColor
	 textDecorationColor
	 textEmphasisColor
	 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
	 Class Animations
	 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
	
	 link
	 */
}
//to use bootstrap with jqui!!!
//http://www.ryadel.com/2015/01/03/using-jquery-ui-bootstrap-togheter-web-page/
// http://api.jqueryui.com/jQ.widget.bridge/
$.fn.dgb = $.fn.draggable
$.fn.dpb = $.fn.droppable
$.fn.dtp = $.fn.datepicker
//https://www.youtube.com/watch?v=fA1NW-T1QXc
UI1 = NV4 = MENU = function () {
	$CSS({'.ui-menu': {w: 150}})
	$.ul([
		$.li(['Hockey']),
		$.li(['Football', $.ul([
			$.li('Iain Hume'),
			$.li('Del Piero'),
			$.li('David James')
		])]),
		$.li(['Cricket', $.ul([
			$.li('Sachin'),
			$.li('Ganguly'),
			$.li('Dravid'),
			$.li('yano')
		])]).A(),
		$.li(['KickBoxing']).K('ui-state-disabled'),
		$.li(['Tennis', $.ul([$.li().A('Patrick Rafter')])])
	]).id('menu')
	$("#menu").menu()
	$('#menu').on('menuselect', function (ev, ui) {
		li = ui.item.context
		$li = $(li)
		i = ev
		u = ui
		$l("text: " + $li.text())
		$l(ui.item.context.textContent)
	})
}
HZMENU = function () {
	var ul = $.ul()
	$.dI('jqxWidget').A($.dI('jqxMenu').A(ul))
	ul.A($.li().A($.a('Home')))
	li1 = $.li().A('About Us',
			$.ul().A(
					$.li().A($.a('History')),
					$.li().A($.a('Our Vision'))))
	li2 = $.li('Services')
	li3 = $.li()
	ul1 = $.ul()
	li3.A('Products', ul1)
	ul1.A(
			$.li().A(
					$.a('New'),
					$.ul().A(
							$.li().A($.a('Corparate Use')),
							$.li().A($.a('Private Use')))),
			$.li().A($.a('Used'),
					$.ul().A($.li().A($.a('Corporate')), $.li().A($.a('Private Use')))),
			$.li().A($.a('Featured')))
	ul.A(li1, li2, li3,
			$.li().A($.a('Gallery')),
			$.li().A($.a('Events')),
			$.li().A($.a('Career')),
			$.li().A($.a('Contact'))
	)
	$("#jqxMenu").menu({width: 600, height: 30});
}
UI2 = NV3 = AUTOCP = function () {
	$.x('x', 'autocp')
	availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
		"COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
		"JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]
	$.d([
		$.lb('Tags:').for('tags'), $.ip().id('tags')
	]).K('ui-widget')
	$(function () {
		$("#tags").autocomplete({source: availableTags})
	})
	function other() {
		AUTOCOMP = function () {
			z()
			$.lb('Select a programming language: ', "autocomplete")
			$.ip().id("autocomplete")
			tags = ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"];
			$("#autocomplete").autocomplete({
				source: function (request, response) {
					var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
					response($.grep(tags, function (item) {
						return matcher.test(item);
					}));
				}
			})
		}
	}
	
	alt = function () {
		NV4 = UI56 = AUTOCP = function () {
			$.x('x', 'autocp')
			availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
				"COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
				"JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]
			$.d([
				$.lb('Tags:').for('tags'), $.ip().id('tags')
			]).K('ui-widget')
			$(function () {
				$("#tags").autocomplete({source: availableTags})
			})
			function other() {
				AUTOCOMP = function () {
					z()
					$.lb('Select a programming language: ', "autocomplete")
					$.ip().id("autocomplete")
					tags = ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"];
					$("#autocomplete").autocomplete({
						source: function (request, response) {
							var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
							response($.grep(tags, function (item) {
								return matcher.test(item);
							}));
						}
					})
				}
			}
		}
	}
}
UI3 = DIAL = function () {
	$l('dial')
	$.x(null, 'dialog')
	$.d([
		$.p('This is the default dialog which is useful for displaying information'),
		$.p('dialog window can be moved, resized and closed with the x icon')]).id('dialog').at('title', 'Basic dialog')
	$("#dialog").dialog()
	$.dlg('dialog 1')
	_.in(30, function () {
		$.dlg('dialog 2')
		$.dlg('dialog 3')
		$.dlg('dialog 4')
	})
}
UI4 = DPB = function () {
	$.x('b', 'dpb')
	$CSS({
		$dgb: {C: 'r', w: 100, h: 100},
		$dpb: {
			p: 'a',
			C: 'o', c: 'b',
			l: 250, t: 0, w: 400, h: 400,
			pad: 10
		}
	})
	dp = $.d(['Drop here']).id('dpb')
	dg = $.d(['Drag me']).id('dgb')
	$("#dgb").dgb()
	$("#dpb").dpb({
		drop: function () {
			dp.C($r()).A(dg.XY(0, 0))
		}
	})
	function alt() {
		JU30 = DGB = function () {
			$.s({$dgb: {w: 100, h: 100, C: 'r'}}, 'o', 'dgb')
			$.dI('dgb', ['Drag me']).dgb()
		}
		JU31 = DPB = function () {
			$.x('b', 'dpb')
			$CSS({
				$dgb: {C: 'r', w: 100, h: 100},
				$dpb: {
					p: 'a',
					C: 'o', c: 'b',
					l: 250, t: 0, w: 400, h: 400,
					pad: 10
				}
			})
			dp = $.d(['Drop here']).id('dpb')
			dg = $.d(['Drag me']).id('dgb')
			$("#dgb").dgb()
			$("#dpb").dpb({
				drop: function () {
					dp.C($r()).A(dg.XY(0, 0))
				}
			})
		}
		JU32 = DGB = function () {
			$.s({$dgb: {w: 100, h: 100, C: 'r'}}, 'o', 'dgb')
			$.dI('dgb', ['Drag me']).dgb()
		}
	}
}
UI5 = SETRADIOBTUI = function () {
	
	/*
	 $.f([$.fs([$.lg('Favorite jQuery Project'),
	 $.dI('radio',[
	 $.lb('Sizzle','sizzle'),  $.rb('project', 'sizzle'),
	 $.lb('QUnitz','qunit'),  $.rb('project', 'qunit','+'),
	 $.lb('Color','color'), $.rb('project', 'color')
	 ])
	 ])])
	 */
	$.dI('radio', [
		$.lb('Sizzle', 'sizzle'), $.rb('project', 'sizzle'),
		$.lb('Qunitz', 'color'), $.rb('project', 'color'),
		$.lb('Color', 'qunit'), $.rb('project', 'qunit', '+')
	])
	$("#radio").buttonset()
}
UI6 = PRG = PROG = function () {
	l = $s({
		_wr: {
			P: 10, C: 'r',
			w: 100
		}
	})
	d = $.d()
	wr = d.progressbar({
		value: false
	}).D_('wr').dg()
	wr.A($.h1('hello'))
	d.bind("progressbarchange", function () {
		alert("The value has changed!");
	})
}
UI7 = NUMSPINN = function () {
	$.ip().A().C('o').spinner()
}
UI8 = DATEPICK = function () {
	$.d().id("datepicker")
	$("#datepicker").datepicker()
	function alt() {
		$.p('Date: ').A($.ip().id('dtp'))
		$('#dtp').dtp()
		d = $.d('b', 400, 400).A(ip = $.ip('date').datepicker()).pad(20)
	}
}
UI9 = JU33 = OVERLAY = FADEIN = FIN = function () {
	$s({
		bd: {B: 0, M: 0},
		'_ui-widget-overlay': {
			bg: 'repeat-x scroll 50% 50% #AAA', al: '0.3'
		},
		'_ui-widget-overlay': {
			h: '100%', l: 0,
			ps: 'a', t: 0, w: '100%'
		}
	})
	ovL = $.dK("ui-overlay", [
		$.dK("ui-widget-overlay")]).hd().fI()
	$(window).resize(function () {
		ovL.WH($(document).W(),
				$(document).H()).hd().fI()
	})
}
UI19 = IP4 = SLIDER = RANGEUI = function () {
	$s({_slider: {M: 12}});
	$.dI('slider').slider()
}
UI11 = TIP = function () {
	$.p([
		$.a('text goes here: ').ti('description, yo'),
		$.ip().ti('little help..')
	])//.tooltip()
	$(document).tooltip()
}
$.dlg = function (msg) {
	var dlg = $.d().A(msg).at({title: "Messaage"}).dialog({
		autoOpen: true,
		width: 400, modal: true,
		closeOnEscape: true,
		buttons: {
			Ok: function () {
				dlg.dialog("close")
			}
		}
	})
}
DOG = function () {
	$.d([
		$.p('This is the default dialog which is useful for displaying information'),
		$.p('dialog window can be moved, resized and closed with the x icon')
	]).id('dialog').at('title', 'Basic dialog')
	$("#dialog").dialog()
	$.dlg('dialog 1')
	_.in(1, function () {
		$.dlg('dialog 2')
		$.dlg('dialog 3')
		$.dlg('dialog 4')
	})
}
DOGS = function () {
	$s({
		bd: {C: $r()},
		$: {M: 10}
	})
	mainDlg()
	$.ip().id('check').A()
	$.bt('check', function () {
		var tryUn = $('#check').V()
		$.post('/user/unIsAvail', {un: tryUn}, function (un) {
			un ? $.h1(un + ' is available') :
					$.h1(tryUn + ' us TAKEN.. try again..')
		})
	})
}
function mainDlg() {
	$('.dlg').rm()
	$.d([
		$.p('YOU ARE NOT LOGGED IN'),
		$.bt('login', tryLogin),
		$.bt('new account', newAcc)
	]).id('main').K('dlg').dialog({
		show: {effect: "blind", duration: 800},
		hide: {effect: "explode", duration: 1000},
		title: 'wappy'
	})
}
function newAcc() {
	$('.dlg').rm()
	var d = $.d().K('dlg').A(
			$.p('enter username, password..'),
			$.f().A(
					$.ip().ph('username').id('un'),
					$.ip().ph('password').id('pw'),
					$.bt('do it!')
			).submit(function (ev) {
						$.pD(ev)
						var ob = {un: $('#un').V(), pw: $('#pw').V()}
						$l(ob)
						$.post('/user/user', ob, function (da) {
							$l('da:')
							$l(da)
						})
					}))
	d.dialog({
		show: {effect: "blind", duration: 800},
		hide: {effect: "explode", duration: 1000},
		close: function (event, ui) {
			$('.dlg').rm()
			mainDlg()
		},
		title: 'new account'
	})
	//d.dialog("close")
}
function tryLogin() {
	$('.dlg').rm()
	$.d([
		$.p('enter username, password..'),
		$.ip().ph('username'),
		$.ip().ph('password')
	]).K('dlg').dialog({
		show: {effect: "blind", duration: 800},
		hide: {effect: "explode", duration: 1000},
		close: function (event, ui) {
			$('.dlg').rm()
			mainDlg()
		},
		title: 'log into your account, user'
	})
	$("#dialog").dialog("close")
}
$L()
function multiSelect() {

//multi select!!
// The object literal should contain
// default options
// _create,    _setOption    _destroy
// enhance  <select multiple>,
// one might have to iterate over the <option>s
// in the select to create a corresponding <li> in a proxy <ul>.
// Unfortunately, leaving this code in  _create makes it diff to
// 1) manage the relationship btwn   orig <option> els  and  list items,
// 2)  reflect  state of <option> els added/removed from orig <select>  after   instant
// Instead,   build a refresh met (invoked   from _create)for dealing with this linkage,
//  also keep  click-handling logic  on the list items separate,
// and  use ev  delegation  to avoid  binding NEW handlers when list items are created.
	a = {
		_create: function () {
			var wg = this, q = wg.element
			wg.list = $("<ul>").iA(q).delegate("li.multi-option-item", "click", $.proxy(wg_itemClick, wg))
			q.hd()
			wg.refresh()
		},
		refresh: function () {
			var wg = this, q = wg.element  //     Keep track of the generated list items  // Use a class to avoid working on options that have already been created
			wg.items = wg.items || $()
			q.fi("option:not(.demo-multi-option)")
					.ea($.proxy(function (i, el) {
						var q = $(el)
						q.K("demo-multi-option")  // Add k so option !processed next time list  refreshed
						wg.items.add(
								$.li().a2(this.list)
										.K('multi-option-item').A(q.t())
										.data("option.multi", el) // Save it into the item cache
						)
					}, wg)) // If this li's assocd-opt !contained by selEl anymore, // rm it from list/cache
			wg.items = wg.items.filter($.proxy(function (i, item) {
				var inOrig, wg = this, q = wg.element, el = q[0]
				inOrig = $.contains(el, $.data(item, "option.multi"))
				if (!inOrig) {
					$(item).rm()
				}
				return inOrig
			}, wg))
		},
		_itemClick: function (ev) {
			$l($(ev.target).v())
		}
	}
// When ref  to the actual wg inst  is acquired via .data(),
// its PRIVATE mets can be invoked directly:
// $( "#something" ).data( "multi" )._create().
// *** OK, SO user will be changing the select element..
// The refresh example is a case in point:
// Since the user will be the one manipug els in the orig  <select>,
// we must provide the facility for him to update the proxy.
// On the other hand, a plumbing function to
// handle input on the proxy els the wg creates,
// like the _itemClick method, is only for internal use
	pops = function () {
		// this.element-  el (always 1)  used to instantiate   plugin.
		// this.options  ops curr  used for plugin config    // On instant, user-provided-ops are MERGED with df vals   defined in $.demo.multi.prototype.options.
		// this.namespace    The namespace the plugin lives in (  "demo" ) -usually not needed
		// this.name   name of the plugin( "multi  ) " -only Slightly more useful than this.namespace!
		// this.widgetEventPrefix     dets how to name evs assocd w plgn cbs
		// when the  dlg's close cb  execd, -> dlg close ev triggered.
		//    ev  name =  ev prefix(df = widget name) +  cb name
		//ex, when a user starts dragging el, we want ev name to be  dragstart,  !draggablestart,   // so we override ev-prefix to be "drag". // If  cb name == event prefix, ev  name !prefixed (prevents ev name like dragdrag)
		// this.widgetBaseClass
		// -useful for building class names to use on els within your widget.
		// ex:    mark an el  active ->   .K( "demo-multi-active" ) <- el.K( this.widgetBaseClass + "-active" )
		// - more for use inside the wgFac & abstract plugins ($.ui.mouse)
	};
	pops()
	mets = function () {
		
		
		
		// _create (extend):  setup * related to your widget, (create els, bind  evs.), run ONCE, post-instant
		// _init: ***
		//  invoked when wg  invoked w  0 args | 1 ops arg
		// ( first invoc -> called AFTER  _create).
		// o/w  handle   RE-INIT  // without forcing the user to perform a destroy->create cycle. ****
		// destroy extend! ( provides start point):
		// destroys plugin, cleans up (rms ks, unbind evs, destroy els...
// option (dont modify): get/set ops post-instant, sig ~ .css()/attr(), calls _setOptions internally
// _setOptions (dont modify):  internal util  met used for setting ops after instant, calls _setOption internally
// _setOption (can modify!): Called when a user sets an option val  via the option met
		// ex: when a dialog's title option changes, the text inside the title bar must be updated.
		// In some instances, it's necessary to compare the old and new values to determine the correct side effects.
		// In those instance, you can compare this.options[key] with value as long as you delay the call to the base _setOption until the end.
		// If you don't need to compare the old and new values, you can call the base _setOption at top of your _setOption function.
		_setOption = function (k, v) {
			var q = this, g = G(arguments)
			if (k === 'title') {
				q.titleElement.text(v)
			}
			$.Widget.prototype._setOption.apply(q, g)
		}
// _trigger:
// !! be used to execute all cbs
// The only required pam is the name of cb to execute.  All cbs also trgr evs // (see notes about this.widgetEventPrefix above).
//   may also provide evOb that reps ev that initd the process.
// ex:  drag ev is initd by mousemove ev, // so orig mousemove evOb !!(must) be passed to _trigger.
// pam3 is hash of data that will be passed as cb pam and ev handlers.- hash data should only be info relev to spec ev (!avail via the plugin API)
// enable/disable:    just calls option('disabled', false/true) // Note that you'll want to handle enable/disable, by having an if (key === "disabled") blockin your _setOption
	};
	mets()
//http://wiki.jqueryui.com/w/page/12138135/Widget%20factory
	$.wg("demo.multi", {
		options: {clear: null},
		_create: function () {
			var self = this, q = this.element
			self.list = $.ul().iA(q)
			q.hd().fi("option").ea(function (i, el) {
				var q = $(el),
						li = $.li().K('multi-option-item')
				li.A(q.t()).$(function () {
					$l(q.v())
				})
				li.a2(self.list)
			})
		},
		_setOption: function (k, v) { // Use the _setOption method to respond to changes to options
			switch (k) {
				case "clear":
					break;
			}
			this._super("_setOption", k, v)
		}
	})
}
function progressBar() {
	//https://learn.jquery.com/jquery-ui/widget-factory/how-to-use-the-widget-factory/
	$.wg("cust.prgbar", {
		options: {v: 0},
		_create: function () {
			this.element.K("prgbar")
					.text(this.options.v + "%")
		},
		v: v, _cap: cap,
		_options: {v: 0},
		_create: create,
		_setOption: setOption,
		_setOptions: setOptions,
		refresh: refresh,
		_cap: cap,
		_destroy: destroy
	})
	$.cust.prgbar.prototype.reset = function () {
		this._setOption("v", 0)
	}  //  add a met to our prg bar   to reset the prg to 0%
//  rg bar   lets us set the prg once;
//  this.el  1el-qob
// this.ops   k/v-hash plg's ops
// $.d().prgbar({ v: 20 })
// ( fn n ~ n  you pass to $.wid() w/o nSp    "prgbar" )
//ex:  bar = $.d().prgbar({ v: 20 });  bar.prgbar( "v", 50 )
// The option() met allows you to get and set ops after init.  // When used as a setter, the plg's,  _setOption met will be called for ea op   being set.
// For acts to perform independ  of  num  of ops changed, can override _setOptions().
	PRGBAR = function () {

//add cbs so users can react when the state of your plg changes.
		// add  cb to  prgs bar to signfy prg   100%
		// The _trigger() met takes 3pams: cb n,  $ vob that initd the cb, and hash of data relev  to  ev.
		// The cb n  is the only req pam, but  others   useful
		//Cb fns  just addtonl ops,  you can g/s them just like any other op .
		// When    cb  execd, a correspg ev is trgd as well. ev ty  is determd by concatg   plg n + cb n
		// cb and ev both receive the same two pams:  vob,  hash of data relevant to the ev,
		//your plg may have fnly you want to be user-preventble.  best way to support this is  crg cancble cbs.
		// Users can canc  cb, or its assoc  ev, same as cancg any natv ev (by callg ev.preventDefault() or retg Fa)
		// If    cb cancd, the _trigger() met rets Fa,
		// can impl  the appropr  fnly w/in your plg.
		// ex: if we were bildg  dgn plg,   could pass the mm ev when trgg a drag cb;
		// users can react to the drag based on  x/y coords  providd by vob.
		// Note that the orig ev passed to _trigger() must be a $ ev, not a native bw ev.
		bar = $.d().prgbar({
			complete: function (ev, dat) {
				$l("Cbs are great!")
			}
		})
		bar.bind("prgbarcomplete", function (ev, data) {
			$l("Events bubble and support many handlers for extreme flexibility.");
			$l("progress %: " + data.v)
		})
		bar.prgbar("option", "v", 100)
		//DATA
		//  When plg inst crtd,  its stored on orig DOMel using $.data ( key:plgN)
		//  B/c plg inst is drctly linked to the DOM el, you can access the plg inst drctly . instead of going through the exposed plg met
		//- allows you to call mets drctly on the plg inst, instead of passing met names as strings
		//-  also gives you dirc access to the plg's pops.
		bar = $.d().prgbar().data("cust-prgbar");
		bar.option("v", 50); // Call a met drctly on the plg inst.
		$l(bar.ops.v); // Access pops on the plg inst.
//You can also create an inst without going through the plg met,
// by calling the constr drctly,with the ops and element g's:
		bar = $.cust.prgbar({}, $.d());
		$l(bar.ops.v) // Same result as before.
// Extending a Plugin's Prototype,
// modify the bh of all insts of our plg.
		/*  In some cases, it will make sense to allow users to apply
		 and then ltr unapply your plg.
		 You can accomplish this via the _destroy() met.
		 W/in _destroy() met,  undo anything your plg   may have done dur  init|ltr use.
		 _destroy() calld by destroy() met, auto-called if plg-inst-el is rmd,
		 (can be used for gb-cl)
		 That base destroy() met   handles some gen  cleanup ops,
		 ( rmg the inst ref from the wid's DOM el)
		 unbinding all evs in (wid's el-nspaced|_bind()-added-evs)    */
// $ contains the fn.extend() met,
//  simple plg that just adds captions to images      captr
//  so we'll also need a page, with a bunch of images on it, to develop/test the plg with.
	}
	function setOptions(o) {
		this._super(o);
		this.refresh()
	}
	
	function setOption(k, v) {
		if (k === "v") {
			v = this._cap(v)
		}
		;
		this._super(k, v)
	}
	
	function create() {
		this.q.K("prgbar")
		this.o.v = this._cap(this.ops.v)
		this.refresh()
	}
	
	function refresh() {
		this.q.T(this.o.v + "%");
		if (this.o.v == 100) {
			this._trg("complete", null, {v: 100})
		}
	}
	
	function v(v) {
		var wg = this, q = wg.element, ops = wg.options
		if (U(v)) {
			return ops.v
		}
		ops.v = this._cap(v)
		q.text(ops.v + "%")
	}
	
	function destroy() {
		this.element.xK("prgbar").T('')
	}
	
	function cap(v) {
		if (v > 100) {
			v = 100
		}
		if (v < 0) {
			v = 0
		}
		return v
	}
	
	$.wg("jy.bar", {
		options: {v: 0},
		_create: function () {
			this.element.K("bar").text(this.options.v + "%")
			this._update()
		},
		_constrain: function (v) {
			return v > 100 ? 100 : v < 0 ? 0 : v
		},
		_setOption: function (key, v) {
			this.options[key] = v;
			this._update()
		},
		_update: function () {
			var progress = this.options.v + "%";
			this.element.text(progress);
			if (this.options.v === 100) {
				this._trigger("complete", null, {v: 100});
			}
		},
		_destroy: function () {
			
			
			// _destroy method called if the element that your plugin instance is tied to is
// removed from the DOM,  can be used for garbage collection
//  base destroy method calls _destroy on the plugin instance.
			this.element
					.removeClass("bar")
					.text("");
		},
		v: function (v) {
			if (U(v)) {
				return this.options.v
			}
			else {
				this.options.v = this._constrain(v)
				this.element.text(this.options.v + "%")
			}
		}
	})
	$.jy.bar.prototype.reset = function () {
		this._setOption("v", 0);
	}
	BAR = function () {
		$Ms('BAR')
		d = $("<div>").A()
		d.bar({v: 30})
		d.bind("barcomplete", function (e, d) {
			alert("Events bubble and support many handlers for extreme flexibility.")
			alert("The progress bar value is " + d.v);
		})
		d.bar({
			complete: function (e, data) {
				$Ms('complete')
			}
		})
	}
}
function sDlg() {

//https://learn.jquery.com/jquery-ui/widget-factory/extending-widgets/
//super dialog!!
	$.wg("cust.sdlg", $.ui.dialog, {
		open: function () {
			$l("open");
			return this._super()
		},
		setOption: function (k, v) {
			this._super(k, v);
			this._superApply(arguments)
		},
		red: function (r) {
			this.element.C('r')
		}
	})
	WIJ = function () {
		d = $.d(['i am red'])
		d.sDlg().sDlg('red')
		$.in(function () {
			d.sDlg("close")
		})
	}
	SDLG = function () {
		
		// Mets overridden on the ptt affect all insts of wid.
// both insts of the dlg use the same open() met
		d = $.d().sdlg().data("ui-dialog")
		// Retrieve the dialog's instance and store it.
		// sometimes you only need to change the bhr for a sing  inst  of the wid.  //To do this, obtain   ref  to   inst  and override the met  using  normal js
		d.close = function () {
			$l("close")
		}
		$.d().sdlg()
		$(':data(ui-dialog)').dlg("close")
		// Select both dialogs and call close() on each of them--> "close" will only be logged once.
	}
}
$.wg("ui.capt", {
	options: {loc: "bottom", c: "y", C: "z"},
	_create: function () {
		var wg = this, q = wg.element, o = wg.options
		var tx = q.at("alt")
		var cap = $.sp()
		cap.K("ui-widget ui-caption").tx(tx).C(o.C, o.c).W('100%')
		cap.iA(q)
		cap.css({
			width: q.W() - _.pI(cap.pL()) - _.pI(cap.pR()),
			top: top(o.loc === "top"),
			left: q.os().left,
			display: "block"
		})
		// custom event:
		wg._trigger("added", null, cap);
		// that can be reacted to.
		// We call the _trigger() method of the plugin instance (which we stored in the variable wg)
		// and pass the method three arguments;
		// the first is the name of the event,
		// the second is for the event object
		// (we don't need to use this in our example plugin, hence the null value)
		// and the third is a reference to the caption element.
		// The widget factory will automatically pass the event object
		// (if supplied) and the data we pass in the third parameter to a callback function
		// that uses the added event. A developer could hook into this event using the following syntax:
		// $("element_caption_attached_to").capt({ added: function(e, ui){ //do stuff });
		//
		$(window).resize(function () {
			cap.css({top: top(o.loc === "top"), left: q.os().left})
		})
		function top(bool) {
			return bool ? q.os().top :
			q.os().top + q.H() - cap.ouH() - _.pI(cap.pT()) + _.pI(cap.pB())
		}
	},
	destroy: function () {
		this.element.next().remove();
		$(window).unbind("resize")
	},
	_setOption: function (option, value) {
		$.Widget.prototype._setOption.apply(this, arguments)
		var el = this.element, cap = el.next(),
				capH = cap.outerHeight() - parseInt(cap.css("paddingTop"))
						+ parseInt(cap.css("paddingBottom"))
		switch (option) {
			case "loc":
				(value === "top") ? cap.css("top", el.os().top) :
						cap.css("top", el.os().top + el.H() - capH);
				break;
			case "color":
				el.next().css("color", value);
				break;
			case "backgroundColor":
				el.next().css("backgroundColor", value);
				break;
		}
	}
})
CAPT = function () {
	$s({'.ui-caption': {d: 'none', position: 'absolute', P: 10}})
	$.C('z')
	$.i('me').A().at('alt', 'wowowowowoowowo').capt({
		loc: "top"
	})
	$.i('chicks').A().at('alt', 'wowowowowoowowo').capt({
		loc: "top"
	})
}
//Once the caption has been inserted,
// it needs to be sized and positioned;
// the only way it can be sized accurately is if it already exists in the
// DOM and has CSS rules applied to it, such as the font-size.
// This is why we append the caption to the page, and then determine its exact dimensions,
// which are then stored in the variables capW and capH.
//Once the caption has been appended to the page (and only then) we can work set the correct width, H and position of each caption,
// which we set using the css() method once again.
// The captions are actually completely separate from the images;
// they are inserted directly after each image and then positioned to appear to overlay the images, after all,
// we can't append
// the <span> as a child of the <img>.
//This is fine, until the browser is resized, at which point the images move but the captions don't because they are absolutely positioned.
// To remedy this, we've used a basic resize handler
// attached to the window which simply repositions each caption to the new position of its image. This event handler is the last thing in our initialization method.
//Another method that our plugin should expose is the destroy() method which is common to all jQuery UI plugins.
// We must provide an implementation of this method in order to clean up after
// our plugin. For our example plugin, the method can be as simple as this:
//
//All we need to do is remove the captions and unbind our window resize handler.
// This method can be called by an implementer
// using the plugin so we shouldn't begin this method name with an underscore.
// To call this method,
// the implementer would use
// $("element_caption_attached_to").capt("destroy");
// which is how any of our public methods would be called.
//We start this method with an underscore because the implementer uses option,
// not _setOption to actually change the options; we don't need to worry about how this is handled,
// we just need to provide this method to deal with anything specific to our plugin.
// Because this method already exists in the widget factory we should call the original method,
// which we do first of all in our method using the prototype of the Widget object,
// specifying the method name (_setOption in this case but we could do it for other built-in methods as well)
// and use apply to call it.
//The function will automatically receive two arguments
// which are the option to change and the new value.
// We cache some commonly used elements,
// such as the image and the caption, and obtain the current H of each caption.
// We then use a simple switch-case statement to handle each of our three options being changed.
// Repositioning the captions is the most complex,
// but is still quite trivial and similar to how we positioned them initially.
CALC = WD1 = function () {
//http://code.tutsplus.com/courses/jquery-ui-301-the-widget-factory/lessons/the-widget-method
	ob = {
		_setOptions: function () {
			this._superApply(arguments)
		},
		_setOption: function (key, val) {
			this._super(key, val)
			if (key == 'buttons') {
				this.shell
						.fi('button').rm()
				this._createButtons()._renderMarkup()
			}
			else if (key == 'disabled') {
				this.shell.fi('button')
						.button('option', key, val)
			}
		},
		_create: function () {
			var wg = this
			var q = wg.element
			q.K('jy-clc')
			wg._createWrapper()
			wg._createButtons()
			wg._renderMarkup()
			wg._on({'click button': this._handleClick})
			wg._setup()
		},
		_setup: function () {
			this.curDp = [];
			this.runDp = [];
			this.numIp = false;
			return this
		},
		_createWrapper: function () {
			var wg = this
			this.shell = $('<div>').id('jy-clc-shell').A(
					$.dI('jy-clc-displays').A(
							$.dK('jy-clc-clculation'),
							$.dK('jy-clc-display').text(0)
					)
			)
			if (!this.options.showOnCreate) {
				this._hide(this.element, this.options.hide, function () {
					wg._trigger('hidden')
				})
			}
		},
		_createButtons: function () {
			var wg = this, ct = $.d().a2(this.shell)
			_.e(wg.options.buttons, function (ob, i) {
				var trgRes = wg._trigger('beforeAddButton', null, ob), bt
				if (!trgRes) {
					return
				}
				bt = $('<button>')
				bt.text(ob.l)
				bt.button()
				bt.a2(ct)
				if (ob.k) {
					bt.K(ob.k)
				}
				if (S(ob.a)) {
					bt.da('action', ob.a)
				}
				else if (F(ob.a)) {
					var fnN = 'custom' + i
					wg[_ + fnN] = ob.a
					bt.da('action', fnN)
				}
			})
			return wg
		},
		_renderMarkup: function () {
			this.shell.a2(this.element)
		},
		options: {
			buttons: [
				{l: 'MR'}, {l: 'MS'}, {l: 'MC'}, {l: ':)'},
				{l: 'Clear', a: 'clear'},
				{l: 'CE', a: 'clearEntry'},
				{l: '*', a: 'operator'},
				{l: 7, a: 'number'},
				{l: 8, a: 'number'}, {l: 9, a: 'number'},
				{l: '+', a: 'operator'},
				{l: 4, a: 'number'},
				{l: 5, a: 'number'}, {l: 6, a: 'number'},
				{l: '-', a: 'operator'},
				{l: 1, a: 'number'},
				{l: 2, a: 'number'}, {l: 3, a: 'number'},
				{l: '/', a: 'operator'},
				{l: 0, a: 'number'},
				{l: '.', a: 'dot'},
				{l: '=', a: 'equals'}
			],
			showOnCreate: false,
			show: true, hide: true,
			beforeAddButton: null,
			shown: null,
			hidden: null
		},
		show: function () {
			var wg = this
			this._show(this.element, this.options.show, function () {
				wg._trigger('shown')
			})
		},
		hide: function () {
			var wg = this
			this._hide(this.element, this.options.hide, function () {
				wg._trigger('hidden')
			})
		},
		_destroy: function () {
			var q = this.element
			q.rK('jy-clc')
			q.E()
		},
		_a2CurDp: function (a) {
			this.curDp.push(a);
			this._udDp()
			return this
		},
		_clear: function (e, ui) {
			this._setup()
			this._udDp()
			this._udRunDp()
			this.element.fi('.jy-clc-display').tx(0)
		},
		_clearEntry: function (e, q) {
			var wg = this, q = this.element
			wg.curDp = []
			wg._udDp()
		},
		_handleClick: function (e) {
			var bt = $(e.target).closest('button'),
					fn = bt.da('action')
			if (fn) {
				this['_' + fn](e, bt)
			}
		},
		_number: function (e, ui) {
			this.curDp.push(ui.text())
			this._udDp()
			this.numIp = true
		},
		_dot: function (e, ui) {
			var hasDot = false,
					len = _.z(this.curDp)
			if (!len) {
				this.curDp.push('0')
			}
			while (--len >= 0) {
				if (this.curDp[len] == '.') {
					hasDot = true;
					break;
				}
			}
			if (hasDot) {
				return false
			}
			else {
				this._a2CurDp('.')
				//this.curDp.push('.');this._udDp()
			}
		},
		_operator: function (e, o) {
			var wg = this,
					q = wg.element,
					curDp = wg.curDp, runDp = wg.runDp,
					dpEl = q.fi('.jy-clc-display'), arr, str, len, newStr
			//if someone clicks an op-bt before any num-bt clicked,
			//both curDp and runDp arrays will be empty.
			//so if they ARE empty, then we can push
			//whatever is on the 'main' display into current display
			//(at this point it would just be '0'..
			//but later on it could be calculation result)
			if (!_.z(curDp) && !_.z(wg.runDp)) {
				curDp.push(
						dpEl.tx()// <- whatever is currently being displayed
				)
			}
			//if it ends with a trailing dot, remove it
			else if (_.l(curDp) == '.') {
				curDp.pop()
			}
			//now we want to update the running display (above main display)
			//with buttons pressed so far
			//(we want to do this either if running display is empty
			// or numIp is true)
			if (!_.z(runDp) || wg.numIp) {
				arr = [curDp.join(''), ' ', o.tx(), ' ']
				//we space out operator for two reasons:
				//1)looks better
				//2)later on, we'll want to break this array up based on the spaces,
				//so that we can easily seperate out the nums and actual operators
				str = arr.join('')
				runDp.push(str)
			}
			//there's one more condition we need to check:
			//if somone one types two operators in a row
			//we want to replace existing operator with one clicked second
			//check if numIp is false   (set to false when operator bt clicked)
			else if (!wg.numIp) {
				len = _.z(runDp)
				newStr = runDp[len - 1]
						.replace(/[\*\-\+\/]/, o.tx())
				runDp.pop()
				runDp.pop(newStr)
			}
			wg.numIp = false
			wg._udRunDp()
			this._clculate()
		},
		_equals: function (e, o) {
			this._clculate(true)
		},
		_udDp: function (reset) {
			var wg = this, dpEl, dpVal
			if (notTooLong(this)) {
				dpEl = this.element.fi('.jy-clc-display')
				if (!_.z(wg.curDp)) {
					dpEl.tx(0)
				}
				else {
					dpVal = wg.curDp.join('');
					dpEl.tx(dpVal)
				}
				if (reset) {
					this.curDp = []
				}
			}
			function notTooLong(wg) {
				return wg.curDp.length < 18
			}
		},
		_udRunDp: function () {
			var wg = this,
					q = wg.element,
					runDp = wg.runDp,
					dpEl = q.fi('.jy-clc-clculation')
			dpEl.tx(runDp.join(''))
			wg.curDp = []
		}
	}
//https://www.youtube.com/watch?v=yuqX4oarOwc&list=PLz_6dB4PItBGBrFeexo-BzO9JHDAhjnQq
	ob._clculate = function (final) {
		var wg = this, q = wg.element,
				runDp = wg.runDp, tmp, trm, ops, res, run, dp, sum
		if (final) {
			sum = [
				q.fi('.jy-clc-clculation').tx(),
				q.fi('.jy-clc-display').tx()
			].join('')
			wg.curDp = [seqClc(sum)]
			wg._udDp()
			wg.runDp = []
			wg.numIp = false
			wg._udRunDp()
		}
		else if (_.z(runDp) > 1) {
			tmp = runDp.pop()
			trm = tmp.replace(/\s[\+\-\*\/']\s/, '')
			runDp.push(trm)
			res = seqClc(runDp.join(''))
			wg.curDp = [res]
			runDp.pop()
			runDp.push(tmp)
			wg._udDp(true)
		}
		function seqClc(str) {
			var ops = {
						'+': function (x, y) {
							return x + y
						},
						'-': function (x, y) {
							return x - y
						},
						'*': function (x, y) {
							return x * y
						},
						'/': function (x, y) {
							return x / y
						}
					},
					sumA = str.split(' '),
					left = +sumA[0],
					len = _.z(sumA),
					x
			for (x = 1; x < len; x = x + 2) {
				left = ops[sumA[x]](
						left, +sumA[x + 1]
				)
			}
			return left
		}
	}
	$.wg('jy.clc', ob)
	buttons = [{l: 8, a: 'number'}, {l: 9, a: 'number'}, {l: '+', k: 'jy-clc-plus', a: 'operator'},
		{l: 4, k: 'jy-clc-clearfix', a: 'number'}] //{l:'Special', a:function(e,ui){$l('special clear!'+ ui)}}
	$s({bt: {w: 100, h: 120}, '.jy-clc-display': {fS: 50, c: 'r'}})
	$.a('hide').$(function () {
		$('#clc').clc('hide')
	})
	$.a('show').$(function () {
		$('#clc').clc('show')
	})
	$.a('change').$(function () {
		$('#clc').clc('option', 'buttons', buttons)
	})
	$.a('disabled').$(function () {
		$('#clc').clc('option', 'disabled', true)
	})
	$.a('disable').$(function () {
		$('#clc').clc('disable')
	})
	$.a('enabled').$(function () {
		$('#clc').clc('option', 'disabled', false)
	})
	$.a('enable').$(function () {
		$('#clc').clc('enable')
	})
	d = $.dI('clc').C('s')
	$('#clc').clc({
		//buttons:buttons,
		shown: function () {
			$Ms('shown')
		},
		hidden: function () {
			$Ms('hidden..')
		},
		beforeAddButton: function (ev, ob) {
			if (ob.l == 'MR' || ob.l == 'MS' || ob.l == 'MC') {
				return false
			}
		},
		showOnCreate: true,
		show: true
	})
	$('a').button()
}
$.fn.bt = function (op) {
	this.bt(op)
	return this
}
cols = {red: M.fl(M.r() * 256), green: M.fl(M.r() * 256), blue: M.fl(M.r() * 256)}
Col = function (op) {
	var rgb = "rgb(" + op.red + "," + op.green + "," + op.blue + ")"
	return rgb
}
$.wd("custom.colorize", {
	// default options
	options: {
		red: 255, green: 0, blue: 0,
		change: null,
		random: null
	},
	// the constructor
	_create: function () {
		var wd = this, q = wd.element
		// prevent double click to select text
		q.K('col').disableSelection()
		// bind click events on the changer button to the random method
		// _on won't call random when widget is disabled
		var bt = wd.changer = $.bt('change')
				.K('changer').a2(q).C('z', 'w')
		wd._on(bt, {click: "random"})
		wd._refresh()
	},
	// called when created, and later when changing options
	_refresh: function () {
		var wd = this, op = wd.options, q = wd.element
		q.C(Col(op))
		wd._trigger("change")
	},
	random: function (ev) {
		// a public method to change the color to a random value
		// can be called directly via .colorize( "random" )
		var wd = this, op = wd.options,
				q = wd.element
		// trigger an event, check if it's canceled
		if (wd._trigger("random", ev, cols)) {
			wd.option(cols)
		}
	},
	_destroy: function () {
		// events bound via _on are removed automatically
		// revert other modifications here
		var wd = this, op = wd.options,
				q = wd.element
		// remove generated elements
		wd.changer.rm()
		q.rmK("col").enableSelection()
				.C("transparent")
	},
	_setOptions: function () {
		// _setOptions is called with a hash of all options that are changing
		// always refresh when changing options
		var wd = this, op = wd.options,
				q = wd.element, g = G(arguments)
		// _super and _superApply handle keeping the right this-context
		wd._superApply(g)
		wd._refresh()
	},
	_setOption: function (k, v) {
		// _setOption is called for each individual option that is changing
		var wd = this, op = wd.options,
				q = wd.element
		// prevent invalid color values
		if (/red|green|blue/.test(k) && (v < 0 || v > 255)) {
			return
		}
		wd._super(k, v)
	}
})
// FROM THIS AMAZING VIDEO (not on youtube): https://vimeo.com/22686559
$.wg("aj.flb", {//filterable
	options: {k: ''},
	_create: function create() {
		var wg = this, q = wg.element, op = wg.options
		q.ch().K("ui-widget-content " + op.k)
		wg.filterIp = $.ip().iBf(q).wr($.dK('ui-widget-header', op.k))
		wg.timeout = false
		wg._on(q.ch(), {
			mouseenter: "_hover",
			mouseleave: "_hover"
		})
		this._focusable(ip)   // :toggles ui-state-focus
		// _hoverable works for ui-state-hover,
		// but we will do something slighty different in our hover
		this._on(ip, {
			keyup: "filter"
		})
	},
	_hover: function (e) {
		var q = $(e.target)
		q.tK("ui-state-active",
				e.type === "mouseenter")
		this._trigger("hover", e, {hovered: q})
	},
	_setOption: function (k, v) {
		var g = G(arguments)
		switch (k) {
			case "length":
				break
		}
		return this._superApply(g)
	},
	_destroy: function () {
		var wg = this
		wg.flIp.parent().rm()// Remove any new elements that you created
		wg.flEls.rK(
				"ui-widget-content ui-helper-hidden ui-state-active " +
				wg.op.k) // Remove classes you applied
		return wt._super()
	},
	filter: function filt(e) {
		var wg = this
		// Debounce the keyup event with a timeout, using the specified delay
		_.cT(wg.timeout)
		wg.timeout = wg._delay(
				function () {
					
					// Trigger a callback so the user
					// can respond to filtering being complete
					// Supply  an object of useful
					// parameters with the second argument to _trigger
					this._trigger("filtered", event, {
						visible: this.filterEls.filter(function () {
							var q = $(this)
							var matches = $REi(wg.filterIp.val()).test(q.text())
							q.tK("ui-helper-hidden", !matches)
							return matches
						})
					})
				},
				op.delay
		)
	}
})
WD3 = CWID = function () {
	$s({
		_col: {
			fS: 20, position: 'relative',
			w: 75, h: 75
		},
		_changer: {
			fS: 10, position: 'absolute',
			right: 0, bottom: 0
		}
	})
	$.dK('w1').A('color me')
	$.dK('w2').A('color me')
	$.dK('w3').A('color me')
	$(".w1").colorize()
	$(".w2").colorize({
		red: 60,
		blue: 60
	})
	// initialize with custom green value
	// and a random callback to allow only colors with enough green
	$(".w3").colorize({
		green: 128, random: function (event, ui) {
			return ui.green > 128
		}
	})
	function bts() {
		$.bt('Toggle disabled option', function () {
			// use the custom selector created for each widget to find all instances
			// all instances are toggled together,
			// so we can check the state from the first
			if ($(":custom-colorize").colorize("option", "disabled")) {
				$(":custom-colorize").colorize("enable")
			}
			else {
				$(":custom-colorize").colorize("disable")
			}
		})
		$.bt('Go green', function () {
			
			// click to set options after initialization
			var green = {red: 64, green: 250, blue: 8}
			$(":custom-colorize").colorize("option", green)
		})
	}
	
	bts()
}
WD2 = SLI = SLIDES = function () {
	$Ms('SLIDES')
	$.ul([
		$.li('asdf').data('price', '23.23'),
		$.li('bsdf').data('price', '2.23'),
		$.li('xsdf').data('price', '213.23'),
		$.li('dsdf').data('price', '233'),
		$.li('asdf').data('price', '3.23')
	]).id('cheeses')
	$.dI('reg')
			.A('One pound of each would cost',
			$.sp().id('total')
	)
	total = $("#total")
	cheeses = $("#cheeses")
	reg = $("#reg")
	price = $.sp()
	$.bt('activate', function () {
		if (cheeses.is(":aj-flb")) {
			alert('cheese is!')
			return cheeses.flb("destroy")
		}
		cheeses.flb({
			k: "cheese",
			create: function () {
				reg.K("ui-widget-header cheese").sh()
			},
			filtered: function (ev, ui) {
				var t = 0
				ui.visible.each(function () {
					t += _.pF($(this).da("price"))
				})
				total.T(t.toFixed(2))
			},
			setOption: function (e, ui) {
				ui.option === "k" && reg.tK([ui.original, ui.current].join(' '))
			},
			hover: function (e, ui) {
				if (e.originalEvent.type === "mouseenter") {
					price.text(" - " + ui.hovered.data("price") + " per lb").a2(ui.hovered)
				}
				else {
					price.detach()
				}
			}
		})
		cheeses.on("flbdestroy", function (e, ui) {
			reg.rK("ui-widget-header " + ui.op.k).hd()
		})
		cheeses.flb("filter")
		_.in(3, function () {
			$.C('r')
			cheeses.flb("option", "k", "cheesePlease")
		})
	}).button({
		icons: {primary: "ui-icon-search"}
	})
}
PLAN = function () {
	$.z().h1('Plan!')
	$.p().A($.lb().A(
					$.cC('displayAdvancedOptions'), 'Display advanced options'
			)
	)
	$.p().A('Show:',
			$.lb([$.ip()]), $.lb([$.ip()]), $.lb([$.ip()])
	)
	/*
	 <p data-bind='fadeVisible: displayAdvancedOptions'>
	 Show:
	 <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
	 <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
	 <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
	 </p>*/
	$.d([$.d([$.d()])])
	/*
	
	 <div data-bind='template: { foreach: planetsToShow,
	 beforeRemove: hidePlanetElement,
	 afterAdd: showPlanetElement }'>
	 <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
	 </div>
	
	 */
	$.p([$.bt(), $.bt()])
	/*
	 <p data-bind='fadeVisible: displayAdvancedOptions'>
	 <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
	 <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
	 </p>
	 */
	Planets = function () {
		this.planets = ko.oa([
			{name: "Mercury", type: "rock"},
			{name: "Venus", type: "rock"},
			{name: "Earth", type: "rock"},
			{name: "Mars", type: "rock"},
			{name: "Jupiter", type: "gasgiant"},
			{name: "Saturn", type: "gasgiant"},
			{name: "Uranus", type: "gasgiant"},
			{name: "Neptune", type: "gasgiant"}
		]);
		this.typeToShow = ko.o("all");
		this.displayAdvancedOptions = ko.o(false);
		this.addPlanet = function (type) {
			this.planets.push({
				name: "New planet",
				type: type
			})
		}
		this.planetsToShow = ko.pc(function () {
			// Represents a filtered list of planets
			// i.e., only those matching the "typeToShow" condition
			var desiredType = this.typeToShow();
			if (desiredType == "all") return this.planets();
			return ko.utils.arrayFilter(this.planets(), function (planet) {
				return planet.type == desiredType;
			});
		}, this);
		// Animation callbacks for the planets list
		this.showPlanetElement = function (el) {
			if (el.nodeType === 1) $(el).hide().slideDown()
		}
		this.hidePlanetElement = function (el) {
			if (el.nodeType === 1) $(el).slideUp(function () {
				$(el).remove();
			})
		}
	}
// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library
	ko.bh.fadeVisible = {
		init: function (el, valAcc) {
			// Initially set the el to be instantly visible/hidden depending on the value
			var value = valAcc();
			$(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
		},
		update: function (el, valAcc) {
			// Whenever the value subsequently changes, slowly fade the el in or out
			var value = valAcc();
			ko.unwrap(value) ? $(el).fadeIn() :
					$(el).fadeOut();
		}
	}
	ok(new Planets())
}
PLAN = function () {
	$.z().h1('Plan!')
	$.p().A($.lb().A(
					$.cC('displayAdvancedOptions'), 'Display advanced options'
			)
	)
	$.p().A('Show:',
			$.lb([$.ip()]), $.lb([$.ip()]), $.lb([$.ip()])
	)
	/*
	 <p data-bind='fadeVisible: displayAdvancedOptions'>
	 Show:
	 <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
	 <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
	 <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
	 </p>*/
	$.d([$.d([$.d()])])
	/*
	
	 <div data-bind='template: { foreach: planetsToShow,
	 beforeRemove: hidePlanetElement,
	 afterAdd: showPlanetElement }'>
	 <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
	 </div>
	
	 */
	$.p([$.bt(), $.bt()])
	/*
	 <p data-bind='fadeVisible: displayAdvancedOptions'>
	 <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
	 <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
	 </p>
	 */
	Planets = function () {
		this.planets = ko.oa([
			{name: "Mercury", type: "rock"},
			{name: "Venus", type: "rock"},
			{name: "Earth", type: "rock"},
			{name: "Mars", type: "rock"},
			{name: "Jupiter", type: "gasgiant"},
			{name: "Saturn", type: "gasgiant"},
			{name: "Uranus", type: "gasgiant"},
			{name: "Neptune", type: "gasgiant"}
		]);
		this.typeToShow = ko.o("all");
		this.displayAdvancedOptions = ko.o(false);
		this.addPlanet = function (type) {
			this.planets.push({
				name: "New planet",
				type: type
			})
		}
		this.planetsToShow = ko.pc(function () {
			// Represents a filtered list of planets
			// i.e., only those matching the "typeToShow" condition
			var desiredType = this.typeToShow();
			if (desiredType == "all") return this.planets();
			return ko.utils.arrayFilter(this.planets(), function (planet) {
				return planet.type == desiredType;
			});
		}, this);
		// Animation callbacks for the planets list
		this.showPlanetElement = function (el) {
			if (el.nodeType === 1) $(el).hide().slideDown()
		}
		this.hidePlanetElement = function (el) {
			if (el.nodeType === 1) $(el).slideUp(function () {
				$(el).remove();
			})
		}
	}
// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library
	ko.bh.fadeVisible = {
		init: function (el, valAcc) {
			// Initially set the el to be instantly visible/hidden depending on the value
			var value = valAcc();
			$(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
		},
		update: function (el, valAcc) {
			// Whenever the value subsequently changes, slowly fade the el in or out
			var value = valAcc();
			ko.unwrap(value) ? $(el).fadeIn() :
					$(el).fadeOut();
		}
	}
	ok(new Planets())
}
function _pre() {
	$.wd = $.wg = $.wid = $.widget
}