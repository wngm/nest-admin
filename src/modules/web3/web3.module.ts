import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { MenuModule } from '../system/menu/menu.module'
import { ParamConfigModule } from '../system/param-config/param-config.module'

import { RoleModule } from '../system/role/role.module'

import { Web3Controller } from './web3.controller'
import { Web3Entity } from './web3.entity'
import { Web3Service } from './web3.service'

const providers = [Web3Service]

@Module({
  imports: [
    TypeOrmModule.forFeature([Web3Entity]),
    RoleModule,
    MenuModule,
    ParamConfigModule,
  ],
  controllers: [Web3Controller],
  providers: [...providers],
  exports: [TypeOrmModule, ...providers],
})
export class Web3Module { }
