/*
 * @Description: Do not edit
 * @Author: yzf
 * @Date: 2022-04-25 16:46:42
 * @LastEditors: yzf
 * @LastEditTime: 2022-04-25 18:00:34
 * @FilePath: \vue3-init\mock\utils\logger.ts
 */
import log4js from 'log4js'

const log=log4js.getLogger("default");
export const errlog= log4js.getLogger("err");
export default log
