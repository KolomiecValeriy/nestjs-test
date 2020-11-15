import { EntityRepository, Repository } from "typeorm";
import { Todo } from "./todo.entity";

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  async findById(id): Promise<Todo> {
    return this.findOne(id, { relations: ['settings'] });
  }
}
