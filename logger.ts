/*
 * @Author: iDzeir 
 * @Date: 2018-06-28 18:30:16 
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-06-28 18:45:10
 */
const logger = {
	log: (...arg: any[]) => {
		console.log('[log]', ...arg)
	}
}

export function decorlog(tag: string) {
	return function (target: any) {
		target.prototype.log = (...arg: any[]) => {
			logger.log(`[${tag}]`, ...arg)
		}
	}
}

export default logger;