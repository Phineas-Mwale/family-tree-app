import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RelationshipsService } from './relationships.service';
import { CreateRelationshipDto } from './dto/create-relationship.dto';

@Controller('relationships')
export class RelationshipsController {
  constructor(private readonly relationshipsService: RelationshipsService) {}

  @Get(':familyId')
  getRelationships(@Param('familyId') familyId: string) {
    return this.relationshipsService.getRelationshipsByFamily(familyId);
  }

  @Post()
  createRelationship(@Body() dto: CreateRelationshipDto) {
    return this.relationshipsService.createRelationship(dto);
  }
}
