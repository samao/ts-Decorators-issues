/*
 * @Author: iDzeir 
 * @Date: 2018-06-21 11:26:47 
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-06-28 18:34:06
 */
import logger, { decorlog } from './logger'

@decorlog('SA')
export default class SA {
    public user: any;

    constructor(u: any) {
        this.user = u;
        this.log('Hello world');
    }

    static create() {
        const { default: user } = require('./user');
        const sa = new SA(user);
        //console.log(sa)
        //log('create', JSON.stringify(sa.user));
        //setTimeout(() => { sa.user.name = '张山峰'; sa.user.age = 99 }, 10000);
        //setTimeout(() => SA.log('导出：', JSON.stringify(sa.user)), 15000);
        return sa;
    }

    toString() {
        return `[] => name: ${this.user.name}, age: ${this.user.age}`
    }
}