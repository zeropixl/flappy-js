import { loadImage, loadBird, loadBG } from './loaders.js'

const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

Promise.all([
    loadBird(),
    loadBG()
]).then(([ bird, bg ]) => {
    bg.draw(ctx, 'bg', 0, 100)
    bg.draw(ctx, 'fg', 0, 250)
    bird.draw(ctx, 'bird-u', 0, 0)
    bird.draw(ctx, 'bird-d', 0, 30)
    bird.draw(ctx, 'bird-m', 0, 60)
})