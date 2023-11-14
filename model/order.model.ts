import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn } from "typeorm";

export enum OrderStatus {
    PENDING = "pending",
    COOKING = "cooking",
    DONE = "done"
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id_order!: number;

    @Column('varchar')
    id_menu: number

    @Column()
    id_user: number

    @Column('int')
    id_checkin: number

    @Column('varchar')
    id_table : string

    @Column('int')
    amount : number

    @Column('float')
    total_price:number

    @Column('bool')
    is_delete: boolean = false

    @Column("bool")
    is_paid:boolean = false

    @Column({
        type:"enum",
        enum: OrderStatus,
        default: OrderStatus.PENDING
    })
    status: OrderStatus

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date
}
