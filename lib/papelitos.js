var Paplelitos = function () {

	this.logo = null;
	this.style = { font: "40px Arial", fill: "#ffffff", align: "center", boundsAlignH: "center", boundsAlignV: "middle" };
	this.style2 = { font: "65px Arial",fontWeight: "bold" , fill: "#ffffff", align: "center", boundsAlignH: "center", boundsAlignV: "middle" };
	this.style3 = { font: "26px Arial",fontWeight: "bold" , fill: "#10ba3b", align: "center", boundsAlignH: "center", boundsAlignV: "middle" };
	this.style4 = { font: "35px Arial",fontWeight: "bold" , fill: "#ffffff", align: "center", boundsAlignH: "center", boundsAlignV: "middle" };
	this.text1 = null;
	this.text2 = null;
	this.timerText = null;
	this.tiempoDeJuego = 40;
	this.timerEvent = null;
	this.random1Final = null;
	this.random2Final = null;
	this.equipo1Puntos = 0;
	this.equipo2Puntos = 0;
	this.turno = true;
	this.currentTeam = null;
	this.currentTeam2 = null;
	this.puntaje1= 0;
	this.puntaje2= 0;
	this.pantallaDeJuegoGrupo = null;
	this.timeUpFlag=false;
	this.wrongSndFlag=false;
	this.pausedMusic = false;


	};
	
	Paplelitos.prototype = {

	init: function(){
		
 //game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
	console.log("estoy Papelitos");
 	console.log(randomWord1.length);

    game.stage.backgroundColor = 0xf9f8dc;
	game.scale.pageAlignVertically = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.scaleMode = Phaser.	ScaleManager.SHOW_ALL;

    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
 	game.scale.refresh();

 	this.w=game.width;
 	this.h=game.height;
;

	},

	preload: function () {
		game.load.audio('bgMusic',['assets/bgMusic.mp3', 'assets/bgMusic2.ogg' ]);
		
		game.load.audio('timeUp','assets/timeUp.mp3');
		game.load.audio('finalSound','assets/finalSound.mp3');
		game.load.audio('correctSnd','assets/correct.mp3');
		game.load.audio('wrongSnd','assets/worngSnd.mp3');
	this.load.image('background', 'assets/background.png');
	
	this.load.image('generarBtn','assets/generarBtn.png');
	this.load.image('correctBtn','assets/correctBtn.png');
	this.load.image('failBtn','assets/failBtn.png');
	this.load.image('pauseBtn','assets/pauseBtn.png');
	this.load.image('pauseScreen','assets/pauseScreen.png');
	this.load.image('resumeBtn','assets/resumeBtn.png');
	this.load.image('header','assets/header.png');
	this.load.image('marcadores','assets/marcadores.png');
	this.load.image('marcadores1','assets/marcadores1.png');
	this.load.image('marcadores2','assets/marcadores2.png');
	this.load.image('cajasTexto','assets/cajasTexto.png');
	this.load.image('timerBack','assets/timerBack.png');
	this.load.image('correctoBtn','assets/correctoBtn.png');
	this.load.image('realoadBtn','assets/realoadBtn.png');
	this.load.image('correctoBtnOff','assets/correctoBtnOff.png');
	this.load.image('realoadBtnOff','assets/realoadBtnOff.png');
	this.load.image('goBtn','assets/goBtn.png');
	this.load.image('papelitoBg','assets/papelitoBg.png');
	this.load.image('irInicio','assets/homeBtn.png');
	this.load.image('menu','assets/pauseMenu.png');
	this.load.image('menu2','assets/pauseMenu2.png');
	
	},
	
	create: function () {
	
	music = game.add.audio('bgMusic');

	this.timeUp = game.add.audio('timeUp');
	this.finalSound = game.add.audio('finalSound');
	this.correctSnd = game.add.audio('correctSnd');
	this.wrongSnd = game.add.audio('wrongSnd');
	music.loopFull();
	music.volume = 0.3;
	music.play();
	//this.background = this.add.sprite(0,0,'background');
	emitter = game.add.emitter(game.world.centerX, 10, 100);
	emitter.alpha=0.5;
    emitter.makeParticles('papelitoBg');

    emitter.start(false, 5000, 300);

	
	this.header = this.add.sprite(0,0,'header');
	this.marcadores = this.add.sprite(62,120,'marcadores');
	this.marcadores1 = this.add.sprite(62,120,'marcadores1');
	this.marcadores2 = this.add.sprite(62,120,'marcadores2');
	this.marcadores1.visible=false;
	this.marcadores2.visible=false;
	this.cajasTexto = this.add.sprite(40,265,'cajasTexto');
	this.timerBack = this.add.sprite(40,460,'timerBack');
	
	this.goBtn = this.add.button(40, 460, 'goBtn',this.generarPalabra,this);
	this.correctoBtn = this.add.button(180, 460, 'correctoBtn',this.acertarPalabra,this);
	this.realoadBtn = this.add.button(320, 460, 'realoadBtn',this.fallarPalabra,this);
	this.irInicio = this.add.button(0, 0, 'irInicio',this.irAInicio, this);
	
	this.correctoBtn.visible=false;
	this.realoadBtn.visible=false;

	this.correctoBtnOff = this.add.button(180, 460, 'correctoBtnOff','',this);
	this.realoadBtnOff = this.add.button(320, 460, 'realoadBtnOff','',this);

	
	this.text1 = game.add.text(50, 280,'', this.style);
	this.text2 = game.add.text(50, 360,'' , this.style);
	this.currentTeam = game.add.text(80, 80,'' , this.style3);
	this.currentTeam2 = game.add.text(270, 80,'' , this.style3);
	this.timerText = game.add.text(70,500,'',this.style4);
	this.timerText.visible = false;
	this.puntaje1 = game.add.text(120, 140,'' , this.style2);
	this.puntaje2 = game.add.text(310, 140,'' , this.style2);
	this.puntaje1.setText( 0 , 32, 32);
	this.puntaje2.setText( 0 , 32, 32);

	this.currentTeam.setText("Equipo 1");
	this.currentTeam2.setText("Equipo 2");

	
	//this.pause_label = game.add.text(90, 20, 'Pausar', { font: '24px Arial', fill: '#ffffff' });
    //this.pause_label.inputEnabled = true;
	
	this.pantallaDeJuegoGrupo=game.add.group();
	
	

	this.pantallaDeJuegoGrupo.y=70;

	this.menu=this.add.sprite(this.w/2, this.h/2 , 'menu');
	this.menu.anchor.setTo(0.5, 0.5);
	this.menu.visible = false;

	this.menu2=this.add.sprite(this.w/2, this.h/2 , 'menu2');
	this.menu2.anchor.setTo(0.5, 0.5);
	this.menu2.visible = false;

    /*this.pause_label.events.onInputUp.add(function () {
        // When the paus button is pressed, we pause the game
        game.paused = true;

    })*/

	game.input.onDown.add(this.unpause, this);

	},

	
	irAInicio: function(){ //menu de pausa

		if(!this.pausedMusic){

this.menu.visible=true;
		}else{

			this.menu2.visible=true;
		}
		
		game.paused = true;

        
	},
	unpause: function(event){
	
    if(game.paused){


           		
                var x1 = this.menu.x - this.menu.width/2, x2 = this.menu.x + this.menu.width/2,
                    y1 = this.menu.y - this.menu.height/2, y2 = this.menu.y + this.menu.height/2; //calculo de los puntos del cuadro de pausa
                  
                 
           if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
                // The choicemap is an array that will help us see which item was clicked
          

                // Get menu local coordinates for the click
                var x = event.x - x1,
                    y = event.y - y1;

                // Calculate the choice 
  	if(x>123 && x<301 && y>112 && y < 138){
 			 	console.log("reanudar");
               

               			
               		 this.menu.visible=false;
               		 this.menu2.visible=false;
               		 
           

               		this.menu.visible=false;
               		this.menu2.visible=false;
		       
              		game.paused = false;
             
               	
               }

                if(x>41 && x<385 && y>182 && y < 221){
               		console.log("deshabilitar musica");
	
               		 if(!this.pausedMusic){
												    
					    this.pausedMusic=true;
					    music.pause();

               		 }else{
					 	
					    this.pausedMusic=false;
					     music.play();

               		 }

               		this.menu.visible=false;
					this.menu2.visible=false;
               	    game.paused = false; 
               }

                if(x>89 && x<336 && y>254 && y < 294){
               		console.log("salir del juego");
               		game.paused = false;
               		 music.stop();
               
               		location.reload(false);
               }
              
              
           
             
            }

            else{
                // Remove the menu and the label
            	 this.menu.visible=false;
                // Unpause the game
                game.paused = false;
            }   
        }

	},
	acertarPalabra:function(){
		this.correctSnd.play();
		if(this.turno){ //if true es equipo 1
			this.marcadores1.visible=true;
			this.marcadores2.visible=false;
			this.equipo1Puntos++;
			
			this.generarPalabra();
			}else{
				this.marcadores1.visible=false;
				this.marcadores2.visible=true;
				this.equipo2Puntos++;
				this.generarPalabra();
			}
		},
	fallarPalabra:function(){
		this.wrongSnd.play();
		this.timeUp.stop();
		this.turno = !this.turno;
		game.time.events.paused =true;
		game.time.removeAll();

		this.timerText.visible=false;
		this.goBtn.visible=true;
		this.correctoBtn.visible=false;
		this.correctoBtnOff.visible=true;
		this.realoadBtn.visible=false;
		this.realoadBtnOff.visible=true;

		this.text1.setText("");
		this.text2.setText("");
		},
	generarPalabra: function(){

		
			this.timeUpFlag=true;
			this.wrongSndFlag=true;
			this.timerText.visible=true;
			this.goBtn.visible=false;
			this.correctoBtn.visible=true;
			this.correctoBtnOff.visible=false;
			this.realoadBtn.visible=true;
			this.realoadBtnOff.visible=false;

			if(this.turno){ //if true es equipo 1
			this.marcadores1.visible=true;
			this.marcadores2.visible=false;
			
		
			
			}else{
				this.marcadores1.visible=false;
			this.marcadores2.visible=true;
			
		
			
			}

			if(tipoJuego){

						random1Final1 =  Phaser.ArrayUtils.getRandomItem(randomWord1);
						random1Final2 =  Phaser.ArrayUtils.getRandomItem(randomWord2);
						
			}else{

						random1Final1 =  Phaser.ArrayUtils.getRandomItem(randomWord3);
						random1Final2 =  Phaser.ArrayUtils.getRandomItem(randomWord4);
				
			}
	
			
			this.text1.setText(random1Final1);
			this.text2.setText(random1Final2);
			
			this.timerEvent = game.time.events.add(Phaser.Timer.SECOND * this.tiempoDeJuego, this.fallarPalabra, this);
			game.time.events.paused =false;

		},

	pausarJuego: function(){

		if(!game.paused){
			game.paused = true;
		}else{
			game.paused = false;
		}
		
	},
	update: function () {
		
		gameTimer=Math.round(game.time.events.duration/1000);
		
		if( gameTimer >=0 && gameTimer<11 ){
			if(this.timeUpFlag){
				this.timeUp.play();
				this.timeUp.loop = false;
				this.timeUpFlag=false;
				
							
			}
			if( gameTimer <= 0){
				if(this.wrongSndFlag){

				this.finalSound.play();
				this.wrongSndFlag=false;
				}
				

				}
		
		}

				// game.input.onDown.addOnce(this.updateText, this);
		this.timerText.setText(gameTimer+"s", 32, 32);
		
		if(this.turno){
			
			this.puntaje1.setText( String(this.equipo1Puntos) , 32, 32);
		}else{

			
			this.puntaje2.setText( String(this.equipo2Puntos) , 32, 32);
		}
		
	
		
		}
	};