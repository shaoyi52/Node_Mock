/*
 * @Description: Do not edit
 * @Author: yzf
 * @Date: 2022-04-26 14:33:38
 * @LastEditors: yzf
 * @LastEditTime: 2022-04-26 14:35:34
 * @FilePath: \vue3-init\mock\controller\type.d.ts
 */
export interface UserBean{
    id:number
    username:string
    password:string
    name:string
    email:string
    phone:string
    avatar:string
    introduction:string
    roles:string[]
}

export interface RoleBean{
    key:string
    name:string
    description:string
    routes:any
}