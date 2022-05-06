/*
 * @Description: Do not edit
 * @Author: yzf
 * @Date: 2022-04-25 17:20:44
 * @LastEditors: yzf
 * @LastEditTime: 2022-04-26 18:32:29
 * @FilePath: \mock\router.ts
 */
import 'reflect-metadata'
import fs from 'fs'
import path from 'path'
import {BASE_PATH_MAP,ROUTER_MAP} from './constant'
import {RouteMeta,PathMeta} from './type'
import Router from 'koa-router'
import log4js from "log4js";
import chalk from "chalk";

const log4 = log4js.getLogger();
log4.level = "debug";
const addRouter = (router:Router)=>{
    const ctrPath=path.join(__dirname,'controller');
    const modules:ObjectConstructor[]=[];
    log4.debug(chalk.green('ctrPath:')+ctrPath)
    // 扫描controller 文件夹，收集所有controller
    fs.readdirSync(ctrPath).forEach(name=>{
        log4.debug(chalk.green('filename:')+name)

        if(/^[^.]+\.(t|j)s$/.test(name)){
            modules.push(require(path.join(ctrPath,name)).default)
        }
    })


    // 结合meta数据添加路由和验证
    modules.forEach(m=>{
        const routerMap:RouteMeta[] = Reflect.getMetadata(ROUTER_MAP,m,'method')||[];
        const basePathMap:PathMeta[] =Reflect.getMetadata(BASE_PATH_MAP,m)||[]
        const basePath:PathMeta=basePathMap.pop();
        if(routerMap.length){
            const ctr=new m();
            routerMap.forEach(route=>{
                //const {name,method,path,isVerify} = route
                const {name,method,path} = route;
                const newPath:String=basePath?(basePath.path+path):path;
                 // router[method](newPath, jwt(newPath, isVerify), ctr[name]);
                 //log4.debug(chalk.green('method:newPath')+method+'--'+newPath+'ctr[name]:'+ctr[name])

                 router[method](newPath,ctr[name]);

            })
        }

    })
}
export default addRouter