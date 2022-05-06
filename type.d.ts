/*
 * @Description: Do not edit
 * @Author: yzf
 * @Date: 2022-04-25 16:15:14
 * @LastEditors: yzf
 * @LastEditTime: 2022-04-25 16:37:25
 * @FilePath: \vue3-init\mock\type.d.ts
 */
import {Context,Next} from 'koa'

type PlainObject = Record<string,any>
type ParamObject = Record<string,any>
type MysqlResult = {
    affectedRows?:number;
    insertId?:string;
}

type PathMeta = {
    name:string;
    method:string;
    path:string;
    isVerify:boolean;
}

type RouteMeta = {
    name:string;
    method:string;
    path:string;
    isVerify:boolean;
}

type MiddleWare=(...arg:any[])=>(ctx:Context,next?:Next)=>Promise<void>;

export {
    PlainObject,
    ParamObject,
    MysqlResult,
    PathMeta,
    RouteMeta,
    MiddleWare
}