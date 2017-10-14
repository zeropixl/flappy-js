export function generateBackground(b) {
    let buffer = document.createElement('canvas')
    buffer.width = 224
    buffer.height = 336
    b.draw(buffer.getContext('2d'), 'bg', 0, 108)

    return function drawBackground(ctx) {
        ctx.drawImage(buffer, 0, 0)
    }
}

export function generateSpriteLayer(entity) {
    return function drawLayer(ctx) {
        entity.draw(ctx)
    }
}