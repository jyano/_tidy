cutting
(
)
$
.fn.snap

=
function

(
fn

)
{
var dU

=
this.canvas.

toDataURL
(
)
$
.

post
(
'/cutout'
,
{
    dU: dU / /,
dats
:
this
.
dats
/
/
vestige
from
phaser
physics
?
}
,
fn

)
}
function

cutting
(
)
{
$
.fn.dots

=
function

(
)
{
var el

=
this
el.img

=
el.

copy
(
)
/
/
el.img

=
$
.

img
(
)
/
/
el.img.

src
(
el.

toDataURL
(
)
)
/
/
el.

copy
(
)
el.DOTS

=
[]
el.dats

=
[]
el.$

(
function

(
x, y

)
{
    x = parseInt(x) y = parseInt(y) $ l('click:' +x+ ', ' +y) el . cir(x, y) el . DOTS . push([ x, y ]) el . dats . push(x)
;
    el . dats . push(y) / / vestige from phaser physics ? el . line(el . DOTS)
}
)
el.$

$
(
function

(
X, Y

)
{
    var du / / el . C('X') el . off('click') el . closePath() / / el . paste() / / el . copy() / / el . save() du = el . toDataURL() / / el . clear() / / el . clip() / / el . paste() / / el . fit(du)
}
)
return el

}
$
.cut

=
function

(
m

)
{
z
(
)
;
m

=
m | |

'me'
$
(
'body'
)
.

A
(
$
.

bt
(
'save sprite'
,
function

(
)
{
    c . snap(CUTOUTS) / /
;
EDIT
(
)
}
)
,
$
.

br
(
2
)
,
$
.

bt
(
'start cut'
,
function

(
)
{
    c . dots()
}
)
,
$
.

br
(
2
)
,
$
.

bt
(
'restart cut'
,
function

(
)
{
    $ . cut(m)
}
)
,
$
.

br
(
2
)
,
c

=
$
.

c
(
'r'
,
500
,
500
)
.

A
(
)
.

fit
(
m

)
)
}
/
/
$
.

bt
(
'file uploads'
,
function

(
)
{
    window . location = '/wap/uploads'
}
)
,
}
function

edit
(
)
{
EDIT

=
function

(
)
{
st

=
$
St
(
'z'
,
400
)
ct

=
$
.

Ct
(
)
.

A
(
d

=
$
.

d
(
)
,
st.canvas

)
$
.

eJ
(
'/img'
,
function

(
i

)
{
c

=
d.

Can
(
'o'
,
40
,
40
)
c.

fit
(
i.d

)
c.$

(
function

(
)
{
st.

bm
(
i.d, function

(
bm

)
{
    bm . rC(200, 200) . XY(200, 300) . TR()
}
)
}
)
c.

mar
(
20
)
.

C
(
'r'
)
/
/
d.

A
(
$
.

btX
(
'/img'
,
i,

'-'
)
)
}
)
$
.$

$
(
function

(
)
{
$
.

post
(
'/cutout'
,
{
    dU: st . dU()
}
,
$
.rl

)
}
)
d.

C
(
'b'
)
.

al
(
.6
)
.

W
(
400
)
.

H
(
100
)
d.

overflow
(
'scroll'
)
.

css
(
'overlflow-y'
,
'auto'
)
}
EDIT

=
function

(
)
{
stage

=
cjs.

stage
(
800
)
.

A
(
)
container

=
$
.

containerDiv
(
)
imgHolder

=
$
.

div
(
)
container.

A
(
imgHolder, stage.canvas

)
$
.

getJSON
(
'/img'
,
function

(
i

)
{
imgs

=
i
_.

each
(
i, function

(
img

)
{
console.

log
(
img.d

)
var can

=
$
.

canvas
(
'X'
,
100
,
100
)
.

A
(
)
.

fit
(
img.d

)
/
/
must be in body in order to use FIT!
c

=
can
can.

click
(
function

(
)
{
stage.

bm
(
img.d,
function

(
bm

)
{
    bm . rCenter() . X(400) . Y(400)
;
TR
(
bm
)
}
)
}
)
imgHolder.

A
(
can

)
}
)
}
)
/
/
return stage
container.

dblclick
(
function

(
)
{
$
.

post
(
'/img'
,
{
    d: stage . canvas . toDataURL()
}
,
/
/
,
dats: x.dats
function

(
)
{
    window . location = window . location
}
)
}
)
}
function

shake
(
)
{
rotateShake

=
function

(
bm

)
{
EaselTween
(
[bm,

'l'
]
,
{
    r: 0
}
,
[ {
    r: 1
}

,
1
]
,
[ {
    r: -1
}

,
1
]
)
}
scaleShake

=
function

(
bm

)
{
EaselTween
(
[bm,

'l'
]
,
{
    sxy: 1
}
,
[ {
    sxy: .95
}

,
1
]
,
[ {
    sxy: 1.05
}

,
1
]
)
}
}

eachImage

=
eaI

=
function

(
f

)
{
$
.

getJSON
(
'/img'
,
function

(
i

)
{
    _ . each(i, f)
}
)
}
sav

=
function

(
stage, a

)
{
return function

(
)
{
    stage . sv(a)
}
}
EDITOR

=
function

(
)
{
z
(
)
var r

=
'#0FF'
,
size

=
2
,
oX

=
0
,
oY

=
0
,
shape,
st

=
$
.

dragStage
(
)
,
imgHolder

=
$
.

d
(
'y'
,
'+'
)
$
.

eG
(
'img'
,
function

(
i

)
{
imgHolder
(
$
.

imgSizeFnCan
(
i.d,

1
,
function

(
)
{
st.

bm
(
i.d, function

(
bm

)
{
SL
(
bm
.
sxy
(
.4
)
)
}
,
'+'
)
}
)
)
}
)
TextAdder2
(
st

)
}
EDIT

=
function

(
)
{
stage

=
cjs.

stage
(
800
)
.

A
(
)
container

=
$
.

containerDiv
(
)
imgHolder

=
$
.

div
(
)
container.

A
(
imgHolder, stage.canvas

)
$
.

getJSON
(
'/img'
,
function

(
i

)
{
imgs

=
i
_.

each
(
i, function

(
img

)
{
console.

log
(
img.d

)
var can

=
$
.

canvas
(
'X'
,
100
,
100
)
.

A
(
)
.

fit
(
img.d

)
/
/
must be in body in order to use FIT!
c

=
can
can.

click
(
function

(
)
{
stage.

bm
(
img.d,
function

(
bm

)
{
    bm . rCenter() . X(400) . Y(400)
;
TR
(
bm
)
}
)
}
)
imgHolder.

A
(
can

)
}
)
}
)
mug.js
:

2817
/
/
return stage
container.

dblclick
(
function

(
)
{
$
.

post
(
'/img'
,
{
    d: stage . canvas . toDataURL()
}
,
/
/
,
dats: x.dats
function

(
)
{
    window . location = window . location
}
)
}
)
}
EDIT

=
function

(
)
{
stage

=
cjs.

stage
(
800
)
.

A
(
)
container

=
$
.

containerDiv
(
)
imgHolder

=
$
.

div
(
)
container.

A
(
imgHolder, stage.canvas

)
$
.

getJSON
(
'/img'
,
function

(
i

)
{
imgs

=
i
_.

each
(
i, function

(
img

)
{
console.

log
(
img.d

)
var can

=
$
.

canvas
(
'X'
,
100
,
100
)
.

A
(
)
.

fit
(
img.d

)
/
/
must be in body in order to use FIT!
c

=
can
can.

click
(
function

(
)
{
stage.

bm
(
img.d,
function

(
bm

)
{
    bm . rCenter() . X(400) . Y(400)
;
TR
(
bm
)
}
)
}
)
imgHolder.

A
(
can

)
}
)
}
)
/
/
return stage
container.

dblclick
(
function

(
)
{
$
.

post
(
'/img'
,
{
    d: stage . canvas . toDataURL()
}
,
/
/
,
dats: x.dats
function

(
)
{
    window . location = window . location
}
)
}
)
}
EDITOR

=
function

(
)
{
z
(
)
var r

=
'#0FF'
,
size

=
2
,
oX

=
0
,
oY

=
0
,
shape,
st

=
$
.

dragStage
(
)
,
imgHolder

=
$
.

d
(
'y'
,
'+'
)
$
.

eG
(
'img'
,
function

(
i

)
{
imgHolder
(
$
.

imgSizeFnCan
(
i.d,

1
,
function

(
)
{
st.

bm
(
i.d, function

(
bm

)
{
SL
(
bm
.
sxy
(
.4
)
)
}
,
'+'
)
}
)
)
}
)
TextAdder2
(
st

)
}
function

edit1
(
)
{
EDIT1

=
function

(
)
{
st

=
St
(
800
)
var imgHolder

=
$
.

d
(
)
container

=
CT
(
imgHolder, st

)
container.

o
(
'$$'
,
sav
(
st,

'edit'
)
)
eaI
(
function

(
img

)
{
imgHolder.

A
(
$
.

c
(
'X'
,
100
,
100
)
.

fit
(
img.d

)
.

click
(
function

(
)
{
st.

bm
(
img.d,
function

(
bm

)
{
    bm . rCenter('+')
;
TR
(
bm
)
}
)
}
)
)
}
)
return st

}
EDIT1

=
function

(
)
{
st

=
St
(
800
)
var imgHolder

=
$
.

d
(
)
container

=
CT
(
imgHolder, st

)
container.

o
(
'$$'
,
sav
(
st,

'edit'
)
)
eaI
(
function

(
img

)
{
imgHolder.

A
(
$
.

c
(
'X'
,
100
,
100
)
.

fit
(
img.d

)
.

click
(
function

(
)
{
st.

bm
(
img.d,
function

(
bm

)
{
    bm . rCenter('+')
;
TR
(
bm
)
}
)
}
)
)
}
)
return st

}
EDIT1

=
function

(
)
{
stage

=
St
(
800
)
var imgHolder

=
$
div
(
)
container

=
CT
(
imgHolder, stage

)
container.

o
(
'$$'
,
sav
(
stage,

'edit'
)
)
eaI
(
function

(
img

)
{
imgHolder.

A
(
$
.

canvas
(
'X'
,
100
,
100
)
.

fit
(
img.d

)
.

click
(
function

(
)
{
stage.

bm
(
img.d,
function

(
bm

)
{
    bm . rCenter('+')
;
TR
(
bm
)
}
)
}
)
)
}
)
return stage

}
EDIT1

=
function

(
)
{
container

=
$
.

containerDiv
(
)
imgHolder

=
$
.

div
(
)
stage

=
createjs.

stage
(
800
)
.

tick
(
)
container.

A
(
imgHolder,
stage.canvas

)
$
.

getJSON
(
'/img'
,
function

(
i

)
{
_.

each
(
i,
function

(
img

)
{
var can

=
$
.

canvas
(
'X'
,
100
,
100
)
.

A
(
)
.

fit
(
img.d

)
/
/
must be in body in order to use FIT!
can.

click
(
function

(
)
{
stage.

bm
(
img.d, function

(
bm

)
{
    bm . rCenter() . X(400) . Y(400) TR(bm)
}
)
}
)
imgHolder.

A
(
can

)
}
)
}
)
container.

dblclick
(
function

(
)
{
$
.

post
(
'/img'
,
{
    d: stage . canvas . toDataURL()
}
,
/
/
,
dats: x.dats
function

(
)
{
    window . location = window . location
}
)
}
)
return stage

}
EDIT1

=
function

(
)
{
St
(
)
var imgHolder

=
$
.

d
(
)
ct

=
CT
(
imgHolder, stage

)
ct.$

$
(
sav
(
st,

'edit'
)
)
eaI
(
function

(
img

)
{
imgHolder.

A
(
$
.

c
(
'X'
,
100
,
100
)
.

fit
(
img.d

)
.$

(
function

(
)
{
st.

bm
(
img.d,
function

(
bm

)
{
    bm . rCenter('+')
;
TR
(
bm
)
}
)
}
)
)
}
)
return stage

}
EDIT1

=
function

(
)
{
stage

=
St
(
800
)
var imgHolder

=
$
div
(
)
container

=
CT
(
imgHolder, stage

)
container.

o
(
'$$'
,
sav
(
stage,

'edit'
)
)
eaI
(
function

(
img

)
{
imgHolder.

A
(
$
.

canvas
(
'X'
,
100
,
100
)
.

fit
(
img.d

)
.

click
(
function

(
)
{
stage.

bm
(
img.d,
function

(
bm

)
{
    bm . rCenter('+')
;
TR
(
bm
)
}
)
}
)
)
}
)
return stage

}
EDIT1

=
function

(
)
{
container

=
$
.

containerDiv
(
)
imgHolder

=
$
.

div
(
)
stage

=
createjs.

stage
(
800
)
.

tick
(
)
container.

A
(
imgHolder,
stage.canvas

)
$
.

getJSON
(
'/img'
,
function

(
i

)
{
_.

each
(
i,
function

(
img

)
{
var can

=
$
.

canvas
(
'X'
,
100
,
100
)
.

A
(
)
.

fit
(
img.d

)
/
/
must be in body in order to use FIT!
can.

click
(
function

(
)
{
stage.

bm
(
img.d, function

(
bm

)
{
    bm . rCenter() . X(400) . Y(400) TR(bm)
}
)
}
)
imgHolder.

A
(
can

)
}
)
}
)
container.

dblclick
(
function

(
)
{
$
.

post
(
'/img'
,
{
    d: stage . canvas . toDataURL()
}
,
/
/
,
dats: x.dats
function

(
)
{
    window . location = window . location
}
)
}
)
return stage

}
EDIT1

=
function

(
)
{
container

=
$
.

containerDiv
(
)
imgHolder

=
$
.

div
(
)
stage

=
createjs.

stage
(
800
)
.

tick
(
)
container.

A
(
imgHolder,
stage.canvas

)
$
.

getJSON
(
'/img'
,
function

(
i

)
{
_.

each
(
i,
function

(
img

)
{
var can

=
$
.

canvas
(
'X'
,
100
,
100
)
.

A
(
)
.

fit
(
img.d

)
/
/
must be in body in order to use FIT!
can.

click
(
function

(
)
{
stage.

bm
(
img.d, function

(
bm

)
{
    bm . rCenter() . X(400) . Y(400) TR(bm)
}
)
}
)
imgHolder.

A
(
can

)
}
)
}
)
container.

dblclick
(
function

(
)
{
$
.

post
(
'/img'
,
{
    d: stage . canvas . toDataURL()
}
,
/
/
,
dats: x.dats
function

(
)
{
    window . location = window . location
}
)
}
)
return stage

}
}

/
/
the challenge here is to make the stage draggable

/
/
but still usable, by dragging it by a wrapper div
AVATAR

=
function

(
)
{
st

=
$
.

dragStage
(
)
.

t
(
)
/
/
d

=
qq
(
st.ob.canvas

)
/
/
d2

=
$
.

d
(
)
.

drg
(
)
.

w
(
500
)
.

h
(
500
)
.

c
(
'o'
)
/
/
CT
(
d, st

)
.

o
(
'$$'
,
sav
(
st,

'avatar'
)
)
st.$

$
(
function

(
)
{
    st . snap('avatar')
}
)
d

=
$
.

d
(
'x'
,
'+'
)
$
.

Gj
(
'img'
,
function

(
i

)
{
    _ . e(i, eachI)
}
)
/
/
d2
(
st

)
}
}