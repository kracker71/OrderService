import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn } from "typeorm";

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

    @Column('int')
    id_table : number

    @Column('int')
    amount : number

    @Column('float')
    total_price:number

    @Column('bool')
    is_delete: boolean = false

    @Column("bool")
    is_paid:boolean = false

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date
}
