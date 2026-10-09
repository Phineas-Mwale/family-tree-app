import { Module } from '@nestjs/common';
import { FamilyModule } from './modules/family/family.module';
import { PeopleModule } from './modules/people/people.module';
import { RelationshipsModule } from './modules/relationships/relationships.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [FamilyModule, PeopleModule, RelationshipsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
