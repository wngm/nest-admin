# nest-admin

![](https://img.shields.io/github/commit-activity/m/buqiyuan/nest-admin) ![](https://img.shields.io/github/license/buqiyuan/nest-admin) ![](https://img.shields.io/github/repo-size/buqiyuan/nest-admin) ![](https://img.shields.io/github/languages/top/buqiyuan/nest-admin)

**基于 NestJs + TypeScript + TypeORM + Redis + MySql + Vue3 + Ant Design Vue 编写的一款简单高效的前后端分离的权限管理系统。希望这个项目在全栈的路上能够帮助到你。**

* 前端项目地址：[传送门](https://github.com/buqiyuan/vue3-antdv-admin)

## 演示地址

<ul>
  <li>

    <details>
      <summary>
        <a href="https://vue3-antdv-admin.pages.dev/" target="_blank">
        https://vue3-antdv-admin.pages.dev/
        </a>（墙内）
      </summary>
      只读，可以完整地预览项目的初始效果
    </details>

  </li>
  <li>

    <details>
      <summary>
        <a href="https://vue3-antd-admin.vercel.app/" target="_blank">
        https://vue3-antd-admin.vercel.app/
        </a>（墙外）
      </summary>
      <ul>
        <li>
        可随意 CRUD，所以你看到的数据可能已经被其他人修改过，而非项目得初始效果，并且数据库的数据会在每天凌晨 4.30 分重置一次。
        </li>
        <li>由于是白嫖的国外服务器资源，所以不保熟， 并可能还需要翻墙浏览。</li>
      </ul>
    </details>

  </li>
  <li>
   <a href="https://nest-api.buqiyuan.site/api-docs/" target="_blank">

      Swagger 文档

   </a>
  </li>
</ul>

## 项目启动前的准备工作

* sql 文件：[/deploy/sql/nest_admin.sql](https://github.com/buqiyuan/nest-admin/tree/main/deploy/sql/nest_admin.sql) 用于数据库初始化
* 项目相关配置，如：配置 mysql 和 redis 连接
  + 公共配置: [.env](https://github.com/buqiyuan/nest-admin/blob/main/.env)
  + 开发环境: [.env.development](https://github.com/buqiyuan/nest-admin/blob/main/.env.development)
  + 生产环境: [.env.production](https://github.com/buqiyuan/nest-admin/blob/main/.env.production)

## 环境要求

* `nodejs` `16.20.2`+
* `docker` `20.x`+ ，其中 `docker compose`版本需要 `2.17.0`+
* `mysql` `8.x`+
* 使用 [`pnpm`](https://pnpm.io/zh/) 包管理器安装项目依赖

演示环境账号密码：

|   账号    |  密码  |    权限    |
| :-------: | :----: | :--------: |
| admin | a123456 | 超级管理员 |

> 所有新建的用户初始密码都为 a123456

本地部署账号密码：

|   账号    |  密码  |    权限    |
| :-------: | :----: | :--------: |
| admin | a123456 | 超级管理员 |

## 快速体验

启动成功后，通过 <http://localhost:7001/api-docs/> 访问。

```bash
pnpm docker:up
# or
docker compose --env-file .env --env-file .env.production up -d --no-build
```

停止并删除所有容器

```bash
pnpm docker:down
# or
docker compose --env-file .env --env-file .env.production down
```

删除镜像

```bash
pnpm docker:rmi
# or
docker rmi buqiyuan/nest-admin-server:stable
```

查看实时日志输出

```bash
pnpm docker:logs
# or
docker compose --env-file .env --env-file .env.production logs -f

```

## 本地开发

* 获取项目代码

```bash
git clone https://github.com/buqiyuan/nest-admin
```

* 【可选】如果你是新手，还不太会搭建`mysql/redis`，你可以使用 `Docker` 启动指定服务供本地开发时使用, 例如：

```bash
# 启动MySql服务
docker compose --env-file .env --env-file .env.development run -d --service-ports mysql
# 启动Redis服务
docker compose --env-file .env --env-file .env.development run -d --service-ports redis
```

* 安装依赖

```bash
cd nest-admin

pnpm install

```

* 运行
  启动成功后，通过 <http://localhost:7001/api-docs/> 访问。

```bash
pnpm dev
```

* 打包

```bash
pnpm build
```

## 数据库迁移

1. 更新数据库(或初始化数据)

```bash
pnpm migration:run
```

2. 生成迁移

```bash
pnpm migration:generate
```

3. 回滚到最后一次更新

```bash
pnpm migration:revert
```

更多细节，请移步至[官方文档](https://typeorm.io/migrations)

> [! TIP]
> 如果你的 `实体类` 或 `数据库配置` 有更新，请执行 `npm run build` 后再进行数据库迁移相关操作。

## 系统截图

![](https://s1.ax1x.com/2021/12/11/oTi1nf.png)

![](https://s1.ax1x.com/2021/12/11/oTithj.png)

![](https://s1.ax1x.com/2021/12/11/oTirHU.png)

![](https://s1.ax1x.com/2021/12/11/oTia3n.png)

### 欢迎 Star && PR

**如果项目有帮助到你可以点个 Star 支持下。有更好的实现欢迎 PR。**

### 致谢

* [sf-nest-admin](https://github.com/hackycy/sf-nest-admin)

### LICENSE

[MIT](LICENSE)
0abe36ee989305ee889637c4389a62c7

game
https://www.247freepoker.com/

0988c6a8c0a5d71391df81f009ef6755
https://aso.halolive.online/api/Account/GetUserPremiumMessage?session=73ad1a91fa2c027db1f0556981df8089

{"data":[{"premiumMessageId":534122, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/my_pic171758530827420240606115731.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":537242, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/Screenshot_20240528_23341520240607063721.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":556788, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/f5a1898ca74ce5d3599a65a030d5092e20240612041547.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":556793, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/ae0dd9d778a8c0b45768a2488456f42720240612041744.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":576353, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/IMG_20240614_223639_30120240616223943.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":576356, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/IMG_20240614_223653_29320240616224025.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":589025, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/my_pic171758295070620240619205608.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":599202, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/e1e44c06dc9dd69664364a03edc4199a20240622041419.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":599218, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/a49027680b36217db7b1266dafe119b420240622041956.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":680574, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/3900949f57989582e92905d7698b7f2520240707074619.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":690656, "msgType":2, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/172046389120240709023856.mp4", "videoThumbUrl":"https://ilivegirl.s3.amazonaws.com/main/ad04cd57b14256de4300d0e83621d79720240709023857.jpg", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":726345, "msgType":2, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/172097698520240715011102.mp4", "videoThumbUrl":"https://ilivegirl.s3.amazonaws.com/main/fe5661f1f8db2046953257fdb34854a520240715011103.jpg", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":732821, "msgType":2, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/172107794020240716051318.mp4", "videoThumbUrl":"https://ilivegirl.s3.amazonaws.com/main/8cb96435f88baa2edc974c4e71be63cb20240716051319.jpg", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":733047, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/cf83b9afb0aae0b81d2440f192069ce020240303032025.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":816733, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/02ed7bec475188b209eca98f2fb4c30920240803095053.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":818325, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/51e88a1c7f84a432c75a83421ffbb1bc20240803225646.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":820225, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/ac8a7779c86b5b05911dd2c0528e326a20240804142118.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":827280, "msgType":2, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/172296870420240806182600.mp4", "videoThumbUrl":"https://ilivegirl.s3.amazonaws.com/main/f2c1efb47cb4577f001691c4969ff5d620240806182601.jpg", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":837429, "msgType":2, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/172322191720240810004604.mp4", "videoThumbUrl":"https://ilivegirl.s3.amazonaws.com/main/a7819750e87727c9d984bd5b12bfaa6020240810004605.jpg", "currentDiamond":0, "isRepeatUnlock":false}, {"premiumMessageId":866373, "msgType":1, "resUrl":"https://ilivegirl.s3.amazonaws.com/main/65495139a24e15a80adf42ed99fc367820240818022014.jpg", "videoThumbUrl":"", "currentDiamond":0, "isRepeatUnlock":false}], "retCode":0, "message":"Success", "responseId":"941a4d4be4a449a19034429eada7fceb", "responseTime":242989081}
