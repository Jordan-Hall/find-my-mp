import { IMemberOfParliment } from './member-of-parliment.interface';

export class MemberOfParliment implements IMemberOfParliment {
  readonly name: string;
  readonly email: string;
  readonly constituency: string;
  readonly politicalParty: string;
  readonly chamber: string;
  readonly image: string;
  readonly gender: string;

  constructor(member: IMemberOfParliment) {
    this.chamber = member.chamber;
    this.email = member.email;
    this.name = member.name;
    this.constituency = member.constituency;
    this.politicalParty = member.politicalParty;
    this.image = member.image;
    this.gender = member.gender;
  }
}
