import logger, { decorlog } from './logger'

let name = '王二小';
let age = 0;

@decorlog('User')
class User {
    constructor(public name: string, public age: number){}
    update() {
        this.age += 1;
        this.log('过年了涨一岁')
    }
}

const user = new User(name, age);

setInterval(() => {user.update()}, 3000);

export default user;