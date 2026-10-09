import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  familyId: string;

  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  displayName?: string;

  @IsOptional()
  @IsString()
  birthDate?: string;

  @IsOptional()
  @IsBoolean()
  isLiving?: boolean;
}
