import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoSettings } from "./todoSettings.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TodoSettings])],
  controllers: [],
  providers: [],
})
export class TodoSettingsModule {}
