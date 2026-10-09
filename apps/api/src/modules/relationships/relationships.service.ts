export class CreateRelationshipDto {
  familyId: string;
  personAId: string;
  personBId: string;
  relationType: 'PARENT_OF' | 'CHILD_OF' | 'SPOUSE_OF' | 'SIBLING_OF';
  notes?: string;
}

export class RelationshipsService {
  private relationships = [
    {
      id: 'rel_1',
      familyId: 'fam_1',
      personAId: 'person_2',
      personBId: 'person_1',
      relationType: 'PARENT_OF',
      notes: 'Parent-child relationship',
    },
  ];

  getRelationshipsByFamily(familyId: string) {
    return this.relationships.filter((relationship) => relationship.familyId === familyId);
  }

  createRelationship(dto: CreateRelationshipDto) {
    const relationship = {
      id: `rel_${Date.now()}`,
      familyId: dto.familyId,
      personAId: dto.personAId,
      personBId: dto.personBId,
      relationType: dto.relationType,
      notes: dto.notes ?? '',
    };

    this.relationships.push(relationship);
    return relationship;
  }
}
