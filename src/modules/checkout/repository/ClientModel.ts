import {
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'
import { OrderModel } from './OrderModel'

@Table({
  tableName: 'order_clients',
  timestamps: false
})
export class ClientModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  declare id: string

  @HasMany(() => OrderModel)
  declare orders: OrderModel[]

  @Column({ allowNull: false })
  declare name: string

  @Column({ allowNull: false })
  declare email: string

  @Column({ allowNull: false })
  declare document: string

  @Column({ allowNull: false })
  declare address: string

  @Column({ field: 'created_at', allowNull: true })
  declare createdAt: Date

  @Column({ field: 'update_at', allowNull: true })
  declare updatedAt: Date
}
