import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import Article from './Article'

@Entity('posts')
export default class Post{
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        unique:true
    })
    title: string

    @Column()
    thumb: string

    @OneToMany(type => Article  , post => post, {
        onDelete: "CASCADE"
    })
    articles: Article[]

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date


    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date
}