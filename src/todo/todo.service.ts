import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from "./todo.entity";
import { UpdateTodoDto } from "./todo.dto";
import { TodoSettings } from "../todoSettings/todoSettings.entity";
import { TodoRepository } from "./todo.repository";

@Injectable()
export class TodoService {
  constructor(
    private todoRepository: TodoRepository,
    @InjectRepository(TodoSettings)
    private todoSettingsRepository: Repository<TodoSettings>,
  ) {
  }

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findOne(id: string): Promise<Todo> {
    return this.todoRepository.findById(id);
  }

  async create(todo: Todo): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }

  async update(todo: Todo, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    todo.name = updateTodoDto.name;
    todo.description = updateTodoDto.description;

    return await this.todoRepository.save(todo);
  }

  async remove(todo: Todo): Promise<void> {
    const todoSettings = todo.settings;
    if (todoSettings) {
      await this.todoSettingsRepository.remove(todo.settings)
    }

    await this.todoRepository.remove(todo);
  }
}