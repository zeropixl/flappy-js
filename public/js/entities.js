import { Entity } from "./Entity.js"
import { loadSprites } from './loaders.js'

export function createGround() {
    return new Promise(res => {
        loadSprites('bg').then(b => {
            let ground = new Entity();
            ground.pos.y = 244;
            
            ground.update = () => {
                ground.pos.x = (ground.pos.x - 2) % 14
                ground.pos.x += ground.vel.x
                ground.pos.y += ground.vel.y
            }
            
            ground.draw = (ctx) => {
                b.draw(ctx, 'fg', ground.pos.x, 224)
                b.draw(ctx, 'fg', ground.pos.x + 224, 224)
            }
        
            res(ground)
        })
    })
}
