import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from "./todo.dto";
import { TodoService } from "./todo.service";
import { Todo } from "./todo.entity";
import { TodoSettings } from "../todoSettings/todoSettings.entity";

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  get() {
    return this.todoService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const todo = await this.todoService.findOne(id);
    if (todo === undefined) {
      throw new NotFoundException();
    }

    return todo;
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<CreateTodoDto> {
    console.log(createTodoDto);

    const todo = new Todo();
    todo.name = createTodoDto.name;
    todo.description = createTodoDto.description;
    todo.settings = new TodoSettings();

    return this.todoService.create(todo);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    console.log('Id type integer:')
    console.log(typeof id)

    console.log('UpdateDto object:')
    console.log(updateTodoDto)
    const todo = await this.todoService.findOne(id);
    if (todo === undefined) {
      throw new NotFoundException();
    }

    return await this.todoService.update(todo, updateTodoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const todo = await this.todoService.findOne(id);
    if (todo === undefined) {
      throw new NotFoundException();
    }
    await this.todoService.remove(todo);

    return `Todo: with id - ${id} was deleted`;
  }
}
