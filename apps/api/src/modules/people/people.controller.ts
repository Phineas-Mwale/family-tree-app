import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get(':familyId')
  getPeopleByFamily(@Param('familyId') familyId: string) {
    return this.peopleService.getPeopleByFamily(familyId);
  }

  @Post()
  createPerson(@Body() dto: CreatePersonDto) {
    return this.peopleService.createPerson(dto);
  }
}
