import { StoryPremise } from './premise.interface';

export interface StoryCharacterData {
  id: string;
  full_name: string;
  appearance: string;
  personality: string;
  backstory: string;
  special_ability: string;
  color: string;
  premises: StoryPremise[];
  avatarUrl: string;
}

export class StoryCharacterCard {
  id: string;
  fullName: string;
  appearance: string;
  personality: string;
  backstory: string;
  specialAbility: string;
  color: string;
  avatarUrl: string;

  constructor(data: StoryCharacterData) {
    this.id = data.id;
    this.fullName = data.full_name;
    this.appearance = data.appearance;
    this.personality = data.personality;
    this.backstory = data.backstory;
    this.specialAbility = data.special_ability;
    this.color = data.color;
    this.avatarUrl = data.avatarUrl;
  }
}
