export class FamilyService {
  private families = [
    {
      id: 'fam_1',
      name: 'Mwale Family',
      founderId: 'user_1',
      slug: 'mwale-family',
      createdAt: new Date().toISOString(),
    },
  ];

  getAllFamilies() {
    return this.families;
  }

  getFamilyById(id: string) {
    return this.families.find((family) => family.id === id);
  }

  createFamily(dto: { name: string; founderId: string }) {
    const family = {
      id: `fam_${Date.now()}`,
      name: dto.name,
      founderId: dto.founderId,
      slug: dto.name.toLowerCase().replace(/\s+/g, '-'),
      createdAt: new Date().toISOString(),
    };

    this.families.push(family);
    return family;
  }
}
