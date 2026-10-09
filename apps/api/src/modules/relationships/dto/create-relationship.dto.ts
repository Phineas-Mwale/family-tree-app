import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateRelationshipDto {
  @IsString()
  familyId: string;

  @IsString()
  personAId: string;

  @IsString()
  personBId: string;

  @IsString()
  relationType: 'PARENT_OF' | 'CHILD_OF' | 'SPOUSE_OF' | 'SIBLING_OF';

  @IsOptional()
  @IsString()
  notes?: string;
}
