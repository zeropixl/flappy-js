import { Entity } from "./Entity.js"
import { loadSprites } from './loaders.js'

export function createGround() {
    return new Promise(res => {
        loadSprites('bg').then(bg => {
            let ground = new Entity();
            ground.pos.y = 244;
            
            ground.update = () => {
                ground.pos.x = (ground.pos.x - 2) % 14
                ground.pos.x += ground.vel.x
                ground.pos.y += ground.vel.y
            }
            
            ground.draw = (ctx) => {
                bg.draw(ctx, 'fg', ground.pos.x, 224)
                bg.draw(ctx, 'fg', ground.pos.x + 224, 224)
            }
        
            res(ground)
        })
    })
}

export function createBird() {
    return loadSprites('bird').then(b => {
        let bird = new Entity();

        bird.pos.x = 30
        bird.frame = 0;
        bird.animation = [0, 1, 2, 1];
        bird.rot = 0;
        bird.grav = 0.25;
        bird._jump = 4.6

        bird.jump = () => {
            bird.vel.y = -bird._jump;
        }

        bird.update = () => {
            bird.vel.y += bird.grav
            bird.pos.x += bird.vel.x;
            bird.pos.y += bird.vel.y;
        }

        bird.draw = (ctx) => {
            ctx.save();
            ctx.rotate(bird.rot);
            b.draw(ctx, 'bird-u', bird.pos.x, bird.pos.y);
            ctx.restore();
        }

        return bird;
    })
}
