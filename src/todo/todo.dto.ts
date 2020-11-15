import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";

export class CreateTodoDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;
}

export class UpdateTodoDto {
    @ApiProperty()
    @MinLength(3,  {
        message: 'Name must be greater then 3 char.',
    })
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    description: string;
}
