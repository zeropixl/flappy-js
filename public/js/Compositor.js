export class Compositor {
    constructor() {
        this.layers = [];
    }

    draw(ctx) {
        this.layers.forEach(f => {
            f(ctx)
        })
    }
}