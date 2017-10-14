import { loadSprites } from './loaders.js'
import { Compositor } from "./Compositor.js"
import { createGround, createBird } from "./entities.js"
import { generateBackground, generateSpriteLayer } from "./layers.js"

const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

Promise.all([
    loadSprites('bird'),
    loadSprites('bg'),
    createGround(),
    createBird()
]).then(([s, b, ground, bird]) => {
    let comp = new Compositor()

    window.addEventListener('keydown', e => {
        if(e.code === 'Space') {
            bird.jump()
        }
    })

    comp.layers.push(generateBackground(b))
    comp.layers.push(generateSpriteLayer(ground))
    comp.layers.push(generateSpriteLayer(bird))

    let deltaTime = 0;
    let lastTime = 0;

    function update(time) {
        deltaTime = time + lastTime
        ground.update()
        bird.update()
        comp.draw(ctx)
        requestAnimationFrame(update)

        lastTime = time;
    }

    update();
})