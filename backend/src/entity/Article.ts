import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import Post from "./Post";



@Entity('articles')
export default class Article{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    image: string
    
    @Column()
    titleImage: string

    @Column()
    Content: string
 
    @ManyToOne(type => Post, post => post , {
        onDelete: "CASCADE"
    })
    @JoinColumn()
    post: Post


    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;


    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
} 