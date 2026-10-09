export class CreateRelationshipDto {
  familyId: string;
  personAId: string;
  personBId: string;
  relationType: 'PARENT_OF' | 'CHILD_OF' | 'SPOUSE_OF' | 'SIBLING_OF';
  notes?: string;
}
