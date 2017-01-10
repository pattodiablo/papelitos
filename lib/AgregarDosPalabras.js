var AgregarDosPalabras =  function(){

		this.myInput1 = null;
		
		this.style2 = { font: "65px Arial",fontWeight: "bold" , fill: "#ffffff", align: "center", boundsAlignH: "center", boundsAlignV: "middle" };
	};
//Agregar palabras nuevas
	AgregarDosPalabras.prototype = {

	init: function(){
 	game.stage.backgroundColor = 0xf9f8dc;
	game.scale.pageAlignVertically = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.scaleMode = Phaser.	ScaleManager.SHOW_ALL;

    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
 	game.scale.refresh();
		},
	preload: function () {

			this.load.image('background2','assets/background.png');
			this.load.image('logo', 'assets/logoPapelitos.png')
			this.load.image('textInput', 'assets/textInput.png')
			this.load.image('ingresarBtn', 'assets/ingresarBtn.png')
			this.load.image('jugarBtn', 'assets/jugarBtn.png')
			this.load.image('realoadBtn', 'assets/masBtn.png')
			this.load.image('rdnBtn', 'assets/rdnBtn.png')

			
			},
	create: function() {

			game.stage.backgroundColor = 0xcccccc;
			this.background2 = this.add.sprite(0, 0, 'background2');
			//this.logoIntro = this.add.sprite(0, 0, 'logo');
			
			this.numeroPalabras = game.add.text(50, 30, this.style2);
						

			this.textInput = this.add.sprite(40, 80, 'textInput');
			this.textInput2 = this.add.sprite(40, 180, 'textInput');

			this.ingresarBtn = this.add.button(110, 290, 'ingresarBtn' , this.ingresarPalabras);
			this.rdnBtn = this.add.button(110, 530, 'rdnBtn' , this.iniciarJuego2);
			this.jugarBtn = this.add.button(130, 430, 'jugarBtn' , this.iniciarJuego);
			this.jugarBtn.visible=false;

			this.realoadBtn = this.add.button(180, 120, 'realoadBtn' , this.nuevaPalabra);
			this.ingresarBtn.visible = false;
			this.realoadBtn.visible = false;
			
			
			this.myInput1 = this.createInput(244, 115, "sustantivo Ej: perro");
		    this.myInput1.anchor.set(0.5);
		  	this.myInput1.backgroundColor;
		    this.myInput1.canvasInput.focus();
			
		  	this.myInput2 = this.createInput(244, 220, "adjetivo Ej: mojado");
		    this.myInput2.anchor.set(0.5);
		  	this.myInput2.backgroundColor;
		    //this.myInput2.canvasInput.focus();
		    
			this.ingresarBtn.casillero1 = this.myInput1;
			this.ingresarBtn.casillero2 = this.myInput2;
			this.ingresarBtn.reload = this.realoadBtn;

			this.realoadBtn.casillero1 = this.myInput1
			this.realoadBtn.casillero2 = this.myInput2;
			this.realoadBtn.reload = this.realoadBtn;

			this.realoadBtn.textoBg1 = this.textInput;
			this.realoadBtn.textoBg2 = this.textInput2;
			this.activarBtn1 = false;
			this.activarBtn2 = false;


			this.ingresarBtn.input1=this.myInput1.canvasInput;
			this.ingresarBtn.input2=this.myInput2.canvasInput;
			
		
			},
	nuevaPalabra: function(){
			this.casillero1.visible = true;
			this.casillero2.visible = true;
			this.reload.visible = false;
			},

	update: function(){
	
		if(randomWord1.length>=2){
		this.jugarBtn.visible=true;

	}

		this.numeroPalabras.setText("Palabras ingresadas " + randomWord1.length);

			if(this.myInput1.canvasInput._value== "" || this.myInput1.canvasInput._value=="sustantivo Ej: perro"){
			
			this.activarBtn1=false;
			}else{

			this.ingresarBtn.name1=this.myInput1.canvasInput._value;
			this.activarBtn1=true;		
			}

			if(this.myInput2.canvasInput._value== "" || this.myInput2.canvasInput._value=="adjetivo Ej: mojado"){
			
			this.activarBtn2=false;
			}else{
			this.activarBtn2=true;
			this.ingresarBtn.name2=this.myInput2.canvasInput._value;
			}

			if(this.activarBtn1==true && this.activarBtn2==true){

				this.ingresarBtn.visible = true;
			}else{
				this.ingresarBtn.visible = false;
			}


		
		
	
	},
	inputFocus: function(sprite){
    sprite.canvasInput.focus();

  },


  ingresarPalabras: function(){

	randomWord1.push(this.name1);
	randomWord2.push(this.name2);
	this.input1._value="";
	this.input2._value="";
	this.input1._placeHolder="";
	this.input2._placeHolder="";
	this.input1.focus();
	this.casillero1.visible = false;
	this.casillero2.visible = false;
	this.casillero1.visible = false;
	this.casillero2.visible = false;
	this.reload.visible = true;

  },

  iniciarJuego: function(){
  		tipoJuego=true;
  		this.activarBtn1=false;
  		this.activarBtn2=false;
  		this.myInput1=null;
  		this.myInput2=null;
		game.state.start('Juego');

  },

   iniciarJuego2: function(){
   	tipoJuego=false;
   	this.activarBtn1=false;
  		this.activarBtn2=false;
  		this.myInput1=null;
  		this.myInput2=null;
	game.state.start('Juego');

  },

   createInput: function(x, y, nombre){
    var bmd = this.add.bitmapData(398, 50);    
    var myInput = this.game.add.sprite(x, y, bmd);
   
    
    myInput.canvasInput = new CanvasInput({
      canvas: bmd.canvas,
      fontSize: 30,
      fontFamily: 'Arial',
      fontColor: '#fff',
      fontWeight: 'bold',
      width: 400,
      padding: 8,
      borderWidth: 0,
      borderColor: '#000',
      borderRadius: 0,
      boxShadow: '0px 0px 0px #fff',
      innerShadow: '0px 0px 5px rgba(0, 0, 0, 0)',
      backgroundColor: '#556270',
      placeHolder: nombre
    });
    myInput.inputEnabled = true;
    myInput.input.useHandCursor = true;    
    myInput.events.onInputUp.add(this.inputFocus, this);
    
    return myInput;
  }

	};