import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  user_id: string

  @CreateDateColumn({ select: false })
  createDate: Date

  @UpdateDateColumn({ select: false })
  updateDate: Date

  @Column({
    type: "character varying",
    length: 50,
    nullable: false,
  })
  user_name: string

  @Column({
    type: "character varying",
    nullable: false,
  })
  user_img: string

  @Column({
    type: "character varying",
    unique: true,
    nullable: false,
  })
  user_phone: string

  @Column({
    type: "character varying",
    unique: true,
    nullable: false,
  })
  user_email: string

  @Column({
    type: "boolean",
    default: true,
    nullable: false,
  })
  user_pol: boolean

  @Column({
    type: "character varying",
    nullable: false,
    select: false,
  })
  user_password: string
}
