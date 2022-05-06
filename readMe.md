<!--
 * @Description: Do not edit
 * @Author: yzf
 * @Date: 2022-04-25 17:53:46
 * @LastEditors: yzf
 * @LastEditTime: 2022-04-27 11:15:27
 * @FilePath: \mock\readMe.md
-->
<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">本地Mock接口代码</h3>

## 简介
项目技术栈基于[ES2015+](http://es6.ruanyifeng.com/),[typescript](https://www.tslang.cn/docs/home.html),[koa](https://koa.bootcss.com/)开发环境请求数据使用[faker.js](https://github.com/faker-ruby/faker)模拟实现。。

开发前请详细了解项目的整体架构和相关实现的设计，保持规范以及应有的职业素养。优秀的项目实现需要每一位参与者的共同努力。

`v1.0` based on `Node.js`

## 功能

## 目录

```bash
├──controller
├──middleware
├──mockdb
├──utils

```
## 开发
```bash
# 安装依赖
npm install

# 使用国内镜像
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev

浏览器访问 [http://localhost:3300/user/userInfo](http://localhost:3300/user/userInfo)
```
## 测试

使用库
```
koa koa-body koa-router koa-logger koa2-cors reflect-metadata log4js chalk faker path fs
 ```
