class Owl {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y });

        this.anim = 0;
        //this.animation = new Animator(spritesheet, 53, 40, 60, 80, 8, .15, 35, false, true)

        this.loadAnimations(spritesheet);
    };

    loadAnimations(spritesheet) {
        // idle animation
        this.animationStates = [];        

        this.animationStates[0] = new Animator(spritesheet, 53, 40, 60, 80, 8, .15, 35, false, true)
        this.animationStates[1] = new Animator(spritesheet, 53, 140, 60, 80, 8, .15, 35, false, true)
        this.animationStates[2] = new Animator(spritesheet, 53, 240, 60, 80, 8, .15, 35, false, true)
        this.animationStates[3] = new Animator(spritesheet, 53, 340, 60, 80, 8, .15, 35, false, true)
        this.animationStates[4] = new Animator(spritesheet, 53, 440, 60, 80, 8, .15, 35, false, true)
        this.animationStates[5] = new Animator(spritesheet, 53, 540, 60, 80, 5, .15, 35, false, true)
    };

    update() {
        // update velocity
        // update position
        if (this.game.click) {
            if(this.anim >= 5) {
                this.anim = 0;
            } else {
                this.anim++;
            }

            this.game.click = null;
        }
    };

    draw(ctx) {
        this.animationStates[this.anim].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    };
}