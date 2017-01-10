var ModalidadSelector = function(){

	};

	ModalidadSelector.prototype = {

		preload: function(){

		this.load.image('background','assets/background.png');
		this.load.image('oneWordBtn','assets/oneWordBtn.png');
		this.load.image('twoWordBtn','assets/twoWordBtn.png');
		},

		create: function(){
		game.stage.backgroundColor = 0xcccccc;
		this.background2 = this.add.sprite(0, 0, 'background');
		this.oneWordBtn = this.add.button(145, 200, 'oneWordBtn', this.unaPalabraInicio);
		this.twoWordBtn = this.add.button(145, 280, 'twoWordBtn', this.dosPalabrasInicio);
		},

		unaPalabraInicio: function(){
		game.state.start('AgregarPalabras');
		},

		dosPalabrasInicio: function(){
		game.state.start('AgregarDosPalabras');

		}
	};
	//pantalla de inicio
	