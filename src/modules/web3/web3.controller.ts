import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { ApiSecurityAuth } from '~/common/decorators/swagger.decorator'
import { MenuService } from '~/modules/system/menu/menu.service'

import { definePermission } from '../auth/decorators/permission.decorator'

export const permissions = definePermission('system:user', {
  LIST: 'list',
  CREATE: 'create',
  READ: 'read',
  UPDATE: 'update',
  DELETE: 'delete',

  PASSWORD_UPDATE: 'password:update',
  PASSWORD_RESET: 'pass:reset',
} as const)

@ApiTags('Web3 - 用户模块')
@ApiSecurityAuth()
@Controller('users')
export class Web3Controller {
  constructor(
    private menuService: MenuService,
  ) { }

  // @Get()
  // @ApiOperation({ summary: '获取用户列表' })
  // @ApiResult({ type: [UserEntity], isPage: true })
  // @Perm(permissions.LIST)
  // async list(@Query() dto: UserQueryDto) {
  //   return this.userService.list(dto)
  // }
}
