import Character from './Character';

export default class Undead extends Character {
  constructor(...params) {
    super(...params);
    this.attack = 25;
    this.defence = 25;
  }
}
