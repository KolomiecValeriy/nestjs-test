import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Todo} from "./todo.entity";
import {TodoController} from "./todo.controller";
import { TodoService } from "./todo.service";
import { TodoSettingsModule } from "../todoSettings/todoSettings.module";
import { TodoSettings } from "../todoSettings/todoSettings.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Todo, TodoSettings])],
  controllers: [TodoController],
  providers: [TodoService, TodoSettingsModule],
})
export class TodoModule {}
