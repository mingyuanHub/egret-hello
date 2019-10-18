class Main extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event){
        //--
        // var _myGrid:MyGrid = new MyGrid();
        // this.addChild( _myGrid );

        //--
        // var shp:egret.Shape = new egret.Shape;
        // shp.graphics.beginFill(0x00ff00);
        // shp.graphics.drawRect(0,0,100,100);
        // shp.graphics.endFill();
        // shp.x = 100;
        // shp.y = 100;
        // this.addChild(shp);
        // shp.anchorOffsetX = 50;

        //--
        // var container:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        // container.x = 200;
        // container.y = 200;
        // this.addChild(container);

        // var circle:egret.Shape = new egret.Shape();
        // circle.graphics.beginFill(0xff0000);
        // circle.graphics.drawCircle(1,1,25);
        // circle.graphics.endFill();
        // container.addChild(circle);

        // circle.touchEnabled = true;
        // circle.addEventListener(egret.TouchEvent.TOUCH_TAP,onclick,this);

        // function onclick():void {
        //     var targetPoit:egret.Point = container.globalToLocal(container.x + 20,container.y + 20);
        //     circle.x = targetPoit.x;
        //     circle.y = targetPoit.y;
        // }

        //--
        // var offsetX:number;
        // var offsetY:number;

        // var circle:egret.Shape = new egret.Shape();
        // circle.graphics.beginFill(0xff0000);
        // circle.graphics.drawCircle(25,25,25);
        // circle.graphics.endFill();
        // this.addChild(circle);

        // circle.touchEnabled = true;
        // circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove,this);
        // circle.addEventListener(egret.TouchEvent.TOUCH_END,stopMove,this);
        
        // function startMove(e:egret.TouchEvent):void {
        //     offsetX = e.stageX - circle.x;
        //     offsetY = e.stageY - circle.y;
        //     // circle.scaleX = 2;
        //     // circle.rotation = 45;
        //     // circle.skewX = 10;

        //     this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove,this);
        // }

        // function stopMove(e:egret.TouchEvent):void {
        //     circle.scaleX = 1;
        //     this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);
        // }

        // function onMove(e:egret.TouchEvent):void {
        //     circle.x = e.stageX - offsetX;
        //     circle.y = e.stageY - offsetY;
        // }

        //--
        // var spr:egret.Sprite = new egret.Sprite();
        // spr.graphics.beginFill(0x00ff00);
        // spr.graphics.drawRect(0,0,100,100)
        // spr.graphics.endFill();

        // this.addChild(spr)
        // // this.removeChild(spr)
        // spr.x = 120;

        // var spr2:egret.Sprite = new egret.Sprite()
        // spr2.graphics.beginFill(0xff0000)
        // spr2.graphics.drawRect(0,0,100,100)
        // spr2.graphics.endFill()

        // this.addChild(spr2)
        // spr2.y = 130

        // var spr3:egret.Sprite = new egret.Sprite()
        // spr3.graphics.beginFill(0x0000ff)
        // spr3.graphics.drawRect(0,0,50,50)
        // spr3.graphics.endFill()

        // spr3.x = 10
        // spr3.y = 10

        // this.addChild(spr3)
        // spr.addChild(spr3)
        // spr2.addChild(spr3)

        //------
        // var spr1:egret.Sprite = new egret.Sprite()
        // spr1.graphics.beginFill(0xff0000)
        // spr1.graphics.drawRect(0,0,100,100)
        // spr1.graphics.endFill()
        // this.addChild(spr1)
        // var spr2:egret.Sprite = new egret.Sprite()
        // spr2.graphics.beginFill(0x00ff00)
        // spr2.graphics.drawRect(0,0,80,80)
        // spr2.graphics.endFill()

        // spr2.x = 50
        // spr2.y = 50
        // this.addChild(spr2)

        //------
        // var spr:egret.Sprite = new egret.Sprite()
        // this.addChild(spr)

        // spr.x = 10

        // for(var i:number = 0; i < 4 ; i ++) {
        //     var spr1:egret.Sprite = new egret.Sprite()
        //     spr1.graphics.beginFill(0xffffff * Math.random() )
        //     spr1.graphics.drawRect(0,0,300,150)
        //     spr1.graphics.endFill()
        //     spr1.x = i * 20
        //     spr.addChild(spr1)
        // }

        // var spr3:egret.Sprite = new egret.Sprite()
        // spr3.graphics.beginFill(0xff0000)
        // spr3.graphics.drawRect(0,0,300,150)
        // spr3.graphics.endFill()
        // spr3.x = 10
        // spr3.y = 50
        // spr.addChildAt(spr3,1)
        // spr.removeChildAt(2)

        // spr3.name = "test3"

        // var nunChild:number = spr.numChildren;
        // for(var t:number =0; t < nunChild; t ++) {
        //     spr.removeChildAt(0)
        // }
        // spr.removeChildren()
        // spr.swapChildrenAt(1,3)
        // spr.setChildIndex(spr3, 0)
        // var _spr:egret.DisplayObject = spr.getChildAt(1)
        // _spr.alpha = 0.5

        // var _spr:egret.DisplayObject = spr.getChildByName("test3")
        // _spr.alpha = 0.1

        // let container = new egret.Sprite()
        // container.sortableChildren = true
        // this.addChild(container);

        // let text:egret.Texture = RES.getRes("bird_png")
        // let b1 = new egret.Bitmap();
        // b1.texture = text
        // b1.x = 100
        // this.addChild(b1)

        // let b2 = new egret.Bitmap()
        // b2.texture = text
        // b2.x = 270
        // this.addChild(b2)

        // let b3 = new egret.Bitmap()
        // b3.texture = text
        // b3.x = 440
        // this.addChild(b3)

        // b2.zIndex = 3

        // let shp:egret.Sprite = new egret.Sprite();
        // shp.graphics.lineStyle(10,0x00ff00)
        // shp.graphics.beginFill(0xff0000, 1)
        // shp.graphics.drawRect(0,0,100,200)
        // shp.graphics.endFill()
        // shp.mask = new egret.Rectangle(20,20,100,100);

        // this.addChild(shp)

        // let shp:egret.Sprite = new egret.Sprite();
        // shp.graphics.lineStyle( 2, 0x00ff00 );
        // shp.graphics.moveTo(10,10)
        // shp.graphics.lineTo(400,30)
        // shp.graphics.lineTo(100,220)
        // shp.graphics.lineTo(20,140)
        // shp.graphics.lineTo(50,20)
        // shp.graphics.curveTo(100,100,200,50)

        // shp.graphics.drawArc(200,200,50,50,Math.PI,true);

        // shp.graphics.drawArc(50, 50, 50, 0, Math.PI / 180 * 30, false);

        // shp.graphics.endFill()

        // // shp.graphics.clear();
        // this.addChild(shp)
        
        // //画一个红色的正方形
        // var square:egret.Shape = new egret.Shape();
        // square.graphics.beginFill(0xff0000);
        // square.graphics.drawRect(0,0,100,100);
        // square.graphics.endFill();
        // this.addChild(square);
        // //画一个蓝色的圆形
        // var circle:egret.Shape = new egret.Shape();
        // circle.graphics.beginFill(0x0000ff);
        // circle.graphics.drawCircle(25,25,25);
        // circle.graphics.endFill();
        // this.addChild(circle);
        // square.mask = circle;

        // this.drawText();
        // var shp:egret.Shape = new egret.Shape()
        // shp.graphics.beginFill(0xff0000)
        // shp.graphics.drawRect(0,0,100,100)
        // shp.graphics.endFill()
        // this.addChild(shp)
        // var isHit:boolean = shp.hitTestPoint(500,500)
        // this.infoText.text = "isHit:" + isHit

        // var lable:egret.TextField = new egret.TextField()
        // lable.text = "wwowowowoowwo"
        // this.addChild(lable)

        // var input:egret.TextField = new egret.TextField();
        // // input.type = egret.TextFieldType.INPUT
        // input.width = 200
        // input.height = 50
        // input.x = 100
        // input.y = 120
        // input.size = 80
        // input.textColor = 0x000000
        // input.fontFamily = "Impact";
        // input.strokeColor = 0x0000ff;
        // input.stroke = 2;
        // input.text = "dfssadfs"
        // input.bold = true
        // input.italic = true
        // input.textAlign = egret.HorizontalAlign.RIGHT;
        // this.addChild(input)

        // var button:egret.Shape = new egret.Shape()
        // button.graphics.beginFill(0x00cc00)
        // button.graphics.drawRect(0,0,100,50)
        // button.graphics.endFill()
        // this.addChild(button)

        // button.touchEnabled = true

        // button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e) => {
        //     input.setFocus()
        // }, this)

        // var shape:egret.Shape = new egret.Shape();
        // shape.graphics.beginFill(0xff0000);
        // shape.graphics.drawRect( 0, 0, 400, 400 );
        // shape.graphics.endFill();
        // this.addChild( shape );
        // var label:egret.TextField = new egret.TextField();
        // this.addChild( label );
        // label.width = 400;
        // label.height = 400;
        // label.text = "This is a text!";
        // // label.textAlign = egret.HorizontalAlign.RIGHT;

        // label.verticalAlign = egret.VerticalAlign.BOTTOM;

        // label.verticalAlign = egret.VerticalAlign.MIDDLE;

        // var shape:egret.Shape = new egret.Shape();
        // shape.graphics.beginFill(0xff0000);
        // shape.graphics.drawRect( 0, 0, 400, 400 );
        // shape.graphics.endFill();
        // this.addChild( shape );
        // var label:egret.TextField = new egret.TextField();
        // this.addChild( label );
        // label.width = 400;
        // label.height = 400;
        // label.text = "This is a text!";
        // label.textAlign = egret.HorizontalAlign.CENTER;
        // label.verticalAlign = egret.VerticalAlign.MIDDLE;

        // var tx:egret.TextField = new egret.TextField;
        // tx.width = 400;
        // tx.x = 10;
        // tx.y = 10;
        // tx.textColor = 0;
        // tx.size = 20;
        // tx.fontFamily = "微软雅黑";
        // tx.textAlign = egret.HorizontalAlign.CENTER;
        // tx.textFlow = <Array<egret.ITextElement>>[
        //     {text: "Text in ", style: {"size": 20}}
        //     , {text: "Egret", style: {"textColor": 0x336699, "size": 60, "strokeColor": 0x6699cc, "stroke": 2}}
        //     , {text: " can ", style: {"fontFamily": "Impact"}}
        //     , {text: "be set ", style: {"fontFamily": "Times New Roman"}}
        //     , {text: "to a ", style: {"textColor": 0xff0000}}
        //     , {text: "\n"}
        //     , {text: "variety ", style: {"textColor": 0x00ff00}}
        //     , {text: "of ", style: {"textColor": 0xf000f0}}
        //     , {text: "styles ", style: {"textColor": 0x00ffff}}
        //     , {text: "with", style: {"size": 56}}
        //     , {text: "different ", style: {"size": 16}}
        //     , {text: "colors, ", style: {"size": 26}}
        //     , {text: "\n"}
        //     , {text: "fonts ", style: {"italic": true, "textColor": 0x00ff00}}
        //     , {text: "and ", style: {"size": 26, "textColor": 0xf000f0 ,"fontfamily":"Quaver"}}
        //     , {text: "sizes", style: {"italic": true, "textColor": 0xf06f00}}
        // ];
        // this.addChild( tx );

        // var _container:egret.Sprite = new egret.Sprite();
        // _container.graphics.beginFill(0xff0000);
        // _container.graphics.drawRect( 0, 0, 400, 400 );
        // _container.graphics.endFill();
        // this.addChild( _container );
        // var tx:egret.TextField = new egret.TextField;
        // // 注意_container是事先建立好的一个显示容器，即 egret.DisplayObjectContainer，并且已经添加到显示列表中
        // tx.width = _container.stage.stageWidth - 20;
        // tx.textFlow = (new egret.HtmlTextParser).parser(
        //     '<div> sdfsadfas</div><font size=20>Text in </font>'
        //     + '<font color=0x336699 size=60 strokecolor=0x6699cc stroke=2>Egret</font>'
        //     + '<font fontfamily="Impact"> can </font>' 
        //     + '<font fontfamily="Times New Roman "><u>be set </u></font>' 
        //     + '<font color=0xff0000>to a </font>' 
        //     + '<font> \n </font>'
        //     + '<font color=0x00ff00>variety </font>' 
        //     + '<font color=0xf000f0>of </font>' 
        //     + '<font color=0x00ffff>styles </font>'  
        //     + '<font size=56>with </font>' 
        //     + '<font size=16>different </font>' 
        //     + '<font size=26>colors, </font>' 
        //     + '<font> \n </font>'
        //     + '<font color=0x00ff00><i>fonts </i></font>' 
        //     + '<font size=26 color=0xf000f0 fontfamily="Quaver">and </font>' 
        //     + '<font color=0xf06f00><i>sizes</i></font>'
        // );
        // tx.x = 10;
        // tx.y = 90;
        // _container.addChild( tx );

        // var tx:egret.TextField = new egret.TextField();
        // tx.textFlow = new Array<egret.ITextElement>(
        //     { text:"This is a hyperlink", style: { "href" : "http://www.egret.com/" } }
        //     ,{ text:"\n This is just a text", style: {} }
        // );
        // tx.touchEnabled = true;
        // tx.addEventListener( egret.TextEvent.LINK, function( evt:egret.TextEvent ){
        //     console.log( evt.text );
        // }, this );
        // tx.x = 10;
        // tx.y = 90;
        // this.addChild( tx );

        // var imgLoader:egret.ImageLoader = new egret.ImageLoader;
        // imgLoader.once( egret.Event.COMPLETE, this.imgLoadHandler, this ); 
        // imgLoader.load( "resource/bird.png" );

        // var url = "resource/config/description.json";
        // var  request:egret.HttpRequest = new egret.HttpRequest();
        // var respHandler = function( evt:egret.Event ):void{
        // switch ( evt.type ){
        //     case egret.Event.COMPLETE:
        //         var request:egret.HttpRequest = evt.currentTarget;
        //         console.log( "respHandler:n", request.response );
        //         break;
        //     case egret.IOErrorEvent.IO_ERROR:
        //         console.log( "respHandler io error" );
        //         break;
        // }5
        // }
        // var progressHandler = function( evt:egret.ProgressEvent ):void{
        // console.log( "progress:", evt.bytesLoaded, evt.bytesTotal );
        // }
        // request.once( egret.Event.COMPLETE, respHandler, null);
        // request.once( egret.IOErrorEvent.IO_ERROR, respHandler, null);
        // request.once( egret.ProgressEvent.PROGRESS, progressHandler, null);
        // request.open( url, egret.HttpMethod.GET ); 
        // request.send( );

        var url = "resource/assets/egret_icon.png";
        var  request:egret.HttpRequest = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.ARRAY_BUFFER;
        var respHandler = function( evt:egret.Event ):void {
        switch ( evt.type ){
            case egret.Event.COMPLETE:
                var request:egret.HttpRequest = evt.currentTarget;
                var ab:ArrayBuffer = request.response;
                console.log( "respHandler:n", ab.byteLength );
                break;
            case egret.IOErrorEvent.IO_ERROR:
                console.log( "respHandler io error" );
                break;
        }
        }
        request.once( egret.Event.COMPLETE, respHandler, null);
        request.once( egret.IOErrorEvent.IO_ERROR, respHandler, null);
        request.open( url, egret.HttpMethod.GET );
        request.send( );
    }

    // imgLoadHandler( evt:egret.Event ):void{
    //     let loader:egret.ImageLoader = evt.currentTarget;
    //     let bmd:egret.BitmapData = loader.data;
    //     //创建纹理对象
    //     let texture = new egret.Texture();
    //     texture.bitmapData = bmd;
    //     let bmp:egret.Bitmap = new egret.Bitmap(texture);
    //     this.addChild(bmp);
    // }

    // private infoText:egret.TextField;
    // private drawText()
    // {
    //     this.infoText = new egret.TextField()
    //     this.infoText.y = 200
    //     this.infoText.text = 'isHit'
    //     this.addChild(this.infoText)
    // }
}