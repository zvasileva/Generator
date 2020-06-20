import Character from './Character';

export default class Zombie extends Character {
  constructor(...params) {
    super(...params);
    this.attack = 40;
    this.defence = 10;
  }
}
