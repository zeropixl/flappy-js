import { SpriteSheet } from './spritesheet.js'

export function loadImage(path) {
    return new Promise(res => {
        let image = new Image()
        image.addEventListener('load', () => {
            res(image)
        })
        image.src = path
    })
}

export function loadBird(image) {
    return loadImage('./res/img/spritesheet.png').then(i => {
        let bird = new SpriteSheet(i)
        bird.define('bird-u', 312, 230, 34, 24)
        bird.define('bird-m', 312, 256, 34, 24)
        bird.define('bird-d', 312, 282, 34, 24)
        return bird;
    })
}

export function loadBG(image) {
    return loadImage('./res/img/spritesheet.png').then(i => {
        let bg = new SpriteSheet(i)
        bg.define('bg', 0, 0, 276, 228)
        bg.define('fg', 276, 0, 224, 112)
        return bg;
    })
}