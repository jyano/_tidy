 

 
TIMELINE=function(){s=cjs.S()
    q = cjs.lq(['me','guy'], function(res){

        me  = s.bm( res('me') ).XY(300)
        guy = s.bm( res('guy') ).XY(200)

        cjs.tl([
                    me.tween( [{sx: 2}, 10000 ]),
                    me.tween([{sy:2},10000]),
                    guy.tween( [{r: 20},10000], [{r: 0},10000])
        ])})}
MC=function(){

    cjs.S()

        .mc(  null,  0,  true,   {start:0, middle:40})

        .tl(

        cjs.circ(50,'r').Y(200).tween({x: 100},[{x:600},40], [{x: 100}, 40]),
        cjs.circ(50,'b').Y(200).tween({x: 600},[{x: 100}, 40],[{x: 600}, 40])

    ).p("middle")






}
REDROBOT=function(){z()
    //this is a fancy mc
    s = cjs.stg(1000).A()
    g = cjs.gunner().a2(s).drag().XY(400,200)


}
RUNNINGMAN=function() {s=stage=cjs.S()


    $.img("/MonsterAIdle.png", function(i){imgMonsterAIdle =i[0]})
    $.img("/MonsterARun.png", function(i){imgMonsterARun = i[0]})

    $.button('start', startGame  ).A()

    $.button('reset', function(){
        s.removeAllChildren()
       cjs.Ticker.removeAllListeners()
       // stage.update()
    }).A()



    function startGame(){


        screen_width = s.W()
        screen_height = s.H()

//Idle sequence of the monster

        spriteIdle = new cjs.Sprite(   new cjs.SpriteSheet({

            images: [ imgMonsterAIdle ],

            frames: {  width: 64, height: 64,  regX: 32, regY: 32   },

            animations: { idle: [0, 10, "idle", 4]  }

        }))

        spriteIdle.name = "monsteridle1"
        spriteIdle.XY( 16,   32)



        // create sprite.. and set the registration point (the point it will be positioned and rotated around) to the center of the frame dimensions:
        sprite = new cjs.Sprite(
            new cjs.SpriteSheet({

                images: [ imgMonsterARun ],

                frames: {width: 64, height: 64, regX: 32, regY: 32 },

                animations: {  walk: [0, 9, "walk", 4] }// To slow down the animation loop of the sprite, we set the frequency to 4 to slow down by a 4x factor

            }).addFlipped(true,false,false))



        //sprite.regX = sprite.spriteSheet.frameWidth/2 || 0
        //sprite.regY = sprite.spriteSheet.frameHeight/2 || 0

        // start playing the first sequence: walk_h has been generated by addFlippedFrames and  contained the right facing animations

        sprite.p("walk_h") 	//walking from left to right

        //sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)

        sprite.name = "monster1"
        sprite.direction = 90
        sprite.XY(16, 32).vXY(1,0).a2(s)
        sprite.currentFrame = 10

        // we want to do some work before we update the canvas,  // otherwise we could use Ticker.addListener(stage);
        cjs.Ticker.setFPS(40)

    }


  // cjs.tick(onTick)

   onTick= function(){

        if (sprite.x >= screen_width - 16) {  sprite.direction = -90;  sprite.gotoAndPlay("walk")  } // Hit testing the screen width, otherwise our sprite would disappear // We've reached the right side of our screen   // We need to walk left now to go back to our initial position
        if (sprite.x < 16) {   // We've reached the left side of our screen // We need to walk right now


            sprite.direction = 90

            sprite.gotoAndStop("walk")

            s.removeChild( sprite )

            spriteIdle.gotoAndPlay( "idle" )

            stage.addChild( spriteIdle )}


        // Moving the sprite based on the direction & the speed
        if (sprite.direction == 90){  sprite.x += sprite.vX;  sprite.y += sprite.vY}

        else {   sprite.x -= sprite.vX;   sprite.y -= sprite.vY}

    }

}
TOOLKITBRITNEY=function(){

//ok an export using toolkit!
    z()

    var  stage, exportRoot, lib, images

    flashFunction=function(lib, img, cjs){  var p; // shortcut to reference prototypes

// library properties:
        lib.properties={

            width: 550,
            height: 400,
            fps: 24,
            color: "#FFFFFF",
            manifest: [{src:"/britney.jpeg", id:"britney"}, {src:"/gaga.jpeg", id:"gaga"}]};


// symbols:

        lib.britney = function(){ this.initialize(img.britney) }

        lib.britney.prototype = p = new cjs.Bitmap()

        p.nominalBounds = new cjs.Rectangle(0,0,259,194)


        lib.gaga = function(){ this.initialize(img.gaga) }
        lib.gaga.prototype = p = new cjs.Bitmap()


        p.nominalBounds = new cjs.Rectangle(0,0,242,208);


        lib.gaga_1=function(){

            this.initialize()
            // Layer 1
            this.instance = new lib.gaga()
            this.addChild(this.instance)

        }



        lib.gaga_1.prototype = p = new cjs.Container()
        p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208)




        lib.brit = function(){
            this.initialize()
            // Layer 1
            this.instance = new lib.britney()
            this.A(   this.instance   )}




        lib.brit.prototype = p = new cjs.Container()
        p.nominalBounds=new cjs.Rectangle(0,0,259,194);


        lib.Tween2=function() {

            this.initialize()

            // Layer 1
            this.instance = new lib.brit()
            this.instance.setTransform(134, -109.5, 1, 1, 0, 0, 0,129.5,97);

            this.instance_1 = new lib.gaga_1()
            this.instance_1.setTransform(-148.9,33,1.537,0.24,60,0,0,121,104.1);

            this.A(
                this.instance_1,
                this.instance
            )}

        lib.Tween2.prototype = p = new cjs.Container()
        p.nominalBounds = new cjs.Rectangle(-263.5,-206.5,527,413);

        lib.Tween1 = function() {
            this.initialize();

            // Layer 1
            this.instance = new lib.brit().transform(-57.6,52.6,1,1,0,0,0,129.5,97);


            this.instance_1 = new lib.gaga_1();
            this.instance_1.setTransform(72.5,0.1,1.537,0.24,60,0,0,121,104.1);

            this.addChild(this.instance_1,this.instance)}



        lib.Tween1.prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(-187.1,-173.5,374.2,347.1)




// stage content:
        lib.Untitled3 = function(mode, startPosition, loop){

            this.initialize(mode,startPosition,loop,{})

            // Layer 1
            this.instance = new lib.gaga_1()

            this.instance.setTransform( 275,200.5,1,1, 0,0,0,121,104 )

            this.instance_1 = new lib.Tween1("synched",0)
            this.instance_1.setTransform(202.6, 200.5)
            this.instance_1._off = true

            this.instance_2 = new lib.Tween2("synched", 0)
            this.instance_2.setTransform(301.9,206.5)

            this.timeline.addTween(
                cjs.Tween.get({})
                    .to({state:[{t: this.instance}]})
                    .to({state:[{t: this.instance_1}]},19)
                    .to({state:[{t: this.instance_2}]},10)
                    .wait(1))

            this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,regY:0,x:202.6,mode:"synched",startPosition:0},19).wait(11));
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:301.9,y:206.5},10).wait(1))}

        lib.Untitled3.prototype = p = new cjs.MovieClip()


        p.nominalBounds = new cjs.Rectangle(429,296.5,242,208)

    }



    flashFunction(lib = lib||{}, images=images||{}, createjs = createjs||{}  )




    $.canvas('y', 550,400).id('canvas').A()

    canvas = document.getElementById("canvas")

    images=images||{}

    loader=new createjs.LoadQueue(false)

    loader.addEventListener("fileload",

        handleFileLoad=function(evt){
            if(evt.item.type == "image") { images[evt.item.id] = evt.result}
        })

    loader.addEventListener("complete", function() {
        exportRoot = new lib.Untitled3();
        stage = new createjs.Stage(canvas)
        stage.addChild(exportRoot)
        stage.update()
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage)})

    loader.loadManifest(lib.properties.manifest)}
FLASHSCROLLER=function(){z()
// ****  THIS WORKS!!!
    var p

    images =  {}


    lib={properties : {  width: 550, height: 400,  fps: 24,  color: "#FFFFFF",  manifest: [] }};

    (lib.StartMarker = function() {
        this.initialize();


        this.shape = new cjs.Shape();
        this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
        this.shape.setTransform(0,0,1.515,1.515);

        this.addChild(this.shape);
    }).prototype =  new cjs.Container().bounds(-25,-25,50,50);


    (lib.Player = function(){
        this.initialize()

        // Layer 1
        this.shape = new cjs.Shape()
        this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");

        this.shape.setTransform(0, -20)

        this.addChild( this.shape )


    }).prototype = p = new cjs.Container();

    p.nominalBounds = new cjs.Rectangle(-11,-40,22,40);


    (lib.Boundries = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape()
        this.shape.graphics.f().s("#0066CC").ss(38,1,1).p("AhPBfICfi9")
        this.shape.setTransform(846,100.5)

        this.shape_1 = new cjs.Shape()
        this.shape_1.graphics.f().s("#0066CC").ss(38,1,1).p("AjCB9ICgifIDlha")
        this.shape_1.setTransform(777.5,163.5);

        this.shape_2 = new cjs.Shape()
        this.shape_2.graphics.f().s("#0066CC").ss(38,1,1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
        this.shape_2.setTransform(627,261.5);

        this.shape_3 = new cjs.Shape()
        this.shape_3.graphics.f().s("#0066CC").ss(38,1,1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
        this.shape_3.setTransform(-157.5,229.5);

        this.shape_4 = new cjs.Shape()
        this.shape_4.graphics.f().s("#0066CC").ss(38,1,1).p("AEYjHIszhGIQ3IbImulx")
        this.shape_4.setTransform(-17,253);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#0066CC").ss(38,1,1).p("AhXgTQBigNBNA2");
        this.shape_5.setTransform(452.8,235.1);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#0066CC").ss(38,1,1).p("Ag1AAIBsAA");
        this.shape_6.setTransform(123.5,342);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f().s("#0066CC").ss(38,1,1).p("AALkRQGogLDzFiIAAB9I1LBQ");
        this.shape_7.setTransform(356.8,309.5);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#0066CC").ss(38,1,1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
        this.shape_8.setTransform(222.5,239.5)

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
        this.shape_9.setTransform(101,227);



        this.addChild(
            this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,
            this.shape_3,this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container().bounds(-214,72,1087,289);




    lib.scroller2 = function(){// stage content:
        this.initialize()

        this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);

        this._boundaries = new lib.Boundries().transform(40,31,1,1,0,0,0,40,31);

        this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);

        this.addChild(this._startMarker,this._boundaries,this._player)}

    lib.scroller2.prototype = new cjs.Container().bounds(61,272,1087,289)




$('body').A(
    $.button('start', function(){boundaries.tween([{x: -500}, 10000])}),
    $('<br>'))


    exportRoot = new lib.scroller2()

    s=stage = cjs.stage(550,400).A().A( exportRoot )
    cjs.Ticker.setFPS( lib.properties.fps )
    startMarker = exportRoot._startMarker.X(275).hide()
    player = exportRoot._player.rXY(0).X(275)
    boundaries =  exportRoot._boundaries.XY(500,0)

    _vx=0
    _vy=0

    $.key({
        l: function(){_vx = -7},
        L: function(){_vx = 0},
        r: function(){_vx = 7},
        R: function(){_vx = 0},
        u: function(){_vy = -20}})

    $('canvas').click(function(){_vy=-20})


    processCollisions=function(){if(_vy<=0){return}

            if(player.belowStg()){ $l('fell off')

                cjs.Tween.removeAllTweens()
                boundaries.XY(500, 0)
                _vy=0
                player.XY(startMarker)}

            else {

                if(collision=boundaries.test(player) ){

                    while(collision){
                        _vy=0
                        player.y-=.1
                        collision = boundaries.test(player)
                    }

                    _vy=0}
            }



    }


    scrollStage=function(){

        boundaries.x += (s.W()*.5)- player.x

        player.X( s.W()*.5 )

    }



    cjs.tick( function(){

        _vy +=2

        player.x += _vx;
        player.y += _vy;

        processCollisions()

        scrollStage()

    })





}







