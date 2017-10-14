import { loadSprites } from './loaders.js'
import { Compositor } from "./Compositor.js"
import { createGround } from "./entities.js"
import { generateBackground, generateSpriteLayer } from "./layers.js"

const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

Promise.all([
    loadSprites('bird'),
    loadSprites('bg'),
    createGround()
]).then(([s, b, ground]) => {
    let comp = new Compositor()

    comp.layers.push(generateBackground(b))
    comp.layers.push(generateSpriteLayer(ground))

    let deltaTime = 0;
    let lastTime = 0;

    function update(time) {
        deltaTime = time + lastTime
        ground.update()
        comp.draw(ctx)
        requestAnimationFrame(update)

        lastTime = time;
    }

    update();
})