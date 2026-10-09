export class CreatePersonDto {
  familyId: string;
  firstName: string;
  lastName?: string;
  displayName?: string;
  birthDate?: string;
  isLiving?: boolean;
}

export class PeopleService {
  private people = [
    {
      id: 'person_1',
      familyId: 'fam_1',
      firstName: 'Phineas',
      lastName: 'Mwale',
      displayName: 'Phineas Mwale',
      birthDate: '1990-05-12',
      isLiving: true,
    },
    {
      id: 'person_2',
      familyId: 'fam_1',
      firstName: 'Grace',
      lastName: 'Mwale',
      displayName: 'Grace Mwale',
      birthDate: '1965-04-02',
      isLiving: true,
    },
  ];

  getPeopleByFamily(familyId: string) {
    return this.people.filter((person) => person.familyId === familyId);
  }

  createPerson(dto: CreatePersonDto) {
    const person = {
      id: `person_${Date.now()}`,
      familyId: dto.familyId,
      firstName: dto.firstName,
      lastName: dto.lastName ?? '',
      displayName: dto.displayName ?? dto.firstName,
      birthDate: dto.birthDate ?? null,
      isLiving: dto.isLiving ?? true,
    };

    this.people.push(person);
    return person;
  }
}
