import { Exclude } from 'class-transformer'
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Relation,
} from 'typeorm'

import { CommonEntity } from '~/common/entity/common.entity'

import { AccessTokenEntity } from '~/modules/auth/entities/access-token.entity'

import { DeptEntity } from '~/modules/system/dept/dept.entity'
import { RoleEntity } from '~/modules/system/role/role.entity'

@Entity({ name: 'sys_user' })
export class Web3Entity extends CommonEntity {
  @Column({ unique: true })
  username: string

  @Exclude()
  @Column()
  password: string

  @Column({ length: 32 })
  psalt: string

  @Column({ nullable: true })
  nickname: string

  @Column({ name: 'avatar', nullable: true })
  avatar: string

  @Column({ nullable: true })
  qq: string

  @Column({ nullable: true })
  email: string

  @Column({ nullable: true })
  phone: string

  @Column({ nullable: true })
  remark: string

  @Column({ type: 'tinyint', nullable: true, default: 1 })
  status: number

  @Column({ type: 'bigint', default: 0 })
  conis: number

  @Column({ type: 'float', default: 0 })
  usdt: number

  @Column({ type: 'float', default: 0 })
  btc: number

  @Column({ type: 'float', default: 0 })
  eth: number

  @Column({ type: 'float', default: 0 })
  bnb: number

  @Column({ type: 'float', default: 0 })
  usdc: number

  @ManyToMany(() => RoleEntity, role => role.users)
  @JoinTable({
    name: 'sys_user_roles',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: Relation<RoleEntity[]>

  @ManyToOne(() => DeptEntity, dept => dept.users)
  @JoinColumn({ name: 'dept_id' })
  dept: Relation<DeptEntity>

  @OneToMany(() => AccessTokenEntity, accessToken => accessToken.user, {
    cascade: true,
  })
  accessTokens: Relation<AccessTokenEntity[]>
}
