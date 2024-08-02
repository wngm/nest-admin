import { InjectRedis } from '@liaoliaots/nestjs-redis'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import Redis from 'ioredis'
import { Repository } from 'typeorm'

import { UserEntity } from '~/modules/user/user.entity'

@Injectable()
export class Web3Service {
  constructor(
    @InjectRedis()
    private readonly redis: Redis,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  async findUserById(id: number): Promise<any | undefined> {
    return ''
  }
}
