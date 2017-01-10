var PantallaInicio = function () { 
	
		};
		
	PantallaInicio.prototype =   {

		init: function(){

	game.stage.backgroundColor = 0xf9f8dc;
	game.scale.pageAlignVertically = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.scaleMode = Phaser.	ScaleManager.SHOW_ALL;

    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
 	game.scale.refresh();
		},
		preload: function () {
			this.load.image('background2','assets/background2.png');
			this.load.image('logo', 'assets/logoPapelitos.png')
			this.load.image('inicioBtn', 'assets/inicioBtn.png')
			this.load.image('modoBtn', 'assets/modoBtn.png')
			
			},
		create: function() {
			game.stage.backgroundColor = 0xcccccc;
			this.background2 = this.add.sprite(0, 0, 'background2');
			this.inicioBtn = this.add.button(150, 480, 'inicioBtn',seleccionModo);
		
			
			
		function seleccionModo(){
				game.state.start('AgregarDosPalabras');

				};
			},
		
		
		
		
		};