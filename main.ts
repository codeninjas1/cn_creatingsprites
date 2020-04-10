// In this lesson you will learn how to create your
// first pixel sprite. 


/*************************\
 ***ADD YOUR CODE BELOW***
\*************************/
let player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c
    . . . . . . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c
    . . . . . . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c .
    . . . . f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f .
    . . . . f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . .
    . . . . f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . .
    . . . . . f 3 3 3 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . .
    . . . . . . 3 3 3 3 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f .
    . . . . . . . 3 3 3 3 3 c 1 1 1 b b b c c c c c b d b c . . . f b b f .
    . . . . . . . . 3 3 3 3 1 1 1 c b b b f d d d d d c c . . . . . f b b f
    . . . . . . . . . 3 3 3 3 1 1 f b d b b f d d c c . . . . . . . . f f f
    . . . . . . . . . . . 3 3 c c c f b d b b f c . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . .
`,SpriteKind.Player)

/*************************\
 ***ADD YOUR CODE ABOVE***
\*************************/


//CODE MADE FOR NINJAS - DO NOT DELETE
info.setScore(0)
scene.setBackgroundColor(1)
controller.moveSprite(player1)
let cookie = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . e e e e e . . . . . . .
    . . . e e e e f e e . . . . . .
    . . e e f e e e e f e . . . . .
    . . e e e e f e e e e . . . . .
    . . f e e f e e f e e . . . . .
    . . . e e e e e e e . . . . . .
    . . . . f e e e f . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
cookie.setPosition(50, 10)
cookie.setVelocity(0, 50)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    cookie.setPosition(Math.randomRange(20, 120), 10)
    music.powerUp.play()
    info.changeScoreBy(1)
})
forever(function () {
    if (cookie.y > 130) {
        
        cookie.setPosition(Math.randomRange(20, 120), 10)
    }
})
