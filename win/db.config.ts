import { DataSource, DataSourceOptions } from 'typeorm'

// 基础配置
const baseConfig: DataSourceOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'nest_admin',
}

// 该对象用于 nestjs typeorm 初始化
export const ormConfig: DataSourceOptions = {
  ...baseConfig,
  entities: ['dist/modules/**/*.entity{.js,.ts}'],
}

// 该对象 typeorm cli 迁移时使用
const ormConfigForCli: DataSourceOptions = {
  ...baseConfig,
  entities: ['src/modules/**/*.entity{.js,.ts}'],
  migrations: ['migrations/*{.js,.ts}'], // migration:run时查找的文件夹
  subscribers: ['subscribers/*{.js,.ts}'],
  logger: 'file',
  logging: true,
}

// 实例化dataSource，用以之后cli使用
const dataSource = new DataSource(ormConfigForCli)

// 此处的dataSource需要 export default才可以使用
exports.dbRegToken = 'database'
exports.DatabaseConfig = dataSource
export default dataSource
