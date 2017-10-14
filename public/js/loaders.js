import { SpriteSheet } from './Spritesheet.js'

export function loadImage(path) {
    return new Promise(res => {
        let image = new Image()
        image.addEventListener('load', () => {
            res(image)
        })
        image.src = path
    })
}

export function loadJson(path) {
    return fetch(path).then(r => {
        return r.json()
    })
}

export function loadSprites(sprite) {
    return new Promise(res => {
        loadImage('../res/img/spritesheet.png').then(i => {
            loadJson('../res/json/sprites.json').then(json => {
                let sprites = new SpriteSheet(i)
                Object.keys(json[sprite]).forEach(key => sprites.define(json[sprite][key].name, json[sprite][key].x, json[sprite][key].y, json[sprite][key].w, json[sprite][key].h))
                res(sprites);
            })
        })
    })
}