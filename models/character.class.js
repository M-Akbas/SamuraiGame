class Character extends MovableObject{ // Character extends classes from MovableObject
    
    y = 165;
    constructor(){
        super().loadImage('hero/sprites/standing/tile000.png')
        this.loadImages([
        'hero/sprites/run/tile000.png',
        'hero/sprites/run/tile001.png',
        'hero/sprites/run/tile002.png',
        'hero/sprites/run/tile003.png',
        'hero/sprites/run/tile004.png',
        'hero/sprites/run/tile005.png',
        'hero/sprites/run/tile006.png',
        'hero/sprites/run/tile007.png'
        ]);
    }

    jump(){

    }
}