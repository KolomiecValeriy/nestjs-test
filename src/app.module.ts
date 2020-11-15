import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from "./todo/todo.module";
import { TodoSettingsModule } from "./todoSettings/todoSettings.module";

@Module({
  imports: [TypeOrmModule.forRoot({
    autoLoadEntities: true,
  }),
    TodoModule,
    TodoSettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
