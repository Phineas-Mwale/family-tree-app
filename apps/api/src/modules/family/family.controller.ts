import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FamilyService } from './family.service';
import { CreateFamilyDto } from './dto/create-family.dto';

@Controller('families')
export class FamilyController {
  constructor(private readonly familyService: FamilyService) {}

  @Get()
  getAllFamilies() {
    return this.familyService.getAllFamilies();
  }

  @Get(':id')
  getFamilyById(@Param('id') string) {
    return this.familyService.getFamilyById(id);
  }

  @Post()
  createFamily(@Body() dto: CreateFamilyDto) {
    return this.familyService.createFamily(dto);
  }
}
