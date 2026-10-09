import { IsNotEmpty, IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateFamilyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  founderId: string;
}
