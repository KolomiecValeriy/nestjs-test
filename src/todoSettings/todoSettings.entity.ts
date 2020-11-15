import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Todo } from "../todo/todo.entity";

@Entity()
export class TodoSettings {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: false })
    isFinished: boolean;

    @Column({ default: false })
    emergency: boolean;

    @OneToOne(() => Todo, todo => todo.settings)
    todo: Todo;
}
