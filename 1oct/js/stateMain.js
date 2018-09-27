var anim;
var back;
var ground;
var secondGround;
var StateMain = {
    preload: function () {
        game.load.image('bg', 'images/background2.png');
        game.load.image("secondGround", "images/TopGround.png");
        game.load.image("ground", "images/Ground1.png");
        game.load.spritesheet("hero", "images/Player.png", 16, 16, 3);
        game.load.spritesheet("poli","images/poli.png", 16,16,2);
        //game.load.image("bar", "images/powerbar.png");
        game.load.image("block", "images/blockerMad.png");

        //game.load.atlasJSONHash("hero, 'images/Player.png', 'images/player.json');
    },
    create: function () {
        back= game.add.tileSprite(0, 0, 640, 432, 'bg');
        //back = game.add.image(0, 0, 'bg');
        back.scale.set(1);
        back.smoothed = false;
        //this.power = 0;
        //turn the background sky blue
        //game.stage.backgroundColor = "#00ffff";
        //add the ground
        
            this.ground = game.add.tileSprite(0, 460, 640, 16, "ground");
            ground=this.ground;
            //secondGround = game.add.sprite(0, 460 - 32, "secondGround");
            secondGround = game.add.tileSprite(0, 460 - 32,640,32, "secondGround");
            
        //add the hero in 
        
        this.hero = game.add.sprite(32, 100, 'hero', 3);
        //add the power bar just above the head of the hero
        //this.powerBar = game.add.sprite(this.hero.x + 25, this.hero.y - 25, "bar");
        //this.powerBar.width = 0;
        //set listeners
        // game.input.onUp.add(this.mouseUp, this);
        // game.input.onDown.add(this.mouseDown, this);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.enable(this.hero, Phaser.Physics.ARCADE);
        game.physics.enable(this.ground, Phaser.Physics.ARCADE);
        this.hero.body.collideWorldBounds = true;
        
       




        //hero = game.add.sprite(200, 360, 'hero', 3);
        this.hero.scale.set(2);
        
        this.hero.y=50;
        this.hero.smoothed = false;
        anim = this.hero.animations.add('walk');

        //anim.onStart.add(animationStarted, this);
        //anim.onLoop.add(animationLooped, this);
        // anim.onComplete.add(animationStopped, this);

        anim.play(10, true);

        game.physics.enable(this.ground, Phaser.Physics.ARCADE);
        this.ground.body.immovable = true;
        this.ground.body.collideWorldBounds = true;
        this.hero.body.gravity.y = 500;
        //this.startY = this.hero.y;
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    },
    poliCreator: function(){
        this.poli = game.add.sprite(900, 432, 'poli', 2);
        this.poli.scale.set(2);
        anim2 = this.poli.animations.add('walk');
        anim2.play(10, true);
        game.physics.enable(this.poli, Phaser.Physics.ARCADE);
    },
    doJump: function () {
        this.hero.body.velocity.y = -502;
    },
    /*mouseDown: function() {
        this.timer = game.time.events.loop(Phaser.Timer.SECOND / 1000, this.increasePower, this);
    },
    mouseUp: function() {
        game.time.events.remove(this.timer);
        this.power = 0;
        this.powerBar.width = 0;
    },
    increasePower: function() {
        this.power++;
        this.powerBar.width = this.power;
        if (this.power > 50) {
            this.power = 50;
        }
    },*/
    update: function () {
        debugger;
        game.physics.arcade.collide(this.hero, this.ground);
        randNum=Math.floor((Math.random() * 200) + 1);
        if (randNum==7){
        this.poliCreator();
        this.poli.body.velocity.x=-120;
        };
        if (this.spaceKey.isDown) {
            if (this.hero.y == this.ground.y - 32) {

                this.hero.body.velocity.y = -200;
            }
        }
        if (this.left.isDown) {
             

                this.hero.body.velocity.x = -150;
            }
            
        
        else if (this.right.isDown) {
            

               this.hero.body.velocity.x = 100;
           
       }else{
        this.hero.body.velocity.x = 0;  
       }
        if (anim.isPlaying) {
            back.tilePosition.x -= 2;
            secondGround.tilePosition.x -= 2;
            
    if (back.x < -back.width)
    {
       // back.x = game.world.width-700;
      
    }
    if (secondGround.x < -back.width)
    {
     //  secondGround.x =game.world.width-700;
    }
    
        }
        

    },
    //animationStarted: function(sprite, animation) {

    //  game.add.text(32, 32, 'Animation started', { fill: 'white' });

    //}
}