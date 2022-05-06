/*
 * @Description: Do not edit
 * @Author: yzf
 * @Date: 2022-04-25 16:08:53
 * @LastEditors: yzf
 * @LastEditTime: 2022-04-26 15:35:59
 * @FilePath: \mock\middleware\resultHandler.ts
 */
import log from '../utils/logger'
import { MiddleWare } from '../type' 
export type ResltInfo ={
    code:number;
    msg?:string;
    data?:any;
    err?:any
}

/**
 * 执行结果 handler 用来给每个响应对象包装响应码等 
 */
export const ResultHandler:MiddleWare=()=>async(ctx,next)=>{
    const r:ResltInfo={code:0};
    try{
        const data:any = await next();
        r.code= 0 ;
        r.msg="success"
        r.data= data;
    }catch (err){
        log.error(err);
        log.error('xxx'+err.statusCode);
        r.code=err.statusCode;
        switch(err.statusCode){
            case 102:
                r.msg="用户不存在！";
                break;

            default:
                break;
        }

    }
    ctx.body=r;
}