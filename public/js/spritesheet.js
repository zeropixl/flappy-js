export class SpriteSheet {
    constructor(image) {
        this.image = image;
        this.s = new Map()
    }

    define(name, x, y, width, height) {
        const img = document.createElement('canvas')
        img.width = width;
        img.height = height;
        img.getContext('2d').drawImage(
            this.image,
            x, y,
            width, height,
            0, 0,
            width, height
        )
        this.s.set(name, img)
    }

    draw(ctx, name, x, y) {
        let img = this.s.get(name)
        ctx.drawImage(img, x, y)
    }
}